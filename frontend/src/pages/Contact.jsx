import React, { useState } from "react";
import { CheckCircle, X, Send } from "lucide-react";

const App = () => {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 right-5 z-50 animate-bounce md:animate-none">
          <div className="bg-green-600 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 border-b-4 border-green-800 transition-all duration-500">
            <CheckCircle size={24} />
            <div>
              <p className="font-bold">Success!</p>
              <p className="text-sm opacity-90">Your message has been sent successfully.</p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="ml-4 hover:bg-green-700 p-1 rounded-full"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Top Quote */}
      <div className="bg-slate-800 text-white py-10 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          "We’re Here to Help – Get in Touch Today!"
        </h1>
        <p className="mt-2 text-slate-300">We usually respond within 24 hours.</p>
      </div>

      {/* Main Contact Section */}
      <div className="flex flex-col md:flex-row flex-1 px-4 md:px-20 py-12 gap-8 max-w-7xl mx-auto w-full">
        {/* Left: Contact Form */}
        <div className="md:w-1/2 bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <Send className="text-blue-600" size={24} />
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-all resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all font-bold text-lg shadow-lg shadow-blue-200"
            >
              Submit Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="md:w-1/2 flex flex-col justify-start bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-gray-100">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Contact Info</h2>
            <p className="text-gray-500 mb-6">Stop by our office or reach out via phone/email anytime.</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-lg text-blue-600 font-bold">📍</div>
              <div>
                <p className="font-bold text-gray-800">Address</p>
                <p className="text-gray-600 text-sm">
                  <a
                    href="https://www.google.com/maps/place/L-204,+2nd+Floor,+Street+No.7C,+Mahipalpur+Ext,+New+Delhi,+Delhi+110037,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-600"
                  >
                    L-204 2nd Floor, Street No.7C, Mahipalpur Ext. New Delhi (110037) - India
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-lg text-blue-600 font-bold">✉️</div>
              <div>
                <p className="font-bold text-gray-800">Email</p>
                <a href="mailto:info@globalflow.in" className="text-blue-600 text-sm hover:underline">
                  info@globalflow.in
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-lg text-blue-600 font-bold">📞</div>
              <div>
                <p className="font-bold text-gray-800">Phone</p>
                <a href="tel:+919910165600" className="text-blue-600 text-sm hover:underline">
                  +91 9910165600
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <p className="font-bold text-gray-800 mb-3">Follow Us</p>
          
          </div>
        </div>
      </div>

      {/* Bottom: Full-width Google Map */}
      <div className="w-full h-80 px-4 md:px-20 pb-12">
        <div className="w-full h-full rounded-3xl overflow-hidden shadow-inner border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.123456789012!2d77.1356789!3d28.5678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1234567890ab%3A0xc0ffee1234567890!2sL-204%2C+2nd+Floor%2C+Street+No.7C%2C+Mahipalpur+Ext%2C+New+Delhi%2C+Delhi+110037%2C+India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default App;
