"use client";
import { useState } from "react";

interface ChainTextProps {
  content: string;
  nextContent: string;
}

export default function ChainText({ content, nextContent }: ChainTextProps) {
  const [text, setText] = useState<string>("");

  return (
    <>
      <button
        className="font-bold cursor-pointer"
        onClick={() => setText(` ${nextContent}`)}
      >
        {content}
      </button>
      <span dangerouslySetInnerHTML={{ __html: text }}></span>
    </>
  );
}
