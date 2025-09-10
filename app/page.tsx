import Hero from "@/components/hero";

import BenefitsBanner from "@/components/BenefitsBanner";
import ProductCard from "@/components/product-card";
import FeaturedProductList from "@/components/featured-product-list";

export default function Home() {
  return (
    <main>
      <Hero />
      <BenefitsBanner />
      <FeaturedProductList />
    </main>
  );
}
