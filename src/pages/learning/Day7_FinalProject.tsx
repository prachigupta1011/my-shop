// src/pages/learning/Day7_FinalProject.tsx

// Day 7: Final Project
// -----------------------------------
// GOAL TODAY
// Build a mini landing + shop page using:
//   - Navbar with mobile menu
//   - Hero section (Day2 responsive flex)
//   - Product grid (Day3 grid)
//   - Animated product cards (Day4 interactions)
//   - Brand tokens + dark mode (Day6)
//   - Shared Button component (Day5)
//
// This page is basically portfolio-ready.
// You can deploy this to Netlify as your live demo.

import { useState } from "react";
import Navbar from "../../components/ui/Navbar";
import Button from "../../components/ui/Button";

export default function Day7_FinalProject() {
    const [mobileOpen, setMobileOpen] = useState(false);

    // mock data
    const featured = [
        {
            id: 1,
            brand: "UrbanLayer",
            name: "Oversized Hoodie",
            price: "R 799.00",
            badge: "New",
        },
        {
            id: 2,
            brand: "NorthBlock",
            name: "Puffer Jacket",
            price: "R 1 299.00",
            badge: "Hot",
        },
        {
            id: 3,
            brand: "DailyFit",
            name: "Heavyweight Tee",
            price: "R 399.00",
            badge: "Low stock",
        },
        {
            id: 4,
            brand: "UrbanLayer",
            name: "Relaxed Joggers",
            price: "R 599.00",
            badge: "Trending",
        },
    ];

    return (
        <div
            className="
        min-h-screen flex flex-col
        bg-brand-surface text-brand-primary
        dark:bg-gray-900 dark:text-gray-100
        font-sans
      "
        >
            {/* NAVBAR */}
            <Navbar
                mobileOpen={mobileOpen}
                onToggleMobile={() => setMobileOpen(!mobileOpen)}
            />

            <main className="flex-1 w-full">
                {/* HERO SECTION */}
                <section
                    className="
            border-b border-gray-200 dark:border-gray-800
            bg-white dark:bg-gray-800
          "
                >
                    <div
                        className="
              mx-auto max-w-6xl
              flex flex-col md:flex-row md:items-center md:justify-between
              gap-10
              px-4 py-12 sm:px-6 lg:px-8
            "
                    >
                        {/* LEFT CONTENT */}
                        <div className="max-w-xl space-y-6 text-center md:text-left">
                            {/* capsule badge */}
                            <div
                                className="
                  inline-flex items-center justify-center md:justify-start gap-2
                  rounded-full
                  bg-brand-accent text-brand-primary
                  dark:bg-brand-accent/20 dark:text-white
                  px-3 py-1
                  text-[10px] font-semibold uppercase tracking-wide
                "
                            >
                                <span>Winter Drop 2025</span>
                                <span className="hidden sm:inline-block text-[9px] font-normal opacity-80">
                  Limited stock
                </span>
                            </div>

                            {/* heading */}
                            <h1
                                className="
                  text-3xl font-semibold text-brand-primary dark:text-white
                  sm:text-4xl lg:text-5xl lg:leading-tight
                "
                            >
                                Stay Warm.
                                <span className="block text-brand-subtle dark:text-gray-400 text-base font-normal sm:text-lg lg:text-xl">
                  Streetwear winter essentials.
                </span>
                            </h1>

                            {/* text */}
                            <p className="text-sm text-brand-subtle dark:text-gray-400 leading-relaxed sm:text-base">
                                Heavyweight hoodies, puffers, tees. Designed for comfort and built for
                                real weather — not fast-fashion quality.
                            </p>

                            {/* CTA buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                                <Button className="px-5 py-3 text-[15px]">
                                    Shop collection
                                </Button>

                                <Button
                                    variant="secondary"
                                    className="px-5 py-3 text-[15px]"
                                >
                                    View lookbook
                                </Button>
                            </div>

                            <p className="text-[11px] text-brand-subtle dark:text-gray-500 sm:text-xs">
                                Free delivery over R1000 • Easy returns
                            </p>
                        </div>

                        {/* RIGHT IMAGE / MOCKUP */}
                        <div className="flex-1 flex items-center justify-center">
                            <div
                                className="
                  w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[380px]
                  aspect-[4/5]
                  rounded-2xl
                  bg-gray-100 dark:bg-gray-700
                  shadow-[0_25px_50px_-12px_rgba(0,0,0,0.45)]
                  flex items-center justify-center
                  text-gray-400 dark:text-gray-200 text-xs font-medium
                "
                            >
                                hero image
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURED PRODUCTS */}
                <section
                    className="
            mx-auto max-w-6xl
            px-4 py-12 sm:px-6 lg:px-8
            space-y-8
          "
                >
                    <header className="text-center space-y-2">
                        <h2
                            className="
                text-lg font-semibold sm:text-xl
                text-brand-primary dark:text-white
              "
                        >
                            Featured this week
                        </h2>
                        <p className="text-sm text-brand-subtle dark:text-gray-400 leading-relaxed max-w-md mx-auto sm:text-base">
                            New, limited, and selling out fast.
                        </p>
                    </header>

                    <div
                        className="
              grid gap-6
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              justify-items-center
            "
                    >
                        {featured.map((p) => (
                            <ProductCard
                                key={p.id}
                                brand={p.brand}
                                name={p.name}
                                price={p.price}
                                badge={p.badge}
                            />
                        ))}
                    </div>
                </section>

                {/* CALL TO ACTION STRIP */}
                <section
                    className="
            border-t border-gray-200 dark:border-gray-800
            bg-white dark:bg-gray-800
          "
                >
                    <div
                        className="
              mx-auto max-w-6xl
              px-4 py-12 sm:px-6 lg:px-8
              flex flex-col gap-6
              md:flex-row md:items-center md:justify-between
              text-center md:text-left
            "
                    >
                        <div className="space-y-2">
                            <p className="text-sm font-semibold text-brand-primary dark:text-white sm:text-base">
                                Don’t miss the next drop
                            </p>
                            <p className="text-sm text-brand-subtle dark:text-gray-400 leading-relaxed sm:text-base">
                                Get early access to limited runs. No spam.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
                            <input
                                className="
                  rounded-xl border border-gray-300 dark:border-gray-600
                  bg-white dark:bg-gray-900
                  px-4 py-2 text-sm text-brand-primary dark:text-gray-100 shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800
                  transition
                "
                                placeholder="Your email"
                            />
                            <Button className="px-5 py-2 text-sm">Notify me</Button>
                        </div>
                    </div>
                </section>
            </main>

            {/* FOOTER */}
            <footer
                className="
          border-t border-gray-200 dark:border-gray-800
          bg-brand-surface dark:bg-gray-900
          text-[11px] text-brand-subtle dark:text-gray-500
        "
            >
                <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="text-center sm:text-left">
                        <p className="text-brand-primary dark:text-gray-100 font-semibold text-xs">
                            my-shop
                        </p>
                        <p className="leading-relaxed">
                            Built with React + Tailwind. Theming, responsive, dark mode.
                        </p>
                    </div>

                    <div className="flex justify-center gap-6 text-brand-subtle dark:text-gray-400">
                        <a className="hover:text-brand-primary dark:hover:text-white transition-colors text-xs" href="/shop">
                            Shop
                        </a>
                        <a className="hover:text-brand-primary dark:hover:text-white transition-colors text-xs" href="/cart">
                            Cart
                        </a>
                        <a className="hover:text-brand-primary dark:hover:text-white transition-colors text-xs" href="/learn/day1">
                            Learn
                        </a>
                    </div>
                </div>

                <div className="text-center pb-8 text-[10px] text-brand-subtle dark:text-gray-600">
                    <p>Day 7 · Final Project</p>
                    <p>All sections built step-by-step in this course ✔</p>
                </div>
            </footer>
        </div>
    );
}

/* ---------------------------------------
   Reusable card for Featured products
   Uses lessons from Day3, Day4, and Day6
---------------------------------------- */
function ProductCard({
                         brand,
                         name,
                         price,
                         badge,
                     }: {
    brand: string;
    name: string;
    price: string;
    badge?: string;
}) {
    return (
        <div
            className="
        group
        w-full max-w-[260px]
        rounded-xl2 border border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-800
        p-5
        shadow-card
        transition
        hover:shadow-card-hover hover:-translate-y-1 active:scale-95
        text-brand-primary dark:text-gray-100
      "
        >
            {/* image */}
            <div className="relative">
                <div
                    className="
            aspect-[4/5] w-full overflow-hidden rounded-xl
            bg-gray-100 dark:bg-gray-700
            flex items-center justify-center
            text-gray-400 dark:text-gray-300 text-[10px] font-medium sm:text-xs
          "
                >
                    product img
                </div>

                {/* quick add button (revealed on hover using group-hover) */}
                <button
                    className="
            absolute bottom-2 left-1/2 -translate-x-1/2
            rounded-xl
            bg-brand-primary text-white
            dark:bg-white/10 dark:text-white dark:hover:bg-white/20
            px-4 py-2 text-[12px] font-medium shadow-md
            opacity-0 translate-y-2
            transition-all duration-300
            group-hover:opacity-100 group-hover:translate-y-0
            active:scale-95
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary dark:focus:ring-white dark:focus:ring-offset-gray-800
          "
                >
                    Quick Add
                </button>
            </div>

            {/* details */}
            <div className="mt-4 flex items-start justify-between gap-2">
                <div>
                    <p className="text-[11px] text-brand-subtle dark:text-gray-400 sm:text-xs">
                        {brand}
                    </p>
                    <p className="text-base font-medium leading-tight text-brand-primary dark:text-white sm:text-[17px]">
                        {name}
                    </p>
                </div>

                {badge && (
                    <span
                        className="
              rounded-md
              bg-brand-accent/20 text-brand-primary
              dark:bg-brand-accent/30 dark:text-white
              text-[10px] font-semibold px-2 py-1 shadow-sm
              sm:text-[11px]
            "
                    >
            {badge}
          </span>
                )}
            </div>

            <div className="text-lg font-semibold text-brand-primary dark:text-white sm:text-xl">
                {price}
            </div>
        </div>
    );
}
