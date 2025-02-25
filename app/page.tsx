"use client";
import TiptapMarkdown from "@/components/tiptap-markdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

const FormComponent = () => {
  const [content, setContent] = useState("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!content.trim()) {
      setError("هذا الحقل مطلوب");
      return;
    }
    setError("");

    console.log("Form submitted with content:", content);
  };

  return (
    <div className="container mx-auto items-center flex justify-center mt-8">
      <form onSubmit={handleSubmit}>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="title">العنوان</Label>
          <Input type="email" id="title" placeholder="العنوان" />
        </div>

        <div>
          <Label htmlFor="content">النص</Label>
          <TiptapMarkdown onChange={(newContent) => setContent(newContent)} />

          <div className="text-[12px] text-destructive">
            {error && <p className="destruct">{error}</p>}
          </div>
        </div>
        <div className="mt-4">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
