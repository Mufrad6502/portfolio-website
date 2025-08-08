"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { getNavItems, getPersonalInfo } from "@/lib/data"

export function PortfolioHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()

  const navItems = getNavItems()
  const personalInfo = getPersonalInfo()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      if (pathname !== "/") return
      const sections = navItems.filter((item) => item.href.startsWith("#")).map((item) => item.href.substring(1))
      let foundSection = ""
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            foundSection = section
            break
          }
        }
      }
      if (window.scrollY < 100) {
        foundSection = ""
      }
      setActiveSection(foundSection)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems, pathname])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      // If we're not on home page, navigate to home first
      if (pathname !== "/") {
        window.location.href = `/${href}`
      } else {
        // Always scroll to top for Home
        if (href === "#top") {
          console.log("Home nav clicked: force scroll to top");
          // Try window scroll first
          window.scrollTo({ top: 0, behavior: "smooth" });
          // Also try to scroll the main container if present
          const main = document.querySelector("main");
          if (main && (main.scrollTop > 0 || main.scrollHeight > main.clientHeight)) {
            main.scrollTo({ top: 0, behavior: "smooth" });
          }
        } else {
          // Smooth scroll to section
          const element = document.getElementById(href.substring(1))
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }
      }
    }
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-zinc-900/90 backdrop-blur-md shadow-md py-2" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo/Name */}
        <Link href="/" className="flex items-center group">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-xl relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
            {personalInfo.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </div>
          <span className="text-zinc-400 text-sm ml-2 hidden sm:inline-block transition-all duration-300 group-hover:text-zinc-300">
            / {personalInfo.title}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => {
            const isActive = Boolean(
              pathname === "/" &&
              ((item.href === "#top" && activeSection === "") ||
               (item.href.startsWith("#") && item.href.substring(1) === activeSection))
            );
            return (
              <button
                key={item.label}
                onClick={e => { e.preventDefault(); handleNavClick(item.href); }}
                className={cn(
                  "px-4 py-2 text-sm font-medium relative group transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2",
                  isActive ? "text-cyan-400" : "text-zinc-400 hover:text-white",
                )}
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="relative z-10 flex items-center gap-1">
                  {item.label}
                  {isActive && (
                    <span className="ml-1 w-2 h-2 rounded-full bg-cyan-400 shadow-cyan-400/40 shadow-md animate-pulse"></span>
                  )}
                </span>
                {/* Animated underline */}
                <span
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300",
                    isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                  )}
                ></span>
                {/* Subtle background on hover */}
                <span className="absolute inset-0 bg-cyan-500/0 rounded-md group-hover:bg-cyan-500/10 transition-all duration-300"></span>
              </button>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-zinc-400 hover:text-white transition-colors duration-300 relative overflow-hidden group focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="relative z-10">{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</span>
          <span className="absolute inset-0 scale-0 rounded-full bg-zinc-700/50 group-hover:scale-100 transition-transform duration-300"></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 z-40 flex flex-col pt-20 px-4 md:hidden transition-all duration-500",
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none",
        )}
        tabIndex={-1}
        onKeyDown={e => {
          if (e.key === "Escape") setMobileMenuOpen(false)
        }}
      >
        <nav className="flex flex-col space-y-2">
          {navItems.map((item, index) => {
            const isActive =
              pathname === "/" &&
              ((item.href === "#top" && activeSection === "") || (item.href.startsWith("#") && item.href.substring(1) === activeSection))
            return (
              <button
                key={item.label}
                onClick={e => { e.preventDefault(); handleNavClick(item.href); setMobileMenuOpen(false); }}
                className={cn(
                  "px-4 py-4 text-lg border-b border-zinc-800 relative group transition-all duration-300 text-left outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2",
                  isActive ? "text-cyan-400 border-cyan-400/30" : "text-zinc-300 hover:text-white hover:pl-5",
                )}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  transform: mobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleNavClick(item.href);
                    setMobileMenuOpen(false);
                  }
                }}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="relative z-10 flex items-center gap-1">
                  {item.label}
                  {isActive && (
                    <span className="ml-2 w-2 h-2 rounded-full bg-cyan-400 shadow-cyan-400/40 shadow-md animate-pulse"></span>
                  )}
                </span>
                {/* Animated left border accent */}
                <span
                  className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 w-0 h-1/2 bg-gradient-to-b from-cyan-400/20 to-blue-500/20 transition-all duration-300 group-hover:w-1",
                    isActive && "w-1",
                  )}
                ></span>
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
