import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GitBranch, Star, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    name: 'resolv-cli-agent',
    description: 'CLI agent that analyzes GitHub issues, retrieves relevant files via RAG pipeline, generates fixes and opens PRs autonomously.',
    tech: ['Chalk.js', 'TypeScript', 'Ollama', 'ts-morph', 'LLM APIs'],
    status: 'stable',
    demoUrl: 'https://www.npmjs.com/package/resolv-cli-agent',
    githubUrl: 'https://github.com/vednarvekar/resolv-v2',
  },
  {
    name: 'api-gateway',
    description: 'Production-grade API gateway with JWT validation, RBAC, dynamic rate limiting, job queues and full observability.',
    tech: ['TypeScript', 'Redis', 'Docker', 'Fastify', 'BullMQ'],
    status: 'stable',
    demoUrl: 'https://api-gateway-web.vercel.app/',
    githubUrl: 'https://github.com/vednarvekar/api-gateway',
  },
  {
    name: 'pixel - AI media-detection',
    description: 'Multi-signal detection engine for synthetic images and videos combining ResNet-18 inference, metadata forensics (EXIF/C2PA), and visual search.',
    tech: ['Python', 'PyTorch', 'Node.js', 'Supabase', 'ResNet-18'],
    stars: "",
    forks: "",
    status: 'production',
    demoUrl: 'https://pixel-v2-five.vercel.app/',
    githubUrl: 'https://github.com/vednarvekar/pixel-v2',
  },
  {
    name: 'ml-quant',
    description: 'Multi-model trading pipeline — CNN for pattern recognition, XGBoost for technical analysis, NLP for news sentiment — combined to execute live trades with entry, stoploss, and target.',
    tech: ['Python', 'PyTorch', 'XGBoost', 'Pandas', 'Upstox API'],
    status: 'beta',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'vector-search-engine',
    description: 'Semantic search engine over large codebases — hybrid BM25 + dense vector retrieval with re-ranking and citation. Built to power Sentinel\'s RAG layer.',
    tech: ['Node.js', 'Qdrant', 'TypeScript', 'pgvector'],
    status: 'under-development',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'llm-eval-suite',
    description: 'Automated evaluation framework for LLM pipelines — RAGAS metrics, LLM-as-judge scoring, prompt regression testing via promptfoo with CI integration.',
    tech: ['TypeScript', 'RAGAS', 'promptfoo', 'Node.js'],
    status: 'under-development',
    demoUrl: '#',
    githubUrl: '#',
  },
];

const statusConfig: Record<string, { classes: string; dot: string; label: string }> = {
  production: {
    classes: 'bg-syntax-green/10 text-syntax-green border-syntax-green/20',
    dot: 'bg-syntax-green shadow-[0_0_6px_rgba(0,255,128,0.6)]',
    label: 'production',
  },
  stable: {
    classes: 'bg-syntax-purple/10 text-syntax-purple border-syntax-purple/20',
    dot: 'bg-syntax-purple shadow-[0_0_6px_rgba(160,128,255,0.6)]',
    label: 'stable',
  },
  beta: {
    classes: 'bg-syntax-yellow/10 text-syntax-yellow border-syntax-yellow/20',
    dot: 'bg-syntax-yellow shadow-[0_0_6px_rgba(255,220,0,0.6)]',
    label: 'beta',
  },
  'under-development': {
    classes: 'bg-syntax-red/10 text-syntax-red border-syntax-red/20',
    dot: 'bg-syntax-red shadow-[0_0_6px_rgba(255,80,80,0.6)]',
    label: 'under-development',
  },
  developing: {
    classes: 'bg-syntax-red/10 text-syntax-red border-syntax-red/20',
    dot: 'bg-syntax-red shadow-[0_0_6px_rgba(255,80,80,0.6)]',
    label: 'under-development',
  },
  active: {
    classes: 'bg-syntax-blue/10 text-syntax-blue border-syntax-blue/20',
    dot: 'bg-syntax-blue shadow-[0_0_6px_rgba(80,160,255,0.6)]',
    label: 'active',
  },
};

const techColors: Record<string, string> = {
  'TypeScript': 'border-blue-500/30 text-blue-400 bg-blue-500/5',
  'Python': 'border-yellow-500/30 text-yellow-400 bg-yellow-500/5',
  'Redis': 'border-red-500/30 text-red-400 bg-red-500/5',
  'Docker': 'border-cyan-500/30 text-cyan-400 bg-cyan-500/5',
  'Node.js': 'border-green-500/30 text-green-400 bg-green-500/5',
  'ts-morph': 'border-indigo-500/30 text-indigo-400 bg-indigo-500/5',
  'Fastify': 'border-slate-400/30 text-slate-400 bg-slate-500/5',
  'Ollama': 'border-violet-500/30 text-violet-400 bg-violet-500/5',
  'Qdrant': 'border-cyan-400/30 text-cyan-300 bg-cyan-500/5',
  'PyTorch': 'border-orange-500/30 text-orange-400 bg-orange-500/5',
  'XGBoost': 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5',
  'Pandas': 'border-purple-500/30 text-purple-400 bg-purple-500/5',
  'LLM APIs': 'border-green-400/30 text-green-300 bg-green-500/5',
  'BullMQ': 'border-rose-500/30 text-rose-400 bg-rose-500/5',
  'Supabase': 'border-emerald-400/30 text-emerald-300 bg-emerald-500/5',
  'ResNet-18': 'border-amber-500/30 text-amber-400 bg-amber-500/5',
  'pgvector': 'border-blue-400/30 text-blue-300 bg-blue-500/5',
  'RAGAS': 'border-fuchsia-500/30 text-fuchsia-400 bg-fuchsia-500/5',
  'promptfoo': 'border-pink-500/30 text-pink-400 bg-pink-500/5',
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2 }}
        >
          <h2 className="font-mono text-2xl md:text-3xl mb-4 text-center">
            <span className="text-syntax-cyan">git</span>{' '}
            <span className="text-syntax-green">clone</span>{' '}
            <span className="text-foreground">my-projects</span>
          </h2>

          <p className="text-center text-muted-foreground font-mono text-sm mb-12">
            <span className="text-syntax-comment">// Cloning repositories... {projects.length} found</span>
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {projects.map((project, index) => {
              const status = statusConfig[project.status];
              return (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.3 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative w-full max-w-[22rem] md:max-w-none mx-auto"
                >
                  {/* Ambient glow */}
                  <div className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-sm" />

                  {/* Glass card */}
                  <div
                    className="relative h-full rounded-xl flex flex-col overflow-hidden border border-white/[0.06] group-hover:border-white/[0.12] transition-colors duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.15) 100%)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                    }}
                  >
                    {/* Top shimmer line */}
                    <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/40 transition-all duration-500" />

                    {/* Terminal header dots */}
                    <div
                      className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05]"
                      style={{ background: 'rgba(0,0,0,0.15)' }}
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                      <span className="ml-3 text-xs text-muted-foreground font-mono truncate opacity-60">
                        ~/{project.name}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-4 gap-3">

                      {/* Name + status */}
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-mono font-bold text-foreground group-hover:text-syntax-green transition-colors duration-200 text-sm leading-tight">
                          {project.name}
                        </h3>
                        <span className={`flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full border whitespace-nowrap ${status.classes}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${status.dot} animate-pulse`} />
                          {status.label}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-muted-foreground leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      {/* Tech pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className={`font-mono text-[10px] px-2 py-0.5 rounded border ${techColors[t] ?? 'border-white/10 text-muted-foreground bg-white/5'}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Bottom bar */}
                      <div
                        className="flex items-center justify-between pt-3 mt-auto"
                        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                      >
                        <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                          {project.stars && (
                            <span className="flex items-center gap-1 opacity-60">
                              <Star size={12} className="text-syntax-yellow" />
                              {project.stars}
                            </span>
                          )}
                          {project.forks && (
                            <span className="flex items-center gap-1 opacity-60">
                              <GitBranch size={12} className="text-syntax-purple" />
                              {project.forks}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          <a
                            href={project.githubUrl === '#' ? `/under-development?project=${encodeURIComponent(project.name)}` : project.githubUrl}
                            target={project.githubUrl === '#' ? undefined : "_blank"}
                            rel={project.githubUrl === '#' ? undefined : "noopener noreferrer"}
                            className="p-1.5 rounded-md text-muted-foreground hover:text-syntax-orange hover:bg-white/5 transition-all duration-200"
                            aria-label="GitHub"
                          >
                            <Github size={14} />
                          </a>
                          <a
                            href={project.demoUrl === '#' ? `/under-development?project=${encodeURIComponent(project.name)}` : project.demoUrl}
                            target={project.demoUrl === '#' ? undefined : "_blank"}
                            rel={project.demoUrl === '#' ? undefined : "noopener noreferrer"}
                            className="p-1.5 rounded-md text-muted-foreground hover:text-syntax-green hover:bg-white/5 transition-all duration-200"
                            aria-label="Live Demo"
                          >
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;