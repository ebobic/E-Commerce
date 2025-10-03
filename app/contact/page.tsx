import ContactForm from "@/components/contact-form-client";
import { Toaster } from "sonner";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="flex flex-col pt-12">
        <h1 className="font-bold text-2xl lg:text-3xl text-neutral-800 m-auto pb-12">Get in touch</h1>
        <ContactForm />
      </div>
      <Toaster />
    </main>
  );
}
