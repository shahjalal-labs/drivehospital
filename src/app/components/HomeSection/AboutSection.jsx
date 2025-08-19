import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center ">
      <img
        src="https://i.ibb.co/R6Z2nFM/55.jpg"
        alt="About"
        className="rounded-2xl shadow-2xl shadow-indigo-900/40 border border-slate-700/50"
      />
      <div>
        <h2 className="text-3xl font-bold text-purple-300">About Us</h2>
        <p className="mt-4 text-gray-400 leading-relaxed">
          We’re more than just mechanics — we’re your car’s best friend. Our
          expert team ensures your vehicle stays safe, reliable, and road-ready
          with affordable, transparent, and trusted services.
        </p>
        <Link href="/about">
          <button className="mt-6 px-6 py-2.5 rounded-lg bg-purple-700 hover:bg-purple-600 transition text-white shadow-lg shadow-purple-900/40">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
}
