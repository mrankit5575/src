 'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import doctor from "../../public/d.png";
import {
  Calendar,
  ChevronRight,
  Shield,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const stats = [
    { number: "125k+", label: "Patients Treated", icon: Users },
    { number: "50+", label: "Expert Doctors", icon: Shield },
    { number: "24/7", label: "Emergency", icon: Award },
    { number: "98%", label: "Satisfaction", icon: CheckCircle },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-50">
      {/* soft background blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-sky-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div
            className={`transition-all duration-700 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-sky-600 text-white px-5 py-2 rounded-full shadow mb-8">
              <span className="text-sm font-medium tracking-wide">
                SRC MEDICAL EXCELLENCE
              </span>
              <span className="text-xs opacity-80">EST. 2010</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-gray-900">
              Your Trusted <br />
              <span className="text-sky-600">Healthcare Partner</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-xl mb-8">
              World-class medical care delivered by experienced specialists using
              advanced diagnostics and compassionate treatment.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Same-day appointments",
                "Insurance assistance",
                "Advanced diagnostics",
                "Multilingual staff",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle size={14} className="text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="flex items-center gap-3 bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition">
                <Calendar size={20} />
                Book Appointment
                <ChevronRight size={18} />
              </button>

              <button className="flex items-center gap-3 bg-white border border-gray-300 px-7 py-4 rounded-full font-semibold text-gray-800 shadow-sm hover:border-sky-400 transition">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={i}
                    className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
                  >
                    <Icon size={20} className="text-sky-500 mb-2" />
                    <div className="text-xl font-bold text-gray-900">
                      {s.number}
                    </div>
                    <div className="text-sm text-gray-600">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Image */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative h-[420px] md:h-[520px] rounded-[40px] overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src={doctor}
                  alt="Professional doctor consultation"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-6 py-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <Calendar className="text-sky-600" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Easy Appointments
                    </div>
                    <div className="text-sm text-gray-600">
                      Book in minutes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// lflkdsjflsdjf