import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Github, Linkedin } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Stack', href: '#stack' },
  { name: 'Projects', href: '#projects' },
  // { name: 'Contact', href: '#contact' },
];

const NAME = 'Ved Narvekar';
const RESUME_PATH = '/resume%20(2).pdf';

const XLogo = ({ size = 19 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.26l-4.9-7.02L5.9 22H2.8l7.24-8.27L.8 2h6.41l4.43 6.35L18.9 2Zm-1.1 18h1.73L6.2 3.9H4.35L17.8 20Z" />
  </svg>
);

const socialLinks = [
  { icon: Github, href: 'https://github.com/vednarvekar', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ved-narvekar/', label: 'LinkedIn' },
  { icon: XLogo, href: 'https://x.com/VedNarvekar', label: 'X' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [flickerDone, setFlickerDone] = useState(false);

  // Stop flicker after 3s
  useEffect(() => {
    const timer = setTimeout(() => setFlickerDone(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Navbar blur on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md' : ''
      }`}
    >
      <div className="container mx-auto px-6 py-2">
        <div className="relative flex items-center justify-between gap-3">

          {/* LOGO + NAME */}
          <motion.a
            href="#hero"
            className="flex items-center font-mono text-base font-bold shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            {/* LOGO (NO FLICKER, BIGGER) */}
            <img
              src="/logo.svg"
              alt="Ved Narvekar logo"
              className="w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
            />

            {/* NAME (LETTER-PAIR FLICKER) */}
            <span className="hidden lg:flex tracking-wide text-white text-sm">
              {NAME.split('').map((char, index) => {
                if (char === ' ') {
                  return <span key={index} className="w-2" />;
                }

                const isEven = index % 2 === 0;

                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0.3 }}
                    animate={
                      flickerDone
                        ? { opacity: 1 }
                        : {
                            opacity: isEven
                              ? [0.3, 1, 0.4, 1]
                              : [1, 0.4, 1, 0.3],
                          }
                    }
                    transition={
                      flickerDone
                        ? { duration: 1 }
                        : {
                            duration: 1,
                            repeat: Infinity,
                            repeatType: 'mirror',
                            delay: isEven ? 0.0 : 0.30, // 👈 alternating pairs
                          }
                    }
                    className={`${
                      flickerDone
                        ? 'drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]'
                        : ''
                    }`}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
          </motion.a>

          {/* NAV LINKS */}
          <ul className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="font-mono text-sm text-muted-foreground hover:text-syntax-green transition-colors relative group"
                >
                  <span className="text-syntax-purple">.</span>
                  {item.name.toLowerCase()}
                  <span className="text-syntax-yellow">()</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-syntax-green transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="relative flex flex-col items-end gap-1.5 shrink-0">
            <div className="flex items-center gap-2">
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs md:text-sm px-2 md:px-2.5 py-1.5 bg-accent/20 border border-accent/60 rounded-md text-white hover:bg-accent/35 transition-all inline-flex items-center gap-1.5"
              >
                <FileText size={14} />
                {'> resume'}
              </a>

              <a
                href="#contact"
                className="font-mono text-xs md:text-sm px-2 md:px-2.5 py-1.5 bg-primary/20 border border-primary/70 rounded-md text-white hover:bg-primary hover:text-primary-foreground transition-all"
              >
                {'> contact_me'}
              </a>
            </div>

            <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-1.5 rounded-md bg-background/70 backdrop-blur-sm border border-white/10 text-white hover:text-syntax-cyan hover:bg-background/90 hover:border-white/20 transition-colors"
                >
                  <social.icon size={19} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
