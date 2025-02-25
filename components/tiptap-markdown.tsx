"use client";

import React, { forwardRef, useImperativeHandle } from "react";
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

// Define the methods available via the ref
export type TiptapRef = {
  focusEditor: () => void;
  blurEditor: () => void;
};

const TiptapMarkdown = forwardRef<TiptapRef, TiptapProps>(
  ({ onChange, value }, ref) => {
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
            "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto max-h-[200px] min-h-[200px] cursor-text rounded-xl border p-4 ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring overflow-y-auto",
        },
      },
      immediatelyRender: false,
    });

    // Expose methods to parent component using ref
    useImperativeHandle(ref, () => ({
      focusEditor: () => {
        editor?.commands.focus();
      },
      blurEditor: () => {
        editor?.commands.blur();
      },
    }));

    return (
      <div className="border p-2 w-fit rounded-xl">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    );
  }
);

TiptapMarkdown.displayName = "TiptapMarkdown";

export default TiptapMarkdown;
