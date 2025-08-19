// app/about/page.jsx

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-[#0f172a] relative text-white">
      {/* Dark Dotted Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#0f172a",
          backgroundImage: `
            radial-gradient(circle, rgba(139,92,246,0.6) 1px, transparent 1px),
            radial-gradient(circle, rgba(59,130,246,0.4) 1px, transparent 1px),
            radial-gradient(circle, rgba(236,72,153,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px, 40px 40px, 60px 60px",
          backgroundPosition: "0 0, 10px 10px, 30px 30px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 space-y-24">
        {/* Header / Intro */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            We are a team of passionate automotive specialists, committed to
            delivering reliable car repair and maintenance services. With years
            of expertise and a customer-first mindset, we ensure your vehicle
            stays safe, efficient, and road-ready — anytime, anywhere.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-purple-300 mb-4">
              🚀 Our Story
            </h2>
            <p className="text-gray-400 leading-relaxed">
              What started as a small workshop has grown into a trusted car
              service brand. Over the years, we’ve invested in advanced tools,
              certified technicians, and a customer support system that puts you
              at the center of everything we do.
            </p>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Today, we serve hundreds of happy drivers across the city, with a
              reputation for honesty, affordability, and quality workmanship.
            </p>
          </div>
          <img
            src="https://i.ibb.co/R6Z2nFM/55.jpg"
            alt="Our Garage"
            className="rounded-2xl shadow-lg shadow-purple-900/40 border border-slate-700/40"
          />
        </div>

        {/* Mission / Values / Why Choose Us */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/80 border border-slate-700/40 shadow-lg shadow-purple-900/40 hover:shadow-purple-600/50 transition">
            <h2 className="text-xl font-semibold text-purple-300 mb-3">
              🎯 Our Mission
            </h2>
            <p className="text-gray-400 text-sm">
              To deliver hassle-free, high-quality car services that drivers can
              trust — keeping vehicles safe, reliable, and efficient at all
              times.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/80 border border-slate-700/40 shadow-lg shadow-pink-900/40 hover:shadow-pink-600/50 transition">
            <h2 className="text-xl font-semibold text-pink-300 mb-3">
              🌙 Our Values
            </h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>✅ Transparency & Honesty</li>
              <li>✅ Skilled & Certified Technicians</li>
              <li>✅ 24/7 Customer Support</li>
              <li>✅ Affordable & Fair Pricing</li>
              <li>✅ Innovation & Continuous Growth</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/80 border border-slate-700/40 shadow-lg shadow-blue-900/40 hover:shadow-blue-600/50 transition">
            <h2 className="text-xl font-semibold text-blue-300 mb-3">
              💡 Why Choose Us
            </h2>
            <p className="text-gray-400 text-sm">
              From emergency breakdowns to routine maintenance, we are your
              dependable partner. Our blend of expertise, technology, and
              customer care ensures a smooth, stress-free experience every time.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-pink-300">Meet Our Team</h2>
          <p className="text-gray-400 mt-2">
            Skilled, passionate, and ready to serve you.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {[
              {
                name: "Shah Jalal",
                role: "Lead Technician",
                img: "https://i.ibb.co/5MvmD2g/88.jpg",
              },
              {
                name: "Ayesha Rahman",
                role: "Customer Success",
                img: "https://i.ibb.co/T2cpBd5/888.jpg",
              },
              {
                name: "Tanvir Hasan",
                role: "Electrical Specialist",
                img: "https://i.ibb.co/KzCG8qr/8888.jpg",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/80 border border-slate-700/40 shadow-md shadow-purple-900/30 hover:shadow-purple-600/40 transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 object-cover rounded-full mx-auto border-4 border-purple-500 shadow-md shadow-purple-700/50"
                />
                <h3 className="mt-4 text-lg font-semibold text-purple-300">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-purple-300">
            Ready to Experience the Difference?
          </h2>
          <p className="text-gray-400 mt-2">
            Book your service today and keep your vehicle at its best.
          </p>
          <Link href="/services">
            <button className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition text-white shadow-lg shadow-pink-900/40">
              Book a Service
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
