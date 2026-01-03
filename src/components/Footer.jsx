 'use client';

import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">

        {/* TOP GRID */}
        <div className="grid gap-10 md:grid-cols-4">

          {/* CLINIC INFO */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              THE SR’S CLINIC
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              One Step Towards Care. Providing reliable and professional
              medical consultation in a safe, clean, and patient-friendly
              environment.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-sky-600 cursor-pointer">Home</li>
              <li className="hover:text-sky-600 cursor-pointer">Services</li>
              <li className="hover:text-sky-600 cursor-pointer">Doctors</li>
              <li className="hover:text-sky-600 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>General Consultation</li>
              <li>Cardiology</li>
              <li>Neurology</li>
              <li>Orthopedics</li>
              <li>Dermatology</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Contact Us
            </h4>

            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-sky-600 mt-1" />
                <span>
                  Clinic Address Line,<br />
                  City, State, India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-sky-600" />
                <span>+91 98765 43210</span>
              </li>

              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-green-500" />
                <a
                  href="https://wa.me/852732924"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-slate-200 my-10"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} THE SR’S CLINIC. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span className="hover:text-sky-600 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-sky-600 cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
