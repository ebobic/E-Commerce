'use client';

import React, { useState } from 'react';
import Form from "next/form"

export default function ContactForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = () => {
    console.log({ name, email, subject, message });
    setSubmitted(true);
  };

    return (
        <section className="grid grid-cols-1 pb-10 w-[70vh] justify-self-center">
            <div className="w-[50vh] pt-6 pb-2 text-center justify-self-center">
                <h2 className="pt-6 text-2xl font-bold">Get In Touch With Us</h2>
                <p className="p-2 text-sm w-4/5 sm:w-full">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, non dicta? Dolorum facilis, voluptates provident dolores natus porro adipisci quasi culpa.</p>
            </div>
            
            <Form action={(handleSubmit)} className='grid place-content-center'>
                <div className="grid gap-1 sm:flex">
                    <input type="text"
                        className="mb-1 px-2 rounded-lg bg-blue-100"
                        name="name"
                        aria-label="Contact Us - Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                    />
                    <input type="email"
                        className="mb-1 px-2 rounded-lg bg-blue-100"
                        name="e-mail"
                        aria-label="Contact Us - E-mail"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your e-mail"
                    />
                </div>
                <input type="text"
                    className="mt-1 px-2 rounded-lg bg-blue-100"
                    name="subject"
                    aria-label="Contact Us - Subject"
                    required
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject"
                />
                <textarea
                    className="mt-2 py-1 px-2 rounded-lg bg-blue-100"
                    rows={5}
                    cols={40}
                    name="message"
                    aria-label="Contact Us - Message"
                    required
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                />
                <button type="submit" className="grid justify-self-start mt-4 block py-0.5 px-4 rounded-full text-white bg-blue-900 hover:bg-blue-800">
                    Send Message
                </button>
                {submitted && <p className="pt-2">Form submitted successfully!</p>}
            </Form>
        </section>
    )
}
