import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Star } from "lucide-react";
import img2 from "@/assets/img2.jpeg";

const dignitaries = [
    {
        name: "Dr. C. Palanivel",
        title: "M.B.B.S., D.Ortho, Mch.Ortho (Trauma)",
        role: "Hospital Superintendent, District Headquarters Hospital, Tambaram",
    },
    {
        name: "Dr. R. Purushothaman",
        title: "Deputy Director, Dept of Physical Education",
        role: "B. S. Abdur Rahman Crescent Institute of Science and Technology",
    },
    {
        name: "Dr. R. Hemalatha",
        title: "D.C.E., D.F.A., B.TTP — Seva Ratna Awardee",
        role: "Director, Noble World Records",
    },
    {
        name: "Dr. Kalaivani. N",
        title: "B.Sc., B.Ed.",
        role: "Adjudicator, Noble World Records",
    },
];

const ShadowPhoenixSection = () => {
    return (
        <section className="py-24 bg-muted/30 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-violet-500/5 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label mb-4 inline-flex">Noble World Records</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-2">
                        Shadow Phoenix <span className="text-violet-500">Martial Arts</span>
                    </h2>
                    <p className="text-xl font-bold text-primary mt-2">Tamizharum Silambamum</p>
                </motion.div>

                {/* Event Poster Image */}
                <motion.div
                    className="mb-12 flex justify-center"
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src={img2}
                        alt="Shadow Phoenix Martial Arts - Tamizharum Silambamum 2026"
                        className="rounded-2xl shadow-2xl w-full max-w-2xl object-contain border border-border"
                    />
                </motion.div>

                {/* Event Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
                    <motion.div
                        className="bg-card border border-border rounded-2xl p-6 shadow-sm flex items-start gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Date</p>
                            <p className="text-lg font-bold text-foreground">01 March 2026</p>
                            <p className="text-sm text-muted-foreground">Sunday</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-card border border-border rounded-2xl p-6 shadow-sm flex items-start gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Venue</p>
                            <p className="text-base font-bold text-foreground">Green Grass Turf Ground</p>
                            <p className="text-xs text-muted-foreground">4, M.G.R. Street, Shanthi Nagar, Old Perungalathur, Chennai – 600 063</p>
                        </div>
                    </motion.div>
                </div>

                {/* Dignitaries */}
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-2 justify-center mb-8">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <h3 className="font-bold text-foreground text-xl">Distinguished Guests & Officials</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {dignitaries.map((d, i) => (
                            <motion.div
                                key={i}
                                className="bg-card border border-border rounded-2xl p-5 text-center hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mx-auto mb-3">
                                    <Award className="w-7 h-7 text-white" />
                                </div>
                                <p className="font-bold text-foreground text-sm">{d.name}</p>
                                <p className="text-xs text-primary font-medium mt-0.5">{d.title}</p>
                                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{d.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Special Mention */}
                <motion.div
                    className="bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 rounded-2xl p-6 text-white text-center max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-sm font-semibold text-white/80 uppercase tracking-widest mb-2">Best Coach</p>
                    <p className="text-xl font-bold">Mr. Manikandan. G</p>
                    <p className="text-sm text-white/70 mt-1">DME., B.Tech., Mech., DIP Yoga</p>
                    <p className="text-xs text-white/60 mt-1">Best Coach of the Year · Young Achiever Award · Best Performance Award in Silambam</p>
                </motion.div>
            </div>
        </section>
    );
};

export default ShadowPhoenixSection;
