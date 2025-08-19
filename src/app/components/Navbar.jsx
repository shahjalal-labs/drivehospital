"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blogs", href: "/blogs" },
  { name: "My Bookings", href: "/my-bookings" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="max-w-11/12 mx-auto sticky top-0 z-50 bg-gray-900/70 backdrop-blur-lg border-b border-gray-800 shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Drive <span className="text-purple-400 ml-1">Hospital</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-medium transition-colors duration-300 
                  ${pathname === link.href ? "text-cyan-400" : "text-gray-300 hover:text-cyan-300"}`}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 rounded-full shadow-glow" />
                )}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/auth/signin"
              className="px-4 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white transition"
            >
              Sign In
            </Link>
            <Link
              href="/auth/register"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:opacity-90 transition"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <details className="dropdown">
              <summary className="btn btn-ghost p-2 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>
              <ul className="menu dropdown-content bg-gray-900/95 backdrop-blur-md rounded-lg shadow-lg mt-3 w-48 p-2 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`${pathname === link.href ? "text-cyan-400 font-semibold" : "text-gray-300 hover:text-cyan-300"}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-2 border-t border-gray-700">
                  <Link
                    href="/auth/signin"
                    className="text-gray-300 hover:text-cyan-300"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auth/register"
                    className="text-gray-300 hover:text-cyan-300"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
