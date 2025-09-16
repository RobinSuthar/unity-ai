import { AppSidebar } from "@/components/app-sidebar";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import InputBox from "./some";
import { ModeToggle } from "@/components/theme/toggle-button";
import { ScrollAreaDemo } from "@/components/blocks/scrol-area";
import ScreenArea from "./screen-area";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <ScreenArea />
    </SidebarProvider>
  );
}
