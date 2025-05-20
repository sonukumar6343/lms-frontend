"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <Link
                href="https://wa.me/15551234567"
                className="bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-medium flex items-center shadow-lg hover:bg-blue-400 transition"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp size={24} />
            </Link>
        </div>
    );
};

export default WhatsAppIcon;
