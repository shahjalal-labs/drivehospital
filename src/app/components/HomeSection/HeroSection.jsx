import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative text-center py-24 bg-gradient-to-r from-indigo-950 via-slate-950 to-black rounded-3xl shadow-lg shadow-indigo-900/40 overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Drive with Confidence 🚗
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Premium car repair & maintenance service that’s always there when you
          need it.
        </p>
        <Link href="/services">
          <button className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition text-white font-medium shadow-xl shadow-pink-900/50">
            Book a Service
          </button>
        </Link>
      </div>

      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-800/20 to-transparent blur-3xl opacity-40" />
    </section>
  );
}
