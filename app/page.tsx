import Hero from "@/components/hero";
import BenefitsBanner from "@/components/benefits-banner";
import FeaturedProduct from "@/components/featured-products";
import FeaturedProductList from "@/components/featured-product-list";
import ContactForm from "@/components/contact-form";
import AboutUs from "@/components/about-us";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <BenefitsBanner />
      <FeaturedProduct />
      <AboutUs />
      <ContactForm />
      
    </main>
    );
}
