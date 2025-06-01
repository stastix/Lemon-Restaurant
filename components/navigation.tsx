"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className="bg-white shadow-lg sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="Lemon Restaurant Home"
          >
            <figure className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span
                className="text-white font-bold text-lg"
                role="img"
                aria-label="Lemon emoji"
              >
                🍋
              </span>
            </figure>
            <span className="text-2xl font-bold text-gray-800">Lemon</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8" role="menubar">
            {navItems.map((item) => (
              <li key={item.href} role="none">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium"
                  role="menuitem"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <aside
            className="hidden lg:flex items-center space-x-4"
            role="complementary"
          >
            <address
              className="flex items-center space-x-2 text-sm text-gray-600 not-italic"
              itemScope
              itemType="https://schema.org/Restaurant"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <a href="tel:+15551234567" itemProp="telephone">
                (555) 123-4567
              </a>
            </address>
            <Link href="/booking">
              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-white"
                type="button"
              >
                Reserve Table
              </Button>
            </Link>
          </aside>
          <button
            className="md:hidden text-gray-700 hover:text-yellow-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-white border-t"
            role="menu"
          >
            <ul className="px-2 pt-2 pb-3 space-y-1" role="none">
              {navItems.map((item) => (
                <li key={item.href} role="none">
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-yellow-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="px-3 py-2 border-t mt-2" role="none">
                <address className="flex items-center space-x-2 text-sm text-gray-600 mb-2 not-italic">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <a href="tel:+15551234567">(555) 123-4567</a>
                </address>
                <Link href="/booking">
                  <Button
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
                    type="button"
                  >
                    Reserve Table
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
