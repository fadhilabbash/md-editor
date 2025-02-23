"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Markdown } from "tiptap-markdown";
import Typography from "@tiptap/extension-typography";
import TextAlign from "@tiptap/extension-text-align";
// import { Textarea } from "@/components/ui/textarea";
import MenuBar from "./menu-bar";

type TiptapProps = {
  onChange: (content: string) => void;
  initialContent?: string;
};
const Tiptap = ({ onChange, initialContent }: TiptapProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Markdown,
      Typography,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      onChange(editor?.storage.markdown.getMarkdown());
    },
    editorProps: {
      attributes: {
        class:
          "prose min-h-[150px] cursor-text rounded-md border p-4 ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 w-full",
      },
    },
    immediatelyRender: false,
  });

  return (
    <div className="w-full">
        <MenuBar editor={editor} />
        <EditorContent editor={editor}/>
    </div>
  );
};

export default Tiptap;
