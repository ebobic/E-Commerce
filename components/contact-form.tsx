import ContactForm from "./contact-form-client";

export default function Contact() {

  return (
    <section id="contact" className="grid grid-cols-1 pb-10 justify-self-center">
      <div className="w-full pt-6 pb-2 text-center justify-self-center md:w-7/10 lg:w-6/10 xl:w-5/10">
        <h2 className="pt-6 text-2xl font-bold">Get In Touch With Us</h2>
        <p className="m-auto p-2 text-sm break-keep">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          non dicta? Dolorum facilis, voluptates provident dolores natus porro
          adipisci quasi culpa.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
