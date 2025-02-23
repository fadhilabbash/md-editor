"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Markdown } from "tiptap-markdown";
import Typography from "@tiptap/extension-typography";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
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
      Placeholder.configure({
        placeholder: "Start typing here...",
      }),
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      onChange(editor?.storage.markdown.getMarkdown());
    },
    editorProps: {
      attributes: {
        class:
          "prose max-h-[200px] min-h-[200px] cursor-text rounded-xl border p-4 ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring overflow-y-auto",
      },
    },
    immediatelyRender: false,
  });

  return (
    <div className="border p-2 w-fit rounded-xl">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
