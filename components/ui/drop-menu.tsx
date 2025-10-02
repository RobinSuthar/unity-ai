"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function DropdownMenuCheckboxes({
  setSelectionType,
}: {
  setSelectionType: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Models</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onSelect={() => {
            setSelectionType("GPT");
          }}
          onCheckedChange={() => setShowStatusBar}
        >
          GPT 5
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          onSelect={() => {
            setSelectionType("Gemini");
          }}
          checked={showActivityBar}
          onCheckedChange={() => setShowActivityBar}
        >
          Gemini
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          onSelect={() => {
            setSelectionType("Grok");
          }}
          checked={showPanel}
          onCheckedChange={() => setShowPanel}
        >
          Grok
        </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
          onSelect={() => {
            setSelectionType("Grok");
          }}
          checked={showPanel}
          onCheckedChange={() => setShowPanel}
        >
          
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
