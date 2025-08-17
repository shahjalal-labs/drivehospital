import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full relative bg-black">
      {/* Background with top glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
        }}
      />

      {/* Footer Content */}
      <footer className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 footer text-neutral-content  p-10 mx-auto max-w-11/12">
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link href="/services/branding" className="link link-hover">
            Branding
          </Link>
          <Link href="/services/design" className="link link-hover">
            Design
          </Link>
          <Link href="/services/marketing" className="link link-hover">
            Marketing
          </Link>
          <Link href="/services/advertisement" className="link link-hover">
            Advertisement
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link href="/about" className="link link-hover">
            About us
          </Link>
          <Link href="/contact" className="link link-hover">
            Contact
          </Link>
          <Link href="/jobs" className="link link-hover">
            Jobs
          </Link>
          <Link href="/press" className="link link-hover">
            Press kit
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link href="/terms" className="link link-hover">
            Terms of use
          </Link>
          <Link href="/privacy" className="link link-hover">
            Privacy policy
          </Link>
          <Link href="/cookies" className="link link-hover">
            Cookie policy
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="link link-hover"
          >
            Twitter
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            className="link link-hover"
          >
            Instagram
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            className="link link-hover"
          >
            Facebook
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            className="link link-hover"
          >
            GitHub
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Explore</h6>
          <Link href="/features" className="link link-hover">
            Features
          </Link>
          <Link href="/enterprise" className="link link-hover">
            Enterprise
          </Link>
          <Link href="/security" className="link link-hover">
            Security
          </Link>
          <Link href="/pricing" className="link link-hover">
            Pricing
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
