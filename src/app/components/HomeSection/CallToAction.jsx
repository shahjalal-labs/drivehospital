import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="text-center py-20">
      <h2 className="text-3xl font-bold text-purple-300">
        Ready to Keep Your Car Road-Ready?
      </h2>
      <p className="text-gray-400 mt-3">
        Book your next service in just a few clicks.
      </p>
      <Link href="/services">
        <button className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition text-white font-medium shadow-lg shadow-blue-900/50">
          Get Started
        </button>
      </Link>
    </section>
  );
}
