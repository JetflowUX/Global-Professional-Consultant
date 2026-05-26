import React from 'react';
import { motion } from 'framer-motion';
const stats = [
{
  value: '10+',
  label: 'Years in Business'
},
{
  value: '2,500+',
  label: 'Clients Served'
},
{
  value: '$3M+',
  label: 'Refunds Secured'
},
{
  value: '2',
  label: 'Languages Spoken'
}];

export function TrustStats() {
  return (
    <section className="py-20 bg-cream border-b border-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) =>
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="text-center">
            
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-2">
                {stat.value}
              </div>
              <div className="editorial-accent text-black/70 text-lg md:text-xl">
                {stat.label}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}