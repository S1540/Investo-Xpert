import React from "react";
import {
  Search,
  ClipboardCheck,
  Calculator,
  FileText,
  Key,
} from "lucide-react";

const AssistanceSupport = () => {
  const steps = [
    {
      number: 1,
      icon: Search,
      title: "Property Search",
      description:
        "Begin your journey with our comprehensive property search service. We curate personalized selections based on your requirements and budget.",
    },
    {
      number: 2,
      icon: ClipboardCheck,
      title: "Site Visit",
      description:
        "Experience properties firsthand with our guided site visit service. Our professional team provides detailed insights about every aspect.",
    },
    {
      number: 3,
      icon: Calculator,
      title: "Price Negotiation",
      description:
        "Lorem Cupiditate non blanditiis eius eos doloremque voluptate facilis facere perspiciatis iure earum.",
    },
    {
      number: 4,
      icon: FileText,
      title: "Documentation",
      description:
        "Lorem Cupiditate non blanditiis eius eos doloremque voluptate facilis facere perspiciatis iure earum ratione voluptates?",
    },
    {
      number: 5,
      icon: Key,
      title: "Property Handover",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
  ];

  return (
    <section className="bg-slate-200 max-w-full w-full min-h-screen mx-auto py-16 px-4 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-16">
          <h4 className="uppercase text-pink-600 text-sm tracking-widest mb-2 font-medium">
            How we Work
          </h4>
          <div className="flex items-center gap-4 w-full max-w-4xl">
            {/* Left Line */}
            <div className="flex-1 h-[2px] bg-linear-to-r from-transparent via-gray-400 to-pink-600"></div>
            {/* heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center tracking-wider uppercase">
              Assistance support
            </h1>
            {/* Right Line */}
            <div className="flex-1 h-[2px] bg-linear-to-l from-transparent via-gray-400 to-pink-600"></div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start ">
          {/* Left Side */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute top-8 left-8 bottom-8 w-[2px] bg-linear-to-b from-green-600 to-gray-700"></div>

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={index} className="relative flex items-center gap-6">
                    {/* Circle */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center shadow-lg shrink-0">
                      <Icon size={28} className="text-white" />
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="text-sm font-bold text-pink-600 mb-1">
                        Step {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-10 pt-2">
            {steps.map((step, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-bold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistanceSupport;
