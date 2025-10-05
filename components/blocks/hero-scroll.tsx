"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "../ui/container-scroll-animation";
import x from "@/public/gptgenerated.png";
export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-2xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-2xl md:text-[3rem] font-bold  leading-none">
                Peak Performance.
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={x}
          alt="hero"
          height={420}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
