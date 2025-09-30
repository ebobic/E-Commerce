import ContactForm from "@/components/contact-form";
import { Toaster } from "sonner";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-24 pb-12">
        <ContactForm />
      </div>
      <Toaster />
    </main>
  );
}
