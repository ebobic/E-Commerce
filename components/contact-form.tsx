import Form from "next/form"

export default function ContactForm() {
    return (
        <section>
            <div className="pt-6 pb-2 w-[400px] m-auto text-center">
                <h2 className="pt-6 text-2xl font-bold">Get In Touch With Us</h2>
                <p className="p-2 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, non dicta? Dolorum facilis, voluptates provident dolores natus porro adipisci quasi culpa.</p>
            </div>
            
            <div className="pb-8 text-center">
                <Form action="/contact">
                    <input type="text"
                        className=" flex py-0.5 px-4 border rounded-full bg-blue-100 justify-center"
                        name="name"
                        aria-label="Contact Us - Name"
                        placeholder="Your name"
                    />
                    <input type="email"
                        className="flex py-0.5 px-4 border rounded-full bg-blue-100 justify-center"
                        name="e-mail"
                        aria-label="Contact Us - E-mail"
                        placeholder="Your e-mail"
                    />
                    <input type="text"
                        className="flex block py-0.5 px-4 border rounded-full bg-blue-100 justify-center"
                        name="subject"
                        aria-label="Contact Us - Subject"
                        placeholder="Subject"
                    />
                    <input type="text"
                        className="py-0.5 px-4 border rounded-full bg-blue-100 justify-center"
                        name="name"
                        aria-label="Contact Us - Message"
                        placeholder="Message"
                    />
                    <button type="submit" className="block py-0.5 px-4 border rounded-full text-white bg-blue-900 hover:bg-blue-800">
                        Send Message
                    </button>
                </Form>
            </div>
        </section>
    )
}