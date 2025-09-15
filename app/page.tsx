import Hero from "@/components/hero";
import BenefitsBanner from "@/components/BenefitsBanner";
import FeaturedProduct from "@/components/featured-products";
import FeaturedProductList from "@/components/featured-product-list";
import ContactForm from "@/components/contact-form";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <BenefitsBanner />
      <FeaturedProduct />
      <FeaturedProductList />
      <AboutUs/>
      <ContactForm />
    </main>
    );
}
