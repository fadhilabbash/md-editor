"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Markdown } from "tiptap-markdown";
import Typography from "@tiptap/extension-typography";
import TextAlign from "@tiptap/extension-text-align";
import MenuBar from "./tiptap-markdown/menu-bar";
import Highlight from "./tiptap-markdown/extensions/highlight";


type TiptapProps = {
  onChange: (content: string) => void;
  value?: string;
};
const TiptapMarkdown = ({ onChange, value }: TiptapProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Markdown,
      Highlight,
      Typography,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor?.storage.markdown.getMarkdown());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto  max-h-[200px] min-h-[200px] cursor-text rounded-xl border p-4 ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring  overflow-y-auto",
      },
    },
    immediatelyRender: false,
  });

  return (
    <div className="border p-2 w-fit rounded-xl">
      <MenuBar editor={editor} />
      <EditorContent editor={editor}/>
    </div>
  );
};

export default TiptapMarkdown;
