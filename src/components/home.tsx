"use server";
import { AppSidebar } from "@/components/app-sidebar";
import { useSession } from "next-auth/react";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ScreenArea from "./screen-area";
import { getServerSession } from "next-auth";
import primsa from "@/prisma/prisma";
import { SiteHeader } from "@/components/site-header";

export default async function Page() {
  const data = await getServerSession();

  if (!data) {
    const data = await getServerSession();

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
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="floating" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <ScreenArea />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
