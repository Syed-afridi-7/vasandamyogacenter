import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoSvg from "@/assets/logo.png";

const LogoIntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
    const [phase, setPhase] = useState<"center" | "fly" | "done">("center");

    useEffect(() => {
        // Show logo at bottom-center for 800ms, then fly to top-left
        const t1 = setTimeout(() => setPhase("fly"), 800);
        // After the fly animation (800ms), mark done
        const t2 = setTimeout(() => {
            setPhase("done");
            onComplete();
        }, 1700);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {phase !== "done" && (
                <motion.div
                    className="fixed inset-0 z-[9999] bg-[#0a0d1a] flex items-end justify-center pointer-events-none"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: phase === "fly" ? 0 : 1 }}
                    transition={{ duration: 0.5, delay: phase === "fly" ? 0.7 : 0 }}
                >
                    <motion.img
                        src={logoSvg}
                        alt="Logo"
                        className="object-contain"
                        // Start: bottom-center, large
                        initial={{ x: 0, y: -60, scale: 1.4, opacity: 0 }}
                        animate={
                            phase === "center"
                                ? { x: 0, y: -60, scale: 1.4, opacity: 1 }
                                : {
                                    // Fly to top-left navbar position
                                    x: "calc(-50vw + 90px)",
                                    y: "calc(-100vh + 72px)",
                                    scale: 0.35,
                                    opacity: 1,
                                }
                        }
                        transition={
                            phase === "center"
                                ? { duration: 0.4, ease: "easeOut" }
                                : { duration: 0.75, ease: [0.4, 0, 0.2, 1] }
                        }
                        style={{ width: 180, height: 180 }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LogoIntroAnimation;
