// src/components/ui/Modal.tsx

import React from "react";

type ModalProps = {
    open: boolean;
    title?: string;
    children: React.ReactNode;
    onClose?: () => void;
};

export default function Modal({ open, title, children, onClose }: ModalProps) {
    if (!open) return null;

    return (
        <div
            className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/50 backdrop-blur-sm
        p-4
      "
        >
            <div
                className="
          w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl
          sm:max-w-md
        "
            >
                {/* Header */}
                <div className="flex items-start justify-between">
                    <h2 className="text-base font-semibold text-gray-900">
                        {title ?? "Modal Title"}
                    </h2>

                    {onClose && (
                        <button
                            className="
                rounded-md p-1 text-gray-400 hover:text-gray-600
                hover:bg-gray-100 transition-colors
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
              "
                            onClick={onClose}
                            aria-label="Close"
                        >
                            ✕
                        </button>
                    )}
                </div>

                {/* Body */}
                <div className="mt-4 text-sm text-gray-600 leading-relaxed">
                    {children}
                </div>

                {/* Footer */}
                <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end text-sm">
                    <button
                        className="
              rounded-xl border border-gray-300 bg-white px-4 py-2 font-medium text-gray-800
              hover:bg-gray-50 active:scale-95 transition-all shadow-sm
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
            "
                        onClick={onClose}
                    >
                        Close
                    </button>

                    <button
                        className="
              rounded-xl bg-black px-4 py-2 font-medium text-white
              hover:bg-gray-800 active:scale-95 transition-all shadow-md
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
            "
                        onClick={onClose}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}
