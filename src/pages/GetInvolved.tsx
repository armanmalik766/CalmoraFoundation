import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Handshake, Heart, GraduationCap, ArrowRight, CheckCircle } from "lucide-react";
import teamOutdoor from "@/assets/team-outdoor.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const ways = [
  {
    icon: Handshake,
    title: "Collaborations",
    desc: "Partner with us as an institution, university, or organization. We deliver customized mental health workshops and programs tailored to your community.",
    items: ["University partnerships", "Corporate wellness programs", "NGO collaborations", "Government initiatives"],
  },
  {
    icon: Heart,
    title: "Individual Support & Donation",
    desc: "Your contribution helps us expand preventive mental health care to underserved communities. All donations are eligible for 80G tax exemption.",
    items: ["One-time donations", "Monthly support", "Sponsor a workshop", "Fund community outreach"],
  },
  {
    icon: GraduationCap,
    title: "Internship + Certificate",
    desc: "Join Calmora as an intern and gain hands-on experience in community mental health practice. Receive a certificate upon completion.",
    items: ["Psychology students welcome", "Hands-on field experience", "Mentorship from RCI professionals", "Certificate of completion"],
  },
];

const GetInvolved = () => {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={teamOutdoor} alt="Get involved" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Join Us</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Get Involved
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-lg">
              Multiple ways to contribute to building emotionally resilient communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to contribute */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Work With Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Ways to Contribute</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {ways.map((way, i) => (
              <motion.div
                key={way.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-soft transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                  <way.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{way.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{way.desc}</p>
                <ul className="space-y-2">
                  {way.items.map((item) => (
                    <li key={item} className="text-sm text-foreground flex items-center gap-2">
                      <CheckCircle size={14} className="text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why invest */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Invest in Calmora?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left mb-10">
              {[
                "Led by RCI Licensed professional",
                "Demonstrated grassroots impact (500+ reached)",
                "Preventive, scalable model",
                "Fully compliant legal structure (12A, 80G)",
                "Focus on measurable outcomes",
                "Not starting from zero — scaling proven work",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-card">
                  <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default GetInvolved;
