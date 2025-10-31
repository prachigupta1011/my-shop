// src/pages/learning/Day1_Fundamentals.tsx

// Day 1: Tailwind Fundamentals
// ----------------------------------------
// GOAL TODAY
// - Understand spacing, color, typography, borders, radius, shadows
// - See how utility classes stack together
// - Get comfortable editing classes and seeing instant changes
//
// HOW TO USE THIS PAGE
// 1. Run `npm run dev`
// 2. Open http://localhost:5173/learn/day1
// 3. Change classes in here, hit save, watch browser update
//
// TIP
// Tailwind is mobile-first. Classes like `p-4` apply to all screens,
// and `md:p-8` only applies on medium screens and up.

export default function Day1_Fundamentals() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            {/* HEADER / PAGE INTRO */}
            <header className="border-b border-gray-200 bg-white">
                <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                        Day 1 · Tailwind Fundamentals
                    </h1>
                    <p className="text-sm text-gray-600 sm:text-base">
                        Spacing · Typography · Colors · Shadows · Rounded corners
                    </p>
                    <p className="mt-2 text-xs text-gray-400">
                        Edit this page, save, and watch styles change in real time.
                    </p>
                </div>
            </header>

            {/* PAGE CONTENT */}
            <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">

                {/* SECTION 1: SPACING + TYPOGRAPHY */}
                <section className="bg-white rounded-2xl shadow p-6 space-y-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        1. Spacing & Typography
                    </h2>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        Tailwind gives you classes for font size (<code className="text-[11px] bg-gray-100 px-1 py-0.5 rounded">text-xl</code>),
                        weight (<code className="text-[11px] bg-gray-100 px-1 py-0.5 rounded">font-bold</code>),
                        color (<code className="text-[11px] bg-gray-100 px-1 py-0.5 rounded">text-gray-500</code>),
                        line height (<code className="text-[11px] bg-gray-100 px-1 py-0.5 rounded">leading-relaxed</code>),
                        and spacing (<code className="text-[11px] bg-gray-100 px-1 py-0.5 rounded">p-6</code>, <code className="text-[11px] bg-gray-100 px-1 py-0.5 rounded">mt-2</code>).
                    </p>

                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                        <h3 className="text-base font-semibold text-gray-900">
                            Product Title — Oversized Hoodie
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Soft heavyweight fleece. Relaxed fit. Perfect for winter layering.
                        </p>
                        <p className="text-lg font-bold text-gray-900 mt-2">
                            R 799.00
                        </p>
                    </div>

                    {/* TRY IT */}
                    <div className="text-[12px] text-gray-500 leading-relaxed bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="font-semibold text-yellow-800 text-xs mb-1">
                            ✍️ Try this:
                        </p>
                        <ul className="list-disc ml-4 space-y-1">
                            <li>Change <code className="bg-white px-1 rounded text-[11px]">text-lg</code> on the price to <code className="bg-white px-1 rounded text-[11px]">text-2xl</code>.</li>
                            <li>Change the card padding from <code className="bg-white px-1 rounded text-[11px]">p-4</code> to <code className="bg-white px-1 rounded text-[11px]">p-8</code>.</li>
                            <li>Change <code className="bg-white px-1 rounded text-[11px]">text-gray-600</code> paragraph to <code className="bg-white px-1 rounded text-[11px]">text-gray-500</code>.</li>
                        </ul>
                    </div>
                </section>

                {/* SECTION 2: COLORS + ROUNDED + SHADOWS */}
                <section className="bg-white rounded-2xl shadow p-6 space-y-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        2. Colors · Rounded Corners · Shadow
                    </h2>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        Tailwind gives you design tokens like <code className="text-[11px] bg-gray-100 px-1 py-0.5 rounded">bg-gray-100</code>,
                        <code className="text-[11px] bg-gray-100 px-1 py-0.5 rounded">rounded-xl</code>,
                        <code className="text-[11px] bg-gray-100 px-1 py-0.5 rounded">shadow-lg</code>.
                        This means you can build “cards”, “badges”, “buttons” without writing CSS.
                    </p>

                    {/* CARD DEMO */}
                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg max-w-sm">
                        <div className="aspect-[4/3] w-full rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                            image placeholder
                        </div>

                        <div className="mt-4 space-y-1">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-[11px] text-gray-500">UrbanLayer</p>
                                    <p className="text-base font-medium text-gray-900 leading-tight">
                                        Puffer Jacket
                                    </p>
                                </div>

                                <span className="rounded-md bg-yellow-100 px-2 py-1 text-[10px] font-semibold text-yellow-700 shadow-sm">
                  Hot
                </span>
                            </div>

                            <div className="text-lg font-semibold text-gray-900">
                                R 1 299.00
                            </div>
                        </div>

                        <button
                            className="mt-4 w-full inline-flex items-center justify-center
                         rounded-lg bg-black px-4 py-2 text-sm font-medium
                         text-white hover:bg-gray-800
                         shadow-md transition-colors"
                        >
                            Add to cart
                        </button>
                    </div>

                    {/* TRY IT */}
                    <div className="text-[12px] text-gray-500 leading-relaxed bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="font-semibold text-blue-800 text-xs mb-1">
                            ✍️ Try this:
                        </p>
                        <ul className="list-disc ml-4 space-y-1">
                            <li>Change <code className="bg-white px-1 rounded text-[11px]">rounded-xl</code> on the card to <code className="bg-white px-1 rounded text-[11px]">rounded-2xl</code>.</li>
                            <li>Change <code className="bg-white px-1 rounded text-[11px]">shadow-lg</code> to <code className="bg-white px-1 rounded text-[11px]">shadow-2xl</code>.</li>
                            <li>Make the badge background <code className="bg-white px-1 rounded text-[11px]">bg-green-100 text-green-700</code>.</li>
                            <li>Make button corners fully round: replace <code className="bg-white px-1 rounded text-[11px]">rounded-lg</code> with <code className="bg-white px-1 rounded text-[11px]">rounded-full</code>.</li>
                        </ul>
                    </div>
                </section>

                {/* SECTION 3: BUTTON VARIANTS */}
                <section className="bg-white rounded-2xl shadow p-6 space-y-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        3. Button Variants (primary / secondary / danger)
                    </h2>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        You don’t need CSS files to create different button “styles”.
                        You just compose utilities into each button.
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm">
                        {/* Primary */}
                        <button
                            className="rounded-xl bg-black px-4 py-2 font-medium text-white
                         hover:bg-gray-800 active:scale-95
                         transition-all shadow-md"
                        >
                            Primary
                        </button>

                        {/* Secondary */}
                        <button
                            className="rounded-xl border border-gray-300 bg-white px-4 py-2
                         font-medium text-gray-800
                         hover:bg-gray-50 active:scale-95
                         transition-all shadow-sm"
                        >
                            Secondary
                        </button>

                        {/* Danger */}
                        <button
                            className="rounded-xl bg-red-600 px-4 py-2 font-medium text-white
                         hover:bg-red-700 active:scale-95
                         transition-all shadow-md"
                        >
                            Delete
                        </button>

                        {/* Disabled-looking */}
                        <button
                            className="rounded-xl bg-gray-200 px-4 py-2 font-medium text-gray-500
                         cursor-not-allowed opacity-60 shadow-inner"
                            disabled
                        >
                            Disabled
                        </button>
                    </div>

                    {/* TRY IT */}
                    <div className="text-[12px] text-gray-500 leading-relaxed bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <p className="font-semibold text-purple-800 text-xs mb-1">
                            ✍️ Try this:
                        </p>
                        <ul className="list-disc ml-4 space-y-1">
                            <li>Add <code className="bg-white px-1 rounded text-[11px]">focus:ring-2 focus:ring-offset-2 focus:ring-black</code> to the Primary button for accessibility.</li>
                            <li>Add <code className="bg-white px-1 rounded text-[11px]">uppercase tracking-wide text-[11px]</code> to any button to make it "techy".</li>
                            <li>Change <code className="bg-white px-1 rounded text-[11px]">px-4 py-2</code> to <code className="bg-white px-1 rounded text-[11px]">px-6 py-3</code> and see how it feels.</li>
                        </ul>
                    </div>
                </section>

                {/* SECTION 4: RESPONSIVE QUICK INTRO */}
                <section className="bg-white rounded-2xl shadow p-6 space-y-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        4. Tiny Responsive Taste
                    </h2>

                    <p className="text-sm text-gray-600 leading-relaxed">
                        Tailwind lets you change styles at breakpoints using prefixes like{" "}
                        <code className="text-[11px] bg-gray-100 px-1 py-0.5 rounded">sm:</code>,{" "}
                        <code className="text-[11px] bg-gray-100 px-1 py-0.5 rounded">md:</code>,{" "}
                        <code className="text-[11px] bg-gray-100 px-1 py-0.5 rounded">lg:</code>.
                        Resize your browser and watch the box below change padding and font size.
                    </p>

                    <div
                        className="
              bg-indigo-600 text-white rounded-xl shadow-lg
              p-4 text-sm
              sm:p-6 sm:text-base
              md:p-8 md:text-lg
              lg:p-10 lg:text-xl
              transition-all
            "
                    >
                        Resize me 👋 (mobile → tablet → desktop)
                    </div>

                    {/* TRY IT */}
                    <div className="text-[12px] text-gray-500 leading-relaxed bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                        <p className="font-semibold text-indigo-800 text-xs mb-1">
                            ✍️ Try this:
                        </p>
                        <ul className="list-disc ml-4 space-y-1">
                            <li>Change <code className="bg-white px-1 rounded text-[11px]">bg-indigo-600</code> to <code className="bg-white px-1 rounded text-[11px]">bg-pink-500</code>.</li>
                            <li>Add <code className="bg-white px-1 rounded text-[11px]">rounded-3xl</code> to exaggerate roundness.</li>
                            <li>Add <code className="bg-white px-1 rounded text-[11px]">font-bold tracking-wide</code> inside the box text.</li>
                        </ul>
                    </div>
                </section>

                {/* WRAP-UP / NEXT STEP */}
                <section className="text-center text-xs text-gray-500 leading-relaxed">
                    <p className="text-gray-700 font-medium text-sm">
                        ✅ End of Day 1
                    </p>
                    <p className="mt-1">
                        You can now style cards, text, spacing, buttons using only classes.
                    </p>
                    <p className="mt-2">
                        Next: <span className="font-semibold text-gray-800">Day 2</span> — full responsive hero layout and mobile-first thinking.
                    </p>

                    <a
                        href="/learn/day2"
                        className="inline-block mt-4 rounded-lg bg-black px-4 py-2 text-white text-xs font-medium hover:bg-gray-800 transition-colors"
                    >
                        Go to Day 2 →
                    </a>
                </section>

            </main>
        </div>
    );
}
