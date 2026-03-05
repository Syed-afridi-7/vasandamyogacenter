import { motion } from "framer-motion";
import { Calendar, Trophy, CheckCircle2, IndianRupee, FileText } from "lucide-react";
import img1 from "@/assets/img1.jpeg";

const schedule = [
    { period: "March 1 – March 31", detail: "Registration Open" },
    { period: "April & May", detail: "Video Uploading Period" },
    { period: "June 21", detail: "Top 10 Winners Announcement (International Yoga Day)" },
];

const guidelines = [
    "Registration must be completed online",
    "Video should be recorded in portrait mode",
    "Submit video via WhatsApp (Document Format)",
    "Videos can be normal or edited (music allowed)",
    "Max 3 Videos per Participant (Under One Registration ID)",
    "Pair Yoga Allowed (Two Participants in One Video)",
];

const rewards = [
    "Participation Certificate",
    "Medal",
    "Framed Certificate",
    "Organization Certificate",
    "Top Winner Prize",
    "Courier Charges + Extra Amount",
];

const SalemYogasanaSection = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label mb-4 inline-flex">Event 1 Schedule</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-3">
                        Salem Yogasana Festival <span className="text-violet-500">2026</span>
                    </h2>
                    <p className="text-lg font-semibold text-primary mt-2">
                        Advanced Yoga Performance &amp; Awareness Program — Online World Record Event
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                        Organised by <strong>Vasantham Yoga Center</strong>
                    </p>
                </motion.div>

                {/* Event Poster Image */}
                <motion.div
                    className="mb-14 flex justify-center"
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src={img1}
                        alt="Salem Yogasana Festival 2026"
                        className="rounded-2xl shadow-2xl w-full max-w-lg object-contain border border-border"
                    />
                </motion.div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Event Schedule */}
                    <motion.div
                        className="lg:col-span-1 bg-card border border-border rounded-2xl p-6 shadow-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 mb-5">
                            <Calendar className="w-5 h-5 text-primary" />
                            <h3 className="font-bold text-foreground text-base">Event 1 Schedule</h3>
                        </div>
                        <div className="space-y-4">
                            {schedule.map((s, i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">{s.period}</p>
                                        <p className="text-xs text-muted-foreground">{s.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-4 text-xs text-muted-foreground border-t border-border pt-3">
                            Participation Certificate and Medal Included.
                        </p>
                    </motion.div>

                    {/* Entry Fee + Rewards */}
                    <motion.div
                        className="lg:col-span-1 space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-5 text-white shadow-lg">
                                <div className="flex items-center gap-1 mb-2">
                                    <IndianRupee className="w-4 h-4 text-yellow-300" />
                                    <h3 className="font-bold text-sm">World Record</h3>
                                </div>
                                <p className="text-3xl font-extrabold">₹850</p>
                                <p className="text-xs text-white/70 mt-1">Per Participant</p>
                                <p className="text-xs text-white/80 mt-1.5 font-medium">Certificate & Medal</p>
                            </div>
                            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-5 text-white shadow-lg">
                                <div className="flex items-center gap-1 mb-2">
                                    <IndianRupee className="w-4 h-4 text-yellow-200" />
                                </div>
                                <p className="text-3xl font-extrabold">₹1200</p>
                                <p className="text-xs text-white/70 mt-1">Per Participant</p>
                                <p className="text-xs text-white/80 mt-1.5 font-medium">Framed Certificate, Certificate & Medal</p>
                            </div>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center gap-2 mb-4">
                                <Trophy className="w-5 h-5 text-yellow-500" />
                                <h3 className="font-bold text-foreground text-base">Participants Will Receive</h3>
                            </div>
                            <div className="space-y-2.5">
                                {rewards.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Event Guidelines */}
                    <motion.div
                        className="lg:col-span-1 bg-card border border-border rounded-2xl p-6 shadow-sm"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 mb-5">
                            <FileText className="w-5 h-5 text-primary" />
                            <h3 className="font-bold text-foreground text-base">Event Guidelines</h3>
                        </div>
                        <ul className="space-y-2.5">
                            {guidelines.map((g, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                    {g}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="#register"
                        className="btn-primary-glow inline-flex items-center gap-2 text-white font-semibold px-10 py-4"
                    >
                        Limited Entries — Register Now!
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default SalemYogasanaSection;
