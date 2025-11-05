import footerIcon from "figma:asset/d484d801da941db03b273e77627f3720bb497ac8.png";

export function Footer() {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: 'var(--brand-deep-blue)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src={footerIcon} 
                alt="IMMD Realty - One Agency, Every Angle" 
                className="h-16" 
              />
            </div>
            <p className="text-gray-400 max-w-md">
              Bridging dreams to reality. Your trusted partner in real estate, representing both buyers and sellers with expertise and dedication.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#properties" className="hover:text-white transition-colors">Properties</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>0411 317 102</li>
              <li>info@immd.au</li>
              <li>3 Explorers Road, White Rock, QLD 4306</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 IMMD Realty. All rights reserved.</p>
          <p className="mt-2">ABN 91 966 472 481 | ACN 692 456 875</p>
        </div>
      </div>
    </footer>
  );
}
