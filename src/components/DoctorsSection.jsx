'use client'

import React, { useState } from "react";
import drRahul from "../../public/do.jpg";
import drSunaina from "../../public/doc.jpg";
import { 
  Star, 
  Calendar, 
  Phone, 
  MapPin, 
  Award, 
  Clock, 
  UserCheck,
  ChevronRight,
  ExternalLink,
  MessageSquare,
  ShieldCheck
} from "lucide-react";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Rahul Kumar",
    title: "Senior General Physician",
    qualification: "MBBS, MD (General Medicine)",
    image: drRahul,
    experience: "15+ Years",
    rating: 4.9,
    reviews: 342,
    specialties: ["General Medicine", "Internal Medicine", "Preventive Care", "Chronic Disease Management"],
    availability: ["Mon-Fri: 9AM-6PM", "Sat: 10AM-2PM"],
    contact: "+91 85273 29247",
    email: "dr.rahul@srclinic.com",
    education: [
      "MBBS - All India Institute of Medical Sciences, Delhi",
      "MD (General Medicine) - Maulana Azad Medical College, Delhi"
    ],
    experienceList: [
      "Ex–Senior Resident Doctor, Hindu Rao Hospital, Delhi",
      "Ex–Resident Doctor, Rajiv Gandhi Super Speciality Hospital (RGSSH)",
      "Ex–Resident Doctor, Guru Teg Bahadur Hospital (GTB)",
      "Ex–Casualty Medical Officer (CMO)",
      "GMC, Akola, Maharashtra"
    ],
    languages: ["English", "Hindi", "Punjabi"],
    // consultationFee: "₹800",
    // nextAvailable: "Today, 4:30 PM"
  },
  {
    id: 2,
    name: "Dr. Sunaina Atrey",
    title: "MD Physician & Consultant",
    qualification: "MD (Medicine), DNB",
    image: drSunaina,
    experience: "12+ Years",
    rating: 4.8,
    reviews: 287,
    specialties: ["Internal Medicine", "Geriatric Care", "Diabetes Management", "Hypertension"],
    availability: ["Mon-Wed-Fri: 10AM-7PM", "Thu-Sat: 9AM-4PM"],
    contact: "+91 85273 29248",
    email: "dr.sunaina@srclinic.com",
    education: [
      "MBBS - Lady Hardinge Medical College, Delhi",
      "MD (Medicine) - VMMC & Safdarjung Hospital"
    ],
    experienceList: [
      "Ex–Resident Doctor, VMMC & Safdarjung Hospital, Delhi",
      "Ex–Resident Doctor, Hindu Rao Hospital, Delhi",
      "Ex–Resident Doctor, Babu Jagjivan Ram Memorial Hospital",
      "Senior Consultant - Apollo Hospitals, Delhi"
    ],
    languages: ["English", "Hindi", "Bengali"],
    // consultationFee: "₹900",
    // nextAvailable: "Tomorrow, 10:00 AM"
  }
];

export default function DoctorsSection() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openDoctorModal = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDoctor(null);
    document.body.style.overflow = 'unset';
  };

  const handleBookAppointment = (doctorName) => {
    closeModal();
    // In real app, redirect to booking page
    alert(`Booking appointment with ${doctorName}`);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-white to-sky-50" id="doctors">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-5 py-2 rounded-full text-sm font-semibold mb-4">
              <UserCheck size={16} />
              Meet Our Experts
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-sky-600">Medical Specialists</span>
            </h2>
            <p className="text-lg text-gray-600">
              Board-certified physicians with extensive experience in their respective fields, 
              committed to providing exceptional patient care at SRC Clinic.
            </p>
          </div>

          {/* Doctors Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {doctorsData.map((doctor) => (
              <div 
                key={doctor.id} 
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-sky-200 cursor-pointer"
                onClick={() => openDoctorModal(doctor)}
              >
                {/* Doctor Header with Image */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Doctor Badges */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <Award size={14} className="text-amber-500" />
                      <span className="text-sm font-medium text-gray-800">{doctor.experience} Experience</span>
                    </div>
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                    <Star size={14} className="fill-amber-400 text-amber-400" />
                    <span className="font-bold text-gray-900">{doctor.rating}</span>
                    <span className="text-gray-600 text-sm">({doctor.reviews})</span>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-6 md:p-8">
                  {/* Name & Title */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{doctor.name}</h3>
                    <p className="text-sky-600 font-semibold mt-1">{doctor.title}</p>
                    <p className="text-gray-500 text-sm mt-1">{doctor.qualification}</p>
                  </div>

                  {/* Specialties Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {doctor.specialties.map((spec, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-xs font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock size={18} className="text-sky-500" />
                      <span className="text-sm">{doctor.availability[0]}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone size={18} className="text-sky-500" />
                      <span className="text-sm">{doctor.contact}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin size={18} className="text-sky-500" />
                      <span className="text-sm">SRC Clinic, Delhi</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="text-left">
                        <p className="text-xs text-gray-500">Consultation Fee</p>
                        <p className="text-lg font-bold text-gray-900">{doctor.consultationFee}</p>
                      </div>
                      <div className="h-8 w-px bg-gray-200"></div>
                      <div className="text-left">
                        <p className="text-xs text-gray-500">Next Available</p>
                        <p className="font-medium text-sky-600">{doctor.nextAvailable}</p>
                      </div>
                    </div>
                    <button 
                      className="flex items-center gap-2 px-5 py-2.5 bg-sky-600 text-white rounded-full font-semibold hover:bg-sky-700 transition-colors shadow-md hover:shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookAppointment(doctor.name);
                      }}
                    >
                      <Calendar size={18} />
                      Book
                    </button>
                  </div>

                  {/* View Details Link */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sky-600 font-medium">
                        <MessageSquare size={18} />
                        <span>Available for online consultation</span>
                      </div>
                      <div className="flex items-center gap-1 text-sky-600 group-hover:text-sky-700 font-medium">
                        View Profile
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Doctors CTA */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 border-2 border-sky-200 rounded-full font-semibold hover:border-sky-500 hover:text-sky-600 hover:shadow-xl transition-all duration-300 group">
              <ShieldCheck size={20} className="text-sky-500" />
              View All Doctors & Specialists
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Doctor Detail Modal */}
      {showModal && selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-sky-50 to-white px-8 py-6 rounded-t-3xl border-b border-sky-100 flex items-center justify-between z-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={selectedDoctor.image} 
                    alt={selectedDoctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedDoctor.name}</h3>
                  <p className="text-sky-600 font-semibold">{selectedDoctor.title}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 rounded-full hover:bg-white flex items-center justify-center transition-colors"
              >
                <span className="text-2xl text-gray-600">×</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-sky-50 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-gray-900">{selectedDoctor.experience}</div>
                  <div className="text-sm text-gray-600">Experience</div>
                </div>
                <div className="bg-sky-50 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-gray-900">{selectedDoctor.rating}</div>
                  <div className="text-sm text-gray-600">Patient Rating</div>
                </div>
                <div className="bg-sky-50 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-gray-900">{selectedDoctor.consultationFee}</div>
                  <div className="text-sm text-gray-600">Consultation Fee</div>
                </div>
                <div className="bg-sky-50 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-gray-900">{selectedDoctor.reviews}</div>
                  <div className="text-sm text-gray-600">Reviews</div>
                </div>
              </div>

              {/* Detailed Sections */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="text-sky-500" size={20} />
                      Qualifications
                    </h4>
                    <ul className="space-y-2">
                      {selectedDoctor.education.map((edu, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2"></div>
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Languages Spoken</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDoctor.languages.map((lang, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm font-medium">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Professional Experience</h4>
                    <ul className="space-y-2">
                      {selectedDoctor.experienceList.map((exp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2"></div>
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Contact Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="text-sky-500" size={18} />
                        <span className="text-gray-700">{selectedDoctor.contact}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="text-sky-500" size={18} />
                        <span className="text-gray-700">{selectedDoctor.availability.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="text-sky-500" size={18} />
                        <span className="text-gray-700">SRC Clinic, Delhi - NCR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specialties */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Medical Specialties</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {selectedDoctor.specialties.map((spec, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-sky-50 to-blue-50 p-4 rounded-xl text-center">
                      <div className="text-sky-600 font-semibold">{spec}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-end mt-10 pt-8 border-t border-gray-200">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-gray-400 transition-colors"
                >
                  Close Profile
                </button>
                <button
                  onClick={() => handleBookAppointment(selectedDoctor.name)}
                  className="px-8 py-3 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-full font-semibold hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <Calendar size={20} />
                  Book Appointment Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}