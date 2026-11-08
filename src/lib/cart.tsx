"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { CartLine, CartTotals, MenuItem } from "@/types/menu";

interface CartContextValue {
  lines: CartLine[];
  isOpen: boolean;
  count: number;
  subtotal: number;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  add: (item: MenuItem, qty?: number) => void;
  remove: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  setQuantity: (id: string, qty: number) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "machaghar.cart.v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  // Hydration flag lives in a ref — it doesn't drive rendering, it only guards
  // the persist effect so we don't overwrite the store before reading it.
  const hydratedRef = useRef(false);

  // Hydrate the cart from localStorage on mount. This is a one-time read of an
  // external browser store (the standard SSR-safe pattern): we render an empty
  // cart on the server and during the first client paint, then apply the
  // persisted snapshot once mounted so there is no hydration mismatch.
  useEffect(() => {
    const read = (): CartLine[] => {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw) as CartLine[];
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    };
    hydratedRef.current = true;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time external-store hydration snapshot
    setLines((prev) => (prev.length === 0 ? read() : prev));
  }, []);

  // Persist whenever lines change (after hydration)
  useEffect(() => {
    if (!hydratedRef.current) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines]);

  const add = useCallback((item: MenuItem, qty = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.id === item.id);
      if (existing) {
        return prev.map((l) =>
          l.id === item.id ? { ...l, quantity: l.quantity + qty } : l,
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: qty,
          unit: item.unit,
        },
      ];
    });
  }, []);

  const remove = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const increment = useCallback((id: string) => {
    setLines((prev) =>
      prev.map((l) => (l.id === id ? { ...l, quantity: l.quantity + 1 } : l)),
    );
  }, []);

  const decrement = useCallback((id: string) => {
    setLines((prev) =>
      prev
        .map((l) => (l.id === id ? { ...l, quantity: l.quantity - 1 } : l))
        .filter((l) => l.quantity > 0),
    );
  }, []);

  const setQuantity = useCallback((id: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => l.id !== id)
        : prev.map((l) => (l.id === id ? { ...l, quantity: qty } : l)),
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((o) => !o), []);

  const { subtotal, count } = useMemo<CartTotals>(
    () =>
      lines.reduce(
        (acc, l) => {
          acc.subtotal += l.price * l.quantity;
          acc.count += l.quantity;
          return acc;
        },
        { subtotal: 0, count: 0 },
      ),
    [lines],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      isOpen,
      count,
      subtotal,
      openCart,
      closeCart,
      toggleCart,
      add,
      remove,
      increment,
      decrement,
      setQuantity,
      clear,
    }),
    [
      lines,
      isOpen,
      count,
      subtotal,
      openCart,
      closeCart,
      toggleCart,
      add,
      remove,
      increment,
      decrement,
      setQuantity,
      clear,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
