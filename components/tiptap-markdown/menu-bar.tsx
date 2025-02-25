import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Bold,
  Italic,
  Strikethrough,
  Heading1,
  Heading2,
  Heading3,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Code,
  Quote,
  ListOrdered,
  List,
  Highlighter,
  Heading4,
} from "lucide-react";
import { Editor } from "@tiptap/react";
import { Separator } from "@/components/ui/separator";

interface MenuBarProps {
  editor: Editor | null;
}

const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) return null;

  return (
    <div className="flex items-start mb-2">
      <ToggleGroup type="multiple" className="flex gap-1 ">
        <ToggleGroupItem
          value="blockquote"
          onClick={() => editor?.chain().focus().toggleBlockquote().run()}
          aria-label="Blockquote"
          variant="outline"
        >
          <Quote className="w-5 h-5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="code"
          onClick={() => editor?.chain().focus().toggleCode().run()}
          aria-label="Code"
          variant="outline"
        >
          <Code className="w-5 h-5" />
        </ToggleGroupItem>
        <Separator orientation="vertical" className="h-8 m-2 " />

        <ToggleGroupItem
          value="unordered-list"
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          aria-label="Unordered List"
          variant="outline"
        >
          <List className="w-5 h-5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="ordered-list"
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          aria-label="Ordered List"
          variant="outline"
        >
          <ListOrdered className="w-5 h-5" />
        </ToggleGroupItem>
        <Separator orientation="vertical" className="h-8 m-2 " />

        <ToggleGroupItem
          value="italic"
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          aria-label="Italic"
          variant="outline"
        >
          <Italic className="w-5 h-5" />
        </ToggleGroupItem>
        {/* <ToggleGroupItem
          value="underline"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          aria-label="Underline"
          variant="outline"
        >
          <Underline className="w-5 h-5" />
        </ToggleGroupItem> */}

        <ToggleGroupItem
          value="strike"
          onClick={() => editor?.chain().focus().toggleStrike().run()}
          aria-label="Strike"
          variant="outline"
        >
          <Strikethrough className="w-5 h-5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="highlight"
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          aria-label="Highlight"
          variant="outline"
        >
          <Highlighter className="w-5 h-5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="bold"
          onClick={() => editor?.chain().focus().toggleBold().run()}
          aria-label="Bold"
          variant="outline"
        >
          <Bold className="w-5 h-5" />
        </ToggleGroupItem>

        <Separator orientation="vertical" className="h-8 m-2 " />

        <ToggleGroupItem
          value="h1"
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 1 }).run()
          }
          aria-label="H1"
          variant="outline"
        >
          <Heading1 className="w-5 h-5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="h2"
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 2 }).run()
          }
          aria-label="H2"
          variant="outline"
        >
          <Heading2 className="w-5 h-5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="h3"
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 3 }).run()
          }
          aria-label="H3"
          variant="outline"
        >
          <Heading3 className="w-5 h-5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="h4"
          onClick={() =>
            editor?.chain().focus().toggleHeading({ level: 4 }).run()
          }
          aria-label="H4"
          variant="outline"
        >
          <Heading4 className="w-5 h-5" />
        </ToggleGroupItem>

        <Separator orientation="vertical" className="h-8 m-2 " />
        <ToggleGroupItem
          value="left"
          onClick={() => editor?.chain().focus().setTextAlign("left").run()}
          aria-label="Align Left"
          variant="outline"
        >
          <AlignLeft className="w-5 h-5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="center"
          onClick={() => editor?.chain().focus().setTextAlign("center").run()}
          aria-label="Align Center"
          variant="outline"
        >
          <AlignCenter className="w-5 h-5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="right"
          onClick={() => editor?.chain().focus().setTextAlign("right").run()}
          aria-label="Align Right"
          variant="outline"
        >
          <AlignRight className="w-5 h-5" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="justify"
          onClick={() => editor?.chain().focus().setTextAlign("justify").run()}
          aria-label="Justify"
          variant="outline"
        >
          <AlignJustify className="w-5 h-5" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
export default MenuBar;
