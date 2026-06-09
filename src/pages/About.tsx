import { motion } from 'framer-motion';
import { Shield, Target, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Banner */}
      <section className="bg-blue-900 pt-40 pb-24 text-white relative overflow-hidden">
        <div className="blob top-0 right-0 opacity-20 scale-150"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-none">
              The <span className="text-yellow-400">MRC</span> Journey
            </h1>
            <p className="text-2xl text-blue-100 max-w-2xl font-medium leading-relaxed">
              Pioneering 21st-century education in the heart of Craigieburn since 2009.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principal Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-900 uppercase">A Message from the Principal</h2>
              <div className="w-20 h-1.5 bg-yellow-500 mb-8"></div>
              <div className="text-gray-700 space-y-4 leading-relaxed">
                <p>
                  Welcome to Mount Ridley P-12 College. As Principal, I am immensely proud of the learning community we have built since our establishment in 2009. Our College is a place where every student is valued, challenged, and supported to reach their full potential.
                </p>
                <p>
                  The Prep to Year 12 nature of our College allows for an uninterrupted emphasis on the social, emotional, cultural and academic needs of all students. This continuity is a hallmark of the MRC experience, ensuring that as students grow, their education evolves with them in a familiar and safe environment.
                </p>
                <p>
                  Our motto, <strong>"Preparing today’s students for tomorrow’s opportunities,"</strong> reflects our commitment to 21st-century learning. We focus on developing life-long learners who are informed, responsible, and active citizens in a global community.
                </p>
                <p>
                  Our Animating Principle for 2025, <strong>"Be Honest, Build Trust,"</strong> underscores the importance of integrity and mutual respect in everything we do.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://www.buildingengineering.com.au/wp-content/uploads/2024/05/Bldg.Eng-Mount-Ridley-College-Finals-12.jpg"
                alt="Mount Ridley College Interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-yellow-400 p-8 rounded-2xl hidden md:block">
                <p className="text-blue-900 font-black text-4xl italic">"Empowering<br/>Lifelong<br/>Learners"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 uppercase">Vision & Values</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              The College’s values underpin our stimulating and harmonious learning environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Personal Success', desc: 'Encouraging individual excellence in all pursuits.', icon: <Award className="text-blue-600" /> },
              { title: 'Respect', desc: 'Valuing self, others, and our environment.', icon: <Shield className="text-blue-700" /> },
              { title: 'Tolerance', desc: 'Embracing diversity and different perspectives.', icon: <Heart className="text-blue-800" /> },
              { title: 'Honesty', desc: 'Acting with integrity and truthfulness in all dealings.', icon: <Target className="text-blue-900" /> },
              { title: 'Trust', desc: 'Building strong relationships based on mutual reliability.', icon: <Shield className="text-yellow-600" /> },
              { title: 'Responsibility', desc: 'Taking ownership of actions and their consequences.', icon: <Award className="text-yellow-700" /> },
            ].map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* College Identity */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
            <div className="w-full md:w-1/3 flex justify-center">
               <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center p-4 border-4 border-yellow-500">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-blue-900 fill-current">
                    <circle cx="35" cy="40" r="10" />
                    <path d="M35 55c-8 0-15 5-15 12v10h30V67c0-7-7-12-15-12z" />
                    <circle cx="65" cy="30" r="12" />
                    <path d="M65 48c-10 0-18 6-18 15v15h36V63c0-9-8-15-18-15z" />
                  </svg>
               </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400 uppercase">The College Logo</h2>
              <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                Our College logo symbolises a small and large person who are linking arms. This is designed to represent both our younger students working with our older students, as well as the partnership between staff and students alike.
              </p>
              <p className="text-blue-100 text-lg leading-relaxed">
                The underpinning philosophy is centered around community partnerships, fostering an environment where everyone works together for the benefit of the students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
