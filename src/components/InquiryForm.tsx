import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner@2.0.3";

interface InquiryFormProps {
  children: React.ReactNode;
  defaultService?: string;
}

export function InquiryForm({ children, defaultService }: InquiryFormProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService || "",
    propertyType: "",
    budget: "",
    location: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Web3Forms configuration
    // Get your access key from https://web3forms.com (free, just verify your email)
    const accessKey = "7ef26cfe-372b-4e36-b261-6c0796226c8a";

    // Check if Web3Forms is configured
    if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      toast.error("Form service not configured. Please contact us at info@immd.au or call 0411 317 102");
      console.error("Web3Forms not configured. Get your free access key at https://web3forms.com and update it in /components/InquiryForm.tsx");
      return;
    }

    // Show loading state
    toast.loading("Sending your enquiry...");

    try {
      // Prepare form data for Web3Forms
      const formPayload = {
        access_key: accessKey,
        subject: `New Property Enquiry - ${formData.service}`,
        from_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        property_type: formData.propertyType || 'Not specified',
        budget: formData.budget || 'Not specified',
        location: formData.location || 'Not specified',
        timeline: formData.timeline || 'Not specified',
        message: formData.message || 'No additional information provided',
      };

      console.log('Sending inquiry with Web3Forms');

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
        toast.success("Thank you for your enquiry! We'll be in touch within 24 hours.");
        
        // Close dialog and reset form
        setOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: defaultService || "",
          propertyType: "",
          budget: "",
          location: "",
          timeline: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Failed to send");
      }
    } catch (error) {
      console.error("Error sending form:", error);
      toast.dismiss();
      toast.error("Failed to send enquiry. Please try again or contact us directly at info@immd.au");
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <span onClick={() => setOpen(true)} className="inline-block cursor-pointer">
        {children}
      </span>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl" style={{ color: 'var(--brand-deep-blue)' }}>
            Start Your Property Journey
          </DialogTitle>
          <DialogDescription>
            Fill in your details and we'll get back to you within 24 hours to discuss your property needs.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                placeholder="John Smith"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="0411 317 102"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">
                Service Required <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.service}
                onValueChange={(value) => handleChange("service", value)}
                required
              >
                <SelectTrigger id="service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buyer">Buyer's Agent</SelectItem>
                  <SelectItem value="seller">Seller's Agent</SelectItem>
                  <SelectItem value="turnkey">Turnkey Homes</SelectItem>
                  <SelectItem value="subdivision">Subdivisions</SelectItem>
                  <SelectItem value="development">Property Development</SelectItem>
                  <SelectItem value="consultation">General Consultation</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="propertyType">Property Type</Label>
              <Select
                value={formData.propertyType}
                onValueChange={(value) => handleChange("propertyType", value)}
              >
                <SelectTrigger id="propertyType">
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment/Unit</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                  <SelectItem value="land">Land/Vacant Block</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="rural">Rural Property</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget/Price Range</Label>
              <Select
                value={formData.budget}
                onValueChange={(value) => handleChange("budget", value)}
              >
                <SelectTrigger id="budget">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-500k">Under $500,000</SelectItem>
                  <SelectItem value="500k-750k">$500,000 - $750,000</SelectItem>
                  <SelectItem value="750k-1m">$750,000 - $1,000,000</SelectItem>
                  <SelectItem value="1m-1.5m">$1,000,000 - $1,500,000</SelectItem>
                  <SelectItem value="1.5m-2m">$1,500,000 - $2,000,000</SelectItem>
                  <SelectItem value="over-2m">Over $2,000,000</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Preferred Location</Label>
              <Input
                id="location"
                placeholder="e.g., White Rock, Ipswich, Brisbane"
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Timeline</Label>
              <Select
                value={formData.timeline}
                onValueChange={(value) => handleChange("timeline", value)}
              >
                <SelectTrigger id="timeline">
                  <SelectValue placeholder="When do you plan to proceed?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediately">Immediately</SelectItem>
                  <SelectItem value="1-3months">1-3 Months</SelectItem>
                  <SelectItem value="3-6months">3-6 Months</SelectItem>
                  <SelectItem value="6-12months">6-12 Months</SelectItem>
                  <SelectItem value="12months+">12+ Months</SelectItem>
                  <SelectItem value="exploring">Just Exploring</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea
              id="message"
              placeholder="Tell us more about your property requirements, goals, or any questions you may have..."
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
            />
          </div>

          <div className="flex gap-3 justify-end pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="hover:opacity-90"
              style={{ backgroundColor: 'var(--brand-deep-blue)' }}
            >
              Submit Enquiry
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}