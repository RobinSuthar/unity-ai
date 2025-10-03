import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/src/components/magicui/terminal";

export function TerminalDemo() {
  return (
    <div className="w-full h-[110vh] overflow-auto flex items-center justify-center">
      <Terminal>
        <TypingAnimation className="text-lg">
          &gt; Launching AI App...
        </TypingAnimation>

        <AnimatedSpan className="text-green-500 m-2 text-md ">
          <span>✔ Free Plan enabled: 5 free uses available.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500  m-2   text-md ">
          <span>✔ Good Plan ready: Access to half of all AI models.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500 m-2   text-md ">
          <span>✔ Premium Plan activated: Unlock all AI models .</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500 m-2   text-md ">
          <span>✔ Unlimited usage included for paid plans.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500  m-2   text-md ">
          <span>✔ Secure payment system integrat m-2 ed.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500 m-2  text-md">
          <span>✔ User dashboard optimized for speed.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-blue-500  m-2  text-md">
          <span>ℹ Upgrade anytime from Free → Good → Premium.</span>
        </AnimatedSpan>

        <TypingAnimation className="text-muted-foreground  m-2  text-md">
          Success! Your AI journey starts here 🚀
        </TypingAnimation>
      </Terminal>
    </div>
  );
}
