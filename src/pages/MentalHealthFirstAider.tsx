import { motion } from "framer-motion";
import { Check, Brain, Shield, Heart, GraduationCap, Building2, Users } from "lucide-react";
import { Link } from "react-router-dom";
import teamOutdoor from "@/assets/team-outdoor.jpeg";
import groupPhoto from "@/assets/group-photo.jpeg";
import classroom from "@/assets/classroom.jpeg";
import counseling from "@/assets/counseling.jpeg";
import certImg3 from "@/assets/WhatsApp Image 2026-07-12 at 5.15.43 PM.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const modules = [
  {
    title: "Understanding Mental Health",
    items: [
      "Mental health and emotional well-being",
      "Mental illness vs everyday stress",
      "Mental health myths and facts",
      "Mental health literacy"
    ]
  },
  {
    title: "Recognising Warning Signs",
    items: [
      "Anxiety Disorders & Panic Attacks",
      "Depression & Grief",
      "Stress and Burnout",
      "Trauma & Emotional Dysregulation",
      "Substance Misuse & Self-harm Risk"
    ]
  },
  {
    title: "Communication Skills",
    items: [
      "Start supportive conversations",
      "Listen without judgement",
      "Validate emotions & respond with empathy",
      "Maintain confidentiality & set boundaries"
    ]
  },
  {
    title: "Crisis Response & Referral",
    items: [
      "Panic attacks & emotional breakdowns",
      "Psychological emergencies",
      "When professional intervention is needed",
      "How to refer appropriately"
    ]
  }
];

const faqs = [
  {
    q: "Is this a therapy course?",
    a: "No. This program teaches participants how to provide initial support and connect individuals with appropriate professional help. It does not qualify participants to diagnose or provide psychological treatment."
  },
  {
    q: "Do I need a psychology background?",
    a: "No. The course is designed for individuals from all educational and professional backgrounds."
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes. Participants who successfully complete the training requirements receive a Mental Health First Aider Certification from Calmora Foundation."
  },
  {
    q: "Is this suitable for organizations?",
    a: "Absolutely. The program is designed for corporates, educational institutions, NGOs, healthcare organizations, and government bodies seeking to improve mental health awareness and build psychologically safer environments."
  }
];

const MentalHealthFirstAider = () => {
  return (
    <main className="pt-24 bg-[#FAF9F6] min-h-screen font-sans overflow-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative container mx-auto px-4 md:px-8 pb-0 pt-2 md:pt-10">
        {/* Continuous Thread SVG Background */}
        <div className="absolute top-0 left-0 w-full h-[120%] pointer-events-none -z-10 overflow-hidden flex items-start justify-center opacity-40">
          <svg
            className="w-[1400px] max-w-none text-vivid-green/30"
            viewBox="0 0 1400 600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-100,300 C100,100 300,500 500,300 C700,100 900,500 1100,300 C1300,100 1500,500 1700,300"
              strokeDasharray="10 10"
            />
            <path
              d="M-100,320 C150,150 250,550 550,320 C850,90 950,490 1250,320 C1550,150 1650,550 1950,320"
            />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 mb-8 md:mb-16">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vivid-green/10 text-vivid-green font-bold text-xs tracking-widest uppercase mb-6 border border-vivid-green/20">
              <Shield size={14} /> Certification Program
            </div>
          </motion.div>
          
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}>
            <h1 className="text-5xl md:text-7xl font-light text-dark-green leading-tight mb-6">
              Become a Certified <br />
              <span className="font-bold text-vivid-green">Mental Health First Aider</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              Learn to identify mental health concerns, provide early support, reduce stigma, and promote psychological well-being in schools, colleges, workplaces, and communities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="bg-vivid-green text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-vivid-green/30 hover:-translate-y-1 transition-transform">
                Enroll Now
              </Link>
              <Link to="/contact" className="bg-white text-dark-green border-2 border-dark-green/10 px-8 py-4 rounded-full font-bold shadow-sm hover:bg-dark-green/5 transition-colors">
                Book Corporate Training
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Slanted Image Gallery */}
        <div className="flex justify-center items-stretch relative z-10 w-full mt-16 md:mt-24 max-w-6xl mx-auto">
          <div className="flex-1 grid grid-cols-3 gap-1 sm:gap-2 md:gap-4 h-[200px] sm:h-[350px] md:h-[500px]">
             <div className="w-full h-full relative group overflow-hidden" style={{ clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 85%)" }}>
                <img src={teamOutdoor} alt="Outdoor Training" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
             </div>
             <div className="w-full h-full relative group overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 15%, 100% 85%, 0 100%)" }}>
                <img src={groupPhoto} alt="Group Session" className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700" />
             </div>
             <div className="w-full h-full relative group overflow-hidden" style={{ clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 85%)" }}>
                <img src={certImg3} alt="Counseling Support" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRO & WHY IT MATTERS */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-vivid-yellow/10 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-dark-green mb-6">
                What is <span className="font-bold text-vivid-green">Mental Health First Aid?</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Mental Health First Aid is the initial support provided to someone who may be experiencing emotional distress, developing a mental health condition, or going through a psychological crisis. 
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                It does not involve diagnosing or treating mental illness. Instead, it focuses on recognising warning signs, offering compassionate support, reducing stigma, and encouraging timely access to appropriate professional care.
              </p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="bg-white/60 backdrop-blur-xl p-8 md:p-12 rounded-[40px] shadow-xl border border-white mb-8">
              <h3 className="font-bold text-dark-green text-2xl mb-8 text-center">Why it matters:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Identify early warning signs of common conditions", 
                  "Respond appropriately during psychological crises", 
                  "Reduce stigma within workplaces & institutions", 
                  "Build psychologically safer environments"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="w-10 h-10 rounded-full bg-vivid-green/10 flex items-center justify-center flex-shrink-0">
                      <Shield size={20} className="text-vivid-green" />
                    </span>
                    <p className="text-sm font-medium text-gray-700 pt-2">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CURRICULUM */}
      <section className="py-16 md:py-24 bg-vivid-green relative overflow-hidden rounded-[60px] md:rounded-[120px] mx-2 md:mx-4 my-10">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              What You <span className="font-bold">Will Learn</span>
            </h2>
            <p className="text-white/80 text-lg">The curriculum combines psychological knowledge with practical skills that participants can apply immediately.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((mod, index) => (
              <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={index} className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[40px] hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-xl font-bold text-vivid-yellow mb-6">{mod.title}</h3>
                <ul className="space-y-4">
                  {mod.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/90 text-sm">
                      <Check size={16} className="text-vivid-yellow flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FORMATS & WHO SHOULD ATTEND */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-vivid-green/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            
            {/* Formats */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="text-3xl md:text-4xl font-light text-dark-green mb-10">
                Training <span className="font-bold text-vivid-green">Formats</span>
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Building2, title: "Corporate Training", desc: "Customized for organizations, HR teams, and leadership." },
                  { icon: GraduationCap, title: "School & College Programs", desc: "Age-appropriate training for educators and students." },
                  { icon: Heart, title: "Healthcare & NGO Training", desc: "Designed for hospitals, community leaders, and clinics." },
                  { icon: Brain, title: "Online & Offline Certification", desc: "Live virtual sessions or interactive classroom training." }
                ].map((format, i) => (
                  <div key={i} className="flex items-start gap-5 p-6 rounded-[30px] bg-white/60 backdrop-blur-md border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-full bg-vivid-green/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                      <format.icon size={24} className="text-vivid-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-green text-lg mb-1">{format.title}</h4>
                      <p className="text-gray-500">{format.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Who should attend */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <h2 className="text-3xl md:text-4xl font-light text-dark-green mb-10">
                Who Should <span className="font-bold text-vivid-yellow">Attend?</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "HR Professionals", "Managers & Leaders", "Teachers & Educators", 
                  "School Counsellors", "University Students", "Social Workers", 
                  "Police Personnel", "Parents & Caregivers"
                ].map((person, i) => (
                  <div key={i} className="flex items-center gap-3 p-5 rounded-3xl bg-white shadow-sm border border-gray-50 hover:border-vivid-yellow/50 transition-colors">
                    <Users size={18} className="text-vivid-yellow" />
                    <span className="text-sm font-semibold text-dark-green">{person}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-vivid-green p-10 rounded-[40px] border border-white/20 relative overflow-hidden shadow-xl shadow-vivid-green/20">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-white"><Brain size={150} /></div>
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/30 rounded-full blur-[80px] pointer-events-none" />
                <h3 className="font-bold text-white text-2xl mb-6 relative z-10">Program Highlights</h3>
                <ul className="grid grid-cols-2 gap-4 text-white/90 relative z-10">
                  <li className="flex gap-2"><Check className="text-vivid-yellow" size={20}/> Evidence-informed</li>
                  <li className="flex gap-2"><Check className="text-vivid-yellow" size={20}/> Role plays & scenarios</li>
                  <li className="flex gap-2"><Check className="text-vivid-yellow" size={20}/> Printed Certificate</li>
                  <li className="flex gap-2"><Check className="text-vivid-yellow" size={20}/> Expert-led sessions</li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ & CTA */}
      <section className="py-16 md:py-24 bg-white rounded-t-[60px] md:rounded-t-[120px] shadow-[0_-20px_40px_rgba(0,0,0,0.03)] relative z-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-dark-green mb-4">
              Frequently <span className="font-bold">Asked Questions</span>
            </h2>
          </div>
          
          <div className="space-y-6 mb-24">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50/50 p-8 rounded-[30px] border border-gray-100 cursor-pointer hover:bg-white hover:shadow-lg transition-all">
                <summary className="font-bold text-dark-green text-lg list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-vivid-green text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
          
          <div className="bg-vivid-green rounded-[40px] md:rounded-[60px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-vivid-yellow/20 rounded-full blur-[80px] pointer-events-none"></div>
            <h2 className="text-4xl md:text-6xl font-light text-white mb-6 relative z-10 leading-tight">
              Become a <span className="font-bold">Certified Mental Health First Aider</span> Today
            </h2>
            <p className="text-white/90 mb-10 text-xl relative z-10 max-w-2xl mx-auto">Create safer workplaces. Build stronger communities. Support people with confidence.</p>
            <Link to="/contact" className="inline-block bg-vivid-yellow text-dark-green px-12 py-5 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform relative z-10">
              Enroll Now
            </Link>
          </div>
          
        </div>
      </section>

    </main>
  );
};

export default MentalHealthFirstAider;
