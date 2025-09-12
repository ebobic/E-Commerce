"use client";

import React, { useState } from "react";
import Form from "next/form";

export default function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = () => {
    console.log({ name, email, subject, message });
    setSubmitted(true);
  };

  return (
    <section className="grid grid-cols-1 pb-10 justify-self-center">
      <div className="w-full pt-6 pb-2 text-center justify-self-center w-9/10 md:w-7/10 lg:w-6/10 xl:w-5/10">
        <h2 className="pt-6 text-2xl font-bold">Get In Touch With Us</h2>
        <p className="m-auto p-2 text-sm break-keep">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          non dicta? Dolorum facilis, voluptates provident dolores natus porro
          adipisci quasi culpa.
        </p>
      </div>
      {/* <Form action={handleSubmit} className="grid place-content-center"> */}
      <Form action={handleSubmit} className="grid">
        <div className="grid gap-2 w-9/10 m-auto sm:w-7/10 sm:flex sm:mb-1">
          <input
            type="text"
            className="px-2 rounded-lg bg-blue-100 sm:m-auto sm:w-7/10"
            name="name"
            aria-label="Contact Us - Name"
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
          <input
            type="email"
            className="px-2 rounded-lg bg-blue-100 sm:m-auto sm:w-7/10"
            name="e-mail"
            aria-label="Contact Us - E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your e-mail"
          />
        </div>
        <input
          type="text"
          className="mt-2 px-2 rounded-lg bg-blue-100 m-auto w-9/10 sm:w-7/10 sm:mt-1"
          name="subject"
          aria-label="Contact Us - Subject"
          required
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
        />
        <textarea
          className="mt-2 px-2 rounded-lg bg-blue-100 m-auto w-9/10 sm:w-7/10"
          rows={5}
          cols={40}
          name="message"
          aria-label="Contact Us - Message"
          required
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        />
        <div className="grid justify-self-center sm:w-7/10 sm:flex sm:items-center sm:justify-between">
        <button
            type="submit"
            className="mt-4 py-0.5 px-4 rounded-full text-white bg-blue-900 hover:bg-blue-800 cursor-pointer"
          >
            Send Message
          </button>
        {submitted && <p className="pt-2">Form submitted successfully!</p>}
        </div>
      </Form>
        
        
    </section>
  );
}
