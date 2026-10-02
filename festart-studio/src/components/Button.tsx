import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "small" | "danger";
};

const variantClass = {
  primary: "primary-button",
  secondary: "secondary-button",
  ghost: "ghost-button",
  small: "small-button",
  danger: "small-button danger",
} as const;

export function Button({ children, variant = "secondary", className, ...props }: ButtonProps) {
  return (
    <button className={`${variantClass[variant]} ${className ?? ""}`} {...props}>
      {children}
    </button>
  );
}
