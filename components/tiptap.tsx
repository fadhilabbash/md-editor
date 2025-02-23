"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Markdown } from "tiptap-markdown";
import Typography from "@tiptap/extension-typography";
import TextAlign from '@tiptap/extension-text-align'
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import MenuBar from "./menu-bar";


const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Markdown, Typography, TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),],
    content: "# *Hello world*",
    editorProps: {
      attributes: {
          class: "prose min-h-[150px] cursor-text rounded-md border p-5 ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 "
      }
  },
  immediatelyRender: false
  });

  return (
    <Card className="p-4 w-full max-w-xl mx-auto">
      <CardHeader className="text-lg font-semibold flex flex-col items-start">
      <MenuBar editor={editor}/>
      </CardHeader>
      <CardContent>
        <EditorContent editor={editor} />
        <Textarea
          value={editor?.storage.markdown.getMarkdown() || ""}
          readOnly
          className="w-full border rounded-md p-3 mt-2 font-mono text-sm"
          placeholder="Markdown output..."
          rows={16}
        />
      </CardContent>
    </Card>
  );
};

export default Tiptap;
