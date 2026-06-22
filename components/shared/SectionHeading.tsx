import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  description,
  centered = false,
  className,
  light = false,
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-12 max-w-3xl",
      centered ? "mx-auto text-center" : "",
      className
    )}>
      {subtitle && (
        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
        light ? "text-white" : "text-dark"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg leading-relaxed",
          light ? "text-gray-300" : "text-gray-600"
        )}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
