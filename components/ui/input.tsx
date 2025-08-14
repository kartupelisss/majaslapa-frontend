import React from "react";

export function Input({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full border rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900/20 ${className}`}
      {...props}
    />
  );
}
