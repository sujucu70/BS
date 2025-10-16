import React, { useState } from 'react';
import StarRating from './StarRating';

interface FeedbackModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (feedback: { rating: number; comments: string }) => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ rating, comments });
        setSubmitted(true);
        // Reset form after a delay
        setTimeout(() => {
            setRating(0);
            setComments('');
            setSubmitted(false);
            onClose();
        }, 2000);
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
            aria-modal="true"
            role="dialog"
        >
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">{submitted ? "¡Gracias!" : "Comparte tu opinión"}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600" aria-label="Cerrar modal">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                {submitted ? (
                    <div className="text-center py-8">
                        <p className="text-lg text-gray-600">Agradecemos tus comentarios. Nos ayudan a mejorar.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <p className="text-gray-600 mb-6">Tu feedback es importante para nosotros. ¿Cómo calificarías tu experiencia?</p>
                        <div className="mb-6 flex justify-center">
                            <StarRating value={rating} onChange={setRating} />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                                ¿Tienes algún comentario adicional?
                            </label>
                            <textarea
                                id="comments"
                                rows={4}
                                value={comments}
                                onChange={(e) => setComments(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6D84E3] focus:border-[#6D84E3] transition"
                                placeholder="Cuéntanos más..."
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={rating === 0}
                                className="px-6 py-3 bg-[#6D84E3] text-white font-bold rounded-lg shadow-md hover:bg-[#5a6fbf] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                            >
                                Enviar Feedback
                            </button>
                        </div>
                    </form>
                )}
            </div>
            <style>{`
                @keyframes fade-in-scale {
                    0% { transform: scale(0.95); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
                .animate-fade-in-scale {
                    animation: fade-in-scale 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default FeedbackModal;
