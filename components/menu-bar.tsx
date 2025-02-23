
import React from 'react'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic, Strikethrough, Heading1, Heading2, Heading3, AlignLeft, AlignCenter, AlignRight, AlignJustify } from "lucide-react";
import { Editor } from '@tiptap/react';

interface MenuBarProps {
    editor: Editor | null;
  }
  
const MenuBar = ({ editor }: MenuBarProps) => {
    if (!editor) return null;

  return(
    <ToggleGroup type="multiple" className="flex gap-1 flex-wrap">
    <ToggleGroupItem
      value="h1"
      onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
      aria-label="H1"
    >
      <Heading1 className="w-5 h-5" />
    </ToggleGroupItem>
    <ToggleGroupItem
      value="h2"
      onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
      aria-label="H2"
    >
      <Heading2 className="w-5 h-5" />
    </ToggleGroupItem>
    <ToggleGroupItem
      value="h3"
      onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
      aria-label="H3"
    >
      <Heading3 className="w-5 h-5" />
    </ToggleGroupItem>
    <ToggleGroupItem
      value="bold"
      onClick={() => editor?.chain().focus().toggleBold().run()}
      aria-label="Bold"
    >
      <Bold className="w-5 h-5" />
    </ToggleGroupItem>
    <ToggleGroupItem
      value="italic"
      onClick={() => editor?.chain().focus().toggleItalic().run()}
      aria-label="Italic"
    >
      <Italic className="w-5 h-5" />
    </ToggleGroupItem>
    <ToggleGroupItem
      value="strike"
      onClick={() => editor?.chain().focus().toggleStrike().run()}
      aria-label="Strike"
    >
      <Strikethrough className="w-5 h-5" />
    </ToggleGroupItem>
    <ToggleGroupItem
      value="left"
      onClick={() => editor?.chain().focus().setTextAlign('left').run()}
      aria-label="Align Left"
    >
      <AlignLeft className="w-5 h-5" />
    </ToggleGroupItem>
    <ToggleGroupItem
      value="center"
      onClick={() => editor?.chain().focus().setTextAlign('center').run()}
      aria-label="Align Center"
    >
      <AlignCenter className="w-5 h-5" />
    </ToggleGroupItem>
    <ToggleGroupItem
      value="right"
      onClick={() => editor?.chain().focus().setTextAlign('right').run()}
      aria-label="Align Right"
    >
      <AlignRight className="w-5 h-5" />
    </ToggleGroupItem>
    <ToggleGroupItem
      value="justify"
      onClick={() => editor?.chain().focus().setTextAlign('justify').run()}
      aria-label="Justify"
    >
      <AlignJustify className="w-5 h-5" />
    </ToggleGroupItem>
  </ToggleGroup>
  )
}
export default MenuBar;