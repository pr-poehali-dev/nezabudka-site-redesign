
import React from 'react';

interface FlowerIconProps {
  className?: string;
  size?: number;
}

const FlowerIcon: React.FC<FlowerIconProps> = ({ className = '', size = 40 }) => {
  return (
    <svg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 50 50" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="10" fill="#FFD84C" />
      <path d="M25 5C25 5 29 15 25 15C21 15 25 5 25 5Z" fill="#4CAE4F" />
      <path d="M25 45C25 45 29 35 25 35C21 35 25 45 25 45Z" fill="#4CAE4F" />
      <path d="M5 25C5 25 15 29 15 25C15 21 5 25 5 25Z" fill="#4CAE4F" />
      <path d="M45 25C45 25 35 29 35 25C35 21 45 25 45 25Z" fill="#4CAE4F" />
      <path d="M11.5 11.5C11.5 11.5 20 17 17 20C14 23 11.5 11.5 11.5 11.5Z" fill="#6BAFF0" />
      <path d="M38.5 38.5C38.5 38.5 30 33 33 30C36 27 38.5 38.5 38.5 38.5Z" fill="#6BAFF0" />
      <path d="M11.5 38.5C11.5 38.5 20 33 17 30C14 27 11.5 38.5 11.5 38.5Z" fill="#6BAFF0" />
      <path d="M38.5 11.5C38.5 11.5 30 17 33 20C36 23 38.5 11.5 38.5 11.5Z" fill="#6BAFF0" />
    </svg>
  );
};

export default FlowerIcon;
