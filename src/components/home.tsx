"use server";
import { AppSidebar } from "@/components/app-sidebar";
import { useSession } from "next-auth/react";
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
import { getServerSession } from "next-auth";
import primsa from "@/prisma/prisma";

export default async function Page() {
  const data = await getServerSession();

  if (!data) {
    const result = await primsa.user.create({
      data: {
        Name: data?.user?.name,
        Email: data?.user?.email ? data?.user?.email : "failed@gmail.com",
        HasPromted: false,
        Tokens: 50,
      },
    });
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <ScreenArea />
    </SidebarProvider>
  );
}
