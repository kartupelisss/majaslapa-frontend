import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline" | "link";
  size?: "sm" | "md" | "lg";
};

export function Button({ className = "", variant = "solid", size = "md", ...props }: Props) {
  const sizes =
    size === "sm" ? "px-3 py-1.5 text-sm rounded-xl"
    : size === "lg" ? "px-5 py-2.5 text-base rounded-2xl"
    : "px-4 py-2 text-sm rounded-2xl";

  const variants =
    variant === "outline" ? "border border-neutral-300 text-neutral-900 bg-white hover:bg-neutral-50"
    : variant === "link" ? "px-0 py-0 text-neutral-900 underline underline-offset-4"
    : "bg-neutral-900 text-white hover:opacity-90";

  return <button className={`${sizes} ${variants} ${className}`} {...props} />;
}
