import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesMediaCards from '@/components/sections/features/FeaturesMediaCards';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroOverlayMarquee from '@/components/sections/hero/HeroOverlayMarquee';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialRatingCards from '@/components/sections/testimonial/TestimonialRatingCards';
import { Shield, Star, Zap } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroOverlayMarquee
      tag="Luxury Design Solutions"
      title="Elevating Digital Experiences"
      description="At J & H Web Solutions, we craft bespoke digital ecosystems designed for professional growth and luxury brand positioning."
      primaryButton={{
        text: "Get Started",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Our Services",
        href: "#services",
      }}
      items={[
        {
          text: "Strategy",
          icon: Zap,
        },
        {
          text: "Design",
          icon: Star,
        },
        {
          text: "Development",
          icon: Shield,
        },
      ]}
      imageSrc="https://images.pexels.com/photos/13040146/pexels-photo-13040146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonial
      tag="Our Philosophy"
      quote="Digital presence is the modern identity. We transform businesses into industry leaders through sophisticated web architecture."
      author="Jordan & Helena"
      role="Founders"
      imageSrc="https://images.pexels.com/photos/39733048/pexels-photo-39733048.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesMediaCards
      tag="Our Expertise"
      title="Bespoke Digital Services"
      description="Premium solutions for discerning brands."
      items={[
        {
          title: "Bespoke Web Design",
          description: "Tailor-made visual identities.",
          imageSrc: "https://images.pexels.com/photos/326515/pexels-photo-326515.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Custom Development",
          description: "Robust and scalable architecture.",
          imageSrc: "https://images.pexels.com/photos/34803985/pexels-photo-34803985.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Digital Strategy",
          description: "Consultative approach to growth.",
          imageSrc: "https://images.pexels.com/photos/9064399/pexels-photo-9064399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Our Impact"
      title="Data-Driven Success"
      description="Excellence defined by performance metrics."
      metrics={[
        {
          value: "100+",
          title: "Successful Launches",
          features: [
            "Luxury brand focus",
            "Client-first design",
            "Performance optimization",
          ],
        },
        {
          value: "98%",
          title: "Client Retention",
          features: [
            "Continuous support",
            "Proactive strategy",
            "Long-term partnership",
          ],
        },
        {
          value: "24/7",
          title: "Dedicated Support",
          features: [
            "Expert response",
            "Real-time updates",
            "Global accessibility",
          ],
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="products" data-section="products">
    <SectionErrorBoundary name="products">
          <FeaturesRevealCardsBento
      tag="Our Work"
      title="Selected Projects"
      description="A collection of our premium digital craft."
      items={[
        {
          title: "Luxury Portal",
          description: "Full site architecture.",
          href: "#",
          imageSrc: "https://images.pexels.com/photos/3471423/pexels-photo-3471423.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Marketplace UI",
          description: "Scalable retail design.",
          href: "#",
          imageSrc: "https://images.pexels.com/photos/2622122/pexels-photo-2622122.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "App Design",
          description: "Intuitive mobile UX.",
          href: "#",
          imageSrc: "https://images.pexels.com/photos/17561405/pexels-photo-17561405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Software Hub",
          description: "Complex web application.",
          href: "#",
          imageSrc: "https://images.pexels.com/photos/479358/pexels-photo-479358.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "E-Commerce",
          description: "Global sales portal.",
          href: "#",
          imageSrc: "https://images.pexels.com/photos/7661072/pexels-photo-7661072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Digital Gallery",
          description: "Artistic showcase site.",
          href: "#",
          imageSrc: "https://images.pexels.com/photos/40057911/pexels-photo-40057911.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Corporate Base",
          description: "Robust corporate site.",
          href: "#",
          imageSrc: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>


  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialRatingCards
      tag="Client Success"
      title="Trusted by Leaders"
      description="What our clients say about our service."
      testimonials={[
        {
          name: "Alex R.",
          role: "CEO",
          quote: "Excellence at its peak.",
          rating: 5,
          imageSrc: "https://images.pexels.com/photos/36712868/pexels-photo-36712868.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Elena K.",
          role: "Creative Lead",
          quote: "Stunning design, seamless process.",
          rating: 5,
          imageSrc: "https://images.pexels.com/photos/7255316/pexels-photo-7255316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Marcus V.",
          role: "Founder",
          quote: "J & H elevated our brand massively.",
          rating: 5,
          imageSrc: "https://images.pexels.com/photos/29995570/pexels-photo-29995570.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Sarah P.",
          role: "Marketing Director",
          quote: "Professional, fast, and incredibly intuitive.",
          rating: 5,
          imageSrc: "https://images.pexels.com/photos/8937548/pexels-photo-8937548.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "David L.",
          role: "Director",
          quote: "Truly a premium service.",
          rating: 5,
          imageSrc: "https://images.pexels.com/photos/13226338/pexels-photo-13226338.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social" data-section="social">
    <SectionErrorBoundary name="social">
          <SocialProofMarquee
      tag="Trusted Partners"
      title="Brand Affiliations"
      description="We are proud to serve global industry leaders."
      names={[
        "Apex",
        "Nebula",
        "Titan",
        "Vantage",
        "Quantum",
        "Synergy",
        "Vertex",
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Let's Collaborate"
      text="Are you ready to elevate your digital identity?"
      primaryButton={{
        text: "Book Consultation",
        href: "#",
      }}
      secondaryButton={{
        text: "Contact Us",
        href: "#",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
