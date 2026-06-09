import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Trophy, GraduationCap, Calendar, Bell, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://www.buildingengineering.com.au/wp-content/uploads/2024/05/Bldg.Eng-Mount-Ridley-College-Finals-6.jpg"
            alt="Mount Ridley College Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-yellow-400 font-bold tracking-widest mb-2 uppercase">Welcome to Mount Ridley P-12 College</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Preparing Today's Students for <span className="text-yellow-400 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Tomorrow's Opportunities</span>
            </h1>
            <p className="text-xl mb-8 text-blue-50 max-w-2xl">
              A vibrant and inclusive learning community dedicated to fostering academic excellence, personal growth, and lifelong learning in Craigieburn.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 flex items-center space-x-2">
                <span>Enrol Now</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center space-x-2">
                <span>Learn More</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Quick Look */}
      <section className="py-24 bg-white relative overflow-hidden bg-pattern">
        <div className="blob top-0 -left-64 opacity-20"></div>
        <div className="blob bottom-0 -right-64 opacity-20 bg-blue-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-blue-900 mb-4 tracking-tighter uppercase">Our Core <span className="text-yellow-500">Values</span></h2>
              <div className="w-40 h-2 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto rounded-full"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { title: 'Success', icon: <Trophy size={40} />, color: 'bg-blue-600', delay: 0 },
              { title: 'Respect', icon: <Users size={40} />, color: 'bg-blue-700', delay: 0.1 },
              { title: 'Tolerance', icon: <BookOpen size={40} />, color: 'bg-blue-800', delay: 0.2 },
              { title: 'Honesty', icon: <Bell size={40} />, color: 'bg-blue-900', delay: 0.3 },
              { title: 'Trust', icon: <GraduationCap size={40} />, color: 'bg-indigo-900', delay: 0.4 },
              { title: 'Responsibility', icon: <Calendar size={40} />, color: 'bg-yellow-500', delay: 0.5 },
            ].map((value) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -15, rotate: 2 }}
                transition={{ duration: 0.4, delay: value.delay }}
                viewport={{ once: true }}
                className={`${value.color} p-8 rounded-[2rem] text-white text-center flex flex-col items-center shadow-2xl relative group cursor-default`}
              >
                <div className="absolute inset-0 bg-white/10 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="mb-6 bg-white/20 p-4 rounded-2xl group-hover:bg-white group-hover:text-blue-900 transition-all duration-300">{value.icon}</div>
                <h3 className="font-black text-lg uppercase tracking-tight leading-none">{value.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message Teaser */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-yellow-400 rounded-[3rem] rotate-3 opacity-20"></div>
                <img
                  src="https://www.buildingengineering.com.au/wp-content/uploads/2024/05/Bldg.Eng-Mount-Ridley-College-Finals-4.jpg"
                  alt="Mount Ridley College Labs"
                  className="rounded-[2.5rem] shadow-2xl relative z-10 border-8 border-white"
                />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-900 rounded-full flex items-center justify-center p-8 z-20 animate-float hidden lg:flex shadow-xl">
                  <BookOpen className="text-yellow-400 w-full h-full" />
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <span className="inline-block px-4 py-1.5 bg-blue-900 text-white rounded-full text-xs font-black uppercase tracking-widest mb-6">Principal's Welcome</span>
              <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-8 uppercase leading-none tracking-tighter">Excellence in <span className="text-yellow-500">Education</span></h2>
              <div className="relative pl-8 border-l-4 border-yellow-500 mb-8">
                <p className="text-slate-600 text-xl leading-relaxed italic font-medium">
                  "At Mount Ridley P-12 College, we believe in the personal growth and development of every student. Our caring environment encourages students to think, reflect and develop into life-long learners."
                </p>
              </div>
              <p className="text-slate-700 mb-10 text-lg leading-relaxed">
                Our purpose-built campus in Craigieburn provides the perfect environment for students from Prep to Year 12 to thrive academically and socially, preparing them for the global community.
              </p>
              <Link to="/about" className="group inline-flex items-center space-x-3 bg-blue-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-800 transition-all shadow-xl hover:-translate-y-1 active:translate-y-0">
                <span>GET THE FULL STORY</span>
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800/20 rounded-full -ml-48 -mb-48"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Specialised Programs</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              We offer exclusive programs designed to challenge and support our students in achieving their best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2 group shadow-2xl">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-lg">
                <Rocket className="text-blue-900" size={32} />
              </div>
              <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">ACED Excellence</h3>
              <p className="text-blue-100 mb-8 font-medium leading-relaxed">
                Acceleration, Challenge, Enrichment, Discovery. The elite academic pathway for high-achieving students.
              </p>
              <Link to="/aced" className="flex items-center text-yellow-400 font-black hover:text-white transition-colors uppercase tracking-widest text-sm">
                <span>Join the Elite</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="text-blue-900" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Elite Sports</h3>
              <p className="text-blue-100 mb-6">
                ESP provides students with access to exclusive sports training and intensive conditioning to excel in their athletic pursuits.
              </p>
              <Link to="/learning" className="flex items-center text-yellow-400 font-bold hover:text-white transition-colors">
                <span>Explore ESP</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-blue-900" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">High Achievers</h3>
              <p className="text-blue-100 mb-6">
                Middle Years High Achievers Class (MHAC) focuses on achieving high levels of academic excellence across all disciplines.
              </p>
              <Link to="/learning" className="flex items-center text-yellow-400 font-bold hover:text-white transition-colors">
                <span>Learn more</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* House System */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 uppercase">Our House System</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Building community spirit and fostering healthy competition through our four college houses.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-600 p-4 rounded-xl text-white font-bold flex flex-col items-center">
                  <span>Cleveland</span>
                  <div className="w-8 h-1 bg-white mt-2 rounded"></div>
                </div>
                <div className="bg-white border-2 border-gray-200 p-4 rounded-xl text-gray-800 font-bold flex flex-col items-center">
                  <span>Highbury</span>
                  <div className="w-8 h-1 bg-gray-400 mt-2 rounded"></div>
                </div>
                <div className="bg-black p-4 rounded-xl text-white font-bold flex flex-col items-center">
                  <span>Aitken</span>
                  <div className="w-8 h-1 bg-white mt-2 rounded"></div>
                </div>
                <div className="bg-yellow-500 p-4 rounded-xl text-blue-900 font-bold flex flex-col items-center">
                  <span>Hampton</span>
                  <div className="w-8 h-1 bg-blue-900 mt-2 rounded"></div>
                </div>
              </div>
              <Link to="/community" className="inline-block bg-blue-900 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors">
                Explore Student Life
              </Link>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img
                src="https://www.buildingengineering.com.au/wp-content/uploads/2024/05/Bldg.Eng-Mount-Ridley-College-Finals-1.jpg"
                alt="Mount Ridley College Performing Arts"
                className="rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
