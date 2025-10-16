import { useState, useEffect, useRef, useCallback } from 'react';

const FEEDBACK_TIMEOUT = 30000; // 30 seconds

export const useFeedback = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const timerRef = useRef<number | null>(null);

    const openModal = useCallback(() => setIsModalOpen(true), []);
    const closeModal = useCallback(() => setIsModalOpen(false), []);

    const resetTimer = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = window.setTimeout(() => {
            openModal();
        }, FEEDBACK_TIMEOUT);
    }, [openModal]);

    useEffect(() => {
        resetTimer();
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [resetTimer]);

    const handleFeedbackSubmit = (feedback: { rating: number; comments: string }) => {
        console.log('Feedback received:', feedback);
        // Here you would typically send the feedback to a server
    };

    return {
        isModalOpen,
        openModal,
        closeModal,
        handleFeedbackSubmit,
        resetTimer,
    };
};
