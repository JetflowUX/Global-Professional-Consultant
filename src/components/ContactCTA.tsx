import React from 'react';
import { Phone, Mail, Clock, Send } from 'lucide-react';
export function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <span className="editorial-accent text-orange text-xl mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Let's talk. Call, text, or send a message.
            </h2>
            <p className="text-lg text-white/80 mb-12 max-w-md">
              We're here to help answer your questions and get you started.
              Reach out however is most convenient for you.
            </p>

            <div className="space-y-8">
              <a
                href="tel:+18005550199"
                className="flex items-start gap-4 group w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded-lg p-1 -ml-1">
                
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Call or Text Us</p>
                  <p className="text-2xl font-display font-bold group-hover:text-orange transition-colors">
                    (800) 555-0199
                  </p>
                </div>
              </a>

              <a
                href="mailto:hello@globalprofessional.com"
                className="flex items-start gap-4 group w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded-lg p-1 -ml-1">
                
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Email Us</p>
                  <p className="text-xl font-medium group-hover:text-orange transition-colors">
                    hello@globalprofessional.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-orange">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Business Hours</p>
                  <p className="text-lg font-medium">Mon-Fri: 9am - 6pm</p>
                  <p className="text-white/80">
                    Sat: 10am - 2pm (Tax Season Only)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 text-black shadow-xl">
            <h3 className="text-2xl font-display font-bold text-navy mb-6">
              Send us a message
            </h3>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black/70 mb-1.5">
                    
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-navy/20 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all bg-cream/50 focus:bg-white"
                    placeholder="John Doe" />
                  
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-black/70 mb-1.5">
                    
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-navy/20 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all bg-cream/50 focus:bg-white"
                    placeholder="(555) 000-0000" />
                  
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black/70 mb-1.5">
                  
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-navy/20 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all bg-cream/50 focus:bg-white"
                  placeholder="john@example.com" />
                
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-black/70 mb-1.5">
                  
                  How can we help you?
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-navy/20 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all bg-cream/50 focus:bg-white appearance-none">
                  
                  <option value="">Select a service...</option>
                  <option value="tax">Tax Preparation</option>
                  <option value="real-estate">Real Estate Brokerage</option>
                  <option value="insurance">Insurance Brokerage</option>
                  <option value="accounting">Accounting</option>
                  <option value="loans">Loan Services</option>
                  <option value="other">Other / General Question</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black/70 mb-1.5">
                  
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-navy/20 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all bg-cream/50 focus:bg-white resize-none"
                  placeholder="Tell us a bit about what you need...">
                </textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange hover:bg-[#d95a15] text-white py-4 rounded-lg font-medium text-lg flex items-center justify-center gap-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2">
                
                <Send size={20} />
                Send Message
              </button>

              <p className="text-xs text-center text-black/50 mt-4">
                We typically respond within 1 business day.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>);

}