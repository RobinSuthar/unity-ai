"use client";
import { Button } from "@/components/ui/button";
import { DropdownMenuCheckboxes } from "@/components/ui/drop-menu";
import { AIRead } from "@/lib/actions/ai-read";
import { useMessage } from "@/lib/use-message";
import { useEffect, useRef, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/theme/toggle-button";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { GeminiAI } from "@/lib/actions/gemini-read";

export default function ScreenArea() {
  const [userMessage, setUserMessage] = useState("");
  const setMessage = useMessage((state) => state.setMessage);
  const message = useMessage((state) => state.message);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [UserText, setUserText] = useState<string[]>([]);
  const [AiText, setAIText] = useState<string[]>([]);
  const [coverstation, setCoverstation] = useState<string[]>([]);
  const [modelSelection, setModelSelection] = useState("GPT");
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

  useEffect(() => {
    console.log(modelSelection);
    async function sas() {
      if (modelSelection == "Grok") {
        const aiResponse = await AIRead(userMessage);
      }
      if (modelSelection == "GPT 5") {
        const aiResponse = await AIRead(userMessage);
      }
      if (modelSelection == "Gemini") {
        const aiResponse = await GeminiAI(userMessage);
      }
      setUserText((x) => [...x, userMessage]);
      const aiResponse = await AIRead(userMessage);
      setAIText((x) => [...x, aiResponse]);
      setCoverstation((y) => [...y, userMessage, aiResponse]);
      console.log(coverstation);
    }

    sas();
  }, [modelSelection]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e);
    setUserMessage(e.target.value);
    setTimeout(adjustHeight, 0);
  };
  return (
    <SidebarProvider>
      <header className="flex h-16 shrink-0 items-center gap-2  px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />

        <ModeToggle />
        <div className="ml-2 text-2xl">{modelSelection}</div>
      </header>
      <div>
        <ScrollArea className="h-72  max-w-screen rounded-md ">
          <div className="p-28">
            {coverstation.map((x, i) => {
              if (i === 0 || i % 2 === 0) {
                return (
                  <div
                    className="text-right p-2    mb-10 font-light text-3xl"
                    key={i}
                  >
                    {x}
                  </div>
                );
              } else {
                return <div key={i}>{x}</div>;
              }
            })}
          </div>
        </ScrollArea>
      </div>
      <div className="flex  ml-72 justify-center fixed align-middle content-center bottom-0">
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
                  <DropdownMenuCheckboxes
                    setSelectionType={setModelSelection}
                  />
                </div>
                <div className="h-min">
                  <Button variant="outline">Attach</Button>
                </div>
              </div>
              <div className="h-min">
                <Button
                  onClick={async (e) => {
                    setUserText((x) => [...x, userMessage]);
                    if (modelSelection == "GPT") {
                      console.log("SssssssssssAdasd");
                      const aiResponse = await AIRead(userMessage);
                      setAIText((x) => [...x, aiResponse]);
                      setCoverstation((y) => [...y, userMessage, aiResponse]);
                    }
                    if (modelSelection == "Grok") {
                      console.log("SAdszzzzzzzzzzzzasd");
                      const aiResponse = await AIRead(userMessage);
                      setAIText((x) => [...x, aiResponse]);
                      setCoverstation((y) => [...y, userMessage, aiResponse]);
                    }
                    if (modelSelection == "Gemini") {
                      console.log("SAdasd");
                      const aiResponse = await GeminiAI(userMessage);
                      setAIText((x) => [...x, aiResponse ? aiResponse : ""]);
                      setCoverstation((y) => [
                        ...y,
                        userMessage,
                        aiResponse ? aiResponse : "",
                      ]);
                    }
                    console.log('"Asdasd"');
                    console.log(coverstation);
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
      </div>
    </SidebarProvider>
  );
}
