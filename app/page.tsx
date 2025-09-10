import Hero from "@/components/hero";
import BenefitsBanner from "@/components/BenefitsBanner";
import ContactForm from "@/components/contact-form";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <BenefitsBanner/>
      <AboutUs/>
      <ContactForm />
    </main>
    );
}
