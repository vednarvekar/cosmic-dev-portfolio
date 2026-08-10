import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Send, Check, AlertCircle, Loader2 } from 'lucide-react';
import EarthCanvas from './Earth';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus('success');
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden">

      {/* Background glows */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00ff88 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c6aff 0%, transparent 70%)' }}
      />

      {/* Mobile Earth — behind everything, full section height, centered */}
      <div className="lg:hidden absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[420px] h-[420px] opacity-40">
          <EarthCanvas />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-mono text-2xl md:text-3xl mb-4 text-center">
            <span className="text-syntax-purple">async</span>{' '}
            <span className="text-syntax-function">sendMessage</span>
            <span className="text-syntax-yellow">()</span>
          </h2>

          <p className="text-center text-muted-foreground font-mono text-sm mb-12">
            <span className="text-syntax-comment">// Let's build something amazing together</span>
          </p>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-[22rem] sm:max-w-none mx-auto w-full"
            >
              {/*
                Mobile: near-fully transparent glass so Earth shows through
                Desktop (lg:): normal opaque glass card
                We achieve this by overriding inline styles via a wrapper
                that swaps background opacity using a CSS custom property trick
                — simpler to just use two separate style objects via a flag.
              */}
              <div
                className="relative rounded-xl overflow-hidden border group
                  border-white/[0.07] lg:border-white/[0.07]"
                style={{
                  /* Desktop: normal glass */
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.25) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 32px 64px rgba(0,0,0,0.35)',
                }}
              >
                {/*
                  Mobile transparency overlay — sits on top of the card background
                  on mobile and cancels out the dark bg, making it see-through.
                  On lg+ it's hidden.
                */}
                <div
                  className="lg:hidden absolute inset-0 z-0 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.08) 100%)',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                  }}
                />

                {/* Top shimmer */}
                <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/30 transition-all duration-500 z-10" />

                {/* Terminal header */}
                <div
                  className="relative z-10 flex items-center gap-2 px-4 py-3 border-b border-white/[0.05]"
                  style={{ background: 'rgba(0,0,0,0.25)' }}
                >
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <div className="flex-1 flex justify-center">
                    <span className="font-mono text-xs text-muted-foreground opacity-50 bg-white/5 px-3 py-0.5 rounded-md border border-white/5">
                      contact.sh
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-syntax-green animate-pulse shadow-[0_0_6px_rgba(0,255,128,0.8)]" />
                    <span className="font-mono text-[10px] text-syntax-green opacity-70">online</span>
                  </div>
                </div>

                {/* Form body — transparent bg on mobile */}
                <form
                  onSubmit={handleSubmit}
                  className="relative z-10 p-4 sm:p-6 space-y-4 sm:space-y-5"
                  style={{ background: 'transparent' }}
                >
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-syntax-cyan flex items-center gap-1">
                      <span className="opacity-50">$</span> name<span className="text-syntax-purple">:</span>
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name..."
                      required
                      className="font-mono text-sm bg-white/[0.06] border-white/10 focus:border-syntax-green/50 focus:bg-white/[0.08] placeholder:text-muted-foreground/30 transition-colors duration-200 rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs text-syntax-cyan flex items-center gap-1">
                      <span className="opacity-50">$</span> email<span className="text-syntax-purple">:</span>
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email..."
                      required
                      className="font-mono text-sm bg-white/[0.06] border-white/10 focus:border-syntax-green/50 focus:bg-white/[0.08] placeholder:text-muted-foreground/30 transition-colors duration-200 rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs text-syntax-cyan flex items-center gap-1">
                      <span className="opacity-50">$</span> message<span className="text-syntax-purple">:</span>
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your message..."
                      required
                      rows={4}
                      className="font-mono text-sm bg-white/[0.06] border-white/10 focus:border-syntax-green/50 focus:bg-white/[0.08] placeholder:text-muted-foreground/30 transition-colors duration-200 resize-none rounded-lg"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full font-mono text-sm bg-syntax-green/10 border border-syntax-green/30 text-syntax-green hover:bg-syntax-green/20 hover:border-syntax-green/60 transition-all duration-200 rounded-lg"
                    style={{ backdropFilter: 'blur(8px)' }}
                  >
                    {status === 'loading' && <><Loader2 className="animate-spin mr-2" size={14} />Sending...</>}
                    {status === 'success' && <><Check className="mr-2" size={14} />Message Sent!</>}
                    {status === 'error' && <><AlertCircle className="mr-2" size={14} />Error — Retry</>}
                    {status === 'idle' && <><Send className="mr-2" size={14} />{'> send_message'}</>}
                  </Button>

                  <p className="font-mono text-[10px] text-muted-foreground text-center pt-1 opacity-50">
                    <span className="text-syntax-comment">// Response time: usually within 24h</span>
                  </p>
                </form>

                {/* Bottom VS Code bar */}
                <div
                  className="relative z-10 flex items-center justify-between px-5 py-2 border-t border-white/[0.05]"
                  style={{ background: 'rgba(0,0,0,0.25)' }}
                >
                  <span className="font-mono text-[10px] text-muted-foreground opacity-40">bash · UTF-8</span>
                  <span className="font-mono text-[10px] text-syntax-green opacity-60">● connected</span>
                </div>
              </div>
            </motion.div>

            {/* Desktop Earth */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="hidden lg:flex lg:flex-col lg:items-center"
            >
              <div className="w-[520px] h-[520px]">
                <EarthCanvas />
              </div>
              <div className="flex items-center gap-6 mt-2">
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.06]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.2) 100%)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-syntax-green animate-pulse shadow-[0_0_6px_rgba(0,255,128,0.8)]" />
                  <span className="font-mono text-xs text-muted-foreground">Remote worldwide</span>
                </div>
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.06]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.2) 100%)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <span className="font-mono text-xs text-syntax-cyan">IST</span>
                  <span className="font-mono text-xs text-muted-foreground">Mumbai, India</span>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;