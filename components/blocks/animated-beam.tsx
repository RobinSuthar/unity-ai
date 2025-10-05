"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/src/components/magicui/animated-beam";
import Image from "next/image";
import gemini from "@/public/gemini.png";
import grok from "@/public/grok.png";
import claude from "@/public/Calude.png";
import gpt from "@/public/gpt.jpg";
import deepseak from "@/public/deepseek.png";
import meta from "@/public/meta.png";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

import img from "@/public/unity-ai.png";
import { m } from "motion/react";

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative mt-8 flex h-[600px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[600px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref} className="size-16">
            <Icons.googleDrive />
          </Circle>
          <Circle ref={div5Ref} className="size-16">
            <Icons.googleDocs />
          </Circle>
        </div>
        <div className="flex flex-row rounded-3xl items-center justify-between">
          <Circle ref={div2Ref} className="size-16">
            <Icons.notion />
          </Circle>
          <Circle ref={div4Ref} className="size-32">
            <Icons.openai />
          </Circle>
          <Circle ref={div6Ref} className="size-16">
            <Icons.zapier />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref} className="size-16">
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div7Ref} className="size-16">
            <Icons.messenger />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
  notion: () => <Image src={gpt} height={100} width={100} alt="Gpt Image" />,
  openai: () => (
    <Image height={120} width={120} src={img} alt="Unity AI Image"></Image>
  ),
  googleDrive: () => (
    <Image src={gemini} alt="Gemini AI Logo" height={1400} width={1000}></Image>
  ),
  whatsapp: () => (
    <Image src={deepseak} height={100} width={100} alt="Deep Seak Iamge" />
  ),
  googleDocs: () => (
    <Image src={claude} height={100} width={100} alt="Claude Logo" />
  ),
  zapier: () => <Image src={grok} height={100} width={100} alt="Gemini Agr" />,
  messenger: () => <Image src={meta} height={100} width={100} alt="Meta Ai" />,
};
