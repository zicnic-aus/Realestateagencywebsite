import { Button } from "./ui/button";
import { InquiryForm } from "./InquiryForm";
import logo from "figma:asset/d484d801da941db03b273e77627f3720bb497ac8.png";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={logo} alt="IMMD Realty" className="h-14" />
            <span className="text-gray-900" style={{ color: 'var(--brand-deep-blue)' }}>IMMD Realty</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </a>
            <a href="#properties" className="text-gray-600 hover:text-gray-900 transition-colors">
              Properties
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </div>
          
          <InquiryForm>
            <Button className="hover:opacity-90" style={{ backgroundColor: 'var(--brand-deep-blue)' }}>
              Get Started
            </Button>
          </InquiryForm>
        </div>
      </div>
    </nav>
  );
}
