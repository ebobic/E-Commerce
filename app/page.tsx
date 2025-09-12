import Hero from "@/components/hero";
import BenefitsBanner from "@/components/BenefitsBanner";
import ProductCard from "@/components/product-card";
import FeaturedProductList from "@/components/featured-product-list";
import ContactForm from "@/components/contact-form";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <BenefitsBanner />
      <FeaturedProductList />
      <AboutUs/>
      <ContactForm />
    </main>
    );
}
