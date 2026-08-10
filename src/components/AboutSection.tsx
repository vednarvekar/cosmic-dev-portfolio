import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const codeLines = [
  { lineNum: 1,  content: <><span className="syntax-keyword">const</span> <span className="syntax-variable">dev</span> <span className="syntax-keyword">=</span> {'{'}</> },

  { lineNum: 2,  content: <>&nbsp;&nbsp;<span className="syntax-string">name</span>: <span className="syntax-string">"Ved Narvekar"</span>,</> },
  { lineNum: 3,  content: <>&nbsp;&nbsp;<span className="syntax-string">role</span>: <span className="syntax-string">"Backend & AI Eng"</span>,</> },
  { lineNum: 4,  content: <>&nbsp;&nbsp;<span className="syntax-string">location</span>: <span className="syntax-string">"Mumbai, IN"</span>,</> },
  { lineNum: 5,  content: <>&nbsp;&nbsp;<span className="syntax-string">available</span>: <span className="syntax-keyword">true</span>,</> },

  { lineNum: 6,  content: <></> },

  { lineNum: 7,  content: <>&nbsp;&nbsp;<span className="syntax-comment">// What I build</span></> },
  { lineNum: 8,  content: <>&nbsp;&nbsp;<span className="syntax-string">focus</span>: [</> },
  { lineNum: 9,  content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-string">"AI agents & RAG"</span>,</> },
  { lineNum: 10, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-string">"Backend systems"</span>,</> },
  { lineNum: 11, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-string">"Distributed infra"</span>,</> },
  { lineNum: 12, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-string">"ML pipelines"</span>,</> },
  { lineNum: 13, content: <>&nbsp;&nbsp;],</> },

  { lineNum: 14, content: <></> },

  { lineNum: 15, content: <>&nbsp;&nbsp;<span className="syntax-comment">// Current state</span></> },
  { lineNum: 16, content: <>&nbsp;&nbsp;<span className="syntax-string">level</span>: <span className="syntax-string">"Junior — shipping real"</span>,</> },
  { lineNum: 17, content: <>&nbsp;&nbsp;<span className="syntax-string">building</span>: [<span className="syntax-string">"sentinel"</span>, <span className="syntax-string">"ml-quant"</span>],</> },
  { lineNum: 18, content: <>&nbsp;&nbsp;<span className="syntax-string">learning</span>: [<span className="syntax-string">"Go"</span>, <span className="syntax-string">"Kafka"</span>, <span className="syntax-string">"K8s"</span>],</> },

  { lineNum: 19, content: <></> },

  { lineNum: 20, content: <>&nbsp;&nbsp;<span className="syntax-comment">// Philosophy</span></> },
  { lineNum: 21, content: <>&nbsp;&nbsp;<span className="syntax-function">code</span>: <span className="syntax-keyword">() =&gt;</span> {'{'}</> },
  { lineNum: 22, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-keyword">return</span> <span className="syntax-string">"ship → debug → improve"</span>;</> },
  { lineNum: 23, content: <>&nbsp;&nbsp;{'}'}</> },
  { lineNum: 24, content: <>{'};'}</> },
];

// Full-length lines for desktop only
const codeLinesFull = [
  { lineNum: 1,  content: <><span className="syntax-keyword">const</span> <span className="syntax-variable">developer</span> <span className="syntax-keyword">=</span> {'{'}</> },
  { lineNum: 2,  content: <>&nbsp;&nbsp;<span className="syntax-string">name</span>: <span className="syntax-string">"Ved Vijay Narvekar"</span>,</> },
  { lineNum: 3,  content: <>&nbsp;&nbsp;<span className="syntax-string">role</span>: <span className="syntax-string">"Backend & AI Engineer"</span>,</> },
  { lineNum: 4,  content: <>&nbsp;&nbsp;<span className="syntax-string">location</span>: <span className="syntax-string">"Mumbai, India"</span>,</> },
  { lineNum: 5,  content: <>&nbsp;&nbsp;<span className="syntax-string">available</span>: <span className="syntax-keyword">true</span>, <span className="syntax-comment">// open to remote contracts</span></> },
  { lineNum: 6,  content: <></> },
  { lineNum: 7,  content: <>&nbsp;&nbsp;<span className="syntax-comment">// What I build</span></> },
  { lineNum: 8,  content: <>&nbsp;&nbsp;<span className="syntax-string">focus</span>: [</> },
  { lineNum: 9,  content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-string">"AI agents & RAG pipelines"</span>,</> },
  { lineNum: 10, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-string">"High-performance backend systems"</span>,</> },
  { lineNum: 11, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-string">"Distributed infra & event-driven architecture"</span>,</> },
  { lineNum: 12, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-string">"ML model pipelines & quantitative systems"</span>,</> },
  { lineNum: 13, content: <>&nbsp;&nbsp;],</> },
  { lineNum: 14, content: <></> },
  { lineNum: 15, content: <>&nbsp;&nbsp;<span className="syntax-comment">// Current state</span></> },
  { lineNum: 16, content: <>&nbsp;&nbsp;<span className="syntax-string">experienceLevel</span>: <span className="syntax-string">"Junior backend dev — shipping real systems"</span>,</> },
  { lineNum: 17, content: <>&nbsp;&nbsp;<span className="syntax-string">building</span>: [<span className="syntax-string">"sentinel-oss"</span>, <span className="syntax-string">"ml-quant"</span>, <span className="syntax-string">"api-gateway"</span>],</> },
  { lineNum: 18, content: <>&nbsp;&nbsp;<span className="syntax-string">learning</span>: [<span className="syntax-string">"Go"</span>, <span className="syntax-string">"Kafka"</span>, <span className="syntax-string">"Kubernetes"</span>, <span className="syntax-string">"LLM Evals"</span>],</> },
  { lineNum: 19, content: <></> },
  { lineNum: 20, content: <>&nbsp;&nbsp;<span className="syntax-comment">// Philosophy</span></> },
  { lineNum: 21, content: <>&nbsp;&nbsp;<span className="syntax-function">code</span>: <span className="syntax-keyword">() =&gt;</span> {'{'}</> },
  { lineNum: 22, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-keyword">return</span> <span className="syntax-string">"Ship → observe → debug → improve"</span>;</> },
  { lineNum: 23, content: <>&nbsp;&nbsp;{'}'}</> },
  { lineNum: 24, content: <>{'};'}</> },
];

const CodeBlock = ({
  lines,
  isInView,
  className = '',
}: {
  lines: typeof codeLines
  isInView: boolean
  className?: string
}) => (
  <div className={`p-4 font-mono overflow-hidden ${className}`}>
    {lines.map((line, index) => (
      <motion.div
        key={line.lineNum}
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.04, duration: 0.25 }}
        className="flex items-start group/line hover:bg-white/[0.025] rounded px-1 -mx-1 transition-colors duration-150 min-h-[1.6rem]"
      >
        {/* Line number */}
        <span
          className="select-none w-6 shrink-0 text-right mr-3 text-[10px] leading-6"
          style={{ color: 'rgba(255,255,255,0.15)' }}
        >
          {line.lineNum}
        </span>

        {/* Left accent on hover */}
        <span className="w-[2px] shrink-0 mr-2 self-stretch rounded-full opacity-0 group-hover/line:opacity-100 transition-opacity bg-syntax-purple" />

        <span className="leading-6 text-xs whitespace-nowrap">{line.content}</span>
      </motion.div>
    ))}
  </div>
);

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative overflow-hidden">

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c6aff 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-mono text-2xl md:text-3xl mb-10 text-center">
            <span className="text-syntax-purple">function</span>{' '}
            <span className="text-syntax-function">aboutMe</span>
            <span className="text-syntax-yellow">()</span>
          </h2>

          <div className="max-w-[22rem] sm:max-w-3xl mx-auto">

            {/* Glass terminal */}
            <div
              className="relative rounded-xl overflow-hidden border border-white/[0.07] group"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.25) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 32px 64px rgba(0,0,0,0.35)',
              }}
            >
              {/* Top shimmer */}
              <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/30 transition-all duration-500" />

              {/* Terminal header */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05]"
                style={{ background: 'rgba(0,0,0,0.2)' }}
              >
                <span className="w-3 h-3 rounded-full bg-red-500/70 shrink-0" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70 shrink-0" />
                <span className="w-3 h-3 rounded-full bg-green-500/70 shrink-0" />
                <div className="flex-1 flex justify-center">
                  <span className="font-mono text-xs text-muted-foreground opacity-50 bg-white/5 px-3 py-0.5 rounded-md border border-white/5">
                    about.ts
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-syntax-green animate-pulse shadow-[0_0_6px_rgba(0,255,128,0.8)]" />
                  <span className="font-mono text-[10px] text-syntax-green opacity-70 hidden sm:inline">TS</span>
                  {/* <span className="font-mono text-[10px] text-syntax-green opacity-70 hidden sm:inline">open to work</span> */}
                </div>
              </div>

              {/* Mobile code block — short lines, no overflow */}
              <div
                className="md:hidden"
                style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.1) 100%)' }}
              >
                <CodeBlock lines={codeLines} isInView={isInView} className="p-3 sm:p-4" />
              </div>

              {/* Desktop code block — full lines, horizontal scroll if needed */}
              <div
                className="hidden md:block overflow-x-auto"
                style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.1) 100%)' }}
              >
                <CodeBlock lines={codeLinesFull} isInView={isInView} className="text-sm min-w-[560px]" />
              </div>

              {/* Bottom bar */}
              <div
                className="flex items-center justify-between px-4 py-2 border-t border-white/[0.05]"
                style={{ background: 'rgba(0,0,0,0.2)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-muted-foreground opacity-40">TypeScript</span>
                  <span className="font-mono text-[10px] text-muted-foreground opacity-40 hidden sm:inline">UTF-8</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-muted-foreground opacity-40">{codeLinesFull.length} lines</span>
                  <span className="font-mono text-[10px] text-syntax-green opacity-60">● saved</span>
                </div>
              </div>
            </div>

            {/* Bottom comment */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-6 text-center text-muted-foreground font-mono text-[10px] sm:text-xs px-2"
            >
              <span className="text-syntax-comment opacity-60">
                // 2nd year BTech AIML · Mumbai University · Graduating 2028
              </span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;