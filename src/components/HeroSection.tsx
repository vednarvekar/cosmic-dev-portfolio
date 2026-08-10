import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const lines = [
    { prefix: '~$', text: ' whoami', delay: 100 },
    { prefix: '>', text: ' Ved Narvekar — Backend & AI Engineer', delay: 60, isOutput: true },

    { prefix: '~$', text: ' cat skills.core', delay: 100 },
    {
      prefix: '>',
      text: ' Node.js | Go | TypeScript | Python | PostgreSQL | Redis',
      delay: 35,
      isOutput: true
    },

    { prefix: '~$', text: ' cat skills.ai', delay: 100 },
    {
      prefix: '>',
      text: ' RAG Pipelines | Vector DBs | PyTorch | LLM Evals | Embeddings',
      delay: 35,
      isOutput: true
    },

    // { prefix: '~$', text: ' cat skills.infra', delay: 100 },
    // {
    //   prefix: '>',
    //   text: ' Docker | Kubernetes | Nginx | OpenTelemetry | Langfuse',
    //   delay: 35,
    //   isOutput: true
    // },

    { prefix: '~$', text: ' cat README.md', delay: 100 },
    {
      prefix: '>',
      text: ' Building backend systems & ML Models.',
      delay: 60,
      isOutput: true
    },
  ];

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= line.text.length) {
        setDisplayedText(line.text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentLine(currentLine + 1);
          setDisplayedText('');
        }, 600);
      }
    }, line.delay);

    return () => clearInterval(typeInterval);
  }, [currentLine]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Background grid */}
      {/* <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      /> */}

      {/* Radial glow top-left */}
      {/* <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00ff88 0%, transparent 70%)' }}
      /> */}

      {/* Radial glow bottom-right */}
      <div
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c6aff 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 min-[390px]:px-5 sm:px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Name + title above terminal */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-center"
          >
            {/* <p className="font-mono text-xs text-muted-foreground mb-1 tracking-[0.2em] uppercase opacity-60">
              // initializing profile
            </p> */}
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-syntax-green animate-pulse shadow-[0_0_8px_rgba(0,255,128,0.8)]" />
              <p className="font-mono text-sm text-muted-foreground">
                Backend Engineer · AI Systems · Open Source
              </p>
            </div>
          </motion.div>

          {/* Terminal Window */}
          <div
            className="relative rounded-xl overflow-hidden border border-white/[0.07] w-full max-w-[24rem] min-[390px]:max-w-[25.5rem] min-[430px]:max-w-[27rem] sm:max-w-none mx-auto"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.3) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 32px 64px rgba(0,0,0,0.4)',
            }}
          >
            {/* Top shimmer */}
            <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Terminal header */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05]"
              style={{ background: 'rgba(0,0,0,0.2)' }}
            >
              <span className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors cursor-pointer" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors cursor-pointer" />
              <span className="w-3 h-3 rounded-full bg-green-500/70 hover:bg-green-500 transition-colors cursor-pointer" />
              <div className="flex-1 flex justify-center">
                <span className="font-mono text-xs text-muted-foreground opacity-50 bg-white/5 px-3 py-0.5 rounded-md border border-white/5">
                  ved@portfolio: ~
                </span>
              </div>
              <span className="font-mono text-xs text-muted-foreground opacity-30">bash</span>
            </div>

            {/* Terminal body */}
            <div className="p-4 min-[390px]:p-5 sm:p-6 font-mono text-[13px] sm:text-sm md:text-base space-y-1.5 min-h-[240px] min-[390px]:min-h-[260px] sm:min-h-[320px]">
              {lines.slice(0, currentLine).map((line, index) => (
                <div key={index} className={`flex items-start  ${line.isOutput ? 'pl-4' : ''}`}>
                  <span className={`shrink-0 ${line.isOutput ? 'text-syntax-cyan opacity-60' : 'text-syntax-green'}`}>
                    {line.prefix}
                  </span>
                  <span className={`${line.isOutput ? 'text-foreground/80' : 'text-foreground'} break-words whitespace-pre-wrap`}>
                    {line.text}
                  </span>
                </div>
              ))}

              {currentLine < lines.length && (
                <div className="flex items-start gap-1">
                  <span className={`shrink-0 ${lines[currentLine].isOutput ? 'text-syntax-cyan opacity-60' : 'text-syntax-green'}`}>
                    {lines[currentLine].prefix}
                  </span>
                  <span className="text-foreground break-words whitespace-pre-wrap">
                    {displayedText}
                  </span>
                  <span
                    className={`w-[9px] h-[1.1em] bg-syntax-green ml-0.5 mt-0.5 rounded-[1px] transition-opacity ${showCursor ? 'opacity-100' : 'opacity-0'}`}
                    style={{ boxShadow: '0 0 8px rgba(0,255,128,0.6)' }}
                  />
                </div>
              )}

              {/* {currentLine >= lines.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mt-6 pt-4"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <p className="text-syntax-comment opacity-70">
                    # Scroll to explore ↓
                  </p>
                  <motion.div
                    className="flex items-center gap-2 mt-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                  </motion.div>
                </motion.div>
              )} */}
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5 }}
            className="flex justify-center mt-6"
          >
            <a
              href="#about"
              className="flex flex-col items-center text-muted-foreground hover:text-syntax-green transition-colors duration-200 group text-white"
            >
              <span className="font-mono text-xs mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                scroll.down()
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="opacity-50 group-hover:opacity-100 transition-opacity"
              >
                <ChevronDown size={20} />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;