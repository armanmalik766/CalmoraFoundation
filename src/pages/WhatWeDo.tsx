import { motion } from "framer-motion";
import { Brain, School, Users, Briefcase, Heart, BookOpen } from "lucide-react";
import skillTraining from "@/assets/skill-training.jpeg";
import classroom from "@/assets/classroom.jpeg";
import workshop from "@/assets/workshop.jpeg";
import counseling from "@/assets/counseling.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const programs = [
  {
    icon: School,
    title: "School Mental Health Systems",
    items: ["Emotional literacy curriculum", "Risk screening & early identification", "Teacher sensitization training", "Student resilience workshops"],
  },
  {
    icon: Users,
    title: "Community Mental Health Outreach",
    items: ["Group interventions", "Awareness campaigns", "Psychological first-aid workshops"],
  },
  {
    icon: Heart,
    title: "Women & Men Support Circles",
    items: ["Trauma-informed sessions", "Stress & burnout management", "Emotional regulation frameworks"],
  },
  {
    icon: Briefcase,
    title: "Youth & Professional Programs",
    items: ["Career anxiety management", "Confidence and coping skill training", "Structured therapy access pathways"],
  },
];

const audiences = [
  { icon: School, label: "Schools & Universities", desc: "Students, teachers, and educational institutions" },
  { icon: Users, label: "Underserved Communities", desc: "Marginalized groups with limited mental health access" },
  { icon: Heart, label: "Women & Youth", desc: "Empowerment through emotional resilience" },
  { icon: Briefcase, label: "Professionals", desc: "Burnout prevention and stress management" },
];

const team = [
  { name: "Sadaf Saeed", role: "Founder & Director" },
  { name: "Seema Raturi", role: "President" },
  { name: "Manya Sethi", role: "Vice President" },
  { name: "Jyotika Das", role: "Counselling Psychologist" },
  { name: "Anam Mushtaq", role: "Applied Research Psychologist" },
  { name: "Raj Manya", role: "Affiliate Psychologist" },
];

const WhatWeDo = () => {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={skillTraining} alt="Our work" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Our Work</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              What We Do
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-lg">
              Structured, ethical, and scalable mental health interventions delivered with clinical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <Brain className="mx-auto text-primary mb-4" size={40} />
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To deliver structured psychological risk identification, prevention, and intervention peacefully and ethically across communities. We normalize mental health conversations, strengthen emotional resilience, and reduce psychological crisis cases through early detection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Our Services</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Program Verticals</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-soft transition-shadow"
              >
                <prog.icon className="text-primary mb-4" size={32} />
                <h3 className="font-display text-xl font-bold text-foreground mb-4">{prog.title}</h3>
                <ul className="space-y-2">
                  {prog.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Our Impact</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Work in Action</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[classroom, counseling, workshop, skillTraining].map((img, i) => (
              <motion.img
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                src={img}
                alt="Calmora work"
                className="rounded-xl w-full h-52 object-cover shadow-card hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Who We Serve</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Target Audience</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((a, i) => (
              <motion.div
                key={a.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl p-6 text-center shadow-card"
              >
                <a.icon className="mx-auto text-primary mb-3" size={28} />
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">{a.label}</h4>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Our People</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Core Team</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
              Our team combines clinical expertise, operational management, and community outreach experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl p-6 text-center shadow-card border border-border"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground">{member.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhatWeDo;
