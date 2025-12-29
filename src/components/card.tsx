import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
  delay?: number;
}

export default function Card({
  children,
  className,
  colSpan = "col-span-1",
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:bg-white/10 hover:border-white/20",
        colSpan,
        className
      )}
    >
      {children}
    </motion.div>
  );
}
