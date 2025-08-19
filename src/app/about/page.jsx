// app/about/page.jsx

export default function AboutPage() {

   const services = await fetch(`http://localhost:3000/api/services`)
    .then((res) => res.json())
    .then((data) => data);
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            We provide premium car services tailored to your needs — from engine
            repairs to electrical diagnostics. Our mission is to keep your
            vehicle running smoothly, safely, and affordably, anytime you need
            us.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.service_id}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800/60 to-slate-900/80 border border-slate-700/40 shadow-lg shadow-purple-900/40 hover:shadow-purple-600/50 transition"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-purple-300">
                  {service.title}
                </h2>
                <p className="mt-2 text-gray-400 text-sm">
                  {service.description}
                </p>

                {/* Facilities */}
                <ul className="mt-4 space-y-2">
                  {service.facility.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-pink-400" />
                      <div>
                        <p className="font-medium text-blue-300">{f.name}</p>
                        <p className="text-gray-400">{f.details}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-lg font-bold text-pink-400">
                    ${service.price}
                  </span>
                  <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition text-white text-sm shadow-md shadow-pink-900/40">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
