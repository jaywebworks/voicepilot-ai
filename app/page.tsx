import { SHOW_DEMO, SHOW_TESTIMONIALS } from "@/site.config";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { DemoCallout } from "@/components/DemoCallout";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      {SHOW_DEMO && <DemoCallout />}
      <Pricing />
      <About />
      {SHOW_TESTIMONIALS && <Testimonials />}
      <Faq />
      <Contact />
    </>
  );
}
