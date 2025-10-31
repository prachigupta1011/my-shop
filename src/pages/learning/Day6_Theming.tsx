// src/pages/learning/Day6_Theming.tsx

// Day 6: Theming, Dark Mode, Design Tokens
// -----------------------------------------
// GOAL TODAY
// - Add custom brand tokens (colors, shadow, radius, font) in tailwind.config.js
// - Use those tokens in real components
// - Understand dark mode with the `dark` class
//
// HOW TO USE THIS PAGE
// 1. Visit http://localhost:5173/learn/day6
// 2. Look at the "Brand Card" and "Brand Button" sections
// 3. OPTIONAL: In dev tools, add `class="dark"` to the <html> tag to preview dark mode
//
//   <html class="dark"> ... </html>
//
// After today you can theme your entire site (shop + dashboard) to look consistent.

import Button from "../../components/ui/Button";

export default function Day6_Theming() {
    return (
        <div
            className="
        min-h-screen
        bg-brand-surface text-brand-primary
        dark:bg-gray-900 dark:text-gray-100
        font-sans
      "
        >
            {/* HEADER */}
            <header className="border-b border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700">
                <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-xl font-semibold sm:text-2xl">
                        Day 6 · Theming & Dark Mode
                    </h1>
                    <p className="text-sm text-brand-subtle dark:text-gray-400 sm:text-base">
                        Brand tokens, shared design language, and dark mode support.
                    </p>
                    <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
                        You now control the look of your app from one config file.
                    </p>
                </div>
            </header>

            <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 space-y-16">

                {/* SECTION 1: BRAND COLORS / TOKENS */}
                <section className="rounded-2xl shadow-card dark:shadow-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 sm:p-8 lg:p-10 space-y-6">
                    <header className="space-y-2">
                        <h2 className="text-lg font-semibold sm:text-xl text-brand-primary dark:text-white">
                            1. Brand tokens from tailwind.config.js
                        </h2>
                        <p className="text-sm leading-relaxed text-brand-subtle dark:text-gray-400 sm:text-base">
                            We extended Tailwind with our own palette:
                            <code className="bg-gray-100 dark:bg-gray-700 dark:text-gray-100 px-1 py-0.5 rounded text-[11px] ml-1">
                                brand.primary
                            </code>
                            ,
                            <code className="bg-gray-100 dark:bg-gray-700 dark:text-gray-100 px-1 py-0.5 rounded text-[11px] ml-1">
                                brand.accent
                            </code>
                            ,
                            <code className="bg-gray-100 dark:bg-gray-700 dark:text-gray-100 px-1 py-0.5 rounded text-[11px] ml-1">
                                brand.surface
                            </code>.
                        </p>
                    </header>

                    {/* Color Swatches */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                        <div className="rounded-xl border border-gray-200 dark:border-gray-600 bg-brand-primary text-white p-4 shadow-card">
                            <p className="font-semibold text-xs uppercase tracking-wide">
                                brand.primary
                            </p>
                            <p className="text-[11px] opacity-80">
                                #{/* charcoal / heading / buttons */}
                                111827
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 dark:border-gray-600 bg-brand-accent text-brand-primary p-4 shadow-card">
                            <p className="font-semibold text-xs uppercase tracking-wide">
                                brand.accent
                            </p>
                            <p className="text-[11px] opacity-80">
                                {/* highlight / badges / accents */}
                                Accent highlight
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-200 dark:border-gray-600 bg-brand-surface text-brand-primary dark:bg-gray-900 dark:text-gray-100 p-4 shadow-card">
                            <p className="font-semibold text-xs uppercase tracking-wide">
                                brand.surface
                            </p>
                            <p className="text-[11px] opacity-80">
                                Page background / cards base
                            </p>
                        </div>
                    </div>

                    <TryItBox
                        color="purple"
                        tips={[
                            "In tailwind.config.js, change brand.accent to pink, like #ec4899, and watch this page update everywhere brand.accent is used.",
                            "Change fontFamily.sans to ['Poppins', ...] and apply it globally.",
                            "Update boxShadow.card to something softer (more blur, less spread).",
                        ]}
                    />
                </section>

                {/* SECTION 2: BRAND CARD + BADGE STYLE */}
                <section className="rounded-2xl shadow-card dark:shadow-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 sm:p-8 lg:p-10 space-y-6">
                    <header className="space-y-2">
                        <h2 className="text-lg font-semibold sm:text-xl text-brand-primary dark:text-white">
                            2. Brand card component look
                        </h2>
                        <p className="text-sm leading-relaxed text-brand-subtle dark:text-gray-400 sm:text-base">
                            This is a product card using your brand tokens (colors, radius, shadow).
                        </p>
                    </header>

                    <div
                        className="
              w-full max-w-[260px]
              rounded-xl2 border border-gray-200 dark:border-gray-600
              bg-white dark:bg-gray-900
              p-5 shadow-card hover:shadow-card-hover transition
              text-brand-primary dark:text-white
            "
                    >
                        <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-400 dark:text-gray-300 text-[10px] font-medium sm:text-xs">
                            product img
                        </div>

                        <div className="mt-4 flex items-start justify-between gap-2">
                            <div>
                                <p className="text-[11px] text-brand-subtle dark:text-gray-400 sm:text-xs">
                                    UrbanLayer
                                </p>
                                <p className="text-base font-medium text-brand-primary dark:text-white leading-tight sm:text-[17px]">
                                    Oversized Hoodie
                                </p>
                            </div>

                            <span
                                className="
                  rounded-md bg-brand-accent/20 text-brand-primary
                  text-[10px] font-semibold px-2 py-1 shadow-sm
                  sm:text-[11px]
                "
                            >
                New
              </span>
                        </div>

                        <div className="text-lg font-semibold text-brand-primary dark:text-white sm:text-xl">
                            R 799.00
                        </div>

                        <button
                            className="
                mt-4 inline-flex items-center justify-center
                w-full
                rounded-xl bg-brand-primary text-white
                px-4 py-2 text-[13px] font-medium shadow-md
                hover:brightness-110 hover:shadow-lg
                active:scale-95
                transition-all
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary
                dark:text-white dark:bg-white/10 dark:ring-offset-gray-900 dark:hover:bg-white/20 dark:hover:brightness-100
              "
                        >
                            Add to cart
                        </button>
                    </div>

                    <TryItBox
                        color="blue"
                        tips={[
                            "Change rounded-xl2 everywhere to rounded-2xl if you prefer softer corners.",
                            "Change hover:brightness-110 to hover:brightness-125 for stronger hover.",
                            "Swap bg-brand-primary on the button with bg-brand-accent for a 'highlight' CTA style.",
                        ]}
                    />
                </section>

                {/* SECTION 3: BRAND BUTTON VARIANTS / UPDATED BUTTON COMPONENT */}
                <section className="rounded-2xl shadow-card dark:shadow-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 sm:p-8 lg:p-10 space-y-6">
                    <header className="space-y-2">
                        <h2 className="text-lg font-semibold sm:text-xl text-brand-primary dark:text-white">
                            3. Branded Button component
                        </h2>
                        <p className="text-sm leading-relaxed text-brand-subtle dark:text-gray-400 sm:text-base">
                            Now your <code className="bg-gray-100 dark:bg-gray-700 dark:text-gray-100 px-1 py-0.5 rounded text-[11px]">Button</code> component can use brand colors instead of hardcoded Tailwind defaults.
                        </p>
                    </header>

                    <div className="flex flex-wrap gap-4 text-sm">
                        <Button>Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="danger">Danger</Button>
                        <Button disabled className="opacity-50 cursor-not-allowed">
                            Disabled
                        </Button>
                    </div>

                    <div className="rounded-xl border border-gray-200 dark:border-gray-600 bg-brand-surface dark:bg-gray-900 p-4 text-xs text-brand-primary dark:text-gray-200 leading-relaxed">
                        <p className="font-semibold text-[11px] mb-2">
                            Here’s how you can update Button.tsx to use brand tokens:
                        </p>

                        <pre className="text-[11px] whitespace-pre-wrap break-all">
{`const variants = {
  primary:
    "bg-brand-primary text-white shadow-md hover:brightness-110 hover:shadow-lg focus:ring-brand-primary",
  secondary:
    "border border-gray-300 bg-white text-brand-primary shadow-sm hover:bg-gray-50 focus:ring-gray-400 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800",
  danger:
    "bg-red-600 text-white shadow-md hover:bg-red-700 focus:ring-red-600",
};`}
            </pre>
                    </div>

                    <TryItBox
                        color="yellow"
                        tips={[
                            "Actually go edit Button.tsx to replace bg-black with bg-brand-primary.",
                            "Add a new variant in Button.tsx called 'accent' that uses bg-brand-accent text-brand-primary.",
                            'In Button.tsx, add `className` like "w-full" from the parent to create full-width CTA buttons on mobile.',
                        ]}
                    />
                </section>

                {/* SECTION 4: DARK MODE PREVIEW */}
                <section className="rounded-2xl shadow-card dark:shadow-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 sm:p-8 lg:p-10 space-y-6">
                    <header>
                        <h2 className="text-lg font-semibold sm:text-xl text-brand-primary dark:text-white">
                            4. Dark mode basics
                        </h2>
                        <p className="text-sm leading-relaxed text-brand-subtle dark:text-gray-400 sm:text-base">
                            Dark mode in Tailwind works by adding a <code className="bg-gray-100 dark:bg-gray-700 dark:text-gray-100 px-1 py-0.5 rounded text-[11px]">dark</code> class at the root.
                        </p>
                    </header>

                    <div className="text-[12px] leading-relaxed rounded-lg p-4 bg-gray-50 border border-gray-200 text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 shadow-inner">
                        <p className="font-semibold text-xs mb-1 text-gray-800 dark:text-gray-100">
                            How to test:
                        </p>
                        <ol className="list-decimal ml-4 space-y-1">
                            <li>
                                In DevTools, select the <code className="bg-white px-1 rounded text-[11px]">html</code> element.
                            </li>
                            <li>
                                Add <code className="bg-white px-1 rounded text-[11px]">class="dark"</code>.
                            </li>
                            <li>
                                Watch this entire page flip to dark: backgrounds, text, borders, shadows.
                            </li>
                        </ol>
                    </div>

                    <TryItBox
                        color="red"
                        tips={[
                            "Add dark:bg-gray-900 dark:text-gray-100 to <body> or top divs for full-site theming.",
                            "Update Navbar to also have dark:bg-gray-800 dark:text-gray-100.",
                            "You can later add a toggle button that adds/removes the 'dark' class from document.documentElement.",
                        ]}
                    />
                </section>

                {/* WRAP-UP / NAV */}
                <section className="text-center text-xs text-brand-subtle dark:text-gray-400 leading-relaxed pb-20">
                    <p className="text-brand-primary dark:text-white font-medium text-sm">
                        ✅ End of Day 6
                    </p>

                    <p className="mt-1">
                        You now control brand colors, fonts, rounded corners, and dark mode from config.
                        This is how real teams ship consistent UI across dozens of pages.
                    </p>

                    <p className="mt-2">
                        Next:
                        <span className="font-semibold text-brand-primary dark:text-white">
              {" "}
                            Day 7
            </span>{" "}
                        — Final Project: build a mini landing + shop preview page using your components, theme, responsive layout, and animations.
                    </p>

                    <a
                        href="/learn/day7"
                        className="inline-block mt-4 rounded-lg bg-brand-primary text-white px-4 py-2 text-xs font-medium hover:brightness-110 hover:shadow-lg active:scale-95 transition-colors dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:brightness-100"
                    >
                        Go to Day 7 →
                    </a>
                </section>
            </main>
        </div>
    );
}

/* helper like previous days */
function TryItBox({
                      color,
                      tips,
                  }: {
    color: "purple" | "blue" | "yellow" | "red";
    tips: string[];
}) {
    const map: Record<string, string> = {
        purple: "bg-purple-50 border border-purple-200 text-purple-800 dark:bg-purple-900/20 dark:border-purple-700 dark:text-purple-300",
        blue: "bg-blue-50 border border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-300",
        yellow:
            "bg-yellow-50 border border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-700 dark:text-yellow-300",
        red: "bg-red-50 border border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-700 dark:text-red-300",
    };

    return (
        <div
            className={`text-[12px] leading-relaxed rounded-lg p-4 ${map[color]}`}
        >
            <p className="font-semibold text-xs mb-1">
                ✍️ Try this:
            </p>
            <ul className="list-disc ml-4 space-y-1">
                {tips.map((t, idx) => (
                    <li key={idx} className="text-[12px]">{t}</li>
                ))}
            </ul>
        </div>
    );
}
