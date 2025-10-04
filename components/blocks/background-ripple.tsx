"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { NavbarComponent } from "./nav-bar";
import { SafariDemo } from "./safart";
import { FlipWords } from "../ui/flip-words";
import { RainbowButtonDemo } from "../button/rain-bow";

export function BackgroundRippleEffectDemo() {
  const words = ["Price", "Platform"];
  return (
    <div className="relative flex min-h-screen p-18 w-full flex-col items-start justify-start overflow-hidden">
      <NavbarComponent />
      <BackgroundRippleEffect />
      <div className="grid grid-cols-2  text-left">
        <div className="mt-28 w-full">
          <h2 className="relative z-10 mx-auto max-w-4xl  text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
            Worlds
          </h2>

          <h4 className="relative z-10 mx-auto max-w-4xl text text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
            Powerfull AI
          </h4>
          <h4 className="relative z-10 mx-auto max-w-4xl  text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
            One
            <FlipWords words={words} />
          </h4>

          <p className="relative text-left ml-0 z-10 mx-auto mt-4 max-w-xl  text-neutral-800 dark:text-neutral-500">
            Hover over the boxes above and click.To be used on backgrounds of
            hero sections OR Call to Action sections. I beg you don&apos;t use
            it everywhere.
          </p>
          <RainbowButtonDemo />
        </div>
        <div>
          {" "}
          <div className=" relative z-10 mb-18">
            {" "}
            <SafariDemo />
          </div>
        </div>
      </div>
    </div>
  );
}
