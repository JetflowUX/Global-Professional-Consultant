import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
const testimonials = [
{
  quote:
  'I was so nervous about my taxes this year, but the online portal made it incredibly easy. I just took pictures of my W-2s and they handled the rest. Highly recommend!',
  name: 'Maria S.',
  location: 'Los Angeles, CA',
  service: 'Tax Preparation',
  image:
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
},
{
  quote:
  'As a first-time homebuyer, I had a million questions. They were patient, explained everything in plain English, and helped me secure a great loan.',
  name: 'David L.',
  location: 'Houston, TX',
  service: 'Loan Services',
  image:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
},
{
  quote:
  'Running a small business is hard enough without worrying about bookkeeping. Their accounting service is affordable and gives me peace of mind every month.',
  name: 'Elena R.',
  location: 'Miami, FL',
  service: 'Accounting',
  image:
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
}];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
            Don't just take our word for it.
          </h2>
          <p className="text-lg text-black/70">
            Hear from real clients who trust us with their financial decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) =>
          <motion.div
            key={testimonial.name}
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
            className="bg-cream p-8 rounded-2xl border border-navy/5 flex flex-col h-full">
            
              <div className="flex gap-1 text-orange mb-6">
                {[...Array(5)].map((_, i) =>
              <Star key={i} size={18} fill="currentColor" />
              )}
              </div>

              <p className="text-black/80 text-lg leading-relaxed mb-8 flex-grow italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-navy/10">
                <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover" />
              
                <div>
                  <p className="font-display font-bold text-navy">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-black/60">
                    {testimonial.location} • {testimonial.service}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}