import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentYear: 'Prep',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry. Our enrolment team will contact you shortly.');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Banner */}
      <section className="bg-blue-900 pt-40 pb-24 text-white relative overflow-hidden">
        <div className="blob bottom-0 right-0 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-none">
              Let's <span className="text-yellow-400">Talk</span>
            </h1>
            <p className="text-2xl text-blue-100 font-medium leading-relaxed max-w-2xl">
              Ready to join the Mount Ridley family? Our team is here to guide you through every step of the journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8 uppercase">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-900">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Campus Address</h3>
                    <p className="text-gray-600">2-30 Hampton St, Craigieburn VIC 3064, Australia</p>
                    <p className="text-sm text-gray-500 mt-2 italic">Entry via Aitken Boulevard recommended for visitors.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-900">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Phone</h3>
                    <p className="text-gray-600">(03) 8338 3600</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-900">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Email</h3>
                    <p className="text-gray-600">mount.ridley.p12@education.vic.gov.au</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-900">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:30 AM - 4:30 PM</p>
                    <p className="text-sm text-gray-500 mt-2">Closed on public holidays and school vacations.</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 rounded-3xl overflow-hidden shadow-lg h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto mb-2 opacity-20" />
                    <span>Interactive Map Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enrolment Form */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 uppercase">Enrolment Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Parent Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email Address</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                      placeholder="(03) 0000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Proposed Year Level</label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all appearance-none bg-white"
                      value={formData.studentYear}
                      onChange={(e) => setFormData({...formData, studentYear: e.target.value})}
                    >
                      <option>Prep</option>
                      <option>Year 1-4</option>
                      <option>Year 5-8</option>
                      <option>Year 9-12 (Senior)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message / Inquiry</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                    placeholder="Tell us about your child's needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-900/20"
                >
                  <Send size={18} />
                  <span>Send Enquiry</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
