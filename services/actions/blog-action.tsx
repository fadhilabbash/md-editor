"use server";

import { blogSchema } from "@/lib/schemas";
import { parseWithZod } from "@conform-to/zod";

export async function addBlog(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: blogSchema,
  });

  if (submission.status !== "success") {
    console.log("Error__", submission.reply());
    return submission.reply();
  }
  console.log("Success__", submission.reply());
  console.log("Formdata___", formData);
  return {
    status: submission.status,
    ...submission.reply({ resetForm: true }),
  };
}
