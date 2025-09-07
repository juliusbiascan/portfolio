"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar";
import { Badge } from "@workspace/ui/components/badge";
import { Card } from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";
import { motion } from "framer-motion";
import { ChevronDownIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  const handleExternalLinkClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const CardContent = () => (
    <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/20 hover:from-muted/30 hover:to-muted/40 transition-all duration-300 hover:shadow-lg hover:shadow-muted/20">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-muted/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-4 sm:p-6">
        <div className="flex items-start gap-3 sm:gap-4">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <div className="relative">
              <Avatar className="size-12 sm:size-16 ring-2 ring-muted/50 group-hover:ring-primary/30 transition-all duration-300">
                <AvatarImage
                  src={logoUrl}
                  alt={altText}
                  className="object-contain p-2 sm:p-3"
                />
                <AvatarFallback className="bg-gradient-to-br from-primary/10 to-primary/20 text-primary font-bold text-sm sm:text-lg">
                  {altText[0]}
                </AvatarFallback>
              </Avatar>
              {href && (
                <div
                  onClick={handleExternalLinkClick}
                  className="absolute -top-1 -right-1 size-4 sm:size-5 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-primary/90"
                >
                  <ExternalLinkIcon className="size-2.5 sm:size-3 text-primary-foreground" />
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                  {title}
                </h3>
                {subtitle && (
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1 font-medium">
                    {subtitle}
                  </p>
                )}
              </div>
              <div className="flex-shrink-0 self-start sm:self-auto">
                <Badge variant="outline" className="text-xs font-medium px-2 sm:px-3 py-1">
                  {period}
                </Badge>
              </div>
            </div>

            {/* Badges */}
            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                {badges.map((badge, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            )}

            {/* Description */}
            {description && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  height: isExpanded ? "auto" : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed"
              >
                <div className="border-l-2 border-primary/30 pl-3 sm:pl-4">
                  {description}
                </div>
              </motion.div>
            )}
          </div>

          {/* Expand Button */}
          {description && (
            <div className="flex-shrink-0 self-start sm:self-auto">
              <motion.button
                onClick={handleClick}
                className="p-1.5 sm:p-2 rounded-full hover:bg-muted/50 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronDownIcon
                  className={cn(
                    "size-3.5 sm:size-4 text-muted-foreground transition-transform duration-300",
                    isExpanded ? "rotate-180" : "rotate-0"
                  )}
                />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );

  if (href && !description) {
    return (
      <Link href={href} className="block">
        <CardContent />
      </Link>
    );
  }

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <CardContent />
    </div>
  );
};
