import React from "react";
import { ArrowLeft, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  },
];

const TeamPage: React.FC = () => {
  const navigate = useNavigate();

  // Project Accent Colors
  const accentPrimary = "#d6d3ff"; // Lavender from index.css
  const accentSecondary = "#A5A3D1"; // Muted Purple from index.css (pie-2)

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#F9FAFB] font-sans text-[#111827] transition-colors duration-300 dark:bg-[#0F0F0F] dark:text-white">
      {/* Integrated Background Orbs using project palette */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-[#d6d3ff]/15 blur-[120px]" />
        <div className="absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full bg-[#A5A3D1]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-6">
        {/* Navigation */}
        <button
          onClick={() => navigate(-1)}
          className="group absolute top-8 left-8 flex cursor-pointer items-center gap-2 text-gray-500 transition-colors hover:text-[#A5A3D1]"
        >
          <ArrowLeft
            size={18}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#d6d3ff]/20 px-3 py-1 text-xs font-bold tracking-widest text-[#7A78AC] uppercase dark:text-[#d6d3ff]">
            <Users size={14} />
            <span>Async Alliance (Team 33)</span>
          </div>
          <h1 className="mb-3 text-4xl font-black tracking-tight md:text-5xl">
            Meet the{" "}
            <span className="bg-linear-to-r from-[#7A78AC] to-[#d6d3ff] bg-clip-text text-transparent">
              Architects
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-base font-medium text-gray-500 dark:text-gray-400">
            Building the future of career management with Async Alliance.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#d6d3ff]/10 dark:border-[#1E1F20] dark:bg-[#151617]"
            >
              {/* Card Accent (Bubbles) - Using project lavender */}
              <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-[80px] bg-linear-to-br from-[#d6d3ff]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex items-center gap-4">
                {/* Avatar with high-contrast design */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 shadow-sm transition-all duration-300 group-hover:shadow-md dark:border-white/10 dark:bg-white/10">
                  <span className="transform bg-linear-to-tr from-[#7A78AC] to-[#d6d3ff] bg-clip-text text-xl font-black text-transparent transition-transform group-hover:scale-110">
                    {member.name.charAt(0)}
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-lg font-bold transition-colors group-hover:text-[#7A78AC] dark:group-hover:text-[#d6d3ff]">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-bold tracking-widest text-[#A5A3D1] uppercase dark:text-[#71717A]">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="relative z-10 mt-4 flex gap-2 border-t border-gray-50 pt-4 dark:border-[#1E1F20]">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gray-50 p-2 text-gray-400 transition-all hover:bg-[#111827] hover:text-white dark:bg-[#1E1F20] dark:hover:bg-white dark:hover:text-black"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gray-50 p-2 text-gray-400 transition-all hover:bg-[#0077b5] hover:text-white dark:bg-[#1E1F20]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="mb-1 text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase dark:text-[#71717A]">
            © {new Date().getFullYear()} Async Alliance • Built with passion
          </p>
          <p className="text-[9px] tracking-widest text-gray-400 uppercase opacity-80 dark:text-[#71717A]">
            Facilitated by{" "}
            <a
              href="https://chingu.io"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-500"
            >
              Chingu
            </a>{" "}
            • Voyage 60
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
