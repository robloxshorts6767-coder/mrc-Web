import { motion } from 'framer-motion';
import { Cpu, Globe, FlaskConical, PenTool, Calculator, Music } from 'lucide-react';

const ACEDCurriculum = () => {
  const subjects = [
    { name: 'Advanced STEM', icon: <FlaskConical />, desc: 'University-level physics, chemistry, and biology starting from Year 8.' },
    { name: 'Global Politics', icon: <Globe />, desc: 'Debating international relations and geopolitical strategies.' },
    { name: 'Coding & AI', icon: <Cpu />, desc: 'Building neural networks and advanced software architecture.' },
    { name: 'Creative Arts', icon: <Music />, desc: 'High-level performance, composition, and digital media production.' },
    { name: 'Advanced Math', icon: <Calculator />, desc: 'Fast-tracked mathematics leading to early VCE completion.' },
    { name: 'Philosophy', icon: <PenTool />, desc: 'Critical thinking and ethical reasoning in the 21st century.' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-50 min-h-screen pt-40"
    >
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-8xl font-black text-blue-900 mb-6 uppercase tracking-tighter">
              ACED <span className="text-yellow-500">CURRICULUM</span>
            </h1>
            <p className="text-2xl text-slate-600 font-medium max-w-3xl mx-auto">
              A curriculum designed to challenge the brightest minds, focusing on depth, complexity, and real-world application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {subjects.map((sub, i) => (
              <motion.div
                key={sub.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all group border border-slate-100"
              >
                <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center mb-8 text-yellow-400 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  {sub.icon}
                </div>
                <h3 className="text-3xl font-black text-blue-900 mb-4 uppercase leading-none">{sub.name}</h3>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">{sub.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Learning Section */}
      <section className="py-32 bg-blue-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2">
              <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">
                Beyond <span className="text-yellow-400">Classrooms</span>
              </h2>
              <p className="text-xl text-blue-100 font-medium mb-12 leading-relaxed">
                ACED students don't just learn from books. They engage in university-partnered research, international exchange programs, and industry internships.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                  <h4 className="text-2xl font-black text-yellow-400 mb-2 uppercase">Year 10</h4>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Early VCE Access</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                  <h4 className="text-2xl font-black text-yellow-400 mb-2 uppercase">Year 12</h4>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Uni Extension Studies</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
               <img src="https://www.buildingengineering.com.au/wp-content/uploads/2024/05/Bldg.Eng-Mount-Ridley-College-Finals-1.jpg" alt="Curriculum" className="rounded-[3rem] shadow-2xl relative z-10" />
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full blur-[80px] opacity-30"></div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ACEDCurriculum;
