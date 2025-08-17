import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Drive Hospital",
  description: " Drive Hospital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {/* Navbar stays above background */}
        <div className="sticky top-0 z-50 bg-gray-900/70 backdrop-blur-lg border-b border-gray-800 shadow-md">
          <Navbar />
        </div>

        {/* Main container */}
        <div className="min-h-screen w-full bg-black relative overflow-hidden">
          {/* Background Layer */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "#000000",
              backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
          `,
              backgroundSize: "30px 30px",
              backgroundPosition: "0 0",
            }}
          />

          {/* Content Layer */}
          <div className="relative z-10 max-w-11/12 mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
