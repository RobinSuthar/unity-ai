"use client";
import CardSwap, { Card } from "@/src/blocks/Components/CardSwap/CardSwap";
import image from "@/public/Images/gpt_image.png";
import { BackgroundRippleEffectDemo } from "@/components/blocks/background-ripple";
import { HeroScrollDemo } from "@/components/blocks/hero-scroll";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <BackgroundRippleEffectDemo />
      <div style={{ height: "600px", position: "relative" }}>
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card>
            <Image src={image} height={1000} width={600} />
            <h3>Card 1</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <Image src={image} height={800} width={600} />
          </Card>
          <Card>
            <Image src={image} height={800} width={600} />
          </Card>
        </CardSwap>
      </div>
      ;
      <HeroScrollDemo />
    </div>
  );
}
