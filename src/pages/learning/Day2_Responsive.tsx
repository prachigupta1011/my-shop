// src/pages/learning/Day2_Responsive.tsx

// Day 2: Responsive Layouts with Tailwind
// ----------------------------------------
// GOAL TODAY
// - Understand how layouts change across breakpoints (sm, md, lg, xl)
// - Build a marketing "hero" area that stacks on mobile and splits on desktop
// - Build a responsive Features section like a real product landing page
//
// HOW TO USE THIS PAGE
// 1. Run `npm run dev`
// 2. Go to http://localhost:5173/learn/day2
// 3. Slowly resize the browser from narrow → wide
// 4. Watch how grid, font sizes, paddings all adapt with sm:/md:/lg:
// 5. Edit classes and see the effect live
//
// NOTE
// We are still using NO custom CSS. Everything is Tailwind utilities.

export default function Day2_Responsive() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            {/* HEADER / INTRO */}
            <header className="border-b border-gray-200 bg-white">
                <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                        Day 2 · Responsive Layouts
                    </h1>
                    <p className="text-sm text-gray-600 sm:text-base">
                        Learn how to build mobile-first sections that scale to desktop.
                    </p>
                    <p className="mt-2 text-xs text-gray-400">
                        Everything below is real-world hero/landing page UI.
                    </p>
                </div>
            </header>

            <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 space-y-16">

                {/* SECTION 1: RESPONSIVE HERO */}
                <section className="bg-white rounded-2xl shadow p-6 sm:p-8 lg:p-10">
                    {/* Layout:
             - mobile: column
             - md+: row, text on left, image on right
          */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

                        {/* LEFT SIDE: TEXT CONTENT */}
                        <div className="max-w-lg space-y-5 text-center md:text-left">
                            <div className="inline-flex items-center justify-center md:justify-start gap-2 rounded-full bg-yellow-100 text-yellow-800 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide">
                                <span>New Drop</span>
                                <span className="hidden sm:inline-block text-[9px] font-normal text-yellow-700">
                  Limited stock
                </span>
                            </div>

                            <h2
                                className="
                  text-2xl font-semibold text-gray-900
                  sm:text-3xl
                  lg:text-4xl lg:leading-tight
                "
                            >
                                Winter Collection 2025
                                <span className="block text-gray-500 text-base font-normal sm:text-lg lg:text-xl">
                  Hoodies • Puffers • Heavyweight Tees
                </span>
                            </h2>

                            <p className="text-sm text-gray-600 leading-relaxed sm:text-base">
                                Premium streetwear designed for warmth, comfort, and flex.
                                Get it before it sells out.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                                <button
                                    className="
                    inline-flex items-center justify-center
                    rounded-xl bg-black px-5 py-3 text-white
                    text-sm font-medium shadow-md
                    hover:bg-gray-800
                    active:scale-95
                    transition
                    sm:text-[15px]
                  "
                                >
                                    Shop collection
                                </button>

                                <button
                                    className="
                    inline-flex items-center justify-center
                    rounded-xl border border-gray-300 bg-white
                    px-5 py-3 text-sm font-medium text-gray-800
                    hover:bg-gray-50 active:scale-95
                    shadow-sm transition
                    sm:text-[15px]
                  "
                                >
                                    View lookbook
                                </button>
                            </div>

                            <p className="text-[11px] text-gray-500 sm:text-xs">
                                Free delivery over R1000 • Easy returns
                            </p>
                        </div>

                        {/* RIGHT SIDE: IMAGE / MOCKUP */}
                        <div
                            className="
                flex-1
                flex items-center justify-center
              "
                        >
                            <div
                                className="
                  w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[360px]
                  aspect-[4/5]
                  rounded-2xl
                  bg-gray-100
                  shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]
                  flex items-center justify-center
                  text-gray-400 text-xs sm:text-sm font-medium
                "
                            >
                                hero image
                            </div>
                        </div>
                    </div>

                    {/* TRY IT BOX */}
                    <div className="mt-8 text-[12px] text-gray-500 leading-relaxed bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="font-semibold text-yellow-800 text-xs mb-1">
                            ✍️ Try this:
                        </p>
                        <ul className="list-disc ml-4 space-y-1">
                            <li>
                                Change <code className="bg-white px-1 rounded text-[11px]">md:flex-row</code> to <code className="bg-white px-1 rounded text-[11px]">lg:flex-row</code> and see when it stops stacking.
                            </li>
                            <li>
                                Make the hero image box more dramatic: add{" "}
                                <code className="bg-white px-1 rounded text-[11px]">bg-gradient-to-br from-gray-900 to-gray-700 text-white</code>.
                            </li>
                            <li>
                                Make the yellow badge pill square by changing{" "}
                                <code className="bg-white px-1 rounded text-[11px]">rounded-full</code> to{" "}
                                <code className="bg-white px-1 rounded text-[11px]">rounded-md</code>.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* SECTION 2: FEATURE GRID */}
                <section className="bg-white rounded-2xl shadow p-6 sm:p-8 lg:p-10 space-y-8">
                    <header className="text-center space-y-2">
                        <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                            Why you'll love it
                        </h2>
                        <p className="text-sm text-gray-600 leading-relaxed max-w-md mx-auto sm:text-base">
                            Designed for real daily wear. Nothing flimsy. Nothing boring.
                        </p>
                    </header>

                    {/* Responsive grid:
             - 1 col on mobile
             - 2 cols on sm+
             - 4 cols on lg+
          */}
                    <div
                        className="
              grid gap-6
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
            "
                    >
                        <FeatureCard
                            title="Heavyweight fabric"
                            desc="Dense weave for real winter warmth. No see-through nonsense."
                            icon="🧥"
                        />
                        <FeatureCard
                            title="Limited runs"
                            desc="Small batch drops. Stand out, don't uniform."
                            icon="🔥"
                        />
                        <FeatureCard
                            title="Built to last"
                            desc="Stitching and hardware specced like premium outerwear."
                            icon="🧵"
                        />
                        <FeatureCard
                            title="Free returns"
                            desc="Doesn't fit? Send it back. No drama, no inbox fights."
                            icon="↩️"
                        />
                    </div>

                    {/* TRY IT BOX */}
                    <div className="text-[12px] text-gray-500 leading-relaxed bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="font-semibold text-blue-800 text-xs mb-1">
                            ✍️ Try this:
                        </p>
                        <ul className="list-disc ml-4 space-y-1">
                            <li>
                                Change the grid to <code className="bg-white px-1 rounded text-[11px]">md:grid-cols-3</code>{" "}
                                instead of <code className="bg-white px-1 rounded text-[11px]">lg:grid-cols-4</code>.
                            </li>
                            <li>
                                Add{" "}
                                <code className="bg-white px-1 rounded text-[11px]">
                                    text-center
                                </code>{" "}
                                to each <code className="bg-white px-1 rounded text-[11px]">FeatureCard</code>.
                            </li>
                            <li>
                                Add{" "}
                                <code className="bg-white px-1 rounded text-[11px]">
                                    hover:shadow-xl hover:-translate-y-1 transition
                                </code>{" "}
                                to animate the cards.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* WRAP-UP / NAV */}
                <section className="text-center text-xs text-gray-500 leading-relaxed">
                    <p className="text-gray-700 font-medium text-sm">
                        ✅ End of Day 2
                    </p>
                    <p className="mt-1">
                        You learned responsive breakpoints, flexbox switching from column → row,
                        and responsive grids.
                    </p>

                    <p className="mt-2">
                        Next: <span className="font-semibold text-gray-800">Day 3</span> — Deep dive into{" "}
                        <span className="font-semibold text-gray-800">Flexbox and Grid layouts</span> for cards, dashboards, and product listings.
                    </p>

                    <a
                        href="/learn/day3"
                        className="inline-block mt-4 rounded-lg bg-black px-4 py-2 text-white text-xs font-medium hover:bg-gray-800 transition-colors"
                    >
                        Go to Day 3 →
                    </a>
                </section>
            </main>
        </div>
    );
}

/**
 * Small presentational component used in the Feature Grid.
 * Shows how we build reusable UI "lego blocks" with Tailwind.
 *
 * NOTE: This stays in the same file because for Day 2 we want
 * you to see everything together. Later (Day 5) we'll move
 * common things like this into /src/components/ui/
 */
function FeatureCard({
                         title,
                         desc,
                         icon,
                     }: {
    title: string;
    desc: string;
    icon: string;
}) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm flex flex-col gap-3">
            <div className="text-2xl leading-none">{icon}</div>
            <div>
                <div className="text-base font-semibold text-gray-900">
                    {title}
                </div>
                <div className="text-sm text-gray-600 leading-relaxed">
                    {desc}
                </div>
            </div>
        </div>
    );
}
