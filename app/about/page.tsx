import AboutUs from "@/components/about-us";
import { Toaster } from "sonner";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-24 pb-12">
        <AboutUs showLink={false}/>
      </div>
      <Toaster />
    </main>
  );
}
