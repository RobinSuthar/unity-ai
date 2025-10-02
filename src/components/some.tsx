"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenuCheckboxes } from "@/components/ui/drop-menu";
import { AIRead } from "@/lib/actions/ai-read";
import { useMessage } from "@/lib/use-message";
import { useEffect, useRef, useState } from "react";

const InputBox = () => {
  const [userMessage, setUserMessage] = useState("");
  const setMessage = useMessage((state) => state.setMessage);
  const message = useMessage((state) => state.message);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [modelSelection , setModelSelection] = useState("");
  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";

      const newHeight = Math.min(Math.max(textarea.scrollHeight, 24), 250);
      textarea.style.height = `${newHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [message]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e);
    setUserMessage(e.target.value);
    setTimeout(adjustHeight, 0);
  };
  return (
    <div className="min-w-[60px]    max-w-[685px] px-2.5 pt-2.5 backdrop-blur-xl border-[0.1px] border-b-0 bg-[#]/15 border-[#] rounded-t-3xl  flex justify-center items-center">
      <div className="backdrop-blur-lg flex flex-col justify-between border-b-0 border border-[#37323e4b] bg-[#]/20 pt-4 pb-2 px-4 w-[675px] max-h-full min-h-28 rounded-t-2xl">
        <textarea
          ref={textareaRef}
          placeholder="Ask anything..."
          className="font-sans w-full focus:outline-none placeholder:font-[600] resize-none overflow-y-auto min-h-[24px] max-h-[250px] leading-6
  [&::-webkit-scrollbar]:w-1.5
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:bg-[#3b3237]"
          value={message || ""}
          onChange={handleChange}
          rows={2}
          style={{
            height: "24px",
          }}
        />

        <div className=" w-full flex justify-between items-center ">
          <div className="flex justify-center gap-4">
            <div className=" font-sans font-semibold max-w-xs hover:cursor-pointer">
              <DropdownMenuCheckboxes setSelectionType={setModelSelection} />
            </div>
            <div className="h-min">
              <Button variant="outline">Attach</Button>
            </div>
          </div>
          <div className="h-min">
            <Button
              onClick={(e) => {
                console.log(e);
                console.log("asdas");
                const aiResponse = AIRead(userMessage);
                console.log(aiResponse);
              }}
              className=""
            >
              {" "}
              Send{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
