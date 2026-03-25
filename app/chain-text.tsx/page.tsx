"use client";
import { useState } from "react";

interface ChainTextProps {
  content: string;
  nextString: string;
}

export default function ChainText({ content, nextString }: ChainTextProps) {
  const [text, setText] = useState<string>("");

  return (
    <>
      <button
        className="font-bold cursor-pointer"
        onClick={() => setText(` ${nextString}`)}
      >
        {content}
      </button>
      {text}
    </>
  );
}
