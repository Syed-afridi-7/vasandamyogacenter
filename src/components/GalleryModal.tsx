import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    folder: string;
    title: string;
}

export const GalleryModal = ({ isOpen, onClose, folder, title }: GalleryModalProps) => {
    const [images, setImages] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            const loadImages = async () => {
                const foundImages: string[] = [];

                // Let's also include the placeholder names just in case they don't rename them yet:
                const placeholders = ['yoga3.jpg', 'yoga4.jpg', 'yoga5.jpg', 'yoga1.jpg', 'yoga2.jpg'];

                const checkImage = async (url: string) => {
                    try {
                        const res = await fetch(url, { method: 'HEAD' });
                        // The dev server might return 200 with text/html for missing assets due to SPA fallback.
                        // Ensure the content-type actually says it's an image.
                        const contentType = res.headers.get('content-type');
                        if (res.ok && contentType && contentType.includes('image')) {
                            return true;
                        }
                    } catch (e) {
                        // ignore
                    }
                    return false;
                };

                for (const p of placeholders) {
                    const url = `/gallery/${folder}/${p}`;
                    if (await checkImage(url)) foundImages.push(url);
                }

                // Try sequential standard names 1.jpg to 100.jpg
                for (let i = 1; i <= 100; i++) {
                    const extensions = ['.jpg', '.jpeg', '.png', '.JPG', '.PNG'];
                    for (const ext of extensions) {
                        const url = `/gallery/${folder}/${i}${ext}`;
                        if (await checkImage(url)) {
                            foundImages.push(url);
                            break; // once we found one extension, move to next number
                        }
                    }
                }
                // Remove duplicates if any
                setImages([...new Set(foundImages)]);
                setCurrentIndex(0);
            };

            loadImages();
        } else {
            setImages([]); // clear on close
        }
    }, [isOpen, folder]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "ArrowRight") nextImage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, currentIndex, images.length]);

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            >
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-50 p-2 text-white/70 hover:text-white transition-colors"
                >
                    <X className="h-8 w-8" />
                </button>

                <div className="absolute top-6 left-6 z-50">
                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-wider">{title}</h2>
                    <p className="text-white/60 text-sm">{images.length} Photos</p>
                </div>

                {images.length > 0 ? (
                    <div className="relative w-full h-full flex items-center justify-center max-w-6xl">
                        <button
                            onClick={prevImage}
                            className="absolute left-0 z-50 p-2 text-white/50 hover:text-white transition-colors"
                        >
                            <ChevronLeft className="h-12 w-12" />
                        </button>

                        <motion.img
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            src={images[currentIndex]}
                            alt={`${title} - Photo ${currentIndex + 1}`}
                            className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg shadow-2xl"
                        />

                        <button
                            onClick={nextImage}
                            className="absolute right-0 z-50 p-2 text-white/50 hover:text-white transition-colors"
                        >
                            <ChevronRight className="h-12 w-12" />
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </div>
                ) : (
                    <div className="text-white/50 animate-pulse">Loading gallery... or no images found in {folder}.</div>
                )}
            </motion.div>
        </AnimatePresence>
    );
};
