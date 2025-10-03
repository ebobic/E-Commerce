import Hero from "@/components/hero";
import BenefitsBanner from "@/components/benefits-banner";
import FeaturedProduct from "@/components/featured-products";
import ContactForm from "@/components/contact-form";
import AboutUs from "@/components/about-us";

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <BenefitsBanner />
      <FeaturedProduct />
      <AboutUs showLink={true}/>
      <ContactForm />
      
    </main>
    );
}
