"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Accueil", href: "#hero" },
  { name: "Le Projet", href: "#project" },
  { name: "Social & Inclusion", href: "#social" },
  { name: "Les Espaces", href: "#spaces" },
  { name: "L'Équipe", href: "#team" },
  { name: "Infos Pratiques", href: "#infos" },
  { name: "Tarifs", href: "#rates" },
  { name: "Contact", href: "#contact" },
];

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 bg-primary/95 backdrop-blur-sm border-b border-secondary/20 z-50 h-16 flex items-center justify-between px-4">
      <span className="font-display text-xl font-bold text-text-main">
        Les Petits Liens
      </span>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-text-main hover:text-accent transition-colors"
        aria-label="Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-background z-40 transition-transform duration-300 ease-in-out flex flex-col p-6 overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex-1">
          <ul className="space-y-6 text-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-xl font-medium text-text-main hover:text-accent transition-colors block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8">
          <Link
            href="#contact"
            className="block w-full bg-accent text-white text-center py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors shadow-sm"
            onClick={() => setIsOpen(false)}
          >
            Pré-inscription
          </Link>
        </div>
      </div>
    </header>
  );
}

