
import React, { useState } from 'react';

interface AccordionItemProps {
    title: string;
    content: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="accordion-item bg-[#e3e3e3] rounded-lg overflow-hidden border border-gray-200">
            <button
                onClick={onClick}
                className={`accordion-header w-full flex justify-between items-center p-4 text-left font-bold text-xl text-[#3F3F3F] transition-colors duration-200 ${isOpen ? 'bg-blue-50' : 'hover:bg-[#E4E3E3]'}`}
            >
                <span>{title}</span>
                <span className={`arrow transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            <div
                className={`accordion-content overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                <div className="p-4 border-t border-gray-200">
                    {content}
                </div>
            </div>
        </div>
    );
};


interface AccordionProps {
    items: {
        title: string;
        content: React.ReactNode;
    }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;