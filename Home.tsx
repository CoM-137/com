import { motion } from "framer-motion";
import { SiYoutube, SiMedium } from "react-icons/si";
import { ContactCard } from "@/components/ContactCard";
import { MembershipCard } from "@/components/MembershipCard";
import { SocialCard } from "@/components/SocialCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import logoImg from "@assets/The_Collegium_of_Minds_Logo_1766678984352.jpeg";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-academic bg-texture selection:bg-primary/20 selection:text-primary relative overflow-hidden">
      <ThemeToggle />
      {/* Dynamic Fluid Background Elements */}
      <div className="fluid-bg">
        <div 
          className="fluid-blob w-[600px] h-[600px] bg-primary/20" 
          style={{ top: '-5%', left: '-5%', animationDelay: '0s' }} 
        />
        <div 
          className="fluid-blob w-[500px] h-[500px] bg-accent/15" 
          style={{ top: '30%', right: '-5%', animationDelay: '-7s' }} 
        />
        <div 
          className="fluid-blob w-[700px] h-[700px] bg-primary/10" 
          style={{ bottom: '-10%', left: '15%', animationDelay: '-12s' }} 
        />
        <div 
          className="fluid-blob w-[450px] h-[450px] bg-accent/10" 
          style={{ bottom: '20%', right: '10%', animationDelay: '-18s' }} 
        />
      </div>

      {/* Decorative header border */}
      <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent to-primary opacity-30" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          {/* Logo / Icon Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-primary/10 rounded-xl blur-xl animate-pulse" />
            <img 
              src={logoImg} 
              alt="Collegium of Minds Logo" 
              className="w-full h-full object-contain relative z-10 rounded-xl border border-primary/20 shadow-2xl"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 tracking-tight leading-tight">
            Collegium of <span className="text-primary italic">Minds</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 font-display italic">
            A community for curious thinkers and lifelong learners.
          </p>

          <div className="mb-8">
            <p className="text-primary font-display font-medium tracking-wide">Think. Explore. Discover. 🧠✨</p>
          </div>

          <div className="h-px w-24 bg-border mx-auto mb-8" />

          <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            The Collegium of Minds welcomes individuals passionate about exploring science 🔬, mathematics ➗, philosophy 🧠, literature 📚, history 🏛️, technology 💻, arts 🎨, and beyond. Here, ideas are shared, questions are celebrated, and minds come together to discover, discuss, and innovate 💡. Join us in a space where curiosity knows no bounds.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto justify-items-center"
        >
          {/* First Row: Contact, Guidelines, Membership */}
          <motion.div variants={item} className="w-64 h-64 flex justify-center">
            <ContactCard email="collegiumofminds@gmail.com" />
          </motion.div>
          <motion.div variants={item} className="w-64 h-64 flex justify-center">
            <SocialCard
              title="Guidelines"
              description="Read our community standards and shared values."
              icon={<span className="text-xl">📜</span>}
              href="https://docs.google.com/document/d/1XoxcR-ZKuqt6kvdyBPiHqpQ1Y7T_tWgGbE90ewQCzKY/edit?usp=sharing"
            />
          </motion.div>
          <motion.div variants={item} className="w-64 h-64 flex justify-center">
            <MembershipCard />
          </motion.div>

          {/* Second Row: YouTube, Medium, Substack */}
          <motion.div variants={item} className="w-64 h-64 flex justify-center">
            <SocialCard
              title="YouTube"
              description="Watch our latest talks, discussions, and educational content."
              icon={<SiYoutube className="w-4 h-4" />}
              href="https://www.youtube.com/@TheCollegiumofMinds"
              accentColor="#FF0000"
            />
          </motion.div>
          <motion.div variants={item} className="w-64 h-64 flex justify-center">
            <SocialCard
              title="Medium"
              description="Read articles, essays, and thought pieces from our community members."
              icon={<SiMedium className="w-4 h-4" />}
              href="https://medium.com/@collegiumofminds"
              accentColor="#000000"
            />
          </motion.div>
          <motion.div variants={item} className="w-64 h-64 flex justify-center">
            <SocialCard
              title="Substack"
              description="Join our newsletter for deep dives and regular insights."
              icon={<span className="text-xl">📧</span>}
              href="https://thecollegiumofminds.substack.com/"
              accentColor="#FF6719"
            />
          </motion.div>

          {/* Third Row: Website (Centered) */}
          <div className="hidden md:block" /> {/* Side Gap */}
          <motion.div variants={item} className="w-64 h-64 flex justify-center">
            <SocialCard
              title="Website"
              description="Explore our main platform for resources and community projects."
              icon={<span className="text-xl">🌐</span>}
              href="https://collegium137.vercel.app"
            />
          </motion.div>
          <div className="hidden md:block" /> {/* Side Gap */}
        </motion.div>

        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-24 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground font-light"
        >
          <p>&copy; {new Date().getFullYear()} Collegium of Minds. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-60">Think. Explore. Discover. 🧠✨</p>
        </motion.footer>
      </main>
    </div>
  );
}
