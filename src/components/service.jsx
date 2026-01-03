'use client';

import { useState } from 'react';
import {
  HeartPulse,
  Stethoscope,
  Brain,
  Syringe,
  Eye,
  Baby,
  ArrowRight,
  CheckCircle,
  Clock,
  Users
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Cardiology",
    desc: "Comprehensive heart care including diagnosis, treatment, and prevention of cardiovascular diseases.",
    icon: HeartPulse,
    features: ["Echocardiogram", "ECG Monitoring", "Stress Testing", "Heart Surgery"],
    duration: "30-60 min",
    specialists: 12,
    color: "bg-red-50 border-red-100",
    iconColor: "text-red-600",
    btnColor: "hover:bg-red-50 text-red-600"
  },
  {
    id: 2,
    title: "General Medicine",
    desc: "Primary healthcare services for routine checkups, common illnesses, and preventive care.",
    icon: Stethoscope,
    features: ["Annual Checkups", "Chronic Disease Management", "Health Screenings", "Immunizations"],
    duration: "15-30 min",
    specialists: 25,
    color: "bg-blue-50 border-blue-100",
    iconColor: "text-blue-600",
    btnColor: "hover:bg-blue-50 text-blue-600"
  },
  {
    id: 3,
    title: "Neurology",
    desc: "Advanced care for brain, spine, and nervous system disorders with cutting-edge technology.",
    icon: Brain,
    features: ["EEG Testing", "MRI/CT Scan", "Nerve Conduction", "Pain Management"],
    duration: "45-90 min",
    specialists: 8,
    color: "bg-purple-50 border-purple-100",
    iconColor: "text-purple-600",
    btnColor: "hover:bg-purple-50 text-purple-600"
  },
  {
    id: 4,
    title: "Vaccination",
    desc: "Safe and reliable immunization services for all age groups with certified vaccines.",
    icon: Syringe,
    features: ["Travel Vaccines", "Childhood Immunization", "Flu Shots", "COVID-19 Vaccines"],
    duration: "10-20 min",
    specialists: 6,
    color: "bg-green-50 border-green-100",
    iconColor: "text-green-600",
    btnColor: "hover:bg-green-50 text-green-600"
  },
  {
    id: 5,
    title: "Ophthalmology",
    desc: "Complete eye care including vision tests, surgical procedures, and treatment.",
    icon: Eye,
    features: ["LASIK Surgery", "Cataract Treatment", "Glaucoma Management", "Retinal Care"],
    duration: "30-60 min",
    specialists: 10,
    color: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-600",
    btnColor: "hover:bg-amber-50 text-amber-600"
  },
  {
    id: 6,
    title: "Pediatrics",
    desc: "Specialized healthcare services for infants, children, and adolescents.",
    icon: Baby,
    features: ["Well-Child Visits", "Developmental Screening", "Childhood Illness", "Nutrition Counseling"],
    duration: "20-40 min",
    specialists: 15,
    color: "bg-pink-50 border-pink-100",
    iconColor: "text-pink-600",
    btnColor: "hover:bg-pink-50 text-pink-600"
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  const handleBookAppointment = (serviceName) => {
    closeModal();
    // In a real app, this would redirect to booking page
    alert(`Booking appointment for ${serviceName}`);
  };

  return (
    <>
      <section className="bg-gradient-to-b from-sky-50 to-white px-6 md:px-16 py-20" id="services">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
              Our Medical Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-sky-600">Healthcare</span> Services
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At SRC Clinic, we provide expert medical care across multiple specialties. 
              Our team of certified professionals uses state-of-the-art technology to ensure 
              the best possible outcomes for our patients.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`relative bg-white rounded-2xl p-8 border-2 ${service.color} transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group`}
                  onClick={() => openModal(service)}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Service Icon */}
                  <div className={`w-16 h-16 rounded-xl ${service.color.split(' ')[0]} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`${service.iconColor} group-hover:scale-110 transition-transform duration-300`} size={32} />
                  </div>

                  {/* Service Title & Description */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Quick Stats */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock size={16} />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users size={16} />
                      <span>{service.specialists} Specialists</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mb-8">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={18} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 2 && (
                      <div className="flex items-center gap-2 text-gray-500">
                        <CheckCircle className="text-gray-400" size={18} />
                        <span>+{service.features.length - 2} more services</span>
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <button className={`flex items-center gap-2 font-semibold ${service.btnColor} transition-colors px-4 py-2 rounded-lg`}>
                      View Details
                      <ArrowRight className={`transition-transform duration-300 ${hoveredCard === service.id ? 'translate-x-1' : ''}`} size={18} />
                    </button>
                    <button 
                      className="px-5 py-2 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookAppointment(service.title);
                      }}
                    >
                      Book Now
                    </button>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-sky-200 transition-all duration-300 pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          {/* View All Services CTA */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-full font-semibold hover:border-sky-500 hover:text-sky-600 hover:shadow-lg transition-all duration-300">
              View All Specialties
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className={`sticky top-0 ${selectedService.color.split(' ')[0]} px-8 py-6 rounded-t-3xl flex items-center justify-between border-b ${selectedService.color.split(' ')[1]}`}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg ${selectedService.color.split(' ')[0]} flex items-center justify-center`}>
                  <selectedService.icon className={selectedService.iconColor} size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 rounded-full hover:bg-white/50 flex items-center justify-center transition-colors"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {selectedService.desc}
              </p>

              {/* Features Grid */}
              <div className="mb-10">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Services Included</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="text-green-500" size={20} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Details */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-sky-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="text-sky-600" size={24} />
                    <h5 className="font-bold text-gray-900">Duration</h5>
                  </div>
                  <p className="text-gray-600">{selectedService.duration} per session</p>
                </div>
                <div className="bg-sky-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="text-sky-600" size={24} />
                    <h5 className="font-bold text-gray-900">Specialists</h5>
                  </div>
                  <p className="text-gray-600">{selectedService.specialists} certified doctors</p>
                </div>
                <div className="bg-sky-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="text-sky-600" size={24} />
                    <h5 className="font-bold text-gray-900">Availability</h5>
                  </div>
                  <p className="text-gray-600">Mon-Sat: 8AM-8PM</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-end pt-6 border-t border-gray-200">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-gray-400 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => handleBookAppointment(selectedService.title)}
                  className="px-8 py-3 bg-sky-600 text-white rounded-full font-medium hover:bg-sky-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}