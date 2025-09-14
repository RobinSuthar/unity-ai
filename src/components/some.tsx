"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenuCheckboxes } from "@/components/ui/drop-menu";

const InputBox = () => {
  return (
    <div className="min-w-[60px]    max-w-[685px] px-2.5 pt-2.5 backdrop-blur-xl border-[0.1px] border-b-0 bg-[#]/15 border-[#] rounded-t-3xl  flex justify-center items-center">
      <div className="backdrop-blur-lg flex flex-col justify-between border-b-0 border border-[#37323e4b] bg-[#]/20 pt-4 pb-2 px-4 w-[675px] max-h-full min-h-32 rounded-t-2xl">
        <textarea
          placeholder="Ask anything..."
          className="font-sans w-full focus:outline-none placeholder:font-[600] resize-none overflow-y-auto min-h-[24px] max-h-[250px] leading-6
  [&::-webkit-scrollbar]:w-1.5
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:bg-[#3b3237]"
          rows={2}
          style={{
            height: "48px",
          }}
        />
        <div className=" w-full flex justify-between items-center ">
          <div className="flex justify-center gap-4">
            <div className=" font-sans font-semibold max-w-xs hover:cursor-pointer">
              <DropdownMenuCheckboxes />
            </div>
            <div className="h-min">
              <Button variant="outline">Attach</Button>
            </div>
          </div>
          <div className="h-min">
            <Button className=""> Send </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
