import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react";

const RegistrationSection = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [form, setForm] = useState({
        name: "", age: "", gender: "", phone: "", email: "", city: "", experience: "", event_type: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
                body: JSON.stringify(form),
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

    return (
        <section id="register" className="py-24 bg-muted/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label mb-4 inline-flex">Register</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
                        Salem Yoga Festival 2026 Registration
                    </h2>
                    <p className="text-muted-foreground max-w-md mx-auto text-base">
                        Register now for the World Record Event or the National Yoga Competition.
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto">
                    {submitted ? (
                        <motion.div
                            className="flex flex-col items-center justify-center gap-5 py-20 text-center bg-card border border-border rounded-2xl shadow-sm"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center animate-pulse-glow">
                                <CheckCircle2 className="w-10 h-10 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">Registration Successful!</h3>
                                <p className="text-muted-foreground text-sm max-w-sm">
                                    Thank you, <strong>{form.name}</strong>! We'll contact you at{" "}
                                    <strong>{form.email}</strong> with further details.
                                </p>
                            </div>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="mt-2 text-sm text-primary font-semibold underline underline-offset-4 hover:no-underline"
                            >
                                Register Another
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form
                            onSubmit={handleSubmit}
                            className="bg-card border border-border rounded-2xl shadow-sm p-8 space-y-5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
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

                            {/* Age & Gender */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-foreground">Age</label>
                                    <input
                                        type="number" name="age" value={form.age} onChange={handleChange}
                                        required min="5" max="100" placeholder="Age" className="input-modern"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-foreground">Gender</label>
                                    <select name="gender" value={form.gender} onChange={handleChange} required className="input-modern">
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="space-y-1.5">
                                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                    <Phone className="w-4 h-4 text-primary" /> Phone Number
                                </label>
                                <input
                                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                                    required placeholder="+91 98765 43210" className="input-modern"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-1.5">
                                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                    <Mail className="w-4 h-4 text-primary" /> Email Address
                                </label>
                                <input
                                    type="email" name="email" value={form.email} onChange={handleChange}
                                    required placeholder="you@example.com" className="input-modern"
                                />
                            </div>

                            {/* City */}
                            <div className="space-y-1.5">
                                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                    <MapPin className="w-4 h-4 text-primary" /> City
                                </label>
                                <input
                                    type="text" name="city" value={form.city} onChange={handleChange}
                                    required placeholder="Enter your city" className="input-modern"
                                />
                            </div>

                            {/* Experience */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-foreground">Yoga Experience Level</label>
                                    <select name="experience" value={form.experience} onChange={handleChange} required className="input-modern">
                                        <option value="">Select level</option>
                                        <option value="beginner">Beginner (0–1 year)</option>
                                        <option value="intermediate">Intermediate (1–3 years)</option>
                                        <option value="advanced">Advanced (3+ years)</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-sm font-semibold text-foreground">Event Type</label>
                                    <select name="event_type" value={form.event_type} onChange={handleChange} required className="input-modern">
                                        <option value="">Select Event Mode</option>
                                        <option value="world_record">World Record Event (₹850)</option>
                                        <option value="national_yoga">National Yoga Competition (₹1250)</option>
                                    </select>
                                </div>
                            </div>

                            {error && (
                                <p className="text-red-500 text-sm text-center bg-red-50 border border-red-200 rounded-lg px-4 py-2">{error}</p>
                            )}

                            <button type="submit" disabled={loading} className="btn-primary-glow w-full text-white font-semibold text-sm py-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                                {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : "Proceed to Payment"}
                            </button>
                        </motion.form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default RegistrationSection;
