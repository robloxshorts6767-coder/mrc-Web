import { motion } from 'framer-motion';
import { ClipboardCheck, UserPlus, Trophy, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ACEDAdmissions = () => {
  const steps = [
    { title: 'Application', date: 'August 2025', icon: <UserPlus />, desc: 'Submit your interest and academic records for review.' },
    { title: 'Aptitude Test', date: 'September 2025', icon: <ClipboardCheck />, desc: 'A rigorous exam testing logical, verbal, and numerical reasoning.' },
    { title: 'Interview', date: 'October 2025', icon: <Mail />, desc: 'Meet our lead educators to discuss your passions and goals.' },
    { title: 'Orientation', date: 'November 2025', icon: <Trophy />, desc: 'Join the cohort and prepare for your ACED journey.' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen pt-40"
    >
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
             <div className="w-full lg:w-1/2">
                <span className="text-blue-900 font-black uppercase tracking-widest text-sm mb-4 inline-block">Join the Elite</span>
                <h1 className="text-5xl md:text-8xl font-black text-blue-900 mb-8 uppercase tracking-tighter leading-none">
                  ACED <span className="text-yellow-500">ADMISSIONS</span>
                </h1>
                <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                  Entry into the ACED program is highly competitive. We look for students who are not just high-achieving, but also curious, resilient, and collaborative.
                </p>
                <div className="bg-slate-100 p-8 rounded-[2rem] border-l-8 border-yellow-400">
                  <p className="text-lg font-bold text-blue-900 italic">
                    "The ACED entrance exam was tough, but it showed me what I was truly capable of. Now, I'm doing physics two years ahead!" — Year 9 ACED Student
                  </p>
                </div>
             </div>
             <div className="w-full lg:w-1/2">
                <img src="https://www.buildingengineering.com.au/wp-content/uploads/2024/05/Bldg.Eng-Mount-Ridley-College-Finals-20.jpg" alt="Admissions" className="rounded-[3rem] shadow-2xl" />
             </div>
          </div>

          <h2 className="text-4xl font-black text-blue-900 mb-12 uppercase tracking-tight text-center">Admission <span className="text-yellow-500">Timeline</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity scale-[3]">
                   {step.icon}
                </div>
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-blue-900 shadow-md">
                   {step.icon}
                </div>
                <h3 className="text-2xl font-black text-blue-900 mb-1 uppercase tracking-tight">{step.title}</h3>
                <p className="text-yellow-600 font-black text-sm uppercase mb-4 tracking-widest">{step.date}</p>
                <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 text-center">
             <Link to="/contact" className="inline-flex items-center space-x-4 bg-blue-900 text-white px-12 py-6 rounded-3xl font-black text-2xl hover:bg-blue-800 hover:scale-105 transition-all shadow-2xl">
                <span>INQUIRE ABOUT ENTRY</span>
                <ArrowRight size={28} />
             </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ACEDAdmissions;
