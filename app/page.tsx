"use client";
import CardSwap, { Card } from "@/src/blocks/Components/CardSwap/CardSwap";
import image from "@/public/Images/gpt_image.png";
import { BackgroundRippleEffectDemo } from "@/components/blocks/background-ripple";
import { HeroScrollDemo } from "@/components/blocks/hero-scroll";
import Image from "next/image";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { FeaturesSectionDemo } from "@/components/blocks/feature-section";
import { TabsDemo } from "@/components/blocks/tabs-section";
import { VideoText } from "@/registry/magicui/video-text";
import { GlowingEffectDemoSecond } from "@/components/blocks/glowing-effect";
import { AnimatedBeamDemo } from "@/components/blocks/animated-beam";
import { HighlighterDemo } from "@/components/ui/high-light";
import FAQS from "@/components/ui/faqs";
import Price from "@/components/price";
import { TerminalDemo } from "@/components/blocks/terminal";
import Footer from "@/components/blocks/footer";
import { FlipWords } from "@/components/ui/flip-words";
import { HyperText } from "@/src/components/magicui/hyper-text";

export default function Home() {
  const words = ["Price", "Platform"];
  return (
    <div>
      <BackgroundRippleEffectDemo />
      <h2 className="relative z-10 mx-auto max-w-5xl text-center  text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
        Unlock Peak Performance !
      </h2>

      <p className="relative text-center  z-10 mx-auto mt-4 max-w-xl  text-neutral-800 dark:text-neutral-500">
        Each tool is crafted to maximize your AI-driven workflow.
      </p>
      <div className="grid grid-cols-2">
        <div>
          {" "}
          <AnimatedBeamDemo />
        </div>

        <div>
          <TerminalDemo />
        </div>
      </div>

      <div>
        <h2 className="relative m-0 z-10 mx-auto max-w-5xl text-center  text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
          Combine the finest qualities from each AI
        </h2>
        <div className="mt-12 p-12">
          <GlowingEffectDemoSecond />
        </div>
      </div>
      <div>
        <h2 className="relative z-10 mx-auto max-w-5xl text-center  text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
          What Sets Us Apart
        </h2>
        <div className="grid grid-cols-2">
          <div>
            {" "}
            <div>
              <TabsDemo />
            </div>
            <HyperText className="text-center mt-6">What You Get</HyperText>
            <HyperText className="relative text-md text-center  z-10 mx-auto mt-4 max-w-xl  text-neutral-800 dark:text-neutral-500">
              Each tool is crafted to maximize your AI-driven workflow.
            </HyperText>
          </div>
          <div className="mt-12 p-12">
            <HeroScrollDemo />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1">
        <h2 className="relative mt-0 z mx-auto max-w-5xl text-center  text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
          <PointerHighlight>
            <span>Pricing</span>
          </PointerHighlight>
        </h2>
      </div>
      <div>
        <div className="flex justify-center mt-24">
          <FAQS />
        </div>
        <div></div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
