"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Info,
  Briefcase,
  BookOpen,
  CalendarCheck,
  Phone,
  LogIn,
  UserPlus,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Blogs", href: "/blogs", icon: BookOpen },
  { name: "My Bookings", href: "/my-bookings", icon: CalendarCheck },
  { name: "Contact Us", href: "/contact", icon: Phone },
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
            <details className="dropdown dropdown-end">
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
              <ul
                className="menu dropdown-content bg-gray-900/95 backdrop-blur-md rounded-lg shadow-lg mt-3 w-56 p-2 space-y-2 
                border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.7)]"
              >
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`flex items-center gap-2 ${
                          pathname === link.href
                            ? "text-cyan-400 font-semibold"
                            : "text-gray-300 hover:text-cyan-300"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        {link.name}
                      </Link>
                    </li>
                  );
                })}

                {/* Auth Buttons in Mobile */}
                <li className="pt-2 border-t border-gray-700">
                  <Link
                    href="/auth/signin"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-300"
                  >
                    <LogIn className="w-5 h-5" />
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auth/register"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-300"
                  >
                    <UserPlus className="w-5 h-5" />
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
