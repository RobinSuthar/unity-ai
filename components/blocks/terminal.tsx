import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/src/components/magicui/terminal";

export function TerminalDemo() {
  return (
    <div className="w-full h-[100vh] overflow-auto flex items-center justify-center">
      <Terminal>
        <TypingAnimation className="text-lg">
          &gt; Launching AI App...
        </TypingAnimation>

        <AnimatedSpan className="text-green-500 m-2 text-md ">
          <span>✔ Access GPT — the smartest conversational model.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500  m-2   text-md ">
          <span>✔ Access Claude — deep understanding and reasoning.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500 m-2   text-md ">
          <span>✔ Access Grok — fast, and real-time intelligence.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500 m-2   text-md ">
          <span>✔ Access Meta AI — adaptive and scalable for any task.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500  m-2   text-md ">
          <span>✔ Access DeepSeek — precise, data-driven performance.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500 m-2  text-md">
          <span>✔ All top AI models combined into one platform .</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-blue-500  m-2  text-md">
          <span>💡 Use every AI model for a fraction of usual cost.</span>
        </AnimatedSpan>

        <TypingAnimation className="text-muted-foreground  m-2  text-md">
          Success! Your AI journey starts here 🚀
        </TypingAnimation>
      </Terminal>
    </div>
  );
}
