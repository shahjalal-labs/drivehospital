import Link from "next/link";

const navItems = (
  <>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/about">About</Link>
    </li>
    <li>
      <Link href="/services">Services</Link>
    </li>
    <li>
      <Link href="/services">Blogs</Link>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar bg-sky-100/30 shadow-sm sticky top-0 z-50 backdrop-blur-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          Drive <span>Hospital</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end space-x-4">
        <Link href="/auth/signin" className="btn rounded-full">
          Sign in
        </Link>
        <Link href="/auth/signin" className="btn rounded-full">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
