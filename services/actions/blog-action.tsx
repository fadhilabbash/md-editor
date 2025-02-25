"use server";

import { blogSchema } from "@/lib/schemas";
import { parseWithZod } from "@conform-to/zod";

export async function addBlog(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: blogSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }
  return {
    status: submission.status,
    ...submission.reply({ resetForm: true }),
  };
}
