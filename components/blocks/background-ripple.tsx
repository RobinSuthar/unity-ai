"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { NavbarComponent } from "./nav-bar";
import { HeroVideoDialogDemoTopInBottomOut } from "./video-dialog";
import { FlipWords } from "@/components/ui/flip-words";
import { RainbowButton } from "@/src/components/magicui/rainbow-button";
import { SafariDemo } from "./safart";

export function BackgroundRippleEffectDemo() {
  const words = ["Price", "Platform"];

  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <NavbarComponent />
      <BackgroundRippleEffect />
      <div className="grid grid-cols-2 p-12">
        <div className="mt-32 w-full">
          <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
            World's All
          </h2>

          <h4 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
            Powerfull AI
          </h4>
          <h4 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
            One <FlipWords words={words} />
          </h4>
          <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">
            Why pay extra for one AI when you can have them all? Get
            best-in-class AI models together in a single subscription — just
            $12/month.
          </p>
          <div className="flex justify-center mt-6">
            <RainbowButton> Get Started </RainbowButton>
          </div>
        </div>
        <div>
          {" "}
          <SafariDemo />
        </div>
      </div>
    </div>
  );
}
