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
        <div className=" sticky top-0 z-50 bg-gray-900/70 backdrop-blur-lg border-b border-gray-800 shadow-md">
          <Navbar />
        </div>

        <div className="max-w-11/12 mx-auto">{children}</div>
      </body>
    </html>
  );
}
