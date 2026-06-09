import { Book, Compass, Cpu, Palette, Users, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Learning = () => {
  const sections = [
    {
      id: 'early',
      title: 'Early Years (Prep - Year 4)',
      description: 'Focusing on building strong foundations in literacy and numeracy while fostering curiosity and social development.',
      icon: <Book className="text-blue-600" size={32} />,
      features: ['Individualised learning plans', 'Emphasis on play-based learning', 'Strong oral language focus', 'Introduction to STEM']
    },
    {
      id: 'middle',
      title: 'Middle Years (Year 5 - Year 8)',
      description: 'Supporting students through the transition from childhood to adolescence with a focus on engagement and challenge.',
      icon: <Compass className="text-blue-700" size={32} />,
      features: ['High Achievers Classes (MHAC)', 'Broad subject exploration', 'Leadership opportunities', 'Digital literacy focus']
    },
    {
      id: 'senior',
      title: 'Senior Years (Year 9 - Year 12)',
      description: 'Preparing students for their future paths through VCE, VET, and diverse elective choices.',
      icon: <Cpu className="text-blue-800" size={32} />,
      features: ['VCE and VET pathways', 'Personalised careers counseling', 'University partnership programs', 'Rigorous academic support']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-50"
    >
      <section className="bg-blue-900 pt-40 pb-24 text-white relative overflow-hidden">
        <div className="blob top-0 left-0 opacity-20 scale-125"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-none">
              Future <span className="text-yellow-400">Leaders</span>
            </h1>
            <p className="text-2xl text-blue-100 font-medium leading-relaxed max-w-3xl mx-auto">
              A comprehensive educational journey from Prep to Graduation, designed to empower every learner.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {sections.map((section, index) => (
              <motion.div 
                key={section.id} 
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all group border border-slate-100"
              >
                <div className="w-20 h-20 bg-blue-900 rounded-3xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <div className="text-white">{section.icon}</div>
                </div>
                <h3 className="text-3xl font-black text-blue-900 mb-6 leading-none tracking-tight">{section.title}</h3>
                <p className="text-slate-600 mb-10 text-lg leading-relaxed font-medium">{section.description}</p>
                <ul className="space-y-4">
                  {section.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-4 text-slate-700 font-bold group/item">
                      <div className="w-6 h-6 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:rotate-12 transition-transform">
                        <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-blue-900 text-white" id="special">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase">Specialist Programs</h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <Trophy className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">ACED Program</h3>
                    <p className="text-blue-100 italic mb-2">(Acceleration, Challenge, Enrichment, Discovery)</p>
                    <p className="text-blue-200 text-sm leading-relaxed">
                      Designed for capable and committed students who are ready to meet high academic rigours. This program provides an accelerated learning path for students who demonstrate high potential.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <Palette className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Elite Sports Program (ESP)</h3>
                    <p className="text-blue-200 text-sm leading-relaxed">
                      The ESP offers students exclusive sports training and intensive conditioning. It’s designed for student-athletes who want to balance high-level athletic development with academic success.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <Users className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">EAL & Support Programs</h3>
                    <p className="text-blue-200 text-sm leading-relaxed">
                      We offer specialised assistance through English as an Additional Language (EAL), Oral Language, and Literacy/Numeracy intervention programs to ensure every student succeeds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://www.buildingengineering.com.au/wp-content/uploads/2024/05/Bldg.Eng-Mount-Ridley-College-Finals-6.jpg" alt="Learning 1" className="rounded-2xl h-64 w-full object-cover shadow-lg" />
                <img src="https://www.buildingengineering.com.au/wp-content/uploads/2024/05/Bldg.Eng-Mount-Ridley-College-Finals-4.jpg" alt="Learning 2" className="rounded-2xl h-64 w-full object-cover shadow-lg mt-8" />
                <img src="https://www.buildingengineering.com.au/wp-content/uploads/2024/05/Bldg.Eng-Mount-Ridley-College-Finals-1.jpg" alt="Learning 3" className="rounded-2xl h-64 w-full object-cover shadow-lg -mt-8" />
                <img src="https://www.buildingengineering.com.au/wp-content/uploads/2024/05/Bldg.Eng-Mount-Ridley-College-Finals-12.jpg" alt="Learning 4" className="rounded-2xl h-64 w-full object-cover shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Learning;
