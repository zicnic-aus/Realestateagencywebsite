import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { useRef } from "react";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

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
            <p className="mt-2" style={{ color: 'var(--brand-deep-blue)' }}>info@immd.au</p>
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
          <form 
            ref={formRef}
            className="space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const firstName = formData.get('firstName') as string;
              const lastName = formData.get('lastName') as string;
              const email = formData.get('email') as string;
              const phone = formData.get('phone') as string;
              const message = formData.get('message') as string;
              
              // Web3Forms configuration
              // Get your access key from https://web3forms.com (free, just verify your email)
              const accessKey = "7ef26cfe-372b-4e36-b261-6c0796226c8a";

              // Check if Web3Forms is configured
              if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
                toast.error("Form service not configured. Please contact us at info@immd.au or call 0411 317 102");
                console.error("Web3Forms not configured. Get your free access key at https://web3forms.com and update it in /components/Contact.tsx");
                return;
              }

              // Show loading state
              toast.loading("Sending your message...");

              try {
                // Prepare form data for Web3Forms
                const formPayload = {
                  access_key: accessKey,
                  subject: "New Contact Form Message - IMMD Realty",
                  from_name: `${firstName} ${lastName}`,
                  email: email,
                  phone: phone,
                  message: message,
                };

                console.log('Sending contact message with Web3Forms');

                // Send to Web3Forms API
                const response = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  body: JSON.stringify(formPayload),
                });

                const result = await response.json();
                
                if (result.success) {
                  toast.dismiss();
                  toast.success("Thank you for your message! We'll be in touch within 24 hours.");
                  
                  // Reset form using ref
                  if (formRef.current) {
                    formRef.current.reset();
                  }
                } else {
                  throw new Error(result.message || "Failed to send");
                }
              } catch (error) {
                console.error("Error sending form:", error);
                toast.dismiss();
                toast.error("Failed to send message. Please try again or contact us directly at info@immd.au");
              }
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Input name="firstName" placeholder="First Name" required />
              </div>
              <div>
                <Input name="lastName" placeholder="Last Name" required />
              </div>
            </div>
            <Input name="email" type="email" placeholder="Email Address" required />
            <Input name="phone" type="tel" placeholder="Phone Number" required />
            <Textarea name="message" placeholder="Tell us about your property needs..." rows={4} required />
            <Button type="submit" className="w-full py-6 hover:opacity-90" style={{ backgroundColor: 'var(--brand-deep-blue)' }}>
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}