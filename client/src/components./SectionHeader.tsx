import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-bold text-sm tracking-wide uppercase mb-3"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary"
      >
        {title}
      </motion.h2>
    </div>
  );
}
