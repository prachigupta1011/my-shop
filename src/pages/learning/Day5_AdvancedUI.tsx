// src/pages/learning/Day5_AdvancedUI.tsx

import { useState } from "react";
import Navbar from "../../components/ui/Navbar";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";

// Day 5: Advanced UI Building Blocks
// -----------------------------------
// GOAL TODAY
// - Build reusable UI building blocks
// - Responsive navbar with mobile menu
// - Modal overlay with blur
// - Centralize button styles as a component
//
// WHY THIS IS BIG
// At this point you're not just "writing Tailwind".
// You're building a design system.
// These patterns go straight into production apps.

export default function Day5_AdvancedUI() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
            {/* NAVBAR DEMO */}
            <Navbar
                mobileOpen={mobileOpen}
                onToggleMobile={() => setMobileOpen(!mobileOpen)}
            />

            <main className="flex-1 mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8 space-y-16">

                {/* SECTION 1: BUTTON SYSTEM */}
                <section className="bg-white rounded-2xl shadow p-6 sm:p-8 lg:p-10 space-y-6">
                    <header className="space-y-2">
                        <h1 className="text-lg font-semibold text-gray-900 sm:text-xl">
                            Day 5 · Advanced UI Blocks
                        </h1>
                        <p className="text-sm text-gray-600 leading-relaxed sm:text-base">
                            You're now creating a shared component library (Button, Navbar, Modal).
                            This is how real teams work: consistent look, fast building.
                        </p>
                        <p className="text-xs text-gray-400">
                            You’ll reuse these same components in your shop.
                        </p>
                    </header>

                    <div className="space-y-4">
                        <p className="text-sm text-gray-700 font-medium">
                            Button variants:
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm">
                            <Button>Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="danger">Danger</Button>
                            <Button disabled className="opacity-50 cursor-not-allowed">
                                Disabled
                            </Button>
                        </div>

                        <p className="text-[12px] text-gray-500 leading-relaxed bg-purple-50 border border-purple-200 rounded-lg p-4">
              <span className="font-semibold text-purple-800 text-xs block mb-1">
                ✍️ Try this:
              </span>
                            <ul className="list-disc ml-4 space-y-1">
                                <li>
                                    In <code className="bg-white px-1 rounded text-[11px]">Button.tsx</code>,
                                    change the base padding from <code className="bg-white px-1 rounded text-[11px]">px-4 py-2</code> to{" "}
                                    <code className="bg-white px-1 rounded text-[11px]">px-5 py-3</code> and watch every button update.
                                </li>
                                <li>
                                    Add a new variant called <code className="bg-white px-1 rounded text-[11px]">"ghost"</code> like{" "}
                                    <code className="bg-white px-1 rounded text-[11px]">text-gray-600 hover:bg-gray-100</code>.
                                </li>
                                <li>
                                    Add <code className="bg-white px-1 rounded text-[11px]">w-full</code> when you want a full-width mobile CTA.
                                </li>
                            </ul>
                        </p>
                    </div>
                </section>

                {/* SECTION 2: MODAL DEMO */}
                <section className="bg-white rounded-2xl shadow p-6 sm:p-8 lg:p-10 space-y-6">
                    <header className="space-y-2">
                        <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                            2. Modal with backdrop blur
                        </h2>
                        <p className="text-sm text-gray-600 leading-relaxed sm:text-base">
                            This is a production-ready confirm dialog:
                            - dark overlay
                            - blurred background
                            - focus rings for accessibility
                            - mobile-friendly footer
                        </p>
                    </header>

                    <div className="flex flex-wrap gap-4 text-sm">
                        <Button onClick={() => setModalOpen(true)}>
                            Launch modal
                        </Button>
                        <Button variant="secondary" onClick={() => setModalOpen(true)}>
                            Launch (secondary)
                        </Button>
                    </div>

                    <p className="text-[12px] text-gray-500 leading-relaxed bg-blue-50 border border-blue-200 rounded-lg p-4">
            <span className="font-semibold text-blue-800 text-xs block mb-1">
              ✍️ Try this:
            </span>
                        <ul className="list-disc ml-4 space-y-1">
                            <li>
                                In <code className="bg-white px-1 rounded text-[11px]">Modal.tsx</code>, change{" "}
                                <code className="bg-white px-1 rounded text-[11px]">max-w-sm</code> to{" "}
                                <code className="bg-white px-1 rounded text-[11px]">max-w-lg</code>.
                            </li>
                            <li>
                                Change the outer overlay from{" "}
                                <code className="bg-white px-1 rounded text-[11px]">bg-black/50</code>{" "}
                                to <code className="bg-white px-1 rounded text-[11px]">bg-black/70</code>{" "}
                                to make it darker.
                            </li>
                            <li>
                                Add{" "}
                                <code className="bg-white px-1 rounded text-[11px]">text-red-600</code>{" "}
                                to the modal title to simulate an error dialog.
                            </li>
                        </ul>
                    </p>
                </section>

                {/* SECTION 3: NAV / RESPONSIVE MENU */}
                <section className="bg-white rounded-2xl shadow p-6 sm:p-8 lg:p-10 space-y-6">
                    <header className="space-y-2">
                        <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                            3. Responsive Navbar with mobile menu
                        </h2>
                        <p className="text-sm text-gray-600 leading-relaxed sm:text-base">
                            Navbar.tsx shows 2 critical Tailwind ideas:
                        </p>
                        <ul className="list-disc ml-4 text-sm text-gray-600 leading-relaxed sm:text-base">
                            <li>
                                <code className="bg-gray-100 px-1 py-0.5 rounded text-[11px]">
                                    hidden md:flex
                                </code>{" "}
                                &nbsp;to hide/show elements based on screen size.
                            </li>
                            <li>
                                Using React state to toggle mobile dropdown.
                            </li>
                        </ul>
                    </header>

                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-xs text-gray-600 leading-relaxed">
                        <p className="font-semibold text-gray-800 text-xs mb-1">
                            How to use Navbar in any page:
                        </p>
                        <pre className="text-[11px] overflow-x-auto whitespace-pre-wrap">
{`const [mobileOpen, setMobileOpen] = useState(false);

<Navbar
  mobileOpen={mobileOpen}
  onToggleMobile={() => setMobileOpen(!mobileOpen)}
/>`}
            </pre>
                    </div>

                    <p className="text-[12px] text-gray-500 leading-relaxed bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <span className="font-semibold text-yellow-800 text-xs block mb-1">
              ✍️ Try this:
            </span>
                        <ul className="list-disc ml-4 space-y-1">
                            <li>
                                Add a new link in <code className="bg-white px-1 rounded text-[11px]">Navbar.tsx</code> called{" "}
                                <code className="bg-white px-1 rounded text-[11px]">"Account"</code>.
                            </li>
                            <li>
                                Change desktop container width: `max-w-6xl` → `max-w-7xl`.
                            </li>
                            <li>
                                Change the mobile dropdown background from{" "}
                                <code className="bg-white px-1 rounded text-[11px]">bg-white</code>{" "}
                                to <code className="bg-white px-1 rounded text-[11px]">bg-gray-50</code>{" "}
                                and give it{" "}
                                <code className="bg-white px-1 rounded text-[11px]">shadow-inner</code>.
                            </li>
                        </ul>
                    </p>
                </section>

                {/* WRAP-UP / NAV */}
                <section className="text-center text-xs text-gray-500 leading-relaxed pb-20">
                    <p className="text-gray-700 font-medium text-sm">
                        ✅ End of Day 5
                    </p>

                    <p className="mt-1">
                        You now have:
                        <span className="font-semibold text-gray-800"> a shared Button</span>,
                        <span className="font-semibold text-gray-800"> a responsive Navbar</span>,
                        and
                        <span className="font-semibold text-gray-800"> a production modal</span>.
                    </p>

                    <p className="mt-2">
                        Next:
                        <span className="font-semibold text-gray-800"> Day 6</span> — We build your brand theme:
                        custom colors, dark mode, and Tailwind config extension.
                    </p>

                    <a
                        href="/learn/day6"
                        className="inline-block mt-4 rounded-lg bg-black px-4 py-2 text-white text-xs font-medium hover:bg-gray-800 transition-colors"
                    >
                        Go to Day 6 →
                    </a>
                </section>
            </main>

            {/* MODAL RENDER */}
            <Modal
                open={modalOpen}
                title="Confirm Action"
                onClose={() => setModalOpen(false)}
            >
                <p>
                    This is a confirmation modal. You can use this in checkout,
                    delete-item flows, etc.
                </p>
                <p className="mt-2 text-gray-500 text-xs leading-relaxed">
                    Try changing the backdrop darkness or the border radius in Modal.tsx.
                </p>
            </Modal>
        </div>
    );
}
