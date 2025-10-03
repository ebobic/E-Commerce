"use client";

import Form from "next/form";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendEmail } from "@/app/api/action"

function ContactForm() {
  const [state, formAction] = useActionState(sendEmail, { errors: { name: undefined, email: undefined, subject: undefined, message: undefined } });

  return (
    <Form action={formAction} className="grid">
        <div className="grid gap-2 w-9/10 m-auto sm:w-7/10 sm:flex sm:mb-1">
          <input
            type="text"
            name="name"
            id="name"
            className="px-2 rounded-lg bg-blue-100 sm:m-auto sm:w-7/10"
            aria-label="Contact Us - Name"
            placeholder="Your name"
          />
          <input
            type="email"
            className="px-2 rounded-lg bg-blue-100 sm:m-auto sm:w-7/10"
            name="email"
            id="email"
            aria-label="Contact Us - E-mail"
            placeholder="Your e-mail"
          />
        </div>
        <input
          type="text"
          name="subject"
          id="subject"
          className="mt-2 px-2 rounded-lg bg-blue-100 m-auto w-9/10 sm:w-7/10 sm:mt-1"
          aria-label="Contact Us - Subject"
          placeholder="Subject"
        />
        <textarea
          className="mt-2 px-2 rounded-lg bg-blue-100 m-auto w-9/10 sm:w-7/10"
          rows={5}
          cols={40}
          name="message"
          id="message"
          aria-label="Contact Us - Message"
          placeholder="Message"
        />
        <div className="grid justify-self-center sm:w-7/10 sm:flex sm:items-center sm:justify-between">
          <SubmitButton />
          {state?.success && <p className="mt-3 p-2 opacity-70 border text-xs rounded-lg bg-green-100 text-green-600">Message sent successfully!</p>}
        </div>
          {state?.errors?.name && (
            <p className="text-center text-sm text-red-500">{state.errors.name}</p>
          )}
          {state?.errors?.email && (
            <p className="text-center text-sm text-red-500">{state.errors.email}</p>
          )}
          {state?.errors?.subject && (
            <p className="text-center text-sm text-red-500">{state.errors.subject}</p>
          )}
          {state?.errors?.message && (
            <p className="text-center text-sm text-red-500">{state.errors.message}</p>
          )}
      </Form>
  );
}

export default ContactForm;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending ? true : false}
      className="mt-4 py-0.5 px-4 rounded-full text-white bg-blue-900 hover:bg-blue-800 cursor-pointer"
    >
      {pending ? (
        <span>
          Submitting...
        </span>
      ) : (
        "Send Message"
      )}
    </button>
  );
}