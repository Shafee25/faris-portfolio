import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { DATA } from '../constants';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Function to handle Netlify Form Submission via AJAX
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        toast.success("Message sent successfully!", {
            style: { background: '#0a1622', color: '#fff', border: '1px solid #00d2ff' }
        });
        e.target.reset();
      })
      .catch((error) => {
        setIsSubmitting(false);
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <Toaster position="bottom-right" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Side: Info */}
        <div className="space-y-12">
          <div>
            <h2 className="text-accentBlue font-black tracking-[0.4em] uppercase text-[10px] mb-4">Get In Touch</h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Let's <br /> Connect.</h3>
          </div>

          <p className="text-textGray text-lg max-w-md">
            I am always open to discussing strategic partnerships, regional growth opportunities, or leadership roles.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accentBlue group-hover:bg-accentBlue group-hover:text-black transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-textGray uppercase tracking-widest">Email Me</p>
                <p className="text-xl font-bold">{DATA.profile.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accentBlue group-hover:bg-accentBlue group-hover:text-black transition-all">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-textGray uppercase tracking-widest">Call Me</p>
                <p className="text-xl font-bold">{DATA.profile.phones[0]}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-accentBlue group-hover:bg-accentBlue group-hover:text-black transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-textGray uppercase tracking-widest">Location</p>
                <p className="text-sm font-bold max-w-[200px]">{DATA.profile.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="relative">
          <div className="bg-cardBg/30 border border-white/5 p-8 md:p-12 rounded-[3.5rem] backdrop-blur-xl">
            {/* Netlify Form Logic */}
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden input for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-2">Your Name</label>
                  <input 
                    type="text" name="name" required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accentBlue/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-2">Email Address</label>
                  <input 
                    type="email" name="email" required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accentBlue/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest ml-2">Subject</label>
                <input 
                  type="text" name="subject" required
                  placeholder="Inquiry about Regional Strategy"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accentBlue/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest ml-2">Message</label>
                <textarea 
                  name="message" rows="5" required
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accentBlue/50 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accentBlue text-black font-black uppercase tracking-[0.2em] py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_40px_rgba(0,210,255,0.2)]"
              >
                {isSubmitting ? (
                    <span className="animate-pulse">Processing...</span>
                ) : isSuccess ? (
                    <><CheckCircle size={20} /> Message Sent</>
                ) : (
                    <><Send size={18} /> Send Message</>
                )}
              </button>
            </form>
          </div>

          {/* Background Glow */}
          <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-accentBlue/10 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;