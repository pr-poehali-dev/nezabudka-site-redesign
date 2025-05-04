
import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: string;
  fallback?: string;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  fallback = 'CircleAlert', 
  size = 24, 
  color, 
  className 
}) => {
  const LucideIcon = (LucideIcons as any)[name] || (LucideIcons as any)[fallback];
  
  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found and fallback "${fallback}" not found either.`);
    return null;
  }
  
  return <LucideIcon size={size} color={color} className={className} />;
};

export default Icon;
