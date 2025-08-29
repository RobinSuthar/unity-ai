import { useState } from "react";
import { Button } from "../ui/button";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function Price() {
  const checkIcon = (
    <svg className="w-5 h-5 mx-auto " fill="currentColor" viewBox="0 0 20 20">
      <path d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" />
    </svg>
  );
  const minusIcon = (
    <svg className="w-5 h-5 mx-auto " fill="currentColor" viewBox="0 0 20 20">
      <path d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" />
    </svg>
  );

  const plans = [
    {
      name: "Basic",
      desc: "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
      price: "15",
    },
    {
      name: "Business",
      desc: "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
      price: "20",
    },
    {
      name: "Enterprise",
      desc: "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
      price: "50",
    },
  ];

  const tables = [
    {
      label: "Features",
      label_icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
      items: [
        {
          name: "Aliquam finibus",
          basic: checkIcon,
          business: checkIcon,
          enterprise: checkIcon,
        },
        {
          name: "Vestibulum tristique",
          basic: minusIcon,
          business: checkIcon,
          enterprise: checkIcon,
        },
        {
          name: "Aliquam finibus",
          basic: minusIcon,
          business: minusIcon,
          enterprise: checkIcon,
        },
        {
          name: "Praesent aliquet",
          basic: minusIcon,
          business: "150GB",
          enterprise: "Unlimited",
        },
      ],
    },
    {
      label: "Analytics",
      label_icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      ),
      items: [
        {
          name: "Aliquam finibus",
          basic: checkIcon,
          business: checkIcon,
          enterprise: checkIcon,
        },
        {
          name: "Vestibulum tristique",
          basic: minusIcon,
          business: checkIcon,
          enterprise: checkIcon,
        },
        {
          name: "Aliquam finibus",
          basic: minusIcon,
          business: minusIcon,
          enterprise: checkIcon,
        },
        {
          name: "Lorinto dinor",
          basic: "30",
          business: "60",
          enterprise: "Custom",
        },
        {
          name: "Praesent aliquet",
          basic: "Limited",
          business: "Limited",
          enterprise: checkIcon,
        },
        {
          name: "Praesent aliquet",
          basic: minusIcon,
          business: "150GB",
          enterprise: "Unlimited",
        },
      ],
    },
    {
      label: "Support",
      label_icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
      ),
      items: [
        {
          name: "Aliquam finibus",
          basic: checkIcon,
          business: checkIcon,
          enterprise: checkIcon,
        },
        {
          name: "Vestibulum tristique",
          basic: minusIcon,
          business: checkIcon,
          enterprise: checkIcon,
        },
        {
          name: "Aliquam finibus",
          basic: minusIcon,
          business: minusIcon,
          enterprise: checkIcon,
        },
        {
          name: "Praesent aliquet",
          basic: minusIcon,
          business: "150GB",
          enterprise: "Unlimited",
        },
      ],
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(plans[0].name);

  return (
    <section className="py-14 ">
      <div className="">
        <div className="mt-16">
          <div className="sticky top-0 py-6 border-b ">
            <div className="max-w-screen-xl mx-auto">
              <ul className=" grid grid-cols-3   px-4 ">
                {plans.map((item, idx) => (
                  <li
                    key={idx}
                    className={`space-y-4 p-12 ${
                      item.name != selectedPlan ? "hidden lg:block" : ""
                    }`}
                  >
                    <HoverBorderGradient>
                      <div className="grid grid-cols-3 justify-between">
                        <span className=" font-medium">{item.name}</span>
                        <div className="relative lg:hidden">
                          <svg
                            className="  absolute right-0 inset-y-0 my-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <select
                            value="Switch plan"
                            className="bg-transparent appearance-none outline-none px-8 cursor-pointer"
                            onChange={(e) => setSelectedPlan(e.target.value)}
                          >
                            <option disabled selected>
                              Switch plan
                            </option>
                            {plans.map((option, idx) => (
                              <option key={idx}>{option.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="text-3xl ">
                        ${item.price}{" "}
                        <span className="text-xl  font-normal">/mo</span>
                      </div>
                      <p className="text-sm">{item.desc}</p>
                      <Button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150   hover:bg-indigo-500 ">
                        Get Started
                      </Button>
                    </HoverBorderGradient>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
