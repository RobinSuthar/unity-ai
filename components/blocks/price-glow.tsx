"use client";

import { Box, Lock, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function PriceGlow() {
  return (
    <ul className="grid p-12 grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/3/5]"
        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Free"
        description={`✅ 5 free uses
❌ Access to half AI models
❌ Access to all AI models`}
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/9]"
        icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Pro"
        description={`✅ 5 free uses
✅  Access to half AI models
❌ Access to all AI models`}
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/9/3/14]"
        icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Preimium"
        description={`✅ Unlimited usage
✅ Access to half AI models
✅ Access to all AI models`}
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={120}
          glow={true}
          disabled={false}
          proximity={164}
          inactiveZone={0.1}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="space-y-3">
              <h3 className="-tracking-4 flex text-center gap-6 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                <div> {title}</div>
                <div className="w-fit rounded-lg border border-gray-600 p-2">
                  {icon}
                </div>
              </h3>
              <h2 className="font-sans whitespace-pre-line text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
