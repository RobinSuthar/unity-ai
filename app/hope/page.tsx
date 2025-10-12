"use client";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownSource = `*The music video __for__ Rihanna’s song American Oxygen depicts various moments from American history, including the inauguration of Barack Obama.*`;

export default function Page() {
  return (
    <div className="">
      <Markdown remarkPlugins={[remarkGfm]}>{markdownSource}</Markdown>;
    </div>
  );
}
