"use client";

import { Check } from "lucide-react";
import { restaurant } from "@/config/restaurant";

interface TableSelectorProps {
  value: number | null;
  onChange: (table: number) => void;
}

export function TableSelector({ value, onChange }: TableSelectorProps) {
  return (
    <fieldset>
      <legend className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-ocean">
          Select Your Table
        </span>
        <span className="text-xs text-charcoal/50">
          {value ? `Table ${value} selected` : "Required"}
        </span>
      </legend>
      <div
        role="radiogroup"
        aria-label="Dining table"
        className="grid grid-cols-4 gap-2"
      >
        {restaurant.tables.map((t) => {
          const active = value === t;
          return (
            <button
              key={t}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(t)}
              className={`relative inline-flex h-12 items-center justify-center rounded-xl border text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber ${
                active
                  ? "border-amber bg-amber text-ocean shadow-sm"
                  : "border-ocean/15 bg-white text-charcoal/70 hover:border-amber/50 hover:text-ocean"
              }`}
            >
              {active && (
                <Check className="absolute left-2 top-2 h-3 w-3 text-ocean" />
              )}
              <span>Table {t}</span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
