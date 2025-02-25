
import { z } from 'zod';

export const blogSchema = z.object({
  title: z.string({ message: "هذا الحقل مطلوب" })
  .min(2, { message: "الاسم يجب أن يحتوي على حرفين على الأقل." }),
  content: z.string({ message: "هذا الحقل مطلوب" })
  .min(10, { message: "الاسم يجب أن يحتوي على 10 على الأقل." }),
});