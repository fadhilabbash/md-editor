"use client";
import Tiptap from "@/components/tiptap";
import { useState } from "react";

const ParentComponent = () => {
  const [content, setContent] = useState<string>("");

  const handleEditorChange = (newContent: string) => {
    setContent(newContent); 
    console.log("Updated Content: ", newContent);
  };

  return (
    <div className="container mx-auto  mt-8 items-center justify-center flex flex-col w-full">
      <div>
        <Tiptap onChange={handleEditorChange} initialContent={content} />
      </div>
      <div className="my-2">
        <h3>المحتوى الحقيقي</h3>
        <pre>{content}</pre>
      </div>
    </div>
  );
};

export default ParentComponent;
