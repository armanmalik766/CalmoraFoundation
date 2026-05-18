import { Check, Shield, Heart, Users, BookOpen, Star, ExternalLink } from "lucide-react";
import styles from "./StudentLanding.module.css";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc0eU-JIzYCpu1LWcxl89X7pOAUqEEcXwosn8s0IrX139CZ-Q/viewform";

const StudentLanding = () => {
  return (
    <div className={styles.landingPage}>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.headline}>Therapy Shouldn't Feel Like A Luxury.</h1>
          <p className={styles.subheadline}>
            Get professional mental health support at prices that actually make sense. Anxiety, stress, burnout, overthinking, relationship struggles — you don't have to carry it alone anymore.
          </p>
          <div className={styles.ctaGroup}>
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              Book Your Session <ExternalLink size={16} />
            </a>
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
              Talk To A Therapist Today
            </a>
          </div>
          <div className={styles.trustLine}>
            <span>Confidential</span> • <span>Judgment-Free</span> • <span>Affordable</span> • <span>Online & Offline Support</span>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE PROBLEM */}
      <section className={styles.problem}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>
            Most People Don't Avoid Therapy Because They Don't Need It. They Avoid It Because They Think They Can't Afford It.
          </h2>
          <div className={styles.bodyCopy}>
            <p>
              People spend months silently struggling with anxiety, panic attacks, emotional breakdowns, toxic relationships, burnout, low self-esteem, and constant stress — while convincing themselves they'll "handle it somehow."
            </p>
            <p>
              But untreated mental health struggles don't disappear. They slowly affect your sleep, relationships, work performance, confidence, physical health, and daily functioning.
            </p>
            <p>
              At Calmora Foundation, we believe mental health support should be accessible — not reserved only for people who can pay premium clinic prices.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE OFFER */}
      <section className={styles.offering}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>Affordable Therapy Sessions That Actually Help</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <Heart className={styles.cardIcon} />
              <h3>Individual Therapy</h3>
              <p>For anxiety, stress, overthinking, emotional regulation, self-esteem, trauma, and personal growth.</p>
            </div>
            <div className={styles.card}>
              <Users className={styles.cardIcon} />
              <h3>Relationship & Couple Counselling</h3>
              <p>Improve communication, resolve conflicts, rebuild emotional connection, and navigate difficult phases.</p>
            </div>
            <div className={styles.card}>
              <BookOpen className={styles.cardIcon} />
              <h3>Student & Youth Counselling</h3>
              <p>Academic pressure, career confusion, emotional overwhelm, social anxiety, and self-confidence support.</p>
            </div>
            <div className={styles.card}>
              <Shield className={styles.cardIcon} />
              <h3>Workplace Stress & Burnout Support</h3>
              <p>For professionals dealing with exhaustion, pressure, work-life imbalance, and emotional fatigue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY CALMORA */}
      <section className={styles.whyUs}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>Why People Choose Calmora Foundation</h2>
          <ul className={styles.pointsList}>
            <li><Check className={styles.checkIcon} /> Therapy sessions at highly reasonable prices</li>
            <li><Check className={styles.checkIcon} /> Qualified mental health professionals</li>
            <li><Check className={styles.checkIcon} /> Safe, confidential, and non-judgmental space</li>
            <li><Check className={styles.checkIcon} /> Online and offline sessions available</li>
            <li><Check className={styles.checkIcon} /> Personalized support instead of generic advice</li>
            <li><Check className={styles.checkIcon} /> Easy booking process</li>
            <li><Check className={styles.checkIcon} /> Support designed for real people with real struggles</li>
          </ul>
        </div>
      </section>

      {/* SECTION 5 — COMMON STRUGGLES */}
      <section className={styles.struggles}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>If Any Of This Feels Familiar, It's Time To Reach Out.</h2>
          <div className={styles.strugglesGrid}>
            <ul className={styles.bulletList}>
              <li>Constant overthinking</li>
              <li>Anxiety and panic attacks</li>
              <li>Mood swings and emotional exhaustion</li>
              <li>Toxic relationship patterns</li>
              <li>Burnout and stress</li>
            </ul>
            <ul className={styles.bulletList}>
              <li>Low motivation and numbness</li>
              <li>Feeling emotionally stuck</li>
              <li>Disturbed sleep and appetite</li>
              <li>Difficulty handling pressure</li>
              <li>Feeling alone despite being surrounded by people</li>
            </ul>
          </div>
          <p className={styles.closingLine}>You don't need to wait for things to get worse before asking for help.</p>
        </div>
      </section>

      {/* SECTION 6 — HOW IT WORKS */}
      <section className={styles.howItWorks}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>Getting Started Is Simple</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <p>Fill out the quick enquiry form.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <p>Our team connects you with the right therapist.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <p>Book your session at a comfortable time.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <p>Start your therapy journey in a safe and supportive environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — SOCIAL PROOF */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>What People Realize After Starting Therapy</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p>"I thought therapy was unnecessary until I realized how much stress was controlling my life."</p>
              <div className={styles.stars}><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
            </div>
            <div className={styles.testimonialCard}>
              <p>"Having a safe space to talk changed the way I handle my emotions and relationships."</p>
              <div className={styles.stars}><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
            </div>
            <div className={styles.testimonialCard}>
              <p>"Affordable therapy made it possible for me to finally prioritize my mental health."</p>
              <div className={styles.stars}><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — URGENCY / CTA */}
      <section className={styles.urgency}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>Stop Delaying Your Mental Health.</h2>
          <p className={styles.urgencyBody}>
            You don't have to keep surviving in silence. Support is available, accessible, and closer than you think.
          </p>
          <div className={styles.ctaGroup}>
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              Book A Session Now <ExternalLink size={16} />
            </a>
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
              Speak With Our Team
            </a>
          </div>
          <p className={styles.finalLine}>Your mental health deserves attention before it becomes a crisis.</p>
        </div>
      </section>

      {/* BOOK FORM SECTION — redirects to Google Form */}
      <section id="form" className={styles.formSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>Book Your Therapy Session</h2>
          <p className={styles.formIntro}>
            Fill out our quick form and our team will reach out to you to schedule your session.
          </p>
          <div className={styles.formCta}>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              Open Booking Form <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER TAGLINE */}
      <footer className={styles.footer}>
        <p>Calmora Foundation — Making Mental Health Support Accessible, Affordable, and Human.</p>
      </footer>
    </div>
  );
};

export default StudentLanding;
