import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SocialCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  accentColor?: string; // Optional hex for hover effect
}

export function SocialCard({ title, description, icon, href, accentColor }: SocialCardProps) {
  const getCardData = () => {
    switch(title) {
      case "YouTube":
        return { 
          num: "04", 
          mass: "9.0122", 
          sym: "Yt", 
          full: "YouTube", 
          bg: "bg-red-100/30 dark:bg-red-900/10", 
          border: "border-red-200 dark:border-red-800/50", 
          text: "text-red-800 dark:text-red-200",
          hover: "hover:border-red-400"
        };
      case "Medium":
        return { 
          num: "05", 
          mass: "10.811", 
          sym: "Me", 
          full: "Medium", 
          bg: "bg-slate-100/50 dark:bg-slate-800/20", 
          border: "border-slate-300 dark:border-slate-700", 
          text: "text-slate-800 dark:text-slate-200",
          hover: "hover:border-blue-300"
        };
      case "Substack":
        return { 
          num: "06", 
          mass: "12.011", 
          sym: "Su", 
          full: "Substack", 
          bg: "bg-orange-100/30 dark:bg-orange-900/10", 
          border: "border-orange-200 dark:border-orange-800/50", 
          text: "text-orange-800 dark:text-orange-200",
          hover: "hover:border-orange-400"
        };
      case "Website":
        return { 
          num: "07", 
          mass: "14.007", 
          sym: "Ws", 
          full: "Website", 
          bg: "bg-sky-100/30 dark:bg-sky-900/10", 
          border: "border-sky-200 dark:border-sky-800/50", 
          text: "text-sky-800 dark:text-sky-200",
          hover: "hover:border-sky-400"
        };
      case "Guidelines":
        return { 
          num: "02", 
          mass: "4.0026", 
          sym: "Gd", 
          full: "Guidelines", 
          bg: "bg-cyan-100/30 dark:bg-cyan-900/10", 
          border: "border-cyan-200 dark:border-cyan-800/50", 
          text: "text-cyan-800 dark:text-cyan-200",
          hover: "hover:border-cyan-400"
        };
      default:
        return { 
          num: "??", 
          mass: "0.000", 
          sym: "??", 
          full: "Unknown", 
          bg: "bg-slate-50", 
          border: "border-slate-200", 
          text: "text-slate-600",
          hover: "hover:border-blue-400"
        };
    }
  };

  const data = getCardData();

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group flex flex-col items-center justify-center ${data.bg} border-2 ${data.border} ${data.hover} rounded-none p-6 shadow-none transition-all duration-300 relative aspect-square text-center`}
    >
      <div className={`absolute top-2 left-2 text-xs font-mono font-bold ${data.text} opacity-60`}>
        {data.num}
      </div>
      <div className={`absolute top-2 right-2 text-xs font-mono ${data.text} opacity-60`}>
        {data.mass}
      </div>

      <div className="relative z-10">
        <div className={`text-5xl font-display font-bold mb-1 ${data.text}`}>
          {data.sym}
        </div>
        <div className={`text-xs font-display font-semibold mb-4 uppercase tracking-tighter ${data.text}`}>{data.full}</div>
        
        <p className={`text-[10px] ${data.text} uppercase tracking-widest mb-4 opacity-60`}>
          Visit {title}
        </p>

        <div className={`mx-auto w-8 h-8 rounded-full border flex items-center justify-center transition-colors border-current opacity-30 group-hover:opacity-60 overflow-hidden`}>
          <div className={`flex items-center justify-center w-full h-full text-base ${data.text}`}>
            {icon}
          </div>
        </div>
      </div>
    </motion.a>
  );
}
