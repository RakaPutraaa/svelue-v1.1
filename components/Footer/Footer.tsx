"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#18181b] text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Branding */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center space-x-2 mb-3">
            <Image
              src="/images/SVELUE.png"
              alt="Svelue Logo"
              width={32}
              height={32}
            />
            <h2 className="text-xl font-bold">Svelue</h2>
          </div>
          <p className="text-sm text-gray-400">Go Digital With Svelue</p>
        </div>

        {/* Navigation */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="text-sm space-y-1">
            <li>Email: sveluedigital@gmail.com</li>
            <li>Phone: +62 851-4103-4756</li>
            <li>Address: Nusa Dua, Badung, Bali</li>
          </ul>
        </div>

        {/* Social */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <a
            href="https://www.instagram.com/svelue.id?igsh=ZzNub2Jpb3k0N2R0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center md:justify-start items-center space-x-2 hover:text-white"
          >
            <FaInstagram size={20} />
            <span className="text-sm">Instagram</span>
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © 2025 Svelue. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
