import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Users, BookOpen, Shield, ArrowRight } from "lucide-react";
import groupPhoto from "@/assets/group-photo.jpeg";
import classroom from "@/assets/change1.jpeg";
import teamOutdoor from "@/assets/team-outdoor.jpeg";
import counseling from "@/assets/counseling.jpeg";
import award from "@/assets/award.jpeg";
import dignitaries from "@/assets/dignitaries.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-background pb-20">
        {/* 🌈 Soft gradient atmosphere */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-accent/10" />

        {/* 🎨 Decorative shape */}
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="relative">
            {/* Accent bar */}
            <div className="absolute -left-6 top-2 w-1 h-24 bg-primary rounded-full hidden md:block" />

            <h1 className="font-display text-2xl md:text-5xl mt-8 lg:mt-0 font-bold text-foreground leading-tight mb-8">
              Psychological Risk,
              <br />
              Thoughtfully Delivered
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl">
              Calmora Foundation is a structured psycho-social risk stabilization organization in India, working across hospital-integrated mental health programs and community-based outreach systems.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-xl">
              We design measurable psycho-social support frameworks that complement medical treatment pathways and strengthen holistic human health outcomes.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/get-involved"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
              >
                Support Our Mission
              </Link>

              <Link
                to="/what-we-do"
                className="border border-border px-8 py-4 rounded-xl font-semibold hover:bg-muted transition"
              >
                Our Programs
              </Link>
            </div>
          </div>

          {/* RIGHT — Floating Impact Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-3xl" />

            <div className="relative bg-card border border-border rounded-3xl p-10 shadow-2xl">
              <h3 className="font-display text-xl font-bold mb-6">
                Integrated Psycho-Social Support for Hospitals and Communities
              </h3>

              <ul className="space-y-4 text-muted-foreground text-sm">
                <li>• Hospital mental health programs</li>
                <li>• Oncology counseling services</li>
                <li>• Chronic illness psychological support</li>
                <li>• Caregiver support systems</li>
                <li>• Community mental health outreach in India</li>
                <li>• Mental hygiene awareness initiatives</li>
              </ul>
              
              <p className="text-xs text-primary mt-6 font-medium">
                Our model ensures that psychological stabilization continues beyond discharge and extends into household environments.
              </p>

              <div className="grid grid-cols-3 gap-6 mt-10 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">10K+</p>
                  <p className="text-xs text-muted-foreground">Lives Reached</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-xs text-muted-foreground">Programs</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">20+</p>
                  <p className="text-xs text-muted-foreground">Partners</p>
                </div>
              </div>
            </div>
          </div>
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
                <p className="font-display text-3xl md:text-4xl font-bold">
                  {stat.value}
                </p>
                <p className="text-sm mt-1 text-primary-foreground/70">
                  {stat.label}
                </p>
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
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
                Strategic Impact
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Psycho-Social <span className="text-gradient">Stabilization Matters</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Medical recovery does not automatically resolve psychological distress. Unmanaged psycho-social risk can lead to:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Shield, label: "Treatment non-adherence" },
                  { icon: Heart, label: "Relapse anxiety" },
                  { icon: Users, label: "Emotional instability" },
                  { icon: BookOpen, label: "Caregiver burnout" },
                  { icon: Shield, label: "Community stress escalation" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 group hover:bg-secondary transition-colors"
                  >
                    <item.icon size={18} className="text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-4">
                Calmora Foundation addresses these gaps through structured intervention protocols and measurable outcomes.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src={classroom}
                alt="Classroom session"
                className="rounded-xl shadow-card w-full h-48 object-cover"
              />
              <img
                src={counseling}
                alt="Counseling"
                className="rounded-xl shadow-card w-full h-48 object-cover mt-8"
              />
              <img
                src={award}
                alt="Award ceremony"
                className="rounded-xl shadow-card w-full h-48 object-cover"
              />
              <img
                src={teamOutdoor}
                alt="Team"
                className="rounded-xl shadow-card w-full h-48 object-cover mt-8"
              />
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
                className="rounded-2xl shadow-soft w-full max-w-md mx-auto object-cover h-[500px]"
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
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
                Leadership
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Founded by{" "}
                <span className="text-gradient">Ms. Sadaf Saeed</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                RCI Licensed Psychologist with 10+ years of practice. Recognized
                for conducting extensive workshops for underprivileged
                communities.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Collaborated with Dr. M. Wali (Padma Shri Awardee)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Awarded Global Mental Health Leadership 2024 by World Health
                  Congress
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Ensures clinical credibility, ethical standards, and
                  structured program design
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
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Invest in Prevention. Invest in Hope.
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Partner with Calmora Foundation to build emotionally resilient
              communities through sustainable mental health systems.
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
