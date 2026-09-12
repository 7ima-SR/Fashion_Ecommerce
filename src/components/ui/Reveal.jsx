import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EASE } from "../../data/brand";

export function Reveal({ children, delay = 0, y = 28, className = "", once = true }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-8% 0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function LineReveal({ text, className = "", delay = 0, as: Tag = "span" }) {
  const words = text.split(" ");
  return (
    <Tag className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: delay + i * 0.05, ease: EASE }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function ImageReveal({ src, alt, className = "", ratio = "aspect-[3/4]" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <div ref={ref} className={`relative overflow-hidden bg-[#EAE0CE] ${ratio} ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="img-warm absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.18 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 1.4, ease: EASE }}
      />
      <motion.div
        className="absolute inset-0 bg-[#171615]"
        initial={{ scaleY: 1 }}
        animate={inView ? { scaleY: 0 } : {}}
        style={{ transformOrigin: "top" }}
        transition={{ duration: 1, ease: EASE }}
      />
    </div>
  );
}

export function SectionHead({ kicker, title, ar, link, className = "" }) {
  return (
    <div className={`flex flex-wrap items-end justify-between gap-4 ${className}`}>
      <div>
        {kicker && <p className="text-[11px] font-semibold tracking-[0.28em] text-[#A6533C]">{kicker}</p>}
        <h2 className="font-display mt-2 text-4xl leading-[1.02] md:text-6xl">{title}</h2>
        {ar && <p className="font-arabic mt-2 text-lg opacity-60">{ar}</p>}
      </div>
      {link}
    </div>
  );
}
