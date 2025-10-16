import React, { useState } from 'react';

interface StarRatingProps {
    count?: number;
    value: number;
    onChange: (value: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ count = 5, value, onChange }) => {
    const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

    const stars = Array(count).fill(0);

    const handleClick = (value: number) => {
        onChange(value);
    };

    const handleMouseOver = (newHoverValue: number) => {
        setHoverValue(newHoverValue);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };

    return (
        <div className="flex items-center">
            {stars.map((_, index) => {
                const starValue = index + 1;
                return (
                    <svg
                        key={index}
                        className={`w-8 h-8 cursor-pointer ${ (hoverValue || value) >= starValue ? 'text-yellow-400' : 'text-gray-300' }`}
                        onClick={() => handleClick(starValue)}
                        onMouseOver={() => handleMouseOver(starValue)}
                        onMouseLeave={handleMouseLeave}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
                    >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                );
            })}
        </div>
    );
};

export default StarRating;
