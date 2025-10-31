// src/components/ui/Navbar.tsx

import Button from "./Button";

type NavbarProps = {
    mobileOpen: boolean;
    onToggleMobile: () => void;
};

export default function Navbar({ mobileOpen, onToggleMobile }: NavbarProps) {
    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                {/* Brand / Logo */}
                <a
                    href="/"
                    className="text-base font-semibold text-gray-900 sm:text-lg"
                >
                    my-shop
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
                    <a
                        href="/shop"
                        className="hover:text-gray-900 transition-colors"
                    >
                        Shop
                    </a>
                    <a
                        href="/cart"
                        className="hover:text-gray-900 transition-colors"
                    >
                        Cart
                    </a>
                    <a
                        href="/learn/day1"
                        className="hover:text-gray-900 transition-colors"
                    >
                        Learn
                    </a>
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Button>Sign in</Button>
                </div>

                {/* Mobile menu toggle button */}
                <button
                    className="
            md:hidden
            rounded-md px-3 py-2 text-sm font-medium
            border border-gray-300 bg-white text-gray-800
            hover:bg-gray-50 active:scale-95
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
          "
                    onClick={onToggleMobile}
                >
                    {mobileOpen ? "Close" : "Menu"}
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {mobileOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4 text-sm text-gray-700">
                    <nav className="flex flex-col gap-4">
                        <a
                            href="/shop"
                            className="hover:text-gray-900 transition-colors"
                        >
                            Shop
                        </a>
                        <a
                            href="/cart"
                            className="hover:text-gray-900 transition-colors"
                        >
                            Cart
                        </a>
                        <a
                            href="/learn/day1"
                            className="hover:text-gray-900 transition-colors"
                        >
                            Learn
                        </a>

                        <Button className="w-full mt-2">Sign in</Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
