import { useState } from "react";
import { motion } from "framer-motion";
import {
    User, Phone, MapPin, CheckCircle2,
    Loader2, Trophy, Star, CalendarDays, UsersRound,
} from "lucide-react";

/* ── Shared form state type ─────────────────────────────── */
type FormState = {
    name: string;
    gender: string;
    dob: string;
    age: string;
    address: string;
    whatsapp: string;
};

const defaultForm = (): FormState => ({
    name: "", gender: "", dob: "", age: "", address: "", whatsapp: "",
});

/* ── Reusable form component ────────────────────────────── */
function RegistrationForm({
    eventLabel,
    accentClass,
    apiEventValue,
    benefits,
}: {
    eventLabel: string;
    accentClass: string;
    apiEventValue: string;
    benefits: string[];
}) {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [form, setForm] = useState<FormState>(defaultForm());

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch("http://localhost:5000/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, event_type: apiEventValue }),
            });
            const data = await res.json();
            if (data.success) {
                setSubmitted(true);
            } else {
                setError(data.message || "Something went wrong. Please try again.");
            }
        } catch {
            setError("Unable to connect to server. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <motion.div
                className="flex flex-col items-center justify-center gap-5 py-20 text-center
                           bg-card border border-border rounded-b-2xl shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Registration Successful!</h3>
                    <p className="text-muted-foreground text-sm max-w-sm">
                        Thank you, <strong>{form.name}</strong>!
                        We'll reach you on WhatsApp <strong>{form.whatsapp}</strong> with payment &amp; further details.
                    </p>
                </div>
                <button
                    onClick={() => { setSubmitted(false); setForm(defaultForm()); }}
                    className="mt-2 text-sm text-primary font-semibold underline underline-offset-4 hover:no-underline"
                >
                    Register Another
                </button>
            </motion.div>
        );
    }

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="bg-card border border-t-0 border-border rounded-b-2xl shadow-sm p-8 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
        >
            {/* Benefits strip */}
            <div className="bg-muted/50 rounded-xl p-4 space-y-1.5">
                <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                    What you will receive:
                </p>
                {benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {b}
                    </div>
                ))}
            </div>

            {/* Name */}
            <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <User className="w-4 h-4 text-primary" /> Full Name
                </label>
                <input
                    type="text" name="name" value={form.name} onChange={handleChange}
                    required placeholder="Enter your full name" className="input-modern"
                />
            </div>

            {/* Gender */}
            <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <UsersRound className="w-4 h-4 text-primary" /> Gender
                </label>
                <select name="gender" value={form.gender} onChange={handleChange} required className="input-modern">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {/* DOB / Age */}
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <CalendarDays className="w-4 h-4 text-primary" /> Date of Birth
                    </label>
                    <input
                        type="date" name="dob" value={form.dob} onChange={handleChange}
                        required className="input-modern"
                    />
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-foreground">Age</label>
                    <input
                        type="number" name="age" value={form.age} onChange={handleChange}
                        required min="5" max="100" placeholder="Age" className="input-modern"
                    />
                </div>
            </div>

            {/* Address */}
            <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <MapPin className="w-4 h-4 text-primary" /> Address
                </label>
                <textarea
                    name="address" value={form.address}
                    onChange={handleChange}
                    required placeholder="Enter your full address"
                    rows={2}
                    className="input-modern resize-none"
                />
            </div>

            {/* WhatsApp Number */}
            <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Phone className="w-4 h-4 text-primary" /> WhatsApp Number
                </label>
                <input
                    type="tel" name="whatsapp" value={form.whatsapp} onChange={handleChange}
                    required placeholder="+91 98765 43210" className="input-modern"
                />
            </div>

            {error && (
                <p className="text-red-500 text-sm text-center bg-red-50 border border-red-200 rounded-lg px-4 py-2">
                    {error}
                </p>
            )}

            <button
                type="submit"
                disabled={loading}
                className={`w-full text-white font-semibold text-sm py-4 flex items-center
                            justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed
                            rounded-xl transition-all ${accentClass}`}
            >
                {loading
                    ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                    : `Submit — ${eventLabel}`}
            </button>
        </motion.form>
    );
}

/* ── Main Section ───────────────────────────────────────── */
const RegistrationSection = () => {
    return (
        <section id="register" className="py-24 bg-muted/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label mb-4 inline-flex">Register</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
                        Salem Yoga Festival 2026 — Registration
                    </h2>
                    <p className="text-muted-foreground max-w-md mx-auto text-base">
                        Choose your event and secure your spot. Limited entries available.
                    </p>
                </motion.div>

                {/* Two Registration Boxes */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

                    {/* Box A — World Record Event */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-gradient-to-r from-violet-600 to-indigo-700 rounded-t-2xl px-8 py-5 flex items-center gap-3">
                            <Trophy className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                            <div>
                                <h3 className="text-white font-bold text-lg">World Record Event</h3>
                                <p className="text-white/70 text-xs">Advanced Yoga Performance</p>
                            </div>
                        </div>
                        <RegistrationForm
                            eventLabel="World Record Event"
                            accentClass="btn-primary-glow"
                            apiEventValue="world_record"
                            benefits={[
                                "World Record Certificate & Medal",
                                "Framed Certificate & Medal",
                            ]}
                        />
                    </motion.div>

                    {/* Box B — National Yoga Competition */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-t-2xl px-8 py-5 flex items-center gap-3">
                            <Star className="w-6 h-6 text-yellow-100 flex-shrink-0" />
                            <div>
                                <h3 className="text-white font-bold text-lg">National Yoga Competition</h3>
                                <p className="text-white/70 text-xs">Open to All Levels</p>
                            </div>
                        </div>
                        <RegistrationForm
                            eventLabel="National Yoga Competition"
                            accentClass="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
                            apiEventValue="national_yoga"
                            benefits={[
                                "Participation Certificate & Medal",
                                "Framed Certificate",
                                "Organization Certificate",
                                "Top Winner Prize",
                            ]}
                        />
                    </motion.div>
                </div>

                {/* Payment link notice */}
                <motion.div
                    className="mt-10 max-w-xl mx-auto text-center bg-card border border-border rounded-2xl p-6 shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <p className="text-sm font-semibold text-foreground mb-1">
                        🔗 Payment Link
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Payment link will be shared on WhatsApp after form submission.
                        <br />
                        <span className="text-amber-500 font-medium">Link coming soon — stay tuned!</span>
                    </p>
                </motion.div>

                {/* Bottom notice */}
                <motion.p
                    className="text-center text-xs text-muted-foreground mt-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    ⚠️ Limited registrations available. Early registration is encouraged.
                </motion.p>
            </div>
        </section>
    );
};

export default RegistrationSection;
