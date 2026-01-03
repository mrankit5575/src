 'use client';

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/8527329247?text=Hello%20I%20want%20to%20book%20an%20appointment%20at%20THE%20SR%E2%80%99S%20CLINIC"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full 
                 bg-[#25D366] hover:bg-[#20bd5a] 
                 text-white flex items-center justify-center 
                 shadow-2xl transition-all duration-300 
                 hover:scale-110"
    >
      <FaWhatsapp size={26} />
    </a>
  );
}
