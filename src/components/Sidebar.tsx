"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Facebook, Instagram, MapPin, Clock, Phone, Mail } from "lucide-react";
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

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.href.substring(1));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:flex flex-col w-[20vw] h-screen fixed left-0 top-0 bg-primary border-r border-secondary/20 p-8 z-50">
      <div className="flex-1 flex flex-col justify-between">

        {/* Header */}
        <div>
          <h1 className="font-display text-3xl font-bold text-text-main mb-4">
            Les Petits Liens
          </h1>
          <p className="text-text-main/80 text-sm leading-relaxed">
            Une micro-crèche chaleureuse, design et inclusive au cœur de votre quartier.
          </p>
        </div>

        {/* Navigation */}
        <nav className="py-8">
          <ul className="space-y-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-all duration-300 block py-1 relative pl-4",
                      isActive
                        ? "text-accent font-bold translate-x-2"
                        : "text-text-main/70 hover:text-accent hover:translate-x-1"
                    )}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent rounded-full" />
                    )}
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer Info */}
        <div className="space-y-6">
          <Link
            href="#contact"
            className="block w-full bg-accent text-white text-center py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors shadow-sm"
          >
            Pré-inscription
          </Link>

          <div className="space-y-3 text-sm text-text-main/80">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>123 Rue du Quartier, 75000 Paris</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-secondary" />
              <span>Lun - Ven : 8h00 - 18h30</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-secondary" />
              <span>01 23 45 67 89</span>
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t border-secondary/20">
            <a href="#" className="text-text-main/60 hover:text-accent transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-text-main/60 hover:text-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:contact@lespetitsliens.fr" className="text-text-main/60 hover:text-accent transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
