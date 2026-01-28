import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/curriculum", label: "Curriculum" },
    { href: "/birthday-parties", label: "Parties" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <img 
              src="/assets/logo.png" 
              alt="Steps Play School Logo" 
              className="h-14 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-accent ${
                  location === link.href ? "text-accent" : "text-primary/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-primary/80 text-sm font-medium">
              <Phone className="w-4 h-4 text-accent" />
              <span>+20 123 456 7890</span>
            </div>
            <Link href="/contact">
              <Button className="rounded-full font-bold bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/25">
                Enroll Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-lg font-medium p-2 rounded-lg transition-colors ${
                location === link.href 
                  ? "bg-accent/10 text-accent" 
                  : "text-primary hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact">
            <Button className="w-full rounded-full font-bold bg-accent hover:bg-accent/90 mt-2">
              Enroll Now
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
