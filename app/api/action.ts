"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, { message: "Name field is required" }),
  email: z.email({ message: "Invalid email address" }),
  subject: z.string().trim().min(1, { message: "Subject field required" }),
  message: z.string().trim().min(1, { message: "Please type a message" }),
});

// Server Action
export async function sendEmail(prevState: { errors?: { name?: string[]; email?: string[]; subject?: string[]; message?: string[] }; success?: string } | null, formData: FormData) {
  // Convert the raw formData into a regular JavaScript object
  const contactFormData = Object.fromEntries(formData);
  // Validate contactFormData using the safeParse() method
  const validatedContactFormData = contactFormSchema.safeParse(contactFormData);

  // If the validation fails, we return an object with an error property, which is an object containing the error message of each form field.
  if (!validatedContactFormData.success) {
    const formFieldErrors =
        validatedContactFormData.error.flatten().fieldErrors;
    //   z.treeifyError();

    return {
      errors: {
        name: formFieldErrors?.name,
        email: formFieldErrors?.email,
        subject: formFieldErrors?.subject,
        message: formFieldErrors?.message,
      },
    };
  }

  return {
    success: "Your message was sent successfully!",
  };
}
