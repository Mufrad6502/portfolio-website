"use client"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  slug: string
}

export function ProjectCard({ title, category, image, slug }: ProjectCardProps) {
  return (
    <div className="h-full flex flex-col justify-between group rounded-lg bg-gradient-to-r from-zinc-800/80 to-zinc-900/80 border border-zinc-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-cyan-500/60 p-4">
      <div className="flex-1 flex flex-col min-h-[80px]">
        <span className="text-xs font-semibold uppercase tracking-wide text-cyan-400 mb-1 group-hover:text-blue-400 transition-colors">{category}</span>
        <h3 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors break-words">{title}</h3>
      </div>
      <a
        href={`https://github.com/your-github/${slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs font-medium px-3 py-2 rounded-md bg-cyan-900/30 text-cyan-300 border border-cyan-700 hover:bg-cyan-400 hover:text-zinc-900 hover:border-cyan-400 transition-colors duration-200 shadow-sm mt-4"
        title="View on GitHub"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="inline-block align-middle">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 21.13V25" />
        </svg>
        GitHub
      </a>
    </div>
  )
}
