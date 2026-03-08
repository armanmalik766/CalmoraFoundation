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

            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              Preventing psychological and
              <br />
              social risks through community action.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Calmora Foundation provides structured psychological support
              across schools, institutions, and underserved communities — before
              crisis begins.
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
              <h3 className="font-display text-2xl font-bold mb-6">
                Why Calmora Matters
              </h3>

              <ul className="space-y-5 text-muted-foreground">
                <li>• Early mental health intervention programs</li>
                <li>• School & university partnerships</li>
                <li>• Community resilience initiatives</li>
                <li>• Professional burnout prevention</li>
              </ul>

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
                Who We Are
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Foundation Committed to{" "}
                <span className="text-gradient">Preventive Care</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Calmora Foundation is a legally registered mental health
                foundation focused on preventive, community-based psychological
                care. We bridge the gap between professional psychology and
                community accessibility.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Mental health challenges are rising — anxiety in students,
                burnout in professionals, unaddressed trauma in vulnerable
                communities. Most support begins at crisis stage.{" "}
                <strong className="text-foreground">
                  Calmora works before crisis.
                </strong>
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Heart, label: "Emotional Resilience" },
                  { icon: Users, label: "Community Based" },
                  { icon: BookOpen, label: "Early Detection" },
                  { icon: Shield, label: "Ethical Standards" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary"
                  >
                    <item.icon size={20} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
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
