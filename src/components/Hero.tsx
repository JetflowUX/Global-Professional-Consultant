import React from "react";
import { motion } from "framer-motion";
import { Upload, Phone, CheckCircle2 } from "lucide-react";
export function Hero() {
  return (
    <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="max-w-2xl mx-auto md:mx-0"
          >
            <span className="editorial-accent text-navy text-xl md:text-2xl mb-6 block">
              Trusted Advisory Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy leading-[1.1] mb-6">
              Taxes, loans, and big decisions — handled from your couch.
            </h1>
            <p className="text-lg md:text-xl text-black/80 mb-10 max-w-lg leading-relaxed">
              We provide professional tax preparation, real estate, and
              financial services entirely online. Secure, simple, and always
              with a human touch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-orange hover:bg-[#d95a15] text-white px-6 md:px-8 py-4 rounded font-medium text-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-cream w-full sm:w-auto">
                <Upload size={20} />
                Upload Your Documents
              </button>
              <button className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-6 md:px-8 py-4 rounded font-medium text-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:ring-offset-cream w-full sm:w-auto">
                <Phone size={20} />
                Book a Free Call
              </button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-navy/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-orange" />
                <span>IRS-Authorized</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-orange" />
                <span>Licensed Broker</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-orange" />
                <span>10+ Years</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-orange" />
                <span>Bilingual Support</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image & UI Mockup */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="relative lg:ml-auto w-full max-w-lg mx-auto md:mx-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/2] md:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Friendly professional advisor smiling"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-navy/10 mix-blend-multiply"></div>
            </div>

            {/* Floating UI Card */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.6,
              }}
              className="md:absolute md:-bottom-6 md:-left-12 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 bg-white p-4 md:p-4 rounded-xl shadow-xl border border-navy/5 flex items-center gap-4 w-[90%] max-w-xs md:w-64"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={24} className="text-green-600" />
              </div>
              <div>
                <p className="font-medium text-navy text-sm">W-2_2023.pdf</p>
                <p className="text-xs text-black/60">Uploaded successfully</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
