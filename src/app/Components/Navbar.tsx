"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Process", href: "/#howitworks" },
    { name: "Benefits", href: "/#whatwedo" },
    { name: "Portfolio", href: "/#casestudies" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200">
      <div className="mx-auto flex max-w-full items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 hover:text-purple-600 transition-colors">
          eleven<span className="text-purple-600">media</span>
        </Link>

        {/* Center nav (desktop) */}
        <div className="hidden md:flex gap-6 lg:gap-8 text-base lg:text-lg font-medium absolute left-1/2 transform -translate-x-1/2">
          {links.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              className="relative text-gray-700 hover:text-purple-700 transition-all duration-300 hover:scale-105"
            >
              {l.name}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transform bg-purple-600 transition-transform duration-300 hover:scale-x-100" />
            </Link>
          ))}
        </div>

        {/* Right button (desktop) */}
        <Link
          href="/contactform"
          className="hidden md:inline-block rounded-xl border-2 border-purple-600 bg-white px-4 lg:px-6 py-2 lg:py-3 text-base lg:text-lg font-semibold text-purple-600 hover:bg-purple-600 hover:text-white shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
        >
          Free Audit
        </Link>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 md:hidden transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-gray-200 bg-white/95 backdrop-blur-md px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                className="rounded-md px-4 py-2 text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.name}
              </Link>
            ))}
            <Link
              href="/contactform"
              className="mt-3 rounded-xl border-2 border-purple-600 bg-white px-4 py-2 text-center text-base font-semibold text-purple-600 hover:bg-purple-600 hover:text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              Free Audit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}