import AboutUs from "@/components/about-us";
import { Toaster } from "sonner";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="flex flex-col pt-12 bg-slate-100">
        <h1 className="font-bold text-2xl lg:text-3xl text-neutral-800 m-auto">About Us</h1>
        <AboutUs showLink={false}/>
      </div>
      <Toaster />
    </main>
  );
}
