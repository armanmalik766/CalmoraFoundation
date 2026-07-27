import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Leaf, Shield, Heart, Check, Star } from "lucide-react";

// Import images from existing assets
import groupPhoto from "@/assets/group-photo.jpeg";
import classroom from "@/assets/change1.jpeg";
import teamOutdoor from "@/assets/team-outdoor.jpeg";
import counseling from "@/assets/counseling.jpeg";
import dignitaries from "@/assets/dignitaries.jpeg";
import sadaf2Img from "@/assets/WhatsApp Image 2026-07-12 at 5.21.51 PM.jpeg";
import home1 from "@/assets/home1.jpeg";
import home2 from "@/assets/home2.jpeg";
import home3 from "@/assets/home3.jpeg";
import img1 from "@/assets/img1.jpeg";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Index = () => {
  return (
    <main className="pt-24 bg-[#FAF9F6] min-h-screen overflow-hidden font-sans">
      {/* SECTION 1: HERO */}
      <section className="relative container mx-auto px-4 md:px-8 pb-12 md:pb-32">
        {/* Continuous Thread SVG Background */}
        <div className="absolute top-0 left-0 w-full h-[120%] pointer-events-none -z-10 overflow-hidden flex items-start justify-center opacity-40">
          <svg
            className="w-[1400px] max-w-none text-vivid-green"
            viewBox="0 0 1000 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 50,0 C 100,400 -50,600 200,700 C 500,800 850,700 800,400 C 750,100 400,200 450,500 C 500,800 950,850 1100,700"
              stroke="currentColor"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Top Header */}
        <div className="flex justify-between items-start mb-8 relative z-10 hidden md:flex">
          <div className="flex items-center gap-2">
            <span className="text-vivid-green font-bold italic text-2xl tracking-tighter">//</span>
            <span className="font-bold text-xl text-dark-green tracking-tight">Calmora</span>
          </div>
          <Link
            to="/contact"
            className="bg-vivid-green text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition shadow-lg shadow-vivid-green/30"
          >
            SEND REQUEST
          </Link>
        </div>

        {/* Big Title */}
        <div className="max-w-4xl mb-8 md:mb-16 relative z-10 pt-2 md:pt-10">
          <h1 className="text-5xl md:text-7xl font-light text-dark-green leading-tight">
            Psychological Risk, <br />
            <span className="font-bold text-vivid-green flex items-center gap-2">
              <span className="text-vivid-green w-12 h-1 bg-vivid-green inline-block mb-2"></span>
              Thoughtfully Delivered
            </span>
          </h1>
        </div>

        {/* Masonry / Slanted Gallery & Side elements */}
        <div className="flex justify-between items-stretch relative z-10 w-full gap-1 sm:gap-6">
          {/* Left vertical text */}
          <div className="flex flex-col items-center justify-between py-4 sm:py-10 w-6 sm:w-12 lg:w-16 flex-shrink-0">
            <div className="transform -rotate-90 origin-center whitespace-nowrap text-[6px] sm:text-xs text-gray-500 font-medium tracking-widest mt-10 sm:mt-72 w-32 sm:w-48 text-center">
              A STRUCTURED PSYCHO-SOCIAL STABILIZATION ORGANIZATION
            </div>
            
            <button className="bg-vivid-green text-white p-1.5 sm:p-4 rounded-full hover:scale-110 transition shadow-xl mb-2 sm:mb-0">
              <ArrowUpRight className="rotate-90 w-3 h-3 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Center Images */}
          <div className="flex-1 grid grid-cols-3 gap-1 sm:gap-2 md:gap-4 h-[250px] sm:h-[350px] md:h-[500px]">
             {/* Left slanted image */}
             <div className="w-full h-full relative group overflow-hidden" style={{ clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 85%)" }}>
                <img src={classroom} alt="Classroom" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
             </div>
             {/* Center slanted image */}
             <div className="w-full h-full relative group overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 15%, 100% 85%, 0 100%)" }}>
                <img src={img1} alt="Group" className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700" />
             </div>
             {/* Right slanted image */}
             <div className="w-full h-full relative group overflow-hidden" style={{ clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 85%)" }}>
                <img src={counseling} alt="Counseling" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
             </div>
          </div>

          {/* Right stats vertical */}
          <div className="flex flex-col items-center justify-between py-4 sm:py-32 w-6 sm:w-12 lg:w-16 flex-shrink-0 pr-1 sm:pr-4 relative z-20">
             <div className="transform -rotate-90 origin-center whitespace-nowrap text-center text-dark-green mt-8 sm:mt-0">
                <p className="font-bold text-xs sm:text-xl inline-block mr-1 sm:mr-2">10K+</p>
                <p className="text-[6px] sm:text-xs text-gray-500 inline-block uppercase tracking-wider">Lives Reached</p>
             </div>
             <div className="transform -rotate-90 origin-center whitespace-nowrap text-center text-dark-green mb-8 sm:mb-0">
                <p className="font-bold text-xs sm:text-xl inline-block mr-1 sm:mr-2">50+</p>
                <p className="text-[6px] sm:text-xs text-gray-500 inline-block uppercase tracking-wider">Programs</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HOPE IN ACTION (Blob) */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Blob Image */}
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
             className="relative h-[400px] md:h-[500px] w-full"
          >
             <div className="absolute inset-0 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden shadow-2xl group">
                <img src={home3} alt="Hope in Action" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-dark-green/40 mix-blend-multiply pointer-events-none"></div>
             </div>
             
             {/* Floating Title on Blob */}
             <div className="absolute bottom-10 md:bottom-20 left-0 md:-left-12 bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white">
                <h2 className="text-3xl md:text-5xl font-bold text-dark-green tracking-tight">
                  <span className="text-vivid-green">H</span>ope In Action
                </h2>
             </div>
             
             {/* Arrow Button */}
             <button className="absolute bottom-8 right-8 bg-vivid-green border-4 border-white text-white p-5 rounded-full hover:scale-110 transition shadow-xl z-10">
                <ArrowUpRight size={28} />
             </button>
          </motion.div>

          {/* Right Text */}
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
             className="max-w-md relative"
          >
            {/* Faint background decorative text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-bold text-black/5 -z-10 select-none hidden md:block">
              Care
            </div>

            <h3 className="text-4xl font-bold text-dark-green mb-6">Why Psycho-Social Stabilization Matters</h3>
            <p className="text-gray-600 leading-relaxed mb-6 font-medium">
              Medical recovery does not automatically resolve psychological distress. Unmanaged psycho-social risk can lead to treatment non-adherence, relapse anxiety, and emotional instability.
            </p>
            <p className="text-gray-500 leading-relaxed">
              We design measurable psycho-social support frameworks that complement medical treatment pathways and strengthen holistic human health outcomes across hospitals and communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: STATS GRID */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-8">
         <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Top Left: Yellow shape */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
               className="bg-vivid-yellow p-12 flex flex-col justify-center rounded-tl-[120px] rounded-bl-[120px] rounded-br-[120px] rounded-tr-[40px] aspect-square md:aspect-auto md:h-80 relative overflow-hidden group shadow-lg"
            >
               <h4 className="text-6xl font-bold text-white mb-2 z-10">10K+</h4>
               <p className="text-white/90 font-medium z-10 text-xl">Lives Reached</p>
               <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full scale-150 blur-3xl"></div>
            </motion.div>

            {/* Top Right: Image with leaf curves */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
               className="rounded-t-[120px] rounded-b-[40px] overflow-hidden aspect-square md:aspect-auto md:h-80 shadow-lg relative group"
            >
               <img src={classroom} alt="Classroom" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-dark-green/80 via-dark-green/20 to-transparent"></div>
               <div className="absolute bottom-8 left-8">
                  <h4 className="text-5xl font-bold text-white mb-1">50+</h4>
                  <p className="text-white/90 font-medium text-lg">Programs</p>
               </div>
            </motion.div>

            {/* Bottom Left: Dark Green pill */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
               className="bg-dark-green p-12 flex flex-col justify-center rounded-l-[120px] rounded-r-[40px] aspect-square md:aspect-auto md:h-80 shadow-lg relative overflow-hidden group"
            >
               <h4 className="text-6xl font-bold text-white mb-2 z-10">20+</h4>
               <p className="text-white/80 font-medium text-xl z-10">Partners</p>
               <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>
            </motion.div>

            {/* Bottom Right: Vivid Green Leaf shape */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
               className="bg-vivid-green p-12 flex flex-col justify-center rounded-br-[120px] rounded-tl-[120px] rounded-tr-[40px] rounded-bl-[40px] aspect-square md:aspect-auto md:h-80 shadow-lg relative overflow-hidden group"
            >
               <h4 className="text-5xl font-bold text-white mb-2 z-10">12A/80G</h4>
               <p className="text-white/90 font-medium text-xl z-10">Certified</p>
               <div className="absolute top-0 right-0 w-full h-full bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 skew-x-12"></div>
            </motion.div>

         </div>
      </section>

      {/* SECTION 3.5: LEADERSHIP */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-8 relative">
        {/* Background Decorative element */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-vivid-green/5 rounded-full blur-[80px] pointer-events-none -z-10" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="order-2 lg:order-1 relative"
          >
            {/* Image backdrop shape */}
            <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-tr from-vivid-green/20 to-vivid-yellow/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-xl opacity-70 animate-pulse pointer-events-none" />
            
            <div className="relative rounded-[40px] md:rounded-[60px] overflow-hidden shadow-[0_20px_50px_rgba(15,60,49,0.15)] border-4 border-white group">
               <img
                 src={sadaf2Img}
                 alt="Founder Ms. Sadaf Malik"
                 className="w-full h-full md:h-[600px] max-w-md mx-auto object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-dark-green/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Glass Badge */}
            <div className="absolute bottom-10 -left-6 md:-left-12 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-vivid-green/20 flex items-center justify-center">
                  <Star className="text-vivid-green fill-vivid-green" size={24} />
               </div>
               <div>
                  <p className="font-bold text-dark-green text-lg leading-tight">10+ Years</p>
                  <p className="text-xs text-gray-500 font-medium tracking-wide">CLINICAL EXCELLENCE</p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vivid-green/10 text-vivid-green font-bold text-xs tracking-widest uppercase mb-6 border border-vivid-green/20">
              <Star size={14} /> Leadership
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-dark-green mb-8 leading-[1.1]">
              Founded by <br />
              <span className="font-bold text-vivid-green inline-block mt-2">Ms. Sadaf Malik</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-10 text-lg md:text-xl font-light">
              RCI Licensed Psychologist with 10+ years of practice. Recognized
              for conducting extensive workshops for underprivileged communities.
            </p>
            
            <div className="space-y-6">
              {[
                "Collaborated with Dr. M. Wali (Padma Shri Awardee)",
                "Awarded Global Mental Health Leadership 2024 by World Health Congress",
                "Ensures clinical credibility, ethical standards, and structured program design"
              ].map((text, i) => (
                 <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(60,165,177,0.1)] hover:-translate-y-1 transition-all duration-300">
                   <div className="w-8 h-8 rounded-full bg-vivid-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={16} className="text-vivid-green" />
                   </div>
                   <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">{text}</p>
                 </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: DARK CTA WITH PHONE MOCKUP */}
      <section className="mt-16 md:mt-24 pt-16 md:pt-24 bg-vivid-green relative rounded-t-[60px] md:rounded-t-[120px] overflow-hidden">
         {/* Decorative background glow */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-[100px] pointer-events-none" />

         <div className="container mx-auto px-4 md:px-8 pb-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
               
               {/* Left: Phone Mockup */}
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
                  className="relative flex justify-center translate-y-10"
               >
                  <div className="w-[280px] h-[580px] bg-black rounded-[45px] p-3 shadow-2xl relative border-[4px] border-gray-800 rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                     <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
                        {/* Notch */}
                        <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-[16px] w-32 mx-auto z-20"></div>
                        
                        {/* Screen Content */}
                        <div className="h-full bg-[#FAF9F6] p-4 pt-10 flex flex-col">
                           <h4 className="font-bold text-dark-green text-lg mb-2">Psychological Risk</h4>
                           <p className="text-[10px] text-gray-500 mb-4">Calmora Foundation is a structured psycho-social stabilization organization...</p>
                           <img src={counseling} alt="Screen" className="w-full h-40 object-cover rounded-xl mb-4" />
                           <div className="mt-auto bg-dark-green rounded-2xl p-6 text-white text-center shadow-lg relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                              <p className="text-xl font-bold mb-2 relative z-10">Invest in Hope</p>
                              <button className="bg-vivid-green text-xs font-bold px-6 py-2 rounded-full relative z-10 shadow-md">Join Us</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.div>

               {/* Right: CTA Text */}
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
                  className="relative z-10"
               >
                  <h2 className="text-5xl md:text-6xl font-light text-white leading-tight mb-6">
                     Your Voice Matters <br />
                     In <span className="font-bold text-vivid-yellow">Our Mission.</span>
                  </h2>
                  <p className="text-white/90 mb-10 max-w-md text-sm md:text-base leading-relaxed">
                     Partner with Calmora Foundation to build emotionally resilient communities through sustainable mental health systems.
                  </p>

                  <Link to="/contact" className="inline-flex bg-white/10 hover:bg-white/20 border border-white/20 p-5 rounded-full backdrop-blur-md transition-colors group shadow-lg shadow-black/10">
                     <ArrowUpRight size={32} className="text-white group-hover:scale-110 group-hover:rotate-45 transition-transform" />
                  </Link>
               </motion.div>

            </div>
         </div>

         {/* Bottom Footer Bar */}
         <div className="bg-black/10 border-t border-white/10 mt-10">
            <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
               <div className="flex items-center gap-6 text-sm text-gray-300 font-medium tracking-wide flex-wrap justify-center">
                  <span className="flex items-center gap-2 hover:text-vivid-green cursor-pointer transition-colors"><Leaf size={16} className="text-vivid-yellow"/> Protect</span>
                  <span className="flex items-center gap-2 hover:text-vivid-green cursor-pointer transition-colors"><Heart size={16} className="text-vivid-yellow"/> Nurture</span>
                  <span className="flex items-center gap-2 hover:text-vivid-green cursor-pointer transition-colors"><Shield size={16} className="text-vivid-yellow"/> Restore</span>
               </div>
               <div className="text-xs text-dark-green font-semibold opacity-80">
                  @2024 Calmora Foundation. All rights reserved
               </div>
            </div>
         </div>
      </section>

    </main>
  );
};

export default Index;
