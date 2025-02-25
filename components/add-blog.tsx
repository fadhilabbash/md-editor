"use client";
import TiptapMarkdown from "@/components/tiptap-markdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useActionState } from "react";
import { useForm, useInputControl } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";

import { addBlog } from "@/services/actions/blog-action";
import { blogSchema } from "@/lib/schemas";
import { Loader2 } from "lucide-react";
import { Textarea } from "./ui/textarea";

const AddBlog = () => {
  const [lastResult, formAction, isPending] = useActionState(
    addBlog,
    undefined
  );

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: blogSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const contentControl = useInputControl(fields.content);

  return (
    <div className="container mx-auto flex justify-center mt-8">
      <form
        id={form.id}
        onSubmit={form.onSubmit}
        action={formAction}
        noValidate
      >
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="title">العنوان</Label>
          <Input
            type="text"
            id="title"
            placeholder="العنوان"
            key={fields.title.key}
            name={fields.title.name}
          />
          <div className="text-[12px] text-destructive">
            {fields.title.errors}
          </div>
        </div>

        <>
          <Textarea
            id="content"
            name={fields.content.name}
            defaultValue={fields.content.initialValue}
            className="sr-only"
            tabIndex={-1}
          />
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="content">النص</Label>
            <TiptapMarkdown
              value={contentControl.value}
              onChange={contentControl.change}
            />
            <div className="text-[12px] text-destructive">
              {fields.content.errors}
            </div>
          </div>
        </>

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
