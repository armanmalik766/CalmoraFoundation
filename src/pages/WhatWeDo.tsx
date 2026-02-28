import { motion } from "framer-motion";
import { Brain, School, Users, Briefcase, Heart, BookOpen } from "lucide-react";
import skillTraining from "@/assets/skill-training.jpeg";
import classroom from "@/assets/classroom.jpeg";
import workshop from "@/assets/workshop.jpeg";
import counseling from "@/assets/counseling.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const programs = [
  {
    img: "/programs/Schools.webp",
    title: "School Mental Health Systems",
    items: [
      "Emotional literacy curriculum",
      "Risk screening & early identification",
      "Teacher sensitization training",
      "Student resilience workshops",
    ],
  },
  {
    img: "/programs/workshop.jpeg",
    title: "Community Mental Health Outreach",
    items: [
      "Group interventions",
      "Awareness campaigns",
      "Psychological first-aid workshops",
    ],
  },
  {
    img: "/programs/women.jpg",
    title: "Women & Men Support Circles",
    items: [
      "Trauma-informed sessions",
      "Stress & burnout management",
      "Emotional regulation frameworks",
    ],
  },
  {
    img: "/programs/professionals.jpg",
    title: "Youth & Professional Programs",
    items: [
      "Career anxiety management",
      "Confidence and coping skill training",
      "Structured therapy access pathways",
    ],
  },
];

const audiences = [
  {
    img: "/audiences/Schools.webp",
    label: "Schools & Universities",
    desc: "Students, teachers, and educational institutions",
  },
  {
    img: "/audiences/unserved.jpeg",
    label: "Underserved Communities",
    desc: "Marginalized groups with limited mental health access",
  },
  {
    img: "/audiences/women.jpg",
    label: "Women & Youth",
    desc: "Empowerment through emotional resilience",
  },
  {
    img: "/audiences/professionals.jpg",
    label: "Professionals",
    desc: "Burnout prevention and stress management",
  },
];

const team = [
  { name: "Sadaf Saeed", role: "Founder & Director", img: "/team/Sadaf.jpeg" },
  { name: "Seema Raturi", role: "President", img: "/team/Seema.jpeg" },
  { name: "Manya Sethi", role: "Vice President", img: "/team/Manya.jpeg" },
  {
    name: "Jyotika Das",
    role: "Counselling Psychologist",
    img: "/team/Jyotika.jpeg",
  },
  {
    name: "Anam Mushtaq",
    role: "Applied Research Psychologist",
    img: "/team/Anam.jpeg",
  },
  { name: "Raj Manya", role: "Affiliate Psychologist", img: "/team/Raj.jpeg" },
];

const WhatWeDo = () => {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {/* <img src={skillTraining} alt="Our work" className="w-full h-full object-cover" /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Our Work
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              About Us
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-lg">
              Structured, ethical, and scalable mental health interventions
              delivered with clinical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <Brain className="mx-auto text-primary mb-4" size={40} />
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To deliver structured psychological risk identification,
              prevention, and intervention peacefully and ethically across
              communities. We normalize mental health conversations, strengthen
              emotional resilience, and reduce psychological crisis cases
              through early detection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Our Services
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Program Verticals
            </h2>
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
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-soft transition-shadow"
              >
                {/* 🖼️ IMAGE */}
                <img
                  src={prog.img}
                  alt={prog.title}
                  className="w-full h-80 object-cover"
                />

                {/* CONTENT */}
                <div className="p-8">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    {prog.title}
                  </h3>

                  <ul className="space-y-2">
                    {prog.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Our Impact
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Work in Action
            </h2>
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
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Who We Serve
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Target Audience
            </h2>
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
                className="bg-card rounded-xl overflow-hidden shadow-card"
              >
                {/* IMAGE */}
                <img
                  src={a.img}
                  alt={a.label}
                  className="w-full h-40 object-cover"
                />

                {/* INFO */}
                <div className="p-6 text-center">
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                    {a.label}
                  </h4>
                  <p className="text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Our People
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Core Team
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
              Our team combines clinical expertise, operational management, and
              community outreach experience.
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
                {/* TEAM IMAGE */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border-2 border-primary"
                />

                <h4 className="font-display text-lg font-semibold text-foreground">
                  {member.name}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhatWeDo;
