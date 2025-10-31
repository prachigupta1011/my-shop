import { Link } from "react-router-dom";

type Product = {
    id: string;
    name: string;
    brand: string;
    price: number;
    imageUrl?: string;
    badge?: string;
};

const PRODUCTS: Product[] = [
    {
        id: "hoodie-1",
        name: "Oversized Hoodie",
        brand: "UrbanLayer",
        price: 799,
        badge: "New",
    },
    {
        id: "jacket-1",
        name: "Puffer Jacket",
        brand: "NorthBlock",
        price: 1299,
        badge: "Hot",
    },
    {
        id: "tee-1",
        name: "Heavyweight Tee",
        brand: "DailyFit",
        price: 399,
    },
    {
        id: "hoodie-2",
        name: "Zip Hoodie",
        brand: "UrbanLayer",
        price: 899,
        badge: "Low stock",
    },
    {
        id: "tee-2",
        name: "Heavyweight Tee",
        brand: "DailyFit",
        price: 399,
    },
    {
        id: "hoodie-3",
        name: "Zip Hoodie",
        brand: "UrbanLayer",
        price: 899,
        badge: "Low stock",
    },
];

export default function ProductListPage() {
    return (
        <section className="space-y-6">
            {/* HEADER BAR */}
            <div className="rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 px-4 py-4 shadow-sm sm:px-6 sm:py-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="space-y-1">
                        <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                            Shop all
                        </h2>
                        <p className="text-xs text-gray-600 sm:text-sm">
                            Hoodies, jackets, tees. More coming soon.
                        </p>
                    </div>

                    <div className="text-[11px] text-gray-500 sm:text-xs flex items-start gap-2 lg:items-center">
                        <span className="text-gray-500">Sort:</span>
                        <button className="inline-flex items-center rounded-md border border-gray-200 bg-white px-2 py-1 text-[10px] font-medium text-gray-700 shadow-sm hover:bg-gray-50 sm:text-[11px]">
                            Featured
                        </button>
                    </div>
                </div>
            </div>

            {/* GRID */}
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
                {PRODUCTS.map((p) => (
                    <div
                        key={p.id}
                        className="w-full max-w-[280px] rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] flex flex-col gap-3 sm:p-5"
                    >
                        <Link to={`/shop/${p.id}`} className="block">
                            <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-[10px] font-medium sm:text-xs">
                                {p.imageUrl ? (
                                    <img
                                        src={p.imageUrl}
                                        alt={p.name}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <span>{p.id}</span>
                                )}
                            </div>

                            <div className="mt-3 flex items-start justify-between">
                                <div>
                                    <p className="text-[11px] text-gray-500 sm:text-xs">
                                        {p.brand}
                                    </p>
                                    <p className="text-base font-medium text-gray-900 leading-tight sm:text-[17px]">
                                        {p.name}
                                    </p>
                                </div>

                                {p.badge && (
                                    <span className="rounded-md bg-yellow-100 px-2 py-1 text-[10px] font-semibold text-yellow-600 shadow-sm sm:text-[11px]">
                    {p.badge}
                  </span>
                                )}
                            </div>

                            <div className="mt-1 text-lg font-semibold text-gray-900 sm:text-xl">
                                R {p.price.toFixed(2)}
                            </div>
                        </Link>

                        <button
                            className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium text-white bg-black hover:bg-gray-800 text-[13px] shadow-md sm:text-sm"
                        >
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
