// src/components/ui/Button.tsx

import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "danger";
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
                                   children,
                                   variant = "primary",
                                   className = "",
                                   ...rest
                               }: ButtonProps) {
    // base styles every button gets
    const base =
        "rounded-xl px-4 py-2 text-sm font-medium transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";

    // styles that depend on variant
    const variants: Record<typeof variant, string> = {
        primary:
            "bg-black text-white shadow-md hover:bg-gray-800 focus:ring-black",
        secondary:
            "border border-gray-300 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:ring-gray-400",
        danger:
            "bg-red-600 text-white shadow-md hover:bg-red-700 focus:ring-red-600",
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
}
