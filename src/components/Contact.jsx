import { useState, useRef } from 'react';
import { Send, MapPin, Mail, CheckCircle, AlertTriangle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    if (serviceId && templateId && publicKey) {
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(() => {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        })
        .catch((err) => {
          console.error("EmailJS Error:", err);
          setStatus('error');
        });
    } else {
      console.warn("EmailJS credentials not set. Simulating message transmission...");
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0B0F19] overflow-hidden">
      {/* Decorative backdrop blobs */}
      <div className="absolute top-[20%] left-[-15%] w-[450px] h-[450px] rounded-full bg-accentSky/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Get In <span className="text-accentSky">Touch</span>
          </h2>
          <div className="w-[80px] h-[4px] bg-gradient-to-r from-accentSky to-accentViolet mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info & Social Connections */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display text-lightText">
                Let's discuss your next project
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                I am actively seeking Software Engineering and AI developer internships. If you have an opportunity or just want to discuss coding, reach out directly!
              </p>
              
              <div className="space-y-6 pt-6">
                {/* Location */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3.5 rounded-2xl bg-accentSky/10 border border-accentSky/25 text-accentSky group-hover:bg-accentSky group-hover:text-[#0f172a] transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Location</div>
                    <div className="text-slate-300 font-bold">{personalInfo.location}</div>
                  </div>
                </div>

                {/* Email Address */}
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group cursor-pointer">
                  <div className="p-3.5 rounded-2xl bg-accentViolet/10 border border-accentViolet/25 text-accentViolet group-hover:bg-accentViolet group-hover:text-[#0f172a] transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Address</div>
                    <div className="text-slate-300 font-bold group-hover:text-accentSky transition-colors">{personalInfo.email}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Icons row */}
            <div className="pt-10 lg:pt-0">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Connect With Me</div>
              <div className="flex items-center gap-4">
                {personalInfo.socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-darkCard border border-white/5 text-[#94a3b8] transition-all duration-300 hover:border-accentSky/30 hover:scale-110 shadow-glass ${social.color} cursor-pointer`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form 
              ref={formRef} 
              onSubmit={handleSubmit}
              className="glassmorphism p-8 sm:p-10 rounded-2xl border border-white/5 shadow-glass space-y-6"
            >
              {/* Name Input */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-xs sm:text-sm font-semibold text-slate-400">
                  Full Name
                </label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-5 py-3 rounded-xl bg-slate-900/60 border border-white/5 focus:border-accentSky focus:outline-none focus:ring-1 focus:ring-accentSky text-lightText placeholder-slate-500 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-slate-400">
                  Email Address
                </label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  required
                  className="w-full px-5 py-3 rounded-xl bg-slate-900/60 border border-white/5 focus:border-accentSky focus:outline-none focus:ring-1 focus:ring-accentSky text-lightText placeholder-slate-500 transition-all duration-300 text-sm sm:text-base cursor-pointer"
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-xs sm:text-sm font-semibold text-slate-400">
                  Your Message
                </label>
                <textarea 
                  name="message" 
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to discuss a project..."
                  required
                  className="w-full px-5 py-3 rounded-xl bg-slate-900/60 border border-white/5 focus:border-accentSky focus:outline-none focus:ring-1 focus:ring-accentSky text-lightText placeholder-slate-500 transition-all duration-300 resize-none text-sm sm:text-base cursor-pointer"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-accentSky to-indigo-500 text-[#0F172A] font-bold tracking-wider hover:opacity-95 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer shadow-glow-sky"
              >
                {status === 'sending' ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Feedback States alert bars */}
              {status === 'success' && (
                <div className="flex items-center gap-2.5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2.5 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs sm:text-sm font-semibold">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <span>An error occurred. Please verify form details and try again.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
