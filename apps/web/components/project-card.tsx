"use client";

import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";
import { motion } from "framer-motion";
import { ExternalLinkIcon, CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/10 hover:from-muted/20 hover:to-muted/30 transition-all duration-500 hover:shadow-xl hover:shadow-muted/20 hover:-translate-y-1 h-full">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Media Section */}
      <div className="relative overflow-hidden">
        <Link
          href={href || "#"}
          className={cn("block cursor-pointer", className)}
        >
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          )}
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="w-full h-48 object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          )}
          {!video && !image && (
            <div className="w-full h-48 bg-gradient-to-br from-muted/50 to-muted/80 flex items-center justify-center">
              <div className="text-4xl opacity-50">🚀</div>
            </div>
          )}
        </Link>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

        {/* External link indicator */}
        {href && (
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-background/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
              <ExternalLinkIcon className="size-4 text-foreground" />
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="relative p-6 flex flex-col h-full">
        <CardHeader className="p-0 mb-4">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-3">
              <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                {title}
              </CardTitle>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarIcon className="size-4" />
              <time className="font-medium">{dates}</time>
            </div>

            {link && (
              <div className="hidden text-xs text-muted-foreground underline print:block">
                {link.replace("https://", "").replace("www.", "").replace("/", "")}
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="flex-1 p-0">
          <div className="prose prose-sm max-w-full text-muted-foreground dark:prose-invert prose-headings:text-foreground prose-strong:text-foreground">
            <Markdown>
              {description}
            </Markdown>
          </div>
        </CardContent>

        {/* Tags Section */}
        {tags && tags.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200 font-medium"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Links Section */}
        {links && links.length > 0 && (
          <CardFooter className="p-0 mt-4">
            <div className="flex flex-wrap gap-2 w-full">
              {links.map((link, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={link.href} target="_blank" rel="noopener noreferrer">
                    <Badge
                      variant="outline"
                      className="flex items-center gap-2 px-3 py-2 text-xs font-medium hover:bg-primary/10 hover:border-primary/30 transition-all duration-200 cursor-pointer"
                    >
                      {link.icon}
                      {link.type}
                    </Badge>
                  </Link>
                </motion.div>
              ))}
            </div>
          </CardFooter>
        )}
      </div>
    </Card>
  );
}
