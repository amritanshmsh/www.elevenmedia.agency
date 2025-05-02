"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Results", href: "/results" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* top accent bar */}
      <div className="h-1 w-full bg-purple-600" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-gray-900">
          eleven<span className="text-purple-600">.</span>
        </Link>

        {/* Center nav (desktop) */}
        <div className="hidden md:flex gap-10 text-sm font-medium">
          {links.slice(0, 4).map((l) => (
            <Link
              key={l.name}
              href={l.href}
              className="relative text-gray-700 hover:text-purple-700 transition-colors"
            >
              {l.name}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transform bg-purple-600 transition-transform duration-300 hover:scale-x-100" />
            </Link>
          ))}
        </div>

        {/* Right button (desktop) */}
        <Link
          href="/contact"
          className="hidden md:inline-block rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white hover:bg-purple-700 transition-colors"
        >
          Contact
        </Link>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-gray-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-purple-50"
                onClick={() => setOpen(false)}
              >
                {l.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-full bg-purple-600 px-5 py-2 text-center text-sm font-semibold text-white hover:bg-purple-700"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}