import React, { useState, useEffect } from "react";

const DATA = {
  profile: {
    name: "Fortune F. Thobela",
    title: "BSc IT Student | Aspiring Software/Data Engineer",
    contact: "079 353 9833 | fezilefortune115@gmail.com",
    location: "Auckland Park, Johannesburg",
    linkedin: "http://www.linkedin.com/in/fortune-thobela-89b871271",
    pnet: "https://www.pnet.co.za",
    github: "https://github.com/FortuneFezileThobela",
    bio: "I combine a strong academic foundation in software development with hands-on experience guiding peers through programming logic and algorithmic problem-solving. Dedicated to designing efficient, scalable data architectures.",
    cvFile: "Fortune Fezile Thobela udated cv 2026.pdf",
  },
  languages: [
    { name: "SiSwati", proficiency: "Home Language" },
    { name: "English", proficiency: "Fluent" },
    { name: "Zulu", proficiency: "Fluent" },
  ],
  technicalSkills: {
    programming: [
      "Java",
      "C++",
      "JavaScript",
      "TypeScript",
      "C#",
      "Python",
      "VB",
    ],
    tools: ["GitHub", "Git", "Docker", "VS Code"],
    methodologies: [
      "Agile/Scrum",
      "Object-Oriented Design (OOD)",
      "Data Modeling",
      "Relational Database Design",
    ],
    databases: ["SQL Server", "MySQL", "MongoDB"],
  },
  storyline: [
    {
      id: 1,
      src: "/story-1.jpeg",
      title: "01 // Initiation",
      desc: "My Grade R graduation day. Where my journey of learning and discovery first started!",
    },
    {
      id: 2,
      src: "/story-2.jpeg",
      title: "02 // The Ascent",
      desc: "Stepping into Grade 12. Setting big goals and working hard on my mathematics and science.",
    },
    {
      id: 3,
      src: "/story-3.jpeg",
      title: "03 // The Crucible",
      desc: "Late nights and heavy studying for final exams to make my university dream come true.",
    },
    {
      id: 4,
      src: "/story-4.jpeg",
      title: "04 // Foundation",
      desc: "My first year at UJ. Learning core computer science concepts and falling in love with coding.",
    },
    {
      id: 5,
      src: "/story-5.jpeg",
      title: "05 // Culmination",
      desc: "Starting my final year. Ready to build advanced systems and step into the tech world.",
    },
    {
      id: 6,
      src: "/story-6.jpeg",
      title: "06 // The Grind",
      desc: "Balancing exams, building platforms like EduBridge, and perfecting my machine learning code.",
    },
    {
      id: 7,
      src: "/story-7.jpg",
      title: "07 // Compilation",
      desc: "Working towards graduation! Preparing for the next big step into the tech and engineering industry.",
    },
  ],
  modules: [
    "Object-Oriented Programming (Java/C++)",
    "Data Structures & Algorithms",
    "Relational Database Design (SQL)",
    "Software Engineering Principles",
    "Computer Networks & Security",
    "Applied Machine Learning",
    "Web Application Development",
    "Systems Analysis & Design",
  ],
  experienceMap: [
    {
      role: "IT Vacation Student",
      company: "Cell C",
      date: "June 2026 - July 2026",
      desc: [
        "Actively bridging the gap between computer science/informatics academic theory and fast-paced, practical industry environments.",
        "Collaborating with and learning from cross-functional technical teams to understand system design, security protocols, and modern tech stacks at scale.",
        "Developing an understanding of how organizational vision and mission translate into technical requirements, resource management, and robust digital solutions.",
        "Unpacking large-scale corporate IT infrastructure, workflows, and operational methodologies used to support millions of active users.",
      ],
    },
    {
      role: "Computer Science 1 Student Assistant",
      company: "University of Johannesburg",
      date: "Feb 2026 - Present",
      desc: [
        "Provided practical support to students during practical sessions, resolving issues related to software and programming practicals.",
        "Evaluated, debugged, and graded weekly software submissions for Computer Science 1 students, ensuring compliance with object-oriented programming standards and data structure logic.",
      ],
    },
    {
      role: "QYF Virtual Internship",
      company: "Quantify Your Future",
      date: "Jan 2026 - Feb 2026",
      desc: [
        "Acquired real-world work experience through projects with Absa, FirstRand, FNB, Nedbank and Standard Bank.",
        "Gained hands-on exposure to data analysis including framing, exploration, interpretation, modelling and visualisation.",
        "Strengthened key professional skills, including critical thinking, creativity, collaboration, and communication.",
        "Collaborated on team-based projects facilitated by leading financial institutions, applying data-driven solutions.",
      ],
    },
    {
      role: "Volunteer Tutor",
      company: "ClassRoomBuddies Organization",
      date: "Feb 2024 - Present",
      desc: [
        "Deliver one-on-one and group tutoring sessions in Mathematics and Physical Sciences. Break down complex concepts into simpler, learner-friendly explanations.",
        "Track learner progress and adapt teaching strategies to meet individual needs. Contributed over 180 volunteer hours to the organization.",
      ],
    },
  ],
  projects: [
    {
      id: "tile-detector",
      title: "Tile Detector: Assistive Graph-Based Navigation",
      stack: "Java, Python, SQLITE, GCNNs, Graph ADTs",
      platform: "Desktop Application",
      date: "Mar 2026 - May 2026",
      imageSrc: "/tile-detector.png",
      // youtubeId: "dMtqbKz7Xk8",
      tagline:
        "Classifying tactile paving patterns using Graph Convolutional Neural Networks (GCNN) and topological graphs to assist visually impaired pedestrians.",
      role: "Core Engine, Topology Graph Modeling & ML Pipeline",
      problem:
        "Navigating path safely for the visually impaired relies heavily on tactile paving (yellow sidewalks) found in developed areas and also featured around UJ APK campus (under construction). However, identifying these patterns and understanding their specific meanings (straight paths, turns, or signs) with only sound and touch can be difficult and physically demanding. We propose a Java desktop application that uses Graph Data Structures to bridge this gap by classifying paving patterns and detecting similarities against a database of signs and patterns we created (South African standard patterns and signs). The system works by transforming these images of paving into a Graph representation, where the physical features of the tiles are treated as Nodes and their spatial connections are defined as Edges.",
      architecture: [
        "Image Processing: Edge filtering and vertex extraction using adaptive thresholding.",
        "Graph Construction: Dynamic adjacency matrix representing rib orientations and directional flow.",
        "GCNN Inference: PyTorch-trained topological model classifying surface cues.",
        "Application Layer: Java-based desktop runtime integrating native execution for low-latency feedback.",
      ],
    },
    {
      id: "edubridge",
      title: "EduBridge Platform",
      stack:
        "TypeScript, Node.js, Express, Prisma, MySQL, Supabase, Redis, React, React Native",
      platform: "Web & Mobile Application",
      date: "Mar 2026 - Present",
      imageSrc: "/edubridge.png",
      // youtubeId: "YOUR_VIDEO_ID_2",
      tagline:
        "A centralized digital platform that simplifies tutoring management, tracks learner progress, and strengthens educational support for underprivileged students.",
      role: "System Architecture, Database Modeling & REST Services",
      problem:
        "Despite improvements in South Africa's national matric pass rates, a huge gap remains between overall pass statistics and actual proficiency in critical subjects like Mathematics, compounded by early foundational gaps. Community-Based Organisations like ClassRoom Buddies Organisation (CBO) play a vital role by providing structured after-school support, but their impact is severely constrained by fragmented, inefficient, and manual operational systems (paper consent forms, disconnected spreadsheets, lack of real-time progress tracking, and uncoordinated tutor allocation). EduBridge is implemented as a centralized digital platform to eliminate administrative bottlenecks, enable continuous progress tracking, automate QR-code attendance, and enforce strict POPIA compliance.",
      architecture: [
        "Backend: RESTful micro-services running on Node.js and TypeScript.",
        "Data Layer: Relational schema design (MySQL/Supabase) and fast caching (Redis) optimized for multi-tenant isolation and strict audit trails.",
        "Client Layer: Cross-platform web and mobile interfaces built with React, React Native, and Tailwind CSS.",
        "Security: Role-based access control (RBAC) safeguarding learner records and consent data.",
      ],
    },
  ],
};

export default function StyledPortfolio() {
  const [expandedExp, setExpandedExp] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % DATA.storyline.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleExperience = (index) => {
    setExpandedExp(expandedExp === index ? null : index);
  };

  const handleWeb3FormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", "d5cf8160-1044-44b9-8cb5-de7c90d806b9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setSubmitted(true);
      e.target.reset();
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-300 font-sans antialiased pb-24 selection:bg-blue-500/30">
      <style>{`
        ::-webkit-scrollbar { display: none; }
        { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="max-w-4xl mx-auto px-6 pt-20 space-y-20">
        <header className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-32 h-32 shrink-0 rounded bg-neutral-900 border border-neutral-800 overflow-hidden">
            <img
              src="/profile.jpeg"
              alt="Fortune F. Thobela"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>

          <div className="space-y-4 w-full">
            <div>
              <h1 className="text-neutral-100 text-2xl font-bold tracking-tight">
                {DATA.profile.name}
              </h1>
              <h2 className="text-blue-400/90 font-mono text-xs uppercase tracking-wider mt-1">
                {DATA.profile.title}
              </h2>
            </div>
            <p className="text-neutral-400 leading-relaxed text-sm max-w-2xl">
              {DATA.profile.bio}
            </p>

            <div className="flex flex-wrap gap-3 text-xs font-mono">
              <a
                href={`/${DATA.profile.cvFile}`}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded hover:bg-blue-500/20 transition-colors flex items-center gap-1.5"
              >
                Download CV
              </a>
              <a
                href={DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded text-neutral-300 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded text-neutral-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <span className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded text-neutral-400">
                {DATA.profile.location}
              </span>
            </div>
          </div>
        </header>

        <section className="space-y-4">
          <div className="flex items-center gap-4">
            <h3 className="text-neutral-100 font-bold text-lg">Languages</h3>
            <div className="h-px bg-neutral-800 flex-1"></div>
          </div>
          <div className="flex flex-wrap gap-3">
            {DATA.languages.map((lang, idx) => (
              <div
                key={idx}
                className="border border-neutral-800 px-3 py-1.5 text-xs text-neutral-300 bg-neutral-900 rounded font-mono"
              >
                <span className="text-blue-400 font-bold">{lang.name}</span>:{" "}
                {lang.proficiency}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <h3 className="text-neutral-100 font-bold text-lg">
              Technical Expertise
            </h3>
            <div className="h-px bg-neutral-800 flex-1"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="bg-neutral-900/50 border border-neutral-800 p-4 rounded space-y-2">
              <span className="text-blue-400 font-bold uppercase tracking-wider block">
                Programming Languages
              </span>
              <div className="flex flex-wrap gap-1.5">
                {DATA.technicalSkills.programming.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-neutral-900 border border-neutral-800 px-2 py-1 rounded text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 p-4 rounded space-y-2">
              <span className="text-blue-400 font-bold uppercase tracking-wider block">
                Databases
              </span>
              <div className="flex flex-wrap gap-1.5">
                {DATA.technicalSkills.databases.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-neutral-900 border border-neutral-800 px-2 py-1 rounded text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 p-4 rounded space-y-2">
              <span className="text-blue-400 font-bold uppercase tracking-wider block">
                Tools & Version Control
              </span>
              <div className="flex flex-wrap gap-1.5">
                {DATA.technicalSkills.tools.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-neutral-900 border border-neutral-800 px-2 py-1 rounded text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-neutral-800 p-4 rounded space-y-2">
              <span className="text-blue-400 font-bold uppercase tracking-wider block">
                Methodologies & Design
              </span>
              <div className="flex flex-wrap gap-1.5">
                {DATA.technicalSkills.methodologies.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-neutral-900 border border-neutral-800 px-2 py-1 rounded text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <h3 className="text-neutral-100 font-bold text-lg">
              The Build Log
            </h3>
            <div className="h-px bg-neutral-800 flex-1"></div>
            <div className="flex gap-2 font-mono text-xs text-neutral-500">
              <span>
                0{currentSlide + 1} / 0{DATA.storyline.length}
              </span>
            </div>
          </div>

          <div className="relative bg-[#0f0f0f] border border-neutral-800 rounded-xl overflow-hidden p-8 max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-8 shadow-2xl transition-all duration-700">
            <button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? DATA.storyline.length - 1 : prev - 1,
                )
              }
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 p-3 rounded-full border border-neutral-800 transition-colors z-10 shadow-lg"
              aria-label="Previous milestone"
            >
              &larr;
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % DATA.storyline.length)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 p-3 rounded-full border border-neutral-800 transition-colors z-10 shadow-lg"
              aria-label="Next milestone"
            >
              &rarr;
            </button>

            <div className="w-64 h-64 shrink-0 bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 shadow-md">
              <img
                src={DATA.storyline[currentSlide].src}
                alt={DATA.storyline[currentSlide].title}
                className="w-full h-full object-cover object-top transition-all duration-500"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<div class="w-full h-full flex items-center justify-center text-neutral-600 text-xs font-mono uppercase">Pending</div>';
                }}
              />
            </div>

            <div className="space-y-4 text-center md:text-left flex-1">
              <h4 className="text-blue-400 font-mono text-xs font-bold tracking-widest uppercase">
                {DATA.storyline[currentSlide].title}
              </h4>
              <p className="text-neutral-200 text-base leading-relaxed font-normal">
                {DATA.storyline[currentSlide].desc}
              </p>

              <div className="flex justify-center md:justify-start gap-2 pt-2">
                {DATA.storyline.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? "w-8 bg-blue-400" : "w-2 bg-neutral-700"}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <h3 className="text-neutral-100 font-bold text-lg">
              Core Competencies
            </h3>
            <div className="h-px bg-neutral-800 flex-1"></div>
          </div>
          <div className="flex flex-wrap gap-2">
            {DATA.modules.map((mod) => (
              <span
                key={mod}
                className="border border-neutral-800 px-3 py-1.5 text-xs text-neutral-400 bg-neutral-900 rounded font-mono hover:border-blue-500/30 hover:text-blue-200 transition-colors"
              >
                {mod}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h3 className="text-neutral-100 font-bold text-lg">
              Experience Map
            </h3>
            <div className="h-px bg-neutral-800 flex-1"></div>
            <span className="text-neutral-600 text-xs font-mono">
              Click nodes
            </span>
          </div>

          <div className="relative border-l border-neutral-800 ml-3 pl-8 py-2 space-y-6">
            {DATA.experienceMap.map((exp, i) => (
              <div
                key={i}
                className="relative group cursor-pointer"
                onClick={() => toggleExperience(i)}
              >
                <span
                  className={`absolute -left-[37.5px] top-1.5 w-3 h-3 rounded-full border-2 transition-all duration-300 
                  ${expandedExp === i ? "bg-blue-400 border-neutral-950" : "bg-neutral-800 border-neutral-950 group-hover:bg-neutral-600"}`}
                />

                <div className="space-y-1 bg-transparent hover:bg-neutral-900/30 p-3 -mt-3 rounded transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <h4
                      className={`font-bold transition-colors text-sm ${expandedExp === i ? "text-blue-400" : "text-neutral-200"}`}
                    >
                      {exp.role}
                    </h4>
                    <span className="text-neutral-500 font-mono text-[11px] shrink-0">
                      {exp.date}
                    </span>
                  </div>
                  <div className="text-neutral-500 text-xs">{exp.company}</div>

                  {expandedExp === i && (
                    <div className="pt-3 animate-in fade-in duration-200">
                      <ul className="list-disc list-inside space-y-2 text-neutral-400 text-xs leading-relaxed border-l-2 border-neutral-800 pl-3">
                        {exp.desc.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h3 className="text-neutral-100 font-bold text-lg">
              Project Showcases
            </h3>
            <div className="h-px bg-neutral-800 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DATA.projects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setActiveProject(proj)}
                className="group border border-neutral-800 bg-[#0f0f0f] rounded overflow-hidden cursor-pointer hover:border-blue-500/50 transition-colors flex flex-col justify-between"
              >
                <div className="w-full h-48 bg-neutral-900 overflow-hidden border-b border-neutral-800">
                  <img
                    src={proj.imageSrc}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML =
                        '<div class="w-full h-full flex items-center justify-center text-neutral-600 text-xs font-mono uppercase">Screenshot Pending</div>';
                    }}
                  />
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-neutral-100 font-bold text-base group-hover:text-blue-400 transition-colors">
                        {proj.title}
                      </h4>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-blue-400 shrink-0 rounded">
                        {proj.platform}
                      </span>
                    </div>
                    <div className="text-neutral-500 font-mono text-[10px] uppercase leading-relaxed">
                      {proj.stack}
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
                      {proj.tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800 flex justify-between items-center text-xs font-mono text-blue-400/80">
                    <span>Protected Repository</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      View README &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8 border-t border-neutral-800 pt-16">
          <div className="flex items-center gap-4">
            <h3 className="text-neutral-100 font-bold text-lg">
              Direct message
            </h3>
            <div className="h-px bg-neutral-800 flex-1"></div>
          </div>

          <form
            onSubmit={handleWeb3FormSubmit}
            className="bg-[#0f0f0f] border border-neutral-800 rounded p-6 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-400 uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                  placeholder="Recruiter / Hiring Manager"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-400 uppercase">
                  Email / Contact
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-neutral-400 uppercase">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-blue-500 resize-none"
                placeholder="Let's discuss an engineering opportunity..."
              />
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                type="submit"
                className="px-5 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded font-mono text-xs hover:bg-blue-500/20 transition-colors"
              >
                Send Message
              </button>
            </div>

            {submitted && (
              <div className="p-3 bg-emerald-950/20 border border-emerald-900/40 text-emerald-400 text-xs font-mono text-center rounded">
                Message successfully transmitted to my inbox! I will get back to
                you soon.
              </div>
            )}
          </form>
        </section>

        <footer className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-500">
          <div>© 2026 Fortune F. Thobela. All rights reserved.</div>
          <div className="flex gap-4">
            <a
              href={DATA.profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={DATA.profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${DATA.profile.contact.split(" | ")[1]}`}
              className="hover:text-neutral-300 transition-colors"
            >
              Email
            </a>
          </div>
        </footer>
      </div>

      {activeProject && (
        <div
          onClick={() => setActiveProject(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0a0a0a] border border-neutral-800 max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded shadow-2xl relative"
          >
            <div className="sticky top-0 bg-[#0a0a0a]/95 backdrop-blur border-b border-neutral-800 p-5 flex justify-between items-start z-10">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400/80 font-mono text-[10px] uppercase tracking-wider">
                    README.md // {activeProject.date}
                  </span>
                  <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-400 rounded">
                    {activeProject.platform}
                  </span>
                </div>
                <h2 className="text-neutral-100 text-lg font-bold">
                  {activeProject.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="text-neutral-400 hover:text-white font-mono text-xs bg-neutral-900 px-3 py-1.5 rounded border border-neutral-800 transition-colors"
              >
                [ESC]
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex gap-3 bg-blue-950/20 border border-blue-900/30 rounded p-4 text-xs text-neutral-300">
                <svg
                  className="w-4 h-4 text-blue-400/80 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  ></path>
                </svg>
                <div>
                  <span className="font-semibold text-blue-400/90 block mb-1">
                    Source Code Protection Active
                  </span>
                  To comply with university academic integrity policies, raw
                  source code is maintained in a private organization
                  repository. This document serves as a functional architecture
                  overview. Demonstrations of the system's runtime behavior are available upon request.
                </div>
              </div>

              <div className="w-full aspect-video rounded overflow-hidden border border-neutral-800 bg-neutral-900">
                <img
                  src={activeProject.imageSrc}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>

              <div className="space-y-6 text-sm text-neutral-300 leading-relaxed">
                <div>
                  <h3 className="text-neutral-100 font-bold mb-2 border-b border-neutral-800 pb-2">
                    Overview
                  </h3>
                  <p className="text-neutral-400">{activeProject.tagline}</p>
                </div>

                <div>
                  <h3 className="text-neutral-100 font-bold mb-2 border-b border-neutral-800 pb-2">
                    Problem Statement & Background
                  </h3>
                  <p className="text-neutral-400">{activeProject.problem}</p>
                </div>

                <div>
                  <h3 className="text-neutral-100 font-bold mb-2 border-b border-neutral-800 pb-2">
                    Architecture & Stack
                  </h3>
                  <p className="text-blue-400/80 font-mono text-xs mb-3">
                    {activeProject.stack}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    {activeProject.architecture.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Video Demo Section Commented Out For Now */}
              {/* 
              <div className="space-y-3">
                <h3 className="text-neutral-100 font-bold border-b border-neutral-800 pb-2">Runtime Demonstration</h3>
                <div className="w-full aspect-video rounded overflow-hidden border border-neutral-800 bg-black">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube-nocookie.com/embed/${activeProject.youtubeId}`} 
                    title={activeProject.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div> 
              */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
