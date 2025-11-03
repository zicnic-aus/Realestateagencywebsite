import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { MeetTheRealtor } from "./components/MeetTheRealtor";
import { Properties } from "./components/Properties";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <MeetTheRealtor />
      {/* <Properties /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
