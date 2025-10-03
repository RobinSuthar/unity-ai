import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef("");
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg  font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5  ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export default function FAQS() {
  const faqsList = [
    {
      q: "Is there a free plan available?",
      a: "Yes! You can start with the Free plan, which gives you 5 uses to try the app before upgrading.",
    },
    {
      q: "What’s the difference between Good and Premium?",
      a: "The Good plan ($5/month) gives you unlimited usage with access to half of our AI models, while Premium ($10/month) unlocks all models with full access.",
    },
    {
      q: "Can I upgrade or downgrade anytime?",
      a: "Absolutely. You can switch between Free, Good, and Premium at any time — no long-term commitment.",
    },
    {
      q: "Is my data safe?",
      a: "Yes. We use encryption and secure servers to protect your data. Your prompts and results are private and never shared.",
    },
    {
      q: "Are new AI models added in the future?",
      a: "Yes! We are constantly improving and adding new AI models and features. Premium users get immediate access to everything new.",
    },
  ];

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="relative z-10 mx-auto max-w-5xl text-center  text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
          Frequently Asked Questions
        </h1>
        <p className="relative text-center mt-8  z-10 mx-auto mt-4 max-w-xl  text-neutral-800 dark:text-neutral-500">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
}
