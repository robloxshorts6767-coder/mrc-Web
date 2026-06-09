import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, Globe, MessageSquare, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1">
                <svg viewBox="0 0 100 100" className="w-full h-full text-blue-900 fill-current">
                  <circle cx="35" cy="40" r="10" />
                  <path d="M35 55c-8 0-15 5-15 12v10h30V67c0-7-7-12-15-12z" />
                  <circle cx="65" cy="30" r="12" />
                  <path d="M65 48c-10 0-18 6-18 15v15h36V63c0-9-8-15-18-15z" />
                </svg>
              </div>
              <span className="font-bold text-lg tracking-tight uppercase">Mount Ridley College</span>
            </div>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed">
              Preparing today's students for tomorrow's opportunities. A vibrant P-12 learning community in Craigieburn.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400 transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-yellow-400 transition-colors"><MessageSquare size={20} /></a>
              <a href="#" className="hover:text-yellow-400 transition-colors"><Share2 size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Vision & Values</Link></li>
              <li><Link to="/aced" className="hover:text-white transition-colors font-bold text-yellow-400">ACED Excellence</Link></li>
              <li><Link to="/learning" className="hover:text-white transition-colors">Curriculum</Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors">House System</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Enrolment</Link></li>
              <li><a href="https://mountridleycollege-vic.compass.education/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-white transition-colors">
                <span>Compass Portal</span>
                <ExternalLink size={12} />
              </a></li>
            </ul>
          </div>

          {/* Learning Sections */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-400">Learning</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link to="/learning#early" className="hover:text-white transition-colors">Early Years (P-4)</Link></li>
              <li><Link to="/learning#middle" className="hover:text-white transition-colors">Middle Years (5-8)</Link></li>
              <li><Link to="/learning#senior" className="hover:text-white transition-colors">Senior Years (9-12)</Link></li>
              <li><Link to="/learning#special" className="hover:text-white transition-colors">Specialist Programs</Link></li>
              <li><Link to="/learning#sports" className="hover:text-white transition-colors">Elite Sports Program</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-400">Contact Us</h3>
            <ul className="space-y-4 text-sm text-blue-100">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-yellow-400 flex-shrink-0" />
                <span>2-30 Hampton St, Craigieburn VIC 3064, Australia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-yellow-400 flex-shrink-0" />
                <span>(03) 8338 3600</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-yellow-400 flex-shrink-0" />
                <span>mount.ridley.p12@education.vic.gov.au</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-xs text-blue-300">
          <p>© {new Date().getFullYear()} Mount Ridley P-12 College. All Rights Reserved. | CRICOS Provider Code: 00861K</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
