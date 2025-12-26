import { UserPlus, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function MembershipCard() {
  const membershipLink = "https://forms.gle/fMna43xRijuqaLP8A";
  return (
    <motion.a
      href={membershipLink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group block relative bg-slate-50 dark:bg-slate-900/20 border-2 border-slate-200 dark:border-slate-800 rounded-none p-6 shadow-none transition-all duration-300 aspect-square"
    >
      <div className="absolute top-2 left-2 text-xs font-mono font-bold text-slate-400">
        03
      </div>
      <div className="absolute top-2 right-2 text-xs font-mono text-slate-400">
        6.941
      </div>
      
      <div className="relative z-10 flex flex-col h-full items-center justify-center text-center">
        <div className="text-5xl font-display font-bold mb-1 text-slate-900 dark:text-slate-100">Mb</div>
        <div className="text-[10px] font-display font-semibold mb-4 uppercase tracking-tighter text-slate-500">Membership</div>
        
        <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-4">
          Join Community
        </p>

        <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:bg-slate-100 dark:group-hover:bg-slate-800 transition-colors">
          <UserPlus className="w-4 h-4 text-slate-500" />
        </div>
      </div>
    </motion.a>
  );
}
