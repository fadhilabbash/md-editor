"use client";
import TiptapMarkdown from "@/components/tiptap-markdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useActionState, useState } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";

import { addBlog } from "@/services/actions/blog-action";
import { blogSchema } from "@/lib/schemas";
import { Loader2 } from "lucide-react";
const AddBlog = () => {

    const [lastResult, formAction,isPending] = useActionState(
        addBlog,
        undefined,
      );
      const [content, setContent] = useState("");

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: blogSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
    onSubmit: (formData) => {
       
        const formDataObj = new FormData();
        for (const  [key, value] of Object.entries(formData)) {
          formDataObj.append(key, value);
        }
        formDataObj.append("content", content);
        formAction(formDataObj); 
      },
    
  });
  return (
    <div className="container mx-auto items-center flex justify-center mt-8">
      <form id={form.id} onSubmit={form.onSubmit} action={formAction} noValidate>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="title">العنوان</Label>
          <Input
            type="title"
            id="title"
            placeholder="العنوان"
            key={fields.title.key}
            name={fields.title.name}
          />
          <div className="text-[12px] text-destructive">
            {fields.title.errors}
          </div>
        </div>

        <div>
          <Label htmlFor="content">النص</Label>
          <TiptapMarkdown onChange={} />
          <div className="text-[12px] text-destructive">
            {fields.content.errors}
          </div>
        </div>
        <div className="mt-4">
        <Button type="submit" disabled={isPending} className="ml-2 mt-2">
                {isPending ? (
                  <>
                    <Loader2 className="animate-spin" />
                    <span> جار الحفظ..</span>
                  </>
                ) : (
                  "حفظ"
                )}
              </Button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
