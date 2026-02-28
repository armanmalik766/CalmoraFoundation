import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Users, BookOpen, Shield, ArrowRight } from "lucide-react";
import groupPhoto from "@/assets/group-photo.jpeg";
import classroom from "@/assets/classroom.jpeg";
import teamOutdoor from "@/assets/team-outdoor.jpeg";
import counseling from "@/assets/counseling.jpeg";
import award from "@/assets/award.jpeg";
import dignitaries from "@/assets/dignitaries.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const stats = [
  { value: "500+", label: "Lives Touched" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Workshops" },
  { value: "12A/80G", label: "Certified" },
];

const Index = () => {
  return (
    <main className="pt-16">
      {/* Hero */}
     <section className="relative min-h-screen flex items-center overflow-hidden bg-background">

  {/* 🌈 Animated Gradient Mesh */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute w-[700px] h-[700px] bg-primary/25 rounded-full blur-[160px] top-[-20%] left-[-10%] animate-pulse" />
    <div className="absolute w-[600px] h-[600px] bg-accent/25 rounded-full blur-[160px] bottom-[-20%] right-[-10%] animate-pulse" />
  </div>

  {/* ✨ Light Rays */}
  <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)]" />

  <div className="container mx-auto px-4">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="max-w-4xl mx-auto text-center"
    >

      {/* Tag */}
      <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6">
        Preventive Mental Health Care
      </div>

      {/* Heading */}
      <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
        Building Emotionally{" "}
        <span className="bg-gradient-primary bg-clip-text text-transparent">
          Resilient
        </span>{" "}
        Communities
      </h1>

      {/* Description */}
      <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
        Structured psychological care across schools, communities, and institutions — before crisis strikes.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <Link
          to="/get-involved"
          className="bg-gradient-primary text-primary-foreground px-10 py-4 rounded-xl font-semibold text-sm shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
        >
          Support Our Mission <ArrowRight size={16} />
        </Link>

        <Link
          to="/what-we-do"
          className="border border-border px-10 py-4 rounded-xl font-semibold text-sm hover:bg-muted transition-colors"
        >
          Learn More
        </Link>
      </div>

      {/* 🪟 Floating Glass Cards */}
      <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
        {[
          { num: "10K+", label: "Lives Impacted" },
          { num: "50+", label: "Programs" },
          { num: "20+", label: "Partners" },
        ].map((s) => (
          <div
            key={s.label}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl py-6"
          >
            <p className="text-3xl font-bold text-primary">{s.num}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

    </motion.div>

  </div>

</section>


      {/* Stats */}
      <section className="bg-gradient-primary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center text-primary-foreground"
              >
                <p className="font-display text-3xl md:text-4xl font-bold">{stat.value}</p>
                <p className="text-sm mt-1 text-primary-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Who We Are</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Foundation Committed to <span className="text-gradient">Preventive Care</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Calmora Foundation is a legally registered mental health foundation focused on preventive, community-based psychological care. We bridge the gap between professional psychology and community accessibility.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Mental health challenges are rising — anxiety in students, burnout in professionals, unaddressed trauma in vulnerable communities. Most support begins at crisis stage. <strong className="text-foreground">Calmora works before crisis.</strong>
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Heart, label: "Emotional Resilience" },
                  { icon: Users, label: "Community Based" },
                  { icon: BookOpen, label: "Early Detection" },
                  { icon: Shield, label: "Ethical Standards" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                    <item.icon size={20} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="grid grid-cols-2 gap-4"
            >
              <img src={classroom} alt="Classroom session" className="rounded-xl shadow-card w-full h-48 object-cover" />
              <img src={counseling} alt="Counseling" className="rounded-xl shadow-card w-full h-48 object-cover mt-8" />
              <img src={award} alt="Award ceremony" className="rounded-xl shadow-card w-full h-48 object-cover" />
              <img src={teamOutdoor} alt="Team" className="rounded-xl shadow-card w-full h-48 object-cover mt-8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="order-2 lg:order-1"
            >
              <img
                src={dignitaries}
                alt="Founder Ms. Sadaf Saeed"
                className="rounded-2xl shadow-soft w-full max-w-md mx-auto object-cover h-[400px]"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="order-1 lg:order-2"
            >
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Leadership</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Founded by <span className="text-gradient">Ms. Sadaf Saeed</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                RCI Licensed Psychologist with 10+ years of practice. Recognized for conducting extensive workshops for underprivileged communities.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Collaborated with Dr. M. Wali (Padma Shri Awardee)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Awarded Global Mental Health Leadership 2024 by World Health Congress
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Ensures clinical credibility, ethical standards, and structured program design
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Invest in Prevention. Invest in Hope.</h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Partner with Calmora Foundation to build emotionally resilient communities through sustainable mental health systems.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Get In Touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
