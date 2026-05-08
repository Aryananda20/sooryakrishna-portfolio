"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [role, setRole] = useState("GAME DEVELOPER");
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setRole((prev) => (prev === "GAME DEVELOPER" ? "3D ARTIST" : "GAME DEVELOPER"));
        setFade(true);
      }, 500); 
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const [activeTab, setActiveTab] = useState("TECH");

  const heroRef = useRef(null);
  const { scrollYProgress: scrollYProgressHero } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const videoY = useTransform(scrollYProgressHero, [0, 1], ["0%", "50%"]);

  return (
    <main className="relative bg-[#0a0a0a] min-h-screen text-neutral-200 font-sans selection:bg-purple-800/30 overflow-x-hidden">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="fixed w-full top-0 px-6 py-4 flex justify-between items-center z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex-1">
          <h1 className="text-2xl font-black tracking-widest text-purple-700 drop-shadow-[0_0_8px_rgba(126,34,206,0.5)]">
            <span className="text-white">SOORYA KRISHNA M </span>
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-neutral-400">
          <a href="#about" className="hover:text-purple-600 transition-colors duration-300">About</a>
          <a href="#portfolio" className="hover:text-purple-600 transition-colors duration-300">Portfolio</a>
          <a href="#backstory" className="hover:text-purple-600 transition-colors duration-300">Backstory</a>
          <a href="#contact" className="hover:text-purple-600 transition-colors duration-300">Contact</a>
        </div>
        <div className="flex-1 flex justify-end">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-purple-800 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-purple-700 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(126,34,206,0.6)] cursor-pointer"
          >
            Resume
          </a>
        </div>
      </nav>
      

    {/* 2. HERO SECTION */}
<section ref={heroRef} className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden">
  <motion.div style={{ y: videoY }} className="absolute top-0 left-0 w-full h-full z-0">
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      preload="auto"
      className="w-full h-full object-cover opacity-75 pointer-events-none"
    >
      <source src="/bgsoorya.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </motion.div>
  
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-0"></div>
  {/* ... rest of your hero content */}

        {/* --- SOCIAL LINKS BAR --- */}
        <div className="fixed right-6 bottom-12 z-50 hidden md:flex flex-col items-center space-y-4">
          <a href="https://www.linkedin.com/in/soorya-krishnan-m-07a234312/" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-black hover:bg-purple-700 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(126,34,206,0.4)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://www.instagram.com/mr_el_doraddo" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-black hover:bg-purple-700 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(126,34,206,0.4)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <div className="w-[1px] h-12 bg-white/30 mt-2"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center mt-12">
          <p className="text-purple-600 text-sm font-bold tracking-widest uppercase mb-4 drop-shadow-[0_0_5px_rgba(126,34,206,0.6)]">Welcome to my world</p>
          <h1 className="text-6xl md:text-9xl font-black text-white mb-2 uppercase tracking-tighter drop-shadow-2xl">
          SOORYA KRISHNA M
          </h1>
          <h2 className={`text-2xl md:text-4xl font-bold tracking-widest uppercase mb-10 text-neutral-400 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            {role}
          </h2>
          <a href="#portfolio" className="group flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full hover:border-purple-700 hover:bg-purple-700/10 transition-all duration-500 shadow-[0_0_15px_rgba(126,34,206,0.1)]">
            <span className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-purple-600 transition-colors">Explore My Work</span>
            <span className="group-hover:translate-y-1 transition-transform duration-300 text-purple-700">↓</span>
          </a>
        </div>
      </section>

 {/* 3. ABOUT ME - TEXT | STACKED STATS | BG IMAGE RIGHT */}
<section id="about" className="relative py-24 px-8 border-t border-white/5 overflow-hidden bg-[#0a0a0a] min-h-[650px] flex items-center">
  
  {/* BACKGROUND IMAGE - Positioned Right */}
  <div 
    className="absolute right-0 top-0 w-full lg:w-[40%] h-full z-0 opacity-100 pointer-events-none"
    style={{ 
      backgroundImage: "url('/about .png')", 
      backgroundSize: 'cover',
      backgroundPosition: 'center right',
      backgroundRepeat: 'no-repeat'
    }}
  >
    {/* Smooth gradient mask to blend the image into the black background. Reduced opacity for better image visibility. */}
    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0a0a0a]/40 to-[#0a0a0a]"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
    
    {/* COLUMN 1: TEXT CONTENT (Left) */}
    <motion.div
      className="w-full lg:w-3/5"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h4 className="text-purple-700 font-bold uppercase tracking-widest text-xs mb-2">About Me</h4>
      <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Unity Game Developer</h2>
      <p className="text-neutral-300 leading-relaxed text-sm md:text-base mb-8 max-w-xl drop-shadow-md">
      I am a passionate and dedicated game developer with one year of hands-on experience in designing and developing interactive gaming experiences. I have worked on multiple projects, including a Tic Tac Toe game, an FPS game (Elite War Ops), and an open-world racing game (Asphalt Dominion), where I gained practical experience in game mechanics, UI design, and performance optimization. <br /><br />
      My expertise lies in using Unity to create engaging gameplay, implement responsive controls, and design visually appealing interfaces. I enjoy experimenting with new ideas, improving game feel, and solving technical challenges to deliver smooth and immersive player experiences. I am eager to contribute to creative teams and grow as a professional developer in the gaming industry.
      </p>
      <a href="#skills" className="inline-block px-10 py-3 bg-purple-800 text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-purple-700 transition-all shadow-[0_0_20px_rgba(126,34,206,0.5)]">
        View Skills
      </a>
    </motion.div>

   
  {/* STATS STACK - Enhanced Hover Effects */}
<motion.div
  className="flex flex-col gap-4 lg:-translate-x-64 md:-translate-x-20" 
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  {/* 6+ Finished Projects Box */}
  <div className="group relative bg-white/5 border border-white/10 p-6 rounded-2xl w-44 backdrop-blur-sm 
                  transition-all duration-500 ease-out
                  hover:border-purple-700/80 hover:bg-white/10 
                  hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(126,34,206,0.3)] cursor-default"
  >
    <h3 className="text-4xl font-black text-white group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300">
      5
    </h3>
    <p className="text-[10px] text-purple-700 font-bold uppercase tracking-widest mt-2">
      Finished Projects
    </p>
  </div>

  {/* 1 Yrs Experience Box */}
  <div className="group relative bg-white/5 border border-white/10 p-6 rounded-2xl w-44 backdrop-blur-sm 
                  transition-all duration-500 ease-out
                  hover:border-purple-700/80 hover:bg-white/10 
                  hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(126,34,206,0.3)] cursor-default"
  >
    <h3 className="text-4xl font-black text-white group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300">
      1 Year
    </h3>
    <p className="text-[10px] text-purple-700 font-bold uppercase tracking-widest mt-2">
      Experience
    </p>
  </div>
</motion.div>

{/* COLUMN 3: SPACER (Pushes content away from the far right edge) */}
<div className="hidden lg:block lg:w-12"></div>

  </div>
</section>

     {/* 4. PORTFOLIO GRID - LINKED BUTTONS */}
     <section id="portfolio" className="relative py-24 w-full border-t border-white/5">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none z-0"
          style={{ backgroundImage: "url('/portfolio-bg2.jpg')" }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] opacity-90 pointer-events-none z-0"></div>

        <div className="relative z-10 px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">Featured Projects</h2>
              <p className="text-neutral-500 text-sm">Playable worlds, systems, and assets.</p>
            </div>
           
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    { 
      title: "TIC -TAC-TOE", 
      category: "TECH", 
      video: "/tictactoe.mp4", // Add your video path here
      desc: "Its a open world jeep 4×4 offroad  game",
      link: "https://play.unity.com/en/games/040ed69d-da5c-41bb-be9d-b7f5aa908be5/tic-tac-toe"
    },
    { 
      title: "ASPHALT DOMINION", 
      category: "TECH", 
      video: "/asphalt.mp4", // Add your video path here
      desc: "It's a one tap mouse control mechanics 2D game, players control a bird, navigating it through gaps in green pipes",
      link: "https://play.unity.com/en/games/5fc484d3-8d5e-485b-aab8-43398540e692/asphalt-dominion"
    },
    { 
      title: "ELITE WAR OPS", 
      category: "TECH", 
      video: "/elitewar.mp4", // Add your video path here
      desc: "Its a normal 3D runner game, a vampire running and collecting coins",
      link: "https://play.unity.com/en/games/72fba99a-dce6-4087-8049-dcca5eaf693c/elite-war-ops"
    },

    { 
      title: "RUNNING GAME", 
      category: "TECH", 
      video: "/running.mp4", // Add your video path here
      desc: "It's a sprite plane 2D game, acting as an Asteroids-style survival game. Players navigate a triangle-shaped ship by clicking or tapping to move, aiming to dodge moving hexagon obstacles and avoid boundaries to survive as long as possible while scoring points.",
      link: "https://play.unity.com/en/games/c2d9405b-c8b6-41ec-8d4a-7d49317d3167/running-game"
    },

    { 
      title: "MULTIPLAYER GAMES", 
      category: "TECH", 
      video: "/multiplayer.mp4", // Add your video path here
      desc: "Real-Time Multiplayer Game System in Unity (Host-Client Architecture)",
      
    },

   

    

  ].filter(p => p.category === activeTab).map((project, i) => (
    <div key={i} className="group relative h-80 bg-neutral-900 rounded-2xl overflow-hidden border border-white/5 hover:border-purple-700/50 transition-all duration-500">
      
      {/* VIDEO CONTAINER */}
      <div className="absolute inset-0 z-0">
        <video 
          src={project.video} 
          autoPlay 
          muted 
          preload="metadata"
          loop 
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-100"
        />
      </div>

      {/* OVERLAY CONTENT */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-white font-black text-2xl uppercase tracking-tighter mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {project.title}
        </h3>
        <p className="text-neutral-300 text-xs mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
          {project.desc}
        </p>
        
        <a 
          href={project.link} 
          target="_blank" 
          className="inline-block text-center py-3 bg-purple-800 text-white text-[10px] font-black uppercase tracking-widest rounded hover:bg-purple-700 transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-500"
        >
          View Project
        </a>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>
      {/* 5. ALTERNATING TIMELINE */}
      <section id="backstory" className="py-24 px-4 bg-white/5 border-y border-white/5">
        <h2 className="text-center text-4xl font-black text-white uppercase tracking-tighter mb-20">Career Backstory</h2>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-purple-800/50 via-white/10 to-transparent hidden md:block"></div>

          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center justify-between w-full group">
              <div className="md:w-5/12 hidden md:block"></div>
              <div className="w-4 h-4 rounded-full bg-purple-700 z-10 hidden md:block shadow-[0_0_15px_#7e22ce] group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-full md:w-5/12 bg-black/50 border border-white/10 p-8 rounded-2xl group-hover:border-purple-700/50 group-hover:-translate-y-1 transition-all duration-500 backdrop-blur-sm shadow-[0_0_20px_rgba(126,34,206,0.05)]">
                <p className="text-purple-700 text-xs font-bold uppercase tracking-widest mb-2">2025 - Present</p>
                <h3 className="text-2xl font-black text-white uppercase mb-1">Associate unity developer</h3>
                <p className="text-neutral-400 text-sm font-bold mb-4">Emergio Games</p>
                <p className="text-neutral-500 text-sm leading-relaxed">Over the past year, I have worked as an Associate Game Developer specializing in Unity and C#. During this time, I have successfully completed multiple projects across different genres, including: Tic Tac Toe – Developed a classic strategy game with smooth UI and responsive gameplay. Elite War Ops (FPS) – Built a fast-paced first-person shooter featuring dynamic combat mechanics and immersive player controls. Asphalt Dominion (Open-World Racing) – Designed and implemented an open-world racing experience with realistic physics, AI opponents, and visually engaging environments..</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:flex-row-reverse items-center justify-between w-full group">
              <div className="md:w-5/12 hidden md:block"></div>
              <div className="w-4 h-4 rounded-full bg-white/20 z-10 hidden md:block group-hover:bg-purple-700 group-hover:shadow-[0_0_15px_#7e22ce] group-hover:scale-150 transition-all duration-500"></div>
              <div className="w-full md:w-5/12 bg-black/50 border border-white/10 p-8 rounded-2xl md:text-right group-hover:border-purple-700/50 group-hover:-translate-y-1 transition-all duration-500 backdrop-blur-sm shadow-[0_0_20px_rgba(126,34,206,0.05)]">
                <p className="text-purple-700 text-xs font-bold uppercase tracking-widest mb-2"> 2018 - 2020</p>
                <h3 className="text-2xl font-black text-white uppercase mb-1">Diploma civil engineering </h3>
                <p className="text-neutral-400 text-sm font-bold mb-4">Mg university</p>
                <p className="text-neutral-500 text-sm leading-relaxed">Diploma in Civil Engineering focuses on designing, constructing, and maintaining infrastructure like buildings, roads, and bridges.A practical course that teaches construction techniques, structural design, and site management skills.Diploma in Civil Engineering equips students with knowledge in surveying, construction, and engineering basics.A technical program that prepares students for careers in construction, planning, and infrastructure development.Study of building, design, and construction of infrastructure.</p>
              </div>
            </div>

            </div>
          </div>
      </section>

     {/* 6. SKILLS & TOOLS - BOXED LAYOUT WITH RED ACCENTS */}
     <section id="skills" className="py-24 px-8 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-16">Skills & Tools</h2>

          {/* --- CORE SKILLS --- */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-purple-700 text-xs font-bold uppercase tracking-[0.3em] whitespace-nowrap">Core Skills</h3>
              <div className="w-full h-px bg-white/10"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-purple-700/30 transition-colors group">
                <span className="text-purple-700 text-xs font-bold mb-4 block">01</span>
                <h4 className="text-xl font-black text-white uppercase mb-6">Technical</h4>
                <div className="flex flex-wrap gap-3">
                  {["Unity Engine", "Java", "C", "Python", "Unity 2D & 3D"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/10 rounded-full text-xs font-medium text-neutral-300 border border-white/5 group-hover:border-white/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-purple-700/30 transition-colors group">
                <span className="text-purple-700 text-xs font-bold mb-4 block">02</span>
                <h4 className="text-xl font-black text-white uppercase mb-6">Art & Technical Art</h4>
                <div className="flex flex-wrap gap-3">
                  {["Asset Design", "Animation Integration", "Game Testing", "Debugging"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/10 rounded-full text-xs font-medium text-neutral-300 border border-white/5 group-hover:border-white/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* --- TOOLS & SOFTWARE --- */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-purple-700 text-xs font-bold uppercase tracking-[0.3em] whitespace-nowrap">Tools & Software</h3>
              <div className="w-full h-px bg-white/10"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-purple-700/30 transition-colors group">
                <span className="text-purple-700 text-xs font-bold mb-4 block">01</span>
                <h4 className="text-xl font-black text-white uppercase mb-6">3D Modeling & Sculpting</h4>
                <div className="flex flex-wrap gap-3">
                  {["Blender", "Maya", "ZBrush"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/10 rounded-full text-xs font-medium text-neutral-300 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-purple-700/30 transition-colors group">
                <span className="text-purple-700 text-xs font-bold mb-4 block">02</span>
                <h4 className="text-xl font-black text-white uppercase mb-6">Texturing & Materials</h4>
                <div className="flex flex-wrap gap-3">
                  {["PBR Texturing"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/10 rounded-full text-xs font-medium text-neutral-300 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-purple-700/30 transition-colors group">
                <span className="text-purple-700 text-xs font-bold mb-4 block">03</span>
                <h4 className="text-xl font-black text-white uppercase mb-6">Game Art & UI</h4>
                <div className="flex flex-wrap gap-3">
                  {["Game UI Design", "Visual Layouts"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/10 rounded-full text-xs font-medium text-neutral-300 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-purple-700/30 transition-colors group">
                <span className="text-purple-700 text-xs font-bold mb-4 block">04</span>
                <h4 className="text-xl font-black text-white uppercase mb-6">Animation</h4>
                <div className="flex flex-wrap gap-3">
                  {["Character Animation"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/10 rounded-full text-xs font-medium text-neutral-300 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GET IN TOUCH & FOOTER */}
      <section id="contact" className="py-24 px-8 text-center bg-[#0a0a0a] border-t border-white/5">
        <h2 className="text-3xl font-black text-purple-700 uppercase mb-4 tracking-wider drop-shadow-[0_0_10px_rgba(126,34,206,0.3)]">GET IN TOUCH</h2>
        <p className="text-neutral-400 text-sm mb-12 max-w-xl mx-auto font-medium">Interested in working together or have a question? Feel free to reach out.</p>
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 bg-black/60 border border-purple-950/40 p-6 px-10 rounded-full shadow-[0_0_30px_rgba(126,34,206,0.1)]">
            
            <div className="flex flex-col sm:flex-row justify-center items-start md:items-center gap-x-12 gap-y-6 text-left flex-grow">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-1">EMAIL</p>
                <a href="mailto:sooryakrishnanm170@gmail.com" className="text-white text-sm font-bold hover:text-purple-600 transition-colors">sooryakrishnanm170@gmail.com</a>
              </div>
              
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-1">PHONE</p>
                <p className="text-white text-sm font-bold">+91 6238317554</p>
              </div>
              
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-1">LOCATION</p>
                <p className="text-white text-sm font-bold">Kerala, India</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 border-l border-white/10 md:pl-10">
            <a href="https://www.linkedin.com/in/soorya-krishnan-m-07a234312/" aria-label="LinkedIn" className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-white hover:border-purple-700 transition-colors shadow-sm hover:shadow-[0_0_15px_rgba(126,34,206,0.4)]">
                  LinkedIn
                </a>
                
                <a href="https://www.instagram.com/mr_el_doraddo" aria-label="Instagram" className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-white hover:border-purple-700 transition-colors shadow-sm hover:shadow-[0_0_15px_rgba(126,34,206,0.4)]">
                  Instagram
                </a>
            </div>
          </div>
        </div>
        
        <p className="mt-16 text-[10px] text-neutral-600 font-medium uppercase tracking-wider">
          © 2026 Soorya Krishna. All rights reserved.
        </p>
      </section>

    </main>
  );
}