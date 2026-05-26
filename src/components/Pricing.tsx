import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
const tiers = [
  {
    name: "Simple Return",
    price: "$99",
    description: "Perfect for single filers with standard W-2 income.",
    features: [
      "Federal & State filing",
      "Standard deduction",
      "W-2 income only",
      "Secure document portal",
      "Email support",
    ],
  },
  {
    name: "Standard Return",
    price: "$149",
    description: "For families, homeowners, and those with investments.",
    features: [
      "Everything in Simple, plus:",
      "Child Tax Credits",
      "Homeowner deductions",
      "Investment income (1099-B)",
      "Phone & Email support",
    ],

    isPopular: true,
  },
  {
    name: "Self-Employed",
    price: "$249",
    description: "Comprehensive filing for freelancers and small businesses.",
    features: [
      "Everything in Standard, plus:",
      "Schedule C filing",
      "Business expense deductions",
      "1099-NEC income",
      "Priority support",
    ],
  },
];

export function Pricing() {
  return (
    <section className="py-16 sm:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="editorial-accent text-orange text-xl mb-4 block">
            Transparent Pricing
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-navy mb-6">
            No surprises. Just honest rates.
          </h2>
          <p className="text-lg text-black/70">
            Clear, upfront pricing for tax preparation. You'll always know what
            it costs before we start.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className={`relative bg-white rounded-2xl p-6 md:p-8 border ${tier.isPopular ? "border-orange shadow-xl md:-translate-y-4" : "border-navy/10 shadow-sm"} flex flex-col`}
            >
              {tier.isPopular && (
                <div className="md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-orange text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide self-center md:self-auto">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-display font-bold text-navy mb-2">
                {tier.name}
              </h3>
              <p className="text-black/60 text-sm mb-6">{tier.description}</p>

              <div className="mb-8">
                <span className="text-3xl md:text-4xl font-display font-bold text-navy">
                  {tier.price}
                </span>
                <span className="text-black/50 font-medium">/flat rate</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-orange shrink-0 mt-0.5" />
                    <span className="text-black/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${tier.isPopular ? "bg-orange hover:bg-[#d95a15] text-white focus-visible:ring-orange focus-visible:ring-offset-white" : "bg-navy/5 hover:bg-navy/10 text-navy focus-visible:ring-navy focus-visible:ring-offset-white"}`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center bg-white p-6 rounded-xl border border-navy/10 shadow-sm">
          <p className="text-black/80">
            <strong className="text-navy font-display">Note:</strong> Real
            Estate, Insurance, Accounting, and Loan services are quoted free of
            charge based on your specific needs —{" "}
            <span className="italic">no surprise fees, ever.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
