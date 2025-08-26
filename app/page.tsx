"use client";
import CardSwap, { Card } from "@/src/blocks/Components/CardSwap/CardSwap";
import image from "@/public/Images/gpt_image.png";
import { BackgroundRippleEffectDemo } from "@/components/blocks/background-ripple";
import { HeroScrollDemo } from "@/components/blocks/hero-scroll";
import Image from "next/image";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { FeaturesSectionDemo } from "@/components/blocks/feature-section";
import { TabsDemo } from "@/components/blocks/tabs-section";
import DecryptedText from "@/src/blocks/TextAnimations/DecryptedText/DecryptedText";
import { GlowingEffectDemoSecond } from "@/components/blocks/glowing-effect";
import { AnimatedBeamDemo } from "@/components/blocks/animated-beam";
import { HighlighterDemo } from "@/components/ui/high-light";
import FAQS from "@/components/ui/faqs";
import Price from "@/components/price";
import { TerminalDemo } from "@/components/blocks/terminal";
import Footer from "@/components/blocks/footer";
import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const words = ["Price", "Platform"];
  return (
    <div>
      <BackgroundRippleEffectDemo />
      <div className="grid grid-cols-2">
        <div>
          <div className="mt-60 w-full">
            <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
              World's
            </h2>

            <h4 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
              Powerfull AI
            </h4>
            <h4 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
              One
            </h4>
            <FlipWords words={words} />
            <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">
              Hover over the boxes above and click.To be used on backgrounds of
              hero sections OR Call to Action sections. I beg you don&apos;t use
              it everywhere.
            </p>
          </div>
        </div>

        <div style={{ height: "600px", position: "relative" }}>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <Image alt="sad" src={image} height={1000} width={600} />
              <h3>Card 1</h3>
              <p>Your content here</p>
            </Card>
            <Card>
              <Image alt="sad" src={image} height={800} width={600} />
            </Card>
            <Card>
              <Image alt="sad" src={image} height={800} width={600} />
            </Card>
          </CardSwap>
        </div>
      </div>
      <HeroScrollDemo />
      <div className="grid grid-cols-2">
        <div>
          <TabsDemo />
        </div>
        <div className="mx-auto max-w-lg py-20 text-2xl font-bold tracking-tight md:text-4xl">
          The best way to grow is to
          <PointerHighlight>
            <span>collaborate</span>
          </PointerHighlight>
          <div style={{ marginTop: "4rem" }}></div>
        </div>
      </div>
      <div className="mt-24 p-12">
        <GlowingEffectDemoSecond />
      </div>
      <div className="grid grid-cols-2">
        <div></div>
        <div>
          {" "}
          <AnimatedBeamDemo />
        </div>
      </div>
      <div>
        <div>
          <TerminalDemo />
        </div>

        <Price />
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
