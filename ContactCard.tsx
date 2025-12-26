import { Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ContactCardProps {
  email: string;
}

export function ContactCard({ email }: ContactCardProps) {
  const gmailLink = "https://mail.google.com/mail/?view=cm&to=collegiumofminds@gmail.com";
  return (
    <motion.a
      href={gmailLink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group block relative bg-blue-50/50 dark:bg-blue-900/20 border-2 border-blue-100 dark:border-blue-900/30 rounded-none p-6 shadow-none hover:border-blue-400 transition-all duration-300 aspect-square"
    >
      <div className="absolute top-2 left-2 text-xs font-mono font-bold text-blue-400">
        01
      </div>
      <div className="absolute top-2 right-2 text-xs font-mono text-blue-400">
        1.008
      </div>
      
      <div className="relative z-10 flex flex-col h-full items-center justify-center text-center">
        <div className="text-5xl font-display font-bold mb-1 text-blue-900 dark:text-blue-100">Co</div>
        <div className="text-[10px] font-display font-semibold mb-4 uppercase tracking-tighter text-blue-500">Contact</div>
        
        <p className="text-[10px] text-blue-400 font-mono uppercase tracking-widest mb-4 truncate w-full">
          {email}
        </p>

        <div className="w-8 h-8 rounded-full border border-blue-200 dark:border-blue-800 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
          <Mail className="w-4 h-4 text-blue-400 group-hover:text-blue-500" />
        </div>
      </div>
    </motion.a>
  );
}
