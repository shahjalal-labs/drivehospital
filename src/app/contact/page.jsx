"use client";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Facebook,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-200 px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.img
          src="https://i.ibb.co.com/Kj9V8674/profile-Rounded.png"
          alt="Md Shahjalal"
          className="mx-auto w-32 h-32 rounded-full border-4 border-cyan-500 shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        />
        <h1 className="text-3xl font-bold mt-4">
          Assalamu Alaikum, I'm Md. Shahjalal
        </h1>
        <p className="mt-2 text-gray-400 text-lg">
          Founder & Owner of{" "}
          <span className="text-cyan-400">Drive Hospital</span> 🏥 <br />
          MERN Stack Developer • Building Scalable Health-Tech Solutions
        </p>
      </section>

      {/* Contact Information */}
      <section className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-gray-800/50 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-cyan-400">
            📞 Contact Info
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Mail className="text-cyan-400" /> muhommodshahjalal@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-cyan-400" /> +8801540325659
            </li>
            <li className="flex items-center gap-3">
              <Linkedin className="text-cyan-400" />{" "}
              <a
                href="https://www.linkedin.com/in/shahjalal-labs/"
                target="_blank"
              >
                LinkedIn Profile
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Github className="text-cyan-400" />{" "}
              <a href="https://github.com/shahjalal-labs" target="_blank">
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Facebook className="text-cyan-400" />{" "}
              <a
                href="https://www.facebook.com/profile.php?id=61556383702555"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MessageSquare className="text-cyan-400" />{" "}
              <a href="https://wa.me/8801540325659" target="_blank">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800/50 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-cyan-400">
            ✉️ Send a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-cyan-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-cyan-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-cyan-500 outline-none"
            />
            <button className="w-full bg-cyan-600 hover:bg-cyan-500 py-3 rounded-lg font-semibold shadow-md transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Location Map */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4 text-cyan-400">
          📍 Our Location
        </h2>
        <iframe
          className="w-full h-64 rounded-xl border-2 border-cyan-500"
          src="https://www.google.com/maps/embed?pb=!1m18!...your-map-link..."
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* Footer CTA */}
      <section className="text-center py-8 border-t border-gray-700">
        <h2 className="text-2xl font-bold text-cyan-400">
          Drive Hospital – Caring for You 24/7
        </h2>
        <p className="text-gray-400 mt-2">
          Reach out anytime. We’re here to help!
        </p>
      </section>
    </div>
  );
}
