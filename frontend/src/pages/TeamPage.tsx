import React from 'react';
import { ArrowLeft, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const teamMembers = [
  {
    name: "Zuwee Aliyu Mohammed",
    role: "Scrum Master",
    github: "https://github.com/zuweeali",
    linkedin: "https://linkedin.com/in/zuwaira-aliyu-mohammed",
  },
  {
    name: "Greg Minezzi",
    role: "Frontend Developer",
    github: "https://github.com/minezzig",
    linkedin: "https://linkedin.com/in/gregminezzi",
  },
  {
    name: "Ivan Brovko",
    role: "Frontend Developer",
    github: "https://github.com/HoneyVanya",
    linkedin: "https://linkedin.com/in/ivan-brovko",
  },
  {
    name: "Anthony Tibamwenda",
    role: "Frontend Developer",
    github: "https://github.com/AskTiba",
    linkedin: "https://www.linkedin.com/in/tibamwenda-anthony-64144820b/",
  },
  {
    name: "Afuwape Babatunde",
    role: "Backend Developer",
    github: "https://github.com/Afubasic",
    linkedin: "https://www.linkedin.com/in/afuwape-babatunde/",
  },
  {
    name: "Olivia Prusinowski",
    role: "UI/UX Designer",
    github: "https://github.com/opruz",
    linkedin: "http://www.linkedin.com/in/olivia-prusinowski-040268160",
  }
];

const TeamPage: React.FC = () => {
  const navigate = useNavigate();

  // Project Accent Colors
  const accentPrimary = "#d6d3ff"; // Lavender from index.css
  const accentSecondary = "#A5A3D1"; // Muted Purple from index.css (pie-2)

  return (
    <div className="h-screen bg-[#F9FAFB] dark:bg-[#0F0F0F] text-[#111827] dark:text-white transition-colors duration-300 overflow-hidden flex flex-col font-sans">
      {/* Integrated Background Orbs using project palette */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#d6d3ff]/15 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-[#A5A3D1]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6 flex-1 flex flex-col justify-center w-full">
        {/* Navigation */}
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-8 left-8 flex items-center gap-2 text-gray-500 hover:text-[#A5A3D1] transition-colors group cursor-pointer"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d6d3ff]/20 text-[#7A78AC] dark:text-[#d6d3ff] text-xs font-bold mb-3 uppercase tracking-widest">
            <Users size={14} />
            <span>Async Alliance (Team 33)</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-3 tracking-tight">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A78AC] to-[#d6d3ff]">Architects</span>
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-medium">
            Building the future of career management with Async Alliance.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-[#151617] border border-gray-100 dark:border-[#1E1F20] rounded-2xl p-6 hover:shadow-2xl hover:shadow-[#d6d3ff]/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Card Accent (Bubbles) - Using project lavender */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#d6d3ff]/30 to-transparent rounded-bl-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-4 relative z-10">
                {/* Avatar with high-contrast design */}
                <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/10 border border-gray-100 dark:border-white/10 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                  <span className="text-xl font-black bg-gradient-to-tr from-[#7A78AC] to-[#d6d3ff] bg-clip-text text-transparent transform group-hover:scale-110 transition-transform">
                    {member.name.charAt(0)}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold truncate group-hover:text-[#7A78AC] dark:group-hover:text-[#d6d3ff] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#A5A3D1] dark:text-[#71717A] text-[10px] font-bold uppercase tracking-widest">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-50 dark:border-[#1E1F20] relative z-10">
                <a 
                  href={member.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-50 dark:bg-[#1E1F20] hover:bg-[#111827] hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-gray-400"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                </a>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-50 dark:bg-[#1E1F20] hover:bg-[#0077b5] hover:text-white transition-all text-gray-400"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 dark:text-[#71717A] text-[10px] font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Async Alliance • Built with passion
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
