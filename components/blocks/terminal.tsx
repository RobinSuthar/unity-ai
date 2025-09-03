import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/src/components/magicui/terminal";

export function TerminalDemo() {
  return (
    <div className="w-full h-[110vh] overflow-auto flex items-center justify-center">
      <Terminal>
        <TypingAnimation>&gt; Launching AI App...</TypingAnimation>

        <AnimatedSpan className="text-green-500">
          <span>✔ Free Plan enabled: 5 free uses available.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          <span>✔ Good Plan ready: Access to half of all AI models.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          <span>✔ Premium Plan activated: Unlock all AI models together.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          <span>✔ Unlimited usage included for paid plans.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          <span>✔ Secure payment system integrated.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          <span>✔ User dashboard optimized for speed.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-blue-500">
          <span>ℹ Upgrade anytime from Free → Good → Premium.</span>
        </AnimatedSpan>

        <TypingAnimation className="text-muted-foreground">
          Success! Your AI journey starts here 🚀
        </TypingAnimation>
      </Terminal>
    </div>
  );
}
