import { motion } from 'framer-motion';
import { Rocket, Target, Zap, Award, Star, ArrowRight, Brain, Globe, Shield, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const ACED = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 pt-48 pb-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800"></div>
        <div className="blob top-0 right-0 opacity-30 scale-150 rotate-45"></div>
        <div className="blob bottom-0 left-0 bg-yellow-500 opacity-20 scale-125"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-6 py-2 bg-yellow-400 text-blue-900 rounded-full text-sm font-black uppercase tracking-[0.2em] mb-8 shadow-xl animate-float">
              Elite Academic Pathway
            </span>
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter uppercase leading-none">
              ACED <span className="text-yellow-400">PROGRAM</span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 font-medium leading-relaxed mb-12">
              Acceleration, Challenge, Enrichment, Discovery. Designed for the high-flyers, the thinkers, and the future leaders.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/aced/curriculum" className="bg-white text-blue-900 px-10 py-5 rounded-[2rem] font-black text-xl hover:scale-110 transition-transform shadow-2xl flex items-center space-x-3">
                <BookOpen className="text-blue-900" />
                <span>VIEW CURRICULUM</span>
              </Link>
              <Link to="/aced/admissions" className="bg-yellow-400 text-blue-900 px-10 py-5 rounded-[2rem] font-black text-xl hover:scale-110 transition-transform shadow-2xl flex items-center space-x-3">
                <Rocket className="text-blue-900" />
                <span>ENTRY DETAILS</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The 4 Pillars */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Acceleration', icon: <Zap />, desc: 'Move through curriculum at a faster pace, matching your potential.', color: 'bg-blue-600' },
              { title: 'Challenge', icon: <Target />, desc: 'Complex problem-solving that pushes the boundaries of your knowledge.', color: 'bg-indigo-600' },
              { title: 'Enrichment', icon: <Star />, desc: 'Go deep into subjects with projects and research that inspire passion.', color: 'bg-blue-800' },
              { title: 'Discovery', icon: <Globe />, desc: 'Explore new fields, from advanced coding to global politics.', color: 'bg-yellow-500' }
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`${pillar.color} p-10 rounded-[3rem] text-white shadow-2xl hover:-translate-y-4 transition-all group`}
              >
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{pillar.title}</h3>
                <p className="text-lg font-medium opacity-90 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why its so good */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="https://www.buildingengineering.com.au/wp-content/uploads/2024/05/Bldg.Eng-Mount-Ridley-College-Finals-4.jpg" 
                  alt="ACED Lab" 
                  className="rounded-[4rem] shadow-2xl border-8 border-slate-50 relative z-10"
                />
                <div className="absolute -inset-10 bg-yellow-400/20 rounded-full blur-[100px] z-0"></div>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-5xl md:text-7xl font-black text-blue-900 mb-8 uppercase leading-none tracking-tighter">
                Why ACED is <span className="text-yellow-500">Legendary</span>
              </h2>
              <div className="space-y-8">
                {[
                  { title: 'Customized Learning', icon: <Brain />, text: 'No more waiting for the class to catch up. Work at your own level.' },
                  { title: 'High-Tech Labs', icon: <Zap />, text: 'Access to the same tools and environments used in Stage 6 senior years.' },
                  { title: 'Peer Excellence', icon: <Shield />, text: 'Surround yourself with other motivated, high-achieving students.' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start space-x-6"
                  >
                    <div className="bg-blue-900 p-4 rounded-2xl text-yellow-400 shadow-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-blue-900 uppercase">{item.title}</h4>
                      <p className="text-slate-600 text-lg font-medium">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories / 2024-2026 Vibes */}
      <section className="py-32 bg-blue-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-16 uppercase tracking-tighter">THE <span className="text-yellow-400">NEXT GEN</span> 2024-2026</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-[3rem]">
              <img src="https://www.buildingengineering.com.au/wp-content/uploads/2024/05/Bldg.Eng-Mount-Ridley-College-Finals-6.jpg" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110" alt="Success 1" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-80"></div>
              <div className="absolute bottom-10 left-10 right-10 text-left">
                <Award className="text-yellow-400 mb-4" size={40} />
                <h3 className="text-3xl font-black uppercase">VCE Early Access</h3>
                <p className="text-lg font-medium opacity-90">ACED students in Year 10 are already tackling VCE Units 1 & 2 with 100% success rate.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[3rem]">
               <img src="https://www.buildingengineering.com.au/wp-content/uploads/2024/05/Bldg.Eng-Mount-Ridley-College-Finals-12.jpg" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110" alt="Success 2" />
               <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-80"></div>
               <div className="absolute bottom-10 left-10 right-10 text-left">
                <Zap className="text-yellow-400 mb-4" size={40} />
                <h3 className="text-3xl font-black uppercase">Tech Pioneers</h3>
                <p className="text-lg font-medium opacity-90">The 2025 ACED cohort led the state in robotics and coding competitions.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[3rem]">
               <img src="https://www.buildingengineering.com.au/wp-content/uploads/2024/05/Bldg.Eng-Mount-Ridley-College-Finals-20.jpg" className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110" alt="Success 3" />
               <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-80"></div>
               <div className="absolute bottom-10 left-10 right-10 text-left">
                <Star className="text-yellow-400 mb-4" size={40} />
                <h3 className="text-3xl font-black uppercase">Global Impact</h3>
                <p className="text-lg font-medium opacity-90">Students representing MRC on the world stage in science and climate research.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-24 bg-white/5 backdrop-blur-xl p-16 rounded-[4rem] border border-white/10">
            <h3 className="text-4xl md:text-5xl font-black text-yellow-400 uppercase mb-8">Ready to Elevate?</h3>
            <p className="text-xl md:text-2xl font-medium text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Applications for the 2026 ACED intake are now open for Year 7 and Year 9 entry.
            </p>
            <Link to="/contact" className="inline-flex items-center space-x-4 bg-yellow-400 text-blue-900 px-12 py-6 rounded-3xl font-black text-2xl hover:bg-white hover:scale-105 transition-all shadow-2xl">
              <span>START YOUR APPLICATION</span>
              <ArrowRight size={28} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ACED;
