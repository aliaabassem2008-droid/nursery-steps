import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="/assets/logo.png" 
                alt="Steps Play School Logo" 
                className="h-16 w-auto object-contain bg-white rounded-2xl p-2"
              />
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Providing a nurturing environment where little steps lead to big dreams. Join our family today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-accent transition-colors">Our Programs</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Programs</h3>
            <ul className="space-y-3">
              <li><Link href="/programs" className="text-gray-300 hover:text-accent transition-colors">Infant Care</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-accent transition-colors">Toddler Program</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-accent transition-colors">Preschool</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-accent transition-colors">Summer Camp</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span className="text-gray-300">Maadi Branch,<br />Cairo, Egypt</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-gray-300">+20 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-gray-300">maadi@stepsnursery.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Steps Play School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
