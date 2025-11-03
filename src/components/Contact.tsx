import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your property journey? Let's connect and make it happen.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--brand-light-blue)' }}>
              <Phone className="h-6 w-6" style={{ color: 'var(--brand-deep-blue)' }} />
            </div>
            <h3 className="text-lg text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">Mon-Fri 9am-6pm</p>
            <p className="mt-2" style={{ color: 'var(--brand-deep-blue)' }}>0411 317 102</p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--brand-light-blue)' }}>
              <Mail className="h-6 w-6" style={{ color: 'var(--brand-deep-blue)' }} />
            </div>
            <h3 className="text-lg text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">We'll respond within 24hrs</p>
            <p className="mt-2" style={{ color: 'var(--brand-deep-blue)' }}>info@immd.com.au</p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--brand-light-blue)' }}>
              <MapPin className="h-6 w-6" style={{ color: 'var(--brand-deep-blue)' }} />
            </div>
            <h3 className="text-lg text-gray-900 mb-2">Office</h3>
            <p className="text-gray-600">Visit us in person</p>
            <p className="mt-2" style={{ color: 'var(--brand-deep-blue)' }}>3 Explorers Road, White Rock, QLD 4306</p>
          </Card>
        </div>
        
        <Card id="contact-form" className="max-w-2xl mx-auto mt-12 p-8">
          <h3 className="text-2xl text-gray-900 mb-6 text-center">Send us a message</h3>
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Input placeholder="First Name" />
              </div>
              <div>
                <Input placeholder="Last Name" />
              </div>
            </div>
            <Input type="email" placeholder="Email Address" />
            <Input type="tel" placeholder="Phone Number" />
            <Textarea placeholder="Tell us about your property needs..." rows={4} />
            <Button className="w-full py-6 hover:opacity-90" style={{ backgroundColor: 'var(--brand-deep-blue)' }}>
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
