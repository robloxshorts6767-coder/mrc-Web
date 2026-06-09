import { motion } from 'framer-motion';
import { Users, Star, Handshake, Heart } from 'lucide-react';

const Community = () => {
  const houses = [
    { name: 'Cleveland', color: 'bg-blue-600', text: 'white', motto: 'Strength in Unity' },
    { name: 'Highbury', color: 'bg-white', text: 'gray-900', motto: 'Spirit of Excellence', border: 'border-gray-200' },
    { name: 'Aitken', color: 'bg-black', text: 'white', motto: 'Strive for Success' },
    { name: 'Hampton', color: 'bg-yellow-500', text: 'blue-900', motto: 'Leading with Pride' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Banner */}
      <section className="bg-blue-900 pt-40 pb-24 text-white relative overflow-hidden">
        <div className="blob top-0 left-0 opacity-20 rotate-180"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-none">
              Stronger <span className="text-yellow-400">Together</span>
            </h1>
            <p className="text-2xl text-blue-100 font-medium leading-relaxed">
              We're more than a school — we're a vibrant community built on respect, partnership, and shared goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* House System Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 uppercase">The House System</h2>
            <div className="w-20 h-1.5 bg-yellow-500 mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Our house system is integral to building community spirit. All students are assigned to a house upon enrolment and earn points through participation and demonstrating school values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {houses.map((house) => (
              <motion.div
                key={house.name}
                whileHover={{ y: -10 }}
                className={`${house.color} ${house.border || ''} rounded-[2rem] p-10 shadow-xl flex flex-col items-center text-center ${house.text === 'white' ? 'text-white' : 'text-gray-900'}`}
              >
                <div className={`w-20 h-20 rounded-full bg-current opacity-10 mb-6`}></div>
                <h3 className="text-3xl font-black mb-2 uppercase">{house.name}</h3>
                <p className="opacity-80 italic font-medium">"{house.motto}"</p>
                <div className="mt-8 pt-8 border-t border-current opacity-20 w-full">
                  <p className="text-sm font-bold tracking-widest uppercase">House Points Leader</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             <div className="w-full lg:w-1/2">
                <img src="https://www.buildingengineering.com.au/wp-content/uploads/2024/05/Bldg.Eng-Mount-Ridley-College-Finals-20.jpg" alt="Student Area" className="rounded-[3rem] shadow-2xl" />
             </div>
             <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold text-blue-900 mb-6 uppercase">Student Leadership</h2>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  We recognise the profound contribution student voice provides to the development of our college community. Our Student Leadership Program (SLP) enhances self-esteem and fosters partnerships between students and staff.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: <Star className="text-yellow-500" />, text: 'College Captains & Vice Captains' },
                    { icon: <Users className="text-blue-600" />, text: 'House Captains' },
                    { icon: <Handshake className="text-blue-700" />, text: 'Student Representative Council (SRC)' },
                    { icon: <Heart className="text-red-500" />, text: 'Peer Mentoring Programs' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm">
                      {item.icon}
                      <span className="font-bold text-gray-800">{item.text}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Parent Involvement */}
      <section className="py-32 bg-blue-900 text-white relative overflow-hidden">
        <div className="blob bottom-0 right-0 opacity-20 scale-150"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter">Partner with <span className="text-yellow-400">Us</span></h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-16 text-xl font-medium">
            We empower parents to play an active role in shaping the future of our students.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'College Council', desc: 'Shape the strategic direction and support the learning needs of our entire community.' },
              { title: 'Classroom Helpers', desc: 'Hands-on support in early years literacy and numeracy, directly impacting student growth.' },
              { title: 'Parents & Friends', desc: 'Build community spirit through exciting events and collaborative fundraising initiatives.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all group text-left"
              >
                <div className="w-14 h-14 bg-yellow-400 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg">
                  <Heart className="text-blue-900" size={28} fill="currentColor" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-yellow-400 uppercase tracking-tight leading-none">{item.title}</h3>
                <p className="text-lg text-blue-100 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Community;
