import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type TechItem = {
  name: string
  version: string
  icon: string
  description: string
  color: string
}

type TechSection = {
  category: string
  items: TechItem[]
}

const technologies: TechSection[] = [
  {
    category: 'Languages',
    items: [
      { name: 'C++', version: 'C++17', icon: '⚙️', description: 'Systems Programming', color: 'from-indigo-500 to-purple-600' },
      { name: 'JavaScript', version: 'ES2023', icon: '🟨', description: 'Programming Language', color: 'from-yellow-400 to-yellow-600' },
      { name: 'TypeScript', version: '^5.x', icon: '📘', description: 'Typed JavaScript', color: 'from-blue-500 to-blue-700' },
      { name: 'Python', version: '^3.x', icon: '🐍', description: 'Programming Language', color: 'from-rose-500 to-pink-600' },
      { name: 'Go', version: '^1.22', icon: '🐹', description: 'Systems & Backend', color: 'from-cyan-500 to-teal-600' },
    ],
  },
  {
    category: 'Backend & Systems',
    items: [
      { name: 'Node.js', version: '^20.x', icon: '🟢', description: 'Runtime', color: 'from-green-500 to-green-700' },
      { name: 'Express.js', version: '^4.x', icon: '🚂', description: 'Framework', color: 'from-gray-500 to-gray-700' },
      { name: 'REST APIs', version: 'Production', icon: '🔗', description: 'API Design', color: 'from-emerald-500 to-teal-600' },
      { name: 'System Design', version: 'Applied', icon: '🏗️', description: 'Scalable Architecture', color: 'from-slate-500 to-slate-700' },
      { name: 'Nginx', version: 'Latest', icon: '🌐', description: 'Reverse Proxy', color: 'from-green-600 to-green-800' },
      { name: 'Kafka', version: '^3.x', icon: '📨', description: 'Event Streaming', color: 'from-neutral-600 to-neutral-800' },
    ],
  },
  {
    category: 'Databases & Storage',
    items: [
      { name: 'PostgreSQL', version: '^15.x', icon: '🐘', description: 'Relational', color: 'from-blue-400 to-indigo-600' },
      { name: 'MongoDB', version: '^7.x', icon: '🍃', description: 'NoSQL', color: 'from-green-600 to-green-800' },
      { name: 'Redis', version: '^7.x', icon: '⚡', description: 'Cache & Streams', color: 'from-red-500 to-rose-700' },
      { name: 'Pinecone', version: '^5.x', icon: '🌲', description: 'Vector Database', color: 'from-green-500 to-teal-600' },
    ],
  },
  {
    category: 'AI Engineering',
    items: [
      { name: 'RAG Pipelines', version: 'Production', icon: '🔍', description: 'Retrieval Augmented Generation', color: 'from-violet-500 to-purple-700' },
      { name: 'LLM Agents', version: 'Tool Calling', icon: '🤖', description: 'Autonomous Systems', color: 'from-fuchsia-500 to-purple-600' },
      { name: 'Embeddings', version: 'Applied', icon: '📐', description: 'Semantic Search', color: 'from-sky-500 to-blue-600' },
      { name: 'LLM Evals', version: 'RAGAS', icon: '📊', description: 'Output Quality Testing', color: 'from-amber-500 to-orange-600' },
      { name: 'Langfuse', version: '^3.x', icon: '🔭', description: 'LLM Observability', color: 'from-violet-500 to-purple-700' },
    ],
  },
  {
    category: 'ML & Data Science',
    items: [
      { name: 'PyTorch', version: '^2.x', icon: '🔥', description: 'Deep Learning', color: 'from-orange-500 to-red-600' },
      { name: 'Scikit-learn', version: '^1.x', icon: '📊', description: 'Machine Learning', color: 'from-orange-400 to-amber-600' },
      { name: 'NumPy', version: '^1.x', icon: '📐', description: 'Numerical Computing', color: 'from-sky-500 to-blue-600' },
      { name: 'Pandas', version: '^2.x', icon: '🐼', description: 'Data Analysis', color: 'from-neutral-600 to-neutral-800' },
    ],
  },
  {
    category: 'DevOps & Infra',
    items: [
      { name: 'Docker', version: '^4.x', icon: '🐳', description: 'Containerization', color: 'from-blue-400 to-blue-600' },
      { name: 'Kubernetes', version: '^1.x', icon: '☸️', description: 'Orchestration', color: 'from-blue-500 to-indigo-700' },
      { name: 'GitHub Actions', version: 'CI/CD', icon: '⚙️', description: 'Pipelines', color: 'from-neutral-700 to-neutral-900' },
      { name: 'Jenkins', version: '^2.4', icon: '🔧', description: 'CI/CD', color: 'from-red-400 to-red-600' },
      { name: 'Linux', version: 'CLI', icon: '🐧', description: 'OS', color: 'from-gray-600 to-gray-800' },
      { name: 'OpenTelemetry', version: 'Latest', icon: '🔭', description: 'Observability', color: 'from-violet-500 to-purple-600' },
    ],
  },
]

const TechStackSection = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="stack" className="min-h-screen py-20 relative overflow-hidden">

      {/* Background glows — matches Hero/About */}
      <div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00ff88 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c6aff 0%, transparent 70%)' }}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2 }}
        >
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="font-mono text-3xl mb-3">
              <span className="text-syntax-cyan">npm</span>{' '}
              <span className="text-syntax-green">install</span>{' '}
              my-skills
            </h2>
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-syntax-comment">// dependencies that actually exist</span>
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {technologies.map((section, sectionIdx) => (
              <div key={section.category} className="max-w-[22rem] sm:max-w-none mx-auto">

                {/* Section header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-xs text-syntax-cyan select-none">$</span>
                  <h3 className="font-mono text-sm font-bold tracking-widest uppercase text-muted-foreground">
                    {section.category}
                  </h3>
                  <div className="flex-1 border-t border-dashed border-border opacity-40" />
                  <span className="font-mono text-xs text-muted-foreground opacity-40">
                    {section.items.length} packages
                  </span>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 sm:gap-2">
                  {section.items.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: sectionIdx * 0.05 + i * 0.04 }}
                      whileHover={{ y: -4, scale: 1.03 }}
                      className="relative group"
                    >
                      {/* Ambient glow — uses tech color */}
                      <div className={`absolute -inset-[2px] bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-25 rounded-xl blur-md transition-all duration-500`} />

                      {/* Card — glass shell */}
                      <div
                        className="relative h-full rounded-xl overflow-hidden border border-white/[0.06] group-hover:border-white/[0.12] transition-colors duration-300"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.2) 100%)',
                          backdropFilter: 'blur(16px)',
                          WebkitBackdropFilter: 'blur(16px)',
                        }}
                      >
                        {/* Top accent line — tech color */}
                        <div className={`absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r ${tech.color} opacity-30 group-hover:opacity-70 transition-opacity duration-300`} />

                        {/* Shine sweep */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-xl">
                          <div
                            style={{
                              position: 'absolute',
                              top: '-50%',
                              left: '-50%',
                              width: '200%',
                              height: '200%',
                              background: 'linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)',
                              transform: 'translateX(-100%) rotate(45deg)',
                              animation: 'shine 0.6s ease forwards',
                            }}
                          />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-2.5 sm:p-3 flex flex-col gap-2 h-full">

                          {/* Icon + name */}
                          <div className="flex items-center gap-2 pt-1">
                            <span className="text-base leading-none">{tech.icon}</span>
                            <span className="font-mono text-xs font-bold text-foreground leading-tight truncate">
                              {tech.name}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="font-mono text-[10px] text-muted-foreground leading-tight">
                            {tech.description}
                          </p>

                          {/* Version */}
                          <div className="mt-auto pt-1" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                            <span className="font-mono text-[10px] text-syntax-green opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                              {tech.version}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <style>{`
            @keyframes shine {
              to { transform: translateX(100%) rotate(45deg); }
            }
          `}</style>

        </motion.div>
      </div>
    </section>
  )
}

export default TechStackSection