import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <section className="rounded-2xl bg-white p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] sm:p-8 lg:p-10">
            <div className="space-y-6 text-center max-w-xl mx-auto">
                <div className="space-y-2">
                    <p className="uppercase tracking-wide text-[10px] font-semibold text-yellow-600">
                        new drop
                    </p>

                    <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl lg:text-4xl">
                        Winter Collection 2025
                    </h1>

                    <p className="text-gray-600 text-sm leading-relaxed sm:text-base">
                        Fresh hoodies, puffers, heavyweight tees. Limited stock, high heat.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        to="/shop"
                        className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-white bg-black hover:bg-gray-800 text-sm shadow-md sm:text-[15px]"
                    >
                        Shop now
                    </Link>

                    <Link
                        to="/cart"
                        className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-sm border border-gray-300 text-gray-800 bg-white hover:bg-gray-50 shadow-sm sm:text-[15px]"
                    >
                        View cart
                    </Link>
                </div>

                <div className="text-[11px] text-gray-500 sm:text-xs">
                    Free delivery over R1000 • Easy returns
                </div>
            </div>
        </section>
    );
}
