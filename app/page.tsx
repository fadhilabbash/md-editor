"use client";
import Tiptap from "@/components/tiptap";
import { useState } from "react";

const ParentComponent = () => {
  const [content, setContent] = useState<string>("# السلام عليكم");

  const handleEditorChange = (newContent: string) => {
    setContent(newContent); // This will update the content in the parent component
    console.log("Updated Content: ", newContent); // Or you can do whatever you want with the content
  };

  return (
    <div className="container mx-auto grid grid-cols-1 mt-8">
      <div>
        <Tiptap onChange={handleEditorChange} initialContent={content} />
      </div>
      <div>
        <h3>المحتوى الحقيقي</h3>
        <pre>{content}</pre>
      </div>
    </div>
  );
};

export default ParentComponent;
