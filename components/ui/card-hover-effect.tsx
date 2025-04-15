"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "./badge";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    githubLink?: string;
    icon?: React.ReactNode;
    badges?: string[];
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-4", // Added gap-4 for spacing
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full dark:bg-slate-800/[0.8] block rounded-3xl outline-2  outline-blue-400 dark:outline-orange-600"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            link={item.link}
            githubLink={item.githubLink}
            icon={item.icon}
            badges={item.badges}
          >
            <Link href={item.link} className="block">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Link>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  children,

  githubLink,
  icon,
  badges,
}: {
  className?: string;
  children: React.ReactNode;
  link: string;
  githubLink?: string;
  icon?: React.ReactNode;
  badges?: string[];
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-3 overflow-hidden bg-white border dark:bg-black border border-black-500 dark:border-white/[0.2] group-hover:border-blue-400 dark:group-hover:border-orange-500 relative z-20 min-h-[300px]"
      )}
    >
      <div className="relative z-50 flex flex-col h-full">
        <div className="p-3 flex-1">{children}</div>{" "}
        {/* flex-1 ensures content takes available space */}
        {badges && (
          <div className="flex flex-wrap gap-2 p-3 justify-center items-center">
            {badges.map((badge, idx) => (
              <Badge key={idx} variant="secondary">
                {badge}
              </Badge>
            ))}
          </div>
        )}
        {icon && githubLink && (
          <Link
            href={githubLink}
            className={cn(
              "flex justify-center items-center mt-4",
              "text-black-400 dark:text-white hover:text-blue-400 dark:hover:text-orange-500",
              "transition-colors duration-200"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="inline-block p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              {icon}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-blue-600 dark:text-orange-400  dark:font-bold tracking-wide text-lg text-center",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-black-800 dark:text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
