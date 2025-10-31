// src/pages/learning/Day3_GridFlex.tsx

// Day 3: Grid vs Flex (Real Layouts)
// -----------------------------------
// GOAL TODAY
// - Learn WHEN to use flex and WHEN to use grid
// - Build real-world page structures you can reuse:
//    1. Product cards grid layout
//    2. Dashboard stats row using flexbox
//    3. Sidebar + main content layout
//
// HOW TO USE THIS PAGE
// 1. Run `npm run dev`
// 2. Go to http://localhost:5173/learn/day3
// 3. Resize the browser narrow ↔ wide
// 4. Modify classes and see how layout changes in real time
//
// PRO TIPS
// - flex is great for 1D layout (row OR column)
// - grid is great for 2D repeating blocks (cards)
// - sticky sidebars = elite UX move

export default function Day3_GridFlex() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            {/* HEADER / INTRO */}
            <header className="border-b border-gray-200 bg-white">
                <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                        Day 3 · Grid & Flex Layouts
                    </h1>
                    <p className="text-sm text-gray-600 sm:text-base">
                        Dashboards · Product Grids · Sidebar Layouts
                    </p>
                    <p className="mt-2 text-xs text-gray-400">
                        You’ll reuse these patterns everywhere: shop pages, admin, checkout.
                    </p>
                </div>
            </header>

            <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 space-y-16">

                {/* SECTION 1: DASHBOARD STATS ROW USING FLEX */}
                <section className="bg-white rounded-2xl shadow p-6 sm:p-8 lg:p-10 space-y-6">
                    <header className="space-y-2">
                        <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                            1. Flexbox Row (Dashboard stats / KPI bar)
                        </h2>
                        <p className="text-sm text-gray-600 leading-relaxed sm:text-base">
                            Flexbox is amazing for a row of things that should wrap and keep spacing.
                            Think: dashboard KPIs, cart summary stats, top-level metrics.
                        </p>
                    </header>

                    {/* FLEX DASHBOARD BAR */}
                    <div
                        className="
              flex flex-col gap-4
              sm:flex-row sm:flex-wrap
            "
                    >
                        <StatCard
                            label="Revenue"
                            value="R 82 340"
                            badge="+12%"
                            badgeColor="text-green-700 bg-green-100"
                        />
                        <StatCard
                            label="Orders"
                            value="154"
                            badge="+5"
                            badgeColor="text-blue-700 bg-blue-100"
                        />
                        <StatCard
                            label="Refunds"
                            value="3"
                            badge="stable"
                            badgeColor="text-gray-700 bg-gray-100"
                        />
                        <StatCard
                            label="Visitors"
                            value="5.2k"
                            badge="+340"
                            badgeColor="text-purple-700 bg-purple-100"
                        />
                    </div>

                    {/* TRY IT BOX */}
                    <TryItBox
                        color="purple"
                        tips={[
                            "Change `sm:flex-row` to `lg:flex-row` and see when they stack.",
                            "Add `justify-between` to the flex container and watch spacing.",
                            "Add `text-right` to StatCard and see how alignment changes.",
                        ]}
                    />
                </section>

                {/* SECTION 2: RESPONSIVE PRODUCT GRID USING GRID */}
                <section className="bg-white rounded-2xl shadow p-6 sm:p-8 lg:p-10 space-y-6">
                    <header className="space-y-2">
                        <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                            2. Product Grid (Grid is king for cards)
                        </h2>
                        <p className="text-sm text-gray-600 leading-relaxed sm:text-base">
                            Grid makes it easy to say:
                            “1 column on mobile, 2 columns on tablet, 3+ columns on desktop.”
                        </p>
                    </header>

                    {/* GRID OF PRODUCTS */}
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
                        {Array.from({ length: 6 }).map((_, i) => (
                            <ProductCard
                                key={i}
                                brand="UrbanLayer"
                                name={`Item ${i + 1}`}
                                price={799 + i * 50}
                                badge={i % 2 === 0 ? "New" : undefined}
                            />
                        ))}
                    </div>

                    {/* TRY IT BOX */}
                    <TryItBox
                        color="blue"
                        tips={[
                            "Change `xl:grid-cols-4` to `lg:grid-cols-4` to force 4 columns earlier.",
                            "Remove `justify-items-center` and see cards left-align instead.",
                            "Change `max-w-[260px]` in ProductCard to `w-full` and watch them fill columns.",
                        ]}
                    />
                </section>

                {/* SECTION 3: SIDEBAR + MAIN CONTENT LAYOUT */}
                <section className="bg-white rounded-2xl shadow p-6 sm:p-8 lg:p-10 space-y-6">
                    <header className="space-y-2">
                        <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                            3. Sidebar + Content (sticky panels)
                        </h2>
                        <p className="text-sm text-gray-600 leading-relaxed sm:text-base">
                            This is the pattern for: checkout summary vs form, settings nav vs content,
                            profile menu vs details. One side stays visible, the other scrolls.
                        </p>
                    </header>

                    {/* LAYOUT WRAPPER */}
                    {/* mobile: stack   lg+: 2 columns */}
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                        {/* SIDEBAR */}
                        <aside
                            className="
                w-full lg:w-64 flex-shrink-0
                rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm
                lg:sticky lg:top-6
              "
                        >
                            <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                                Account
                            </p>
                            <ul className="mt-3 space-y-2 text-sm text-gray-600">
                                <li className="flex items-center justify-between">
                                    <span>Profile</span>
                                    <span className="rounded-md bg-black px-2 py-0.5 text-[10px] font-medium text-white">
                    you
                  </span>
                                </li>
                                <li>Orders</li>
                                <li>Security</li>
                                <li>Notifications</li>
                            </ul>

                            <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mt-6">
                                Store
                            </p>
                            <ul className="mt-3 space-y-2 text-sm text-gray-600">
                                <li>Payment methods</li>
                                <li>Addresses</li>
                                <li>Support</li>
                            </ul>
                        </aside>

                        {/* MAIN CONTENT */}
                        <section
                            className="
                flex-1 rounded-xl border border-gray-200 bg-white p-5 shadow-sm
                space-y-6
              "
                        >
                            <div>
                                <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
                                    Profile details
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    This section scrolls. Sidebar stays pinned on desktop.
                                </p>
                            </div>

                            <form className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-medium text-gray-700">
                                        First name
                                    </label>
                                    <input
                                        className="
                      rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm
                      text-gray-800 shadow-sm
                      focus:outline-none focus:ring-2 focus:ring-black focus:border-black
                    "
                                        defaultValue="Ashish"
                                    />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-medium text-gray-700">
                                        Last name
                                    </label>
                                    <input
                                        className="
                      rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm
                      text-gray-800 shadow-sm
                      focus:outline-none focus:ring-2 focus:ring-black focus:border-black
                    "
                                        defaultValue="Gupta"
                                    />
                                </div>

                                <div className="flex flex-col gap-1 sm:col-span-2">
                                    <label className="text-xs font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        className="
                      rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm
                      text-gray-800 shadow-sm
                      focus:outline-none focus:ring-2 focus:ring-black focus:border-black
                    "
                                        defaultValue="you@example.com"
                                    />
                                </div>

                                <div className="flex flex-col gap-1 sm:col-span-2">
                                    <label className="text-xs font-medium text-gray-700">
                                        Bio
                                    </label>
                                    <textarea
                                        rows={3}
                                        className="
                      rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm
                      text-gray-800 shadow-sm
                      focus:outline-none focus:ring-2 focus:ring-black focus:border-black
                    "
                                        defaultValue="Winter collection looks 🔥."
                                    />
                                </div>
                            </form>

                            <div className="flex flex-col sm:flex-row sm:justify-end gap-3 text-sm">
                                <button
                                    className="
                    rounded-xl border border-gray-300 bg-white px-4 py-2 font-medium text-gray-800
                    hover:bg-gray-50 active:scale-95 transition-all shadow-sm
                  "
                                >
                                    Cancel
                                </button>
                                <button
                                    className="
                    rounded-xl bg-black px-4 py-2 font-medium text-white
                    hover:bg-gray-800 active:scale-95 transition-all shadow-md
                  "
                                >
                                    Save changes
                                </button>
                            </div>
                        </section>
                    </div>

                    {/* TRY IT BOX */}
                    <TryItBox
                        color="yellow"
                        tips={[
                            "Change `lg:flex-row` to `xl:flex-row` so it stays stacked longer.",
                            "Remove `lg:sticky` from the sidebar and scroll the page.",
                            "Change sidebar bg from `bg-gray-50` to `bg-white` for a flatter look.",
                        ]}
                    />
                </section>

                {/* WRAP-UP / NAV */}
                <section className="text-center text-xs text-gray-500 leading-relaxed">
                    <p className="text-gray-700 font-medium text-sm">
                        ✅ End of Day 3
                    </p>
                    <p className="mt-1">
                        You now know the core layout primitives:
                        <span className="font-semibold text-gray-800"> flexbox rows</span>,
                        <span className="font-semibold text-gray-800"> responsive grid cards</span>,
                        and
                        <span className="font-semibold text-gray-800"> sticky sidebar + scrollable content</span>.
                    </p>

                    <p className="mt-2">
                        Next:{" "}
                        <span className="font-semibold text-gray-800">Day 4</span> — Hover states, focus rings, transitions, animations,
                        and how to make your UI feel “alive”.
                    </p>

                    <a
                        href="/learn/day4"
                        className="inline-block mt-4 rounded-lg bg-black px-4 py-2 text-white text-xs font-medium hover:bg-gray-800 transition-colors"
                    >
                        Go to Day 4 →
                    </a>
                </section>
            </main>
        </div>
    );
}

/* ----------------------------------------
 * Reusable components used above
 * -------------------------------------- */

function StatCard({
                      label,
                      value,
                      badge,
                      badgeColor,
                  }: {
    label: string;
    value: string;
    badge?: string;
    badgeColor: string;
}) {
    return (
        <div
            className="
        flex-1 min-w-[140px]
        rounded-xl border border-gray-200 bg-white
        p-4 shadow-sm
        flex flex-col gap-2
      "
        >
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide flex items-center justify-between">
                <span>{label}</span>
                {badge && (
                    <span
                        className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${badgeColor}`}
                    >
            {badge}
          </span>
                )}
            </div>
            <div className="text-lg font-semibold text-gray-900 sm:text-xl">
                {value}
            </div>
        </div>
    );
}

function ProductCard({
                         brand,
                         name,
                         price,
                         badge,
                     }: {
    brand: string;
    name: string;
    price: number;
    badge?: string;
}) {
    return (
        <div
            className="
        w-full max-w-[260px]
        rounded-2xl border border-gray-200 bg-white p-4
        shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)]
        flex flex-col gap-3
        sm:p-5
      "
        >
            <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-[10px] font-medium sm:text-xs">
                image
            </div>

            <div className="mt-1 flex items-start justify-between gap-2">
                <div>
                    <p className="text-[11px] text-gray-500 sm:text-xs">{brand}</p>
                    <p className="text-base font-medium text-gray-900 leading-tight sm:text-[17px]">
                        {name}
                    </p>
                </div>

                {badge && (
                    <span className="rounded-md bg-yellow-100 px-2 py-1 text-[10px] font-semibold text-yellow-700 shadow-sm sm:text-[11px]">
            {badge}
          </span>
                )}
            </div>

            <div className="text-lg font-semibold text-gray-900 sm:text-xl">
                R {price.toFixed(2)}
            </div>

            <button
                className="
          inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium text-white bg-black hover:bg-gray-800 text-[13px] shadow-md sm:text-sm active:scale-95 transition
        "
            >
                Add to cart
            </button>
        </div>
    );
}

/**
 * Little helper to render the "✍️ Try this" cards.
 */
function TryItBox({
                      color,
                      tips,
                  }: {
    color: "purple" | "blue" | "yellow";
    tips: string[];
}) {
    const colorClasses: Record<string, string> = {
        purple:
            "bg-purple-50 border border-purple-200 text-purple-800",
        blue:
            "bg-blue-50 border border-blue-200 text-blue-800",
        yellow:
            "bg-yellow-50 border border-yellow-200 text-yellow-800",
    };

    return (
        <div
            className={`text-[12px] leading-relaxed rounded-lg p-4 ${colorClasses[color]}`}
        >
            <p className="font-semibold text-xs mb-1">
                ✍️ Try this:
            </p>
            <ul className="list-disc ml-4 space-y-1 text-gray-700">
                {tips.map((t, idx) => (
                    <li key={idx} className="text-[12px]">{t}</li>
                ))}
            </ul>
        </div>
    );
}
