import { RainbowButton } from "@/src/components/magicui/rainbow-button";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export function RainbowButtonDemo() {
  return (
    <RainbowButton
      onClick={async () => signIn(undefined, { callbackUrl: "/auth/sign" })}
      size={"lg"}
      variant="outline"
      className="mt-8 p-8 text-4xl "
    >
      Get Started
    </RainbowButton>
  );
}
