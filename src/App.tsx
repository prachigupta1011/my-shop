import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import Day1_Fundamentals from "./pages/learning/Day1_Fundamentals.tsx";
import Day2_Responsive from "./pages/learning/Day2_Responsive.tsx";
import Day3_GridFlex from "./pages/learning/Day3_GridFlex.tsx";
import Day4_States from "./pages/learning/Day4_States.tsx";
import Day5_AdvancedUI from "./pages/learning/Day5_AdvancedUI.tsx";
import Day6_Theming from "./pages/learning/Day6_Theming.tsx";
import Day7_FinalProject from "./pages/learning/Day7_FinalProject.tsx";


export default function App() {
    return (
        <div className="min-h-screen flex flex-col text-gray-900 bg-white">
            {/* NAVBAR */}
            <header className="border-b border-gray-200 bg-white">
                <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    <Link
                        to="/"
                        className="text-base font-semibold text-gray-900 sm:text-lg"
                    >
                        my-shop
                    </Link>

                    <nav className="flex items-center gap-4 text-xs text-gray-600 sm:gap-6 sm:text-sm">
                        <Link
                            to="/shop"
                            className="hover:text-gray-900 transition-colors"
                        >
                            Shop
                        </Link>

                        <Link
                            to="/cart"
                            className="relative hover:text-gray-900 transition-colors"
                        >
                            Cart
                            <span className="absolute -right-3 -top-2 rounded-full bg-black px-1.5 py-0.5 text-[10px] font-medium text-white leading-none shadow-md">
                1
              </span>
                        </Link>
                    </nav>
                </div>
            </header>

            {/* PAGE CONTENT */}
            {/* Full-bleed gray background across entire viewport width */}
            <main className="flex-1 w-full bg-gray-100 py-8 sm:py-10 lg:py-12">
                {/* Inner container stays centered and capped for readability */}
                <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/shop" element={<ProductListPage />} />
                        <Route
                            path="/shop/:productId"
                            element={
                                <div className="text-center text-gray-500 py-20 text-sm">
                                    Product detail coming soon...
                                </div>
                            }
                        />
                        <Route path="/cart" element={<CartPage />} />

                        {/* Tailwind Learning Pages */}
                        <Route path="/learn/day1" element={<Day1_Fundamentals />} />
                        <Route path="/learn/day2" element={<Day2_Responsive />} />
                        <Route path="/learn/day3" element={<Day3_GridFlex />} />
                        <Route path="/learn/day4" element={<Day4_States />} />
                        <Route path="/learn/day5" element={<Day5_AdvancedUI />} />
                        <Route path="/learn/day6" element={<Day6_Theming />} />
                        <Route path="/learn/day7" element={<Day7_FinalProject />} />
                        {/* Add the rest gradually */}
                    </Routes>
                </div>
            </main>

            {/* FOOTER */}
            <footer className="border-t border-gray-200 bg-white">
                <div className="mx-auto w-full max-w-[1400px] px-4 py-8 text-center text-[10px] text-gray-500 sm:px-6 sm:text-xs lg:px-8">
                    © {new Date().getFullYear()} my-shop. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
