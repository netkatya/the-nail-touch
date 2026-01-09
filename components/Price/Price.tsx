"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { pricingGroups } from "@/const/price";

export default function PriceList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative py-12 bg-linear-to-b from-(--color-bg-card) to-(--color-bg-soft) overflow-hidden"
      id="prices"
    >
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="relative mb-16 flex justify-center">
          {/* Background stripe */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-linear-to-r from-transparent via-(--color-accent) to-transparent opacity-60" />

          {/* Title */}
          <h2 className="relative z-10 px-8 py-2 text-4xl font-heading rounded-full bg-(--color-bg-card)">
            Price list
          </h2>
        </div>
        <div className=" py-4 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {pricingGroups.map((group, index) => (
                <div
                  key={index}
                  className="bg-(--color-bg-soft) rounded-2xl overflow-hidden border border-transparent shadow-[0_0_12px_rgba(143,175,155,0.25)]
                            hover:shadow-[0_0_22px_rgba(143,175,155,0.45)] transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-(--color-accent-soft) transition-colors"
                  >
                    <h2 className="text-xl font-semibold ">{group.title}</h2>
                    <ChevronDown
                      className={`w-6 h-6 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-180" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-4">
                      <div className="border-t border-slate-200 pt-4">
                        {group.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex justify-between items-center py-3 border-b border-slate-100 last:border-b-0 hover:bg-(--color-accent-soft) px-3 rounded transition-colors"
                          >
                            <span className="font-semibold ">
                              {item.service}
                            </span>
                            <span className="font-semibold  text-lg">
                              {item.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
