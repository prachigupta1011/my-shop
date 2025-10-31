export default function CartPage() {
    const cartItems = [
        { id: "hoodie-1", name: "Oversized Hoodie", size: "M", qty: 1, price: 799 },
    ];

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    return (
        <section className="space-y-8">
            <header className="space-y-1">
                <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                    Your cart
                </h2>
                <p className="text-xs text-gray-600 sm:text-sm">
                    You have {cartItems.length} item(s) in your cart.
                </p>
            </header>

            <ul className="space-y-4">
                {cartItems.map((item) => (
                    <li
                        key={item.id}
                        className="flex w-full flex-col justify-between gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] sm:flex-row sm:items-start sm:p-5"
                    >
                        <div className="flex flex-col">
              <span className="text-[11px] text-gray-500 sm:text-xs">
                {item.id}
              </span>
                            <span className="text-base font-medium text-gray-900 leading-tight sm:text-[17px]">
                {item.name}
              </span>
                            <span className="text-xs text-gray-600 sm:text-sm">
                Size: {item.size}
              </span>
                            <span className="text-xs text-gray-600 sm:text-sm">
                Qty: {item.qty}
              </span>
                        </div>

                        <div className="text-right font-semibold text-gray-900 text-base sm:text-lg">
                            R {(item.price * item.qty).toFixed(2)}
                        </div>
                    </li>
                ))}
            </ul>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-base font-semibold text-gray-900 sm:text-lg">
          Subtotal
        </span>
                <span className="text-base font-semibold text-gray-900 sm:text-lg">
          R {subtotal.toFixed(2)}
        </span>
            </div>

            <button className="w-full inline-flex items-center justify-center rounded-xl px-4 py-3 font-medium text-white bg-black hover:bg-gray-800 text-sm shadow-md sm:max-w-xs sm:text-[15px]">
                Checkout
            </button>
        </section>
    );
}
