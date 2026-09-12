import { Link } from "react-router-dom";

export function LogoMark({ dark = false, size = 34 }) {
  const fg = dark ? "#F2EBDD" : "#171615";
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="MAKAN home">
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="38" height="38" stroke={fg} strokeWidth="1.6" />
        <path d="M11 28V12l9 10 9-10v16" stroke={fg} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" fill="none" />
        <circle cx="20" cy="29.5" r="1.4" fill="#A6533C" />
      </svg>
      <span className="leading-none">
        <span className="block text-[19px] font-bold tracking-[0.22em]">MAKAN</span>
        <span className="font-arabic block text-[11px] tracking-[0.3em] opacity-70">مَكان · القاهرة</span>
      </span>
    </span>
  );
}

export function LogoFull({ dark = false }) {
  return (
    <Link to="/" aria-label="MAKAN — home" className="shrink-0">
      <LogoMark dark={dark} />
    </Link>
  );
}

export function Monogram({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="MAKAN monogram">
      <rect width="48" height="48" fill="#171615" />
      <path d="M12 34V14l12 13 12-13v20" stroke="#F2EBDD" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="37" r="1.6" fill="#D8C5A9" />
    </svg>
  );
}
