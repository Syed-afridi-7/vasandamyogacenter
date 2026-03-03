import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoSrc from "@/assets/logo.png";

/* ─── Types ─────────────────────────────────────── */
type Phase = "black" | "particles" | "slam" | "text" | "exit" | "done";

/* ─── Floating particle spec ─────────────────────── */
interface Particle {
    id: number;
    x: number;      // % from left
    delay: number;
    duration: number;
    size: number;
    opacity: number;
    color: string;
}

const COLORS = [
    "rgba(167,139,250,0.8)",  // violet-400
    "rgba(99,102,241,0.7)",   // indigo-500
    "rgba(251,191,36,0.6)",   // amber-400  (matches logo orange)
    "rgba(255,255,255,0.5)",  // white
];

function makeParticles(n: number): Particle[] {
    return Array.from({ length: n }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 1.2,
        duration: 2 + Math.random() * 2,
        size: 2 + Math.random() * 4,
        opacity: 0.3 + Math.random() * 0.7,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));
}

const PARTICLES = makeParticles(60);

/* ─── Lens-flare streaks ─────────────────────────── */
const STREAKS = [0, 45, 90, 135, 180, 225, 270, 315];

/* ─── Brand letters removed ─────────────────────── */

/* ─── Component ──────────────────────────────────── */
const LogoIntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
    const [phase, setPhase] = useState<Phase>("black");
    const [shockwave, setShockwave] = useState(false);
    const rafRef = useRef<number>(0);

    useEffect(() => {
        // Timeline
        const t0 = setTimeout(() => setPhase("particles"), 200);   // particles begin
        const t1 = setTimeout(() => {                               // logo slams in
            setPhase("slam");
            setShockwave(true);
            setTimeout(() => setShockwave(false), 800);
        }, 900);
        const t2 = setTimeout(() => setPhase("text"), 1800);        // text reveal
        const t3 = setTimeout(() => setPhase("exit"), 3600);        // dramatic exit
        const t4 = setTimeout(() => {
            setPhase("done");
            onComplete();
        }, 4600);

        return () => {
            [t0, t1, t2, t3, t4].forEach(clearTimeout);
            cancelAnimationFrame(rafRef.current);
        };
    }, [onComplete]);

    if (phase === "done") return null;

    const isExit = phase === "exit";
    const showParticles = phase !== "black";
    const showLogo = phase === "slam" || phase === "text" || phase === "exit";
    const showText = phase === "text" || phase === "exit";

    return (
        <AnimatePresence>
            <motion.div
                key="intro-root"
                className="fixed inset-0 z-[9999] overflow-hidden select-none"
                style={{ background: "#04030a" }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* ── Radial vignette ─────────────────────────── */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(0,0,0,0.85) 100%)",
                    }}
                />

                {/* ── Ambient light glow ──────────────────────── */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(109,40,217,0.18) 0%, transparent 70%)",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showLogo ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                />

                {/* ── Floating particles ──────────────────────── */}
                <AnimatePresence>
                    {showParticles &&
                        PARTICLES.map((p) => (
                            <motion.div
                                key={p.id}
                                className="absolute rounded-full pointer-events-none"
                                style={{
                                    left: `${p.x}%`,
                                    bottom: 0,
                                    width: p.size,
                                    height: p.size,
                                    background: p.color,
                                    filter: "blur(0.5px)",
                                }}
                                initial={{ y: 0, opacity: 0 }}
                                animate={{
                                    y: [0, -(300 + Math.random() * 400)],
                                    opacity: [0, p.opacity, p.opacity * 0.6, 0],
                                }}
                                transition={{
                                    duration: p.duration,
                                    delay: p.delay,
                                    repeat: Infinity,
                                    repeatDelay: Math.random() * 1,
                                    ease: "easeOut",
                                }}
                            />
                        ))}
                </AnimatePresence>

                {/* ── Shockwave ring ──────────────────────────── */}
                <AnimatePresence>
                    {shockwave && (
                        <motion.div
                            key="shockwave"
                            className="absolute rounded-full pointer-events-none"
                            style={{
                                top: "50%",
                                left: "50%",
                                translateX: "-50%",
                                translateY: "-50%",
                                border: "2px solid rgba(167,139,250,0.6)",
                            }}
                            initial={{ width: 80, height: 80, opacity: 1 }}
                            animate={{ width: 700, height: 700, opacity: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        />
                    )}
                </AnimatePresence>

                {/* ── Lens flare burst (slam moment) ──────────── */}
                <AnimatePresence>
                    {shockwave &&
                        STREAKS.map((angle) => (
                            <motion.div
                                key={`streak-${angle}`}
                                className="absolute pointer-events-none"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    width: 2,
                                    originX: "50%",
                                    originY: "0%",
                                    rotate: angle,
                                    translateX: "-50%",
                                    translateY: "-50%",
                                    background:
                                        "linear-gradient(to bottom, rgba(167,139,250,0.9), transparent)",
                                    borderRadius: 4,
                                }}
                                initial={{ height: 0, opacity: 1 }}
                                animate={{ height: 220, opacity: 0 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            />
                        ))}
                </AnimatePresence>

                {/* ── Logo ────────────────────────────────────── */}
                <AnimatePresence>
                    {showLogo && (
                        <motion.div
                            className="absolute pointer-events-none"
                            style={{
                                top: "50%",
                                left: "50%",
                                translateX: "-50%",
                                translateY: isExit ? "-50%" : "-62%",
                            }}
                            initial={{ opacity: 0, scale: 2.5, filter: "blur(20px)" }}
                            animate={
                                isExit
                                    ? { opacity: 0, scale: 0.15, filter: "blur(8px)" }
                                    : { opacity: 1, scale: 1, filter: "blur(0px)" }
                            }
                            transition={
                                isExit
                                    ? { duration: 0.8, ease: [0.4, 0, 1, 1] }
                                    : { duration: 0.6, ease: [0.22, 1.2, 0.36, 1] }
                            }
                        >
                            {/* Glowing halo behind logo */}
                            <div
                                className="absolute rounded-full pointer-events-none"
                                style={{
                                    width: 180,
                                    height: 180,
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%,-50%)",
                                    background:
                                        "radial-gradient(circle, rgba(124,58,237,0.5) 0%, transparent 70%)",
                                    filter: "blur(20px)",
                                }}
                            />
                            <motion.img
                                src={logoSrc}
                                alt="Salem Yoga Festival Logo"
                                style={{
                                    width: 160,
                                    height: 160,
                                    objectFit: "contain",
                                    position: "relative",
                                    zIndex: 1,
                                    filter: "drop-shadow(0 0 24px rgba(167,139,250,0.55))",
                                }}
                                animate={{ filter: ["drop-shadow(0 0 24px rgba(167,139,250,0.55))", "drop-shadow(0 0 40px rgba(167,139,250,0.9))", "drop-shadow(0 0 24px rgba(167,139,250,0.55))"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── Brand text block ────────────────────────── */}
                <AnimatePresence>
                    {showText && (
                        <motion.div
                            className="absolute flex flex-col items-center pointer-events-none"
                            style={{ top: "50%", left: "50%", translateX: "-50%", translateY: "30%" }}
                            initial={{ opacity: 0 }}
                            animate={isExit ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
                            transition={{ duration: isExit ? 0.4 : 0.3, ease: "easeOut" }}
                        >

                            {/* Divider line */}
                            <motion.div
                                className="mt-3"
                                style={{
                                    height: 1,
                                    background:
                                        "linear-gradient(90deg, transparent, rgba(167,139,250,0.8), transparent)",
                                }}
                                initial={{ width: 0 }}
                                animate={{ width: 260 }}
                                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                            />

                            {/* Tagline */}
                            <motion.p
                                style={{
                                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                                    fontSize: "clamp(9px, 1.5vw, 11px)",
                                    letterSpacing: "0.28em",
                                    color: "rgba(148,163,184,0.85)",
                                    textTransform: "uppercase",
                                    marginTop: 10,
                                    fontWeight: 500,
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.0, duration: 0.5 }}
                            >
                                Salem Yoga Festival 2026
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── Exit: cinematic horizontal shutter wipe ──── */}
                <AnimatePresence>
                    {isExit && (
                        <>
                            {/* Top shutter */}
                            <motion.div
                                className="absolute left-0 right-0 pointer-events-none"
                                style={{ top: 0, background: "#04030a", transformOrigin: "top" }}
                                initial={{ height: 0 }}
                                animate={{ height: "51%" }}
                                transition={{ duration: 0.65, ease: [0.7, 0, 0.9, 1], delay: 0.25 }}
                            />
                            {/* Bottom shutter */}
                            <motion.div
                                className="absolute left-0 right-0 pointer-events-none"
                                style={{ bottom: 0, background: "#04030a", transformOrigin: "bottom" }}
                                initial={{ height: 0 }}
                                animate={{ height: "51%" }}
                                transition={{ duration: 0.65, ease: [0.7, 0, 0.9, 1], delay: 0.25 }}
                            />
                        </>
                    )}
                </AnimatePresence>
            </motion.div>
        </AnimatePresence>
    );
};

export default LogoIntroAnimation;
