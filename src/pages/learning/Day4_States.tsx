// src/pages/learning/Day4_States.tsx

// Day 4: States, Hover, Focus, Motion
// -----------------------------------
// GOAL TODAY
// - Make UI interactive and alive without writing custom CSS
// - Learn hover:, active:, focus:, group-hover:
// - Add transitions so animations feel smooth, not "jumpy"
// - Build a card that reveals extra info only on hover
//
// HOW TO USE THIS PAGE
// 1. Run `npm run dev`
// 2. Visit http://localhost:5173/learn/day4
// 3. Hover, focus with TAB, click, resize
// 4. Edit classes and watch how it changes
//
// REAL WORLD
// These patterns go directly into:
// - Product cards on hover
// - Buttons in checkout
// - Accessible form fields
// - Marketing hero CTAs

export default function Day4_States() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            {/* HEADER / INTRO */}
            <header className="border-b border-gray-200 bg-white">
                <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                        Day 4 · State & Motion
                    </h1>
                    <p className="text-sm text-gray-600 sm:text-base">
                        Hover effects, focus rings, press feedback, animated cards.
                    </p>
                    <p className="mt-2 text-xs text-gray-400">
                        This is how you get that “premium / modern / smooth” feel.
                    </p>
                </div>
            </header>

            <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 space-y-16">

                {/* SECTION 1: BUTTON INTERACTIONS */}
                <section className="bg-white rounded-2xl shadow p-6 sm:p-8 lg:p-10 space-y-6">
                    <header className="space-y-2">
                        <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                            1. Buttons with hover, active, focus
                        </h2>
                        <p className="text-sm text-gray-600 leading-relaxed sm:text-base">
                            Tailwind gives you interaction states out of the box.
                            You can style hover, click-press, and keyboard focus with pure classes.
                        </p>
                    </header>

                    <div className="flex flex-wrap gap-4 text-sm">
                        {/* Primary CTA */}
                        <button
                            className="
                rounded-xl bg-black px-5 py-3 font-medium text-white
                shadow-md
                transition
                hover:bg-gray-800 hover:shadow-lg
                active:scale-95
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-black
              "
                        >
                            Checkout
                        </button>

                        {/* Subtle button */}
                        <button
                            className="
                rounded-xl border border-gray-300 bg-white px-5 py-3 font-medium text-gray-800
                shadow-sm
                transition
                hover:bg-gray-50 hover:shadow
                active:scale-95
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
              "
                        >
                            Add to wishlist
                        </button>

                        {/* Danger / destructive */}
                        <button
                            className="
                rounded-xl bg-red-600 px-5 py-3 font-medium text-white
                shadow-md
                transition
                hover:bg-red-700 hover:shadow-lg
                active:scale-95
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-red-600
              "
                        >
                            Remove item
                        </button>
                    </div>

                    <TryItBox
                        color="red"
                        tips={[
                            "Change `duration-200` or `duration-300` with `transition` classes to slow or speed animation.",
                            "Add `ring-2 ring-yellow-400` temporarily to one button to see live focus ring.",
                            "Change `active:scale-95` to `active:scale-90` to exaggerate press-down effect.",
                        ]}
                    />
                </section>

                {/* SECTION 2: CARD HOVER LIFT + SHADOW */}
                <section className="bg-white rounded-2xl shadow p-6 sm:p-8 lg:p-10 space-y-6">
                    <header className="space-y-2">
                        <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                            2. Hover “lift” card
                        </h2>
                        <p className="text-sm text-gray-600 leading-relaxed sm:text-base">
                            A common e-commerce pattern: when you hover a product card, it
                            floats up a little, grows a shadow, and feels “clickable”.
                        </p>
                    </header>

                    <div className="flex flex-wrap gap-6">
                        <HoverCard
                            title="Oversized Hoodie"
                            brand="UrbanLayer"
                            price="R 799.00"
                            badge="New"
                        />

                        <HoverCard
                            title="Puffer Jacket"
                            brand="NorthBlock"
                            price="R 1 299.00"
                            badge="Hot"
                        />
                    </div>

                    <TryItBox
                        color="blue"
                        tips={[
                            "In HoverCard, change `hover:-translate-y-1` to `hover:-translate-y-2`.",
                            "Change `hover:shadow-xl` to `hover:shadow-2xl` for a more dramatic pop.",
                            "Add `transition-transform duration-300` to smooth it out (already there 👀).",
                        ]}
                    />
                </section>

                {/* SECTION 3: group-hover (reveal on hover) */}
                <section className="bg-white rounded-2xl shadow p-6 sm:p-8 lg:p-10 space-y-6">
                    <header className="space-y-2">
                        <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                            3. Reveal extra info on hover (group-hover)
                        </h2>
                        <p className="text-sm text-gray-600 leading-relaxed sm:text-base">
                            With <code className="bg-gray-100 px-1 py-0.5 rounded text-[11px]">group</code> you can say:
                            “When I hover the CARD, also style INNER elements.”
                            Super common for: quick actions, toolbars, ‘Add to cart’ buttons.
                        </p>
                    </header>

                    {/* group wrapper */}
                    <div
                        className="
              group
              w-full max-w-xs
              rounded-2xl border border-gray-200 bg-white p-4
              shadow-sm
              transition
              hover:shadow-xl hover:-translate-y-1
            "
                    >
                        {/* Image */}
                        <div className="relative">
                            <div className="aspect-[4/5] w-full rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                                product img
                            </div>

                            {/* Hover Action (hidden until hover) */}
                            <button
                                className="
                  absolute bottom-2 left-1/2 -translate-x-1/2
                  rounded-xl bg-black px-4 py-2 text-[12px] font-medium text-white shadow-md
                  opacity-0 translate-y-2
                  transition-all duration-300
                  group-hover:opacity-100 group-hover:translate-y-0
                  active:scale-95
                "
                            >
                                Quick Add
                            </button>
                        </div>

                        <div className="mt-4 flex items-start justify-between gap-2">
                            <div>
                                <p className="text-[11px] text-gray-500">DailyFit</p>
                                <p className="text-base font-medium text-gray-900 leading-tight">
                                    Heavyweight Tee
                                </p>
                            </div>

                            <span className="rounded-md bg-yellow-100 px-2 py-1 text-[10px] font-semibold text-yellow-700 shadow-sm">
                Low stock
              </span>
                        </div>

                        <div className="mt-1 text-lg font-semibold text-gray-900">
                            R 399.00
                        </div>
                    </div>

                    <TryItBox
                        color="yellow"
                        tips={[
                            "Change the Quick Add button from bottom-2 to bottom-4 to move it up.",
                            "Change `opacity-0` to `opacity-100` and you'll see it's just sitting there always.",
                            "Add `group-hover:bg-gray-800` to the button class so it darkens on hover too.",
                        ]}
                    />
                </section>

                {/* SECTION 4: ACCESSIBLE FORM FOCUS STATES */}
                <section className="bg-white rounded-2xl shadow p-6 sm:p-8 lg:p-10 space-y-6">
                    <header className="space-y-2">
                        <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                            4. Inputs with focus ring (accessibility win)
                        </h2>
                        <p className="text-sm text-gray-600 leading-relaxed sm:text-base">
                            Forms should show clear focus for keyboard users.
                            Tailwind gives you beautiful focus styles instantly.
                            Click / Tab through these inputs.
                        </p>
                    </header>

                    <form className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium text-gray-700">
                                First name
                            </label>
                            <input
                                className="
                  rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm
                  text-gray-800 shadow-sm
                  focus:outline-none
                  focus:ring-2 focus:ring-black focus:ring-offset-2
                  focus:border-black
                  transition
                "
                                defaultValue="Prachigupta"
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
                  focus:outline-none
                  focus:ring-2 focus:ring-black focus:ring-offset-2
                  focus:border-black
                  transition
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
                  focus:outline-none
                  focus:ring-2 focus:ring-black focus:ring-offset-2
                  focus:border-black
                  transition
                "
                                defaultValue="you@example.com"
                            />
                        </div>

                        <div className="flex flex-col gap-1 sm:col-span-2">
                            <label className="text-xs font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                rows={3}
                                className="
                  rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm
                  text-gray-800 shadow-sm
                  focus:outline-none
                  focus:ring-2 focus:ring-black focus:ring-offset-2
                  focus:border-black
                  transition
                "
                                defaultValue="Love the winter collection 🔥"
                            />
                        </div>
                    </form>

                    <div className="flex flex-col sm:flex-row sm:justify-end gap-3 text-sm">
                        <button
                            className="
                rounded-xl border border-gray-300 bg-white px-4 py-2 font-medium text-gray-800
                hover:bg-gray-50 active:scale-95 transition-all shadow-sm
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
              "
                        >
                            Cancel
                        </button>
                        <button
                            className="
                rounded-xl bg-black px-4 py-2 font-medium text-white
                hover:bg-gray-800 active:scale-95 transition-all shadow-md
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
              "
                        >
                            Send
                        </button>
                    </div>

                    <TryItBox
                        color="purple"
                        tips={[
                            "Change `focus:ring-black` to `focus:ring-yellow-400` for a 'brand' accent.",
                            "Remove `focus:outline-none` and see browser default vs Tailwind ring.",
                            "Add `disabled opacity-50 cursor-not-allowed` to grey-out the Send button.",
                        ]}
                    />
                </section>

                {/* WRAP-UP / NAV */}
                <section className="text-center text-xs text-gray-500 leading-relaxed">
                    <p className="text-gray-700 font-medium text-sm">
                        ✅ End of Day 4
                    </p>

                    <p className="mt-1">
                        You now know how to:
                        <span className="font-semibold text-gray-800"> hover-lift cards</span>,
                        <span className="font-semibold text-gray-800"> press-scale buttons</span>,
                        <span className="font-semibold text-gray-800"> reveal actions on hover</span>,
                        and
                        <span className="font-semibold text-gray-800"> show accessible focus rings</span>.
                    </p>

                    <p className="mt-2">
                        Next:{" "}
                        <span className="font-semibold text-gray-800">Day 5</span> — We'll build
                        higher-level UI patterns: navbars, modals, overlays, and reusable components.
                    </p>

                    <a
                        href="/learn/day5"
                        className="inline-block mt-4 rounded-lg bg-black px-4 py-2 text-white text-xs font-medium hover:bg-gray-800 transition-colors"
                    >
                        Go to Day 5 →
                    </a>
                </section>
            </main>
        </div>
    );
}

/* ----------------------------------------
 * Reusable components used in Day 4
 * -------------------------------------- */

function HoverCard({
                       title,
                       brand,
                       price,
                       badge,
                   }: {
    title: string;
    brand: string;
    price: string;
    badge: string;
}) {
    return (
        <div
            className="
        w-full max-w-[250px]
        rounded-2xl border border-gray-200 bg-white p-4
        shadow-sm
        transition
        hover:shadow-xl hover:-translate-y-1
        active:scale-95
      "
        >
            <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-[10px] font-medium sm:text-xs">
                product img
            </div>

            <div className="mt-3 flex items-start justify-between gap-2">
                <div>
                    <p className="text-[11px] text-gray-500 sm:text-xs">{brand}</p>
                    <p className="text-base font-medium text-gray-900 leading-tight sm:text-[17px]">
                        {title}
                    </p>
                </div>

                <span className="rounded-md bg-yellow-100 px-2 py-1 text-[10px] font-semibold text-yellow-700 shadow-sm sm:text-[11px]">
          {badge}
        </span>
            </div>

            <div className="text-lg font-semibold text-gray-900 sm:text-xl">
                {price}
            </div>
        </div>
    );
}

function TryItBox({
                      color,
                      tips,
                  }: {
    color: "red" | "blue" | "yellow" | "purple";
    tips: string[];
}) {
    const map: Record<string, string> = {
        red: "bg-red-50 border border-red-200 text-red-800",
        blue: "bg-blue-50 border border-blue-200 text-blue-800",
        yellow: "bg-yellow-50 border border-yellow-200 text-yellow-800",
        purple: "bg-purple-50 border border-purple-200 text-purple-800",
    };

    return (
        <div
            className={`text-[12px] leading-relaxed rounded-lg p-4 ${map[color]}`}
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
