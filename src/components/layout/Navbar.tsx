'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
    return (
        <header className="md:sticky md:top-0 relative z-50 w-full border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-14 items-center mx-auto px-4">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block text-xl">
                            AI FABRIKA
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link href="#programm" className="transition-colors hover:text-foreground/80 text-foreground/60">Dastur</Link>
                        <Link href="#audience" className="transition-colors hover:text-foreground/80 text-foreground/60">Kimlar uchun</Link>
                        <Link href="#results" className="transition-colors hover:text-foreground/80 text-foreground/60">Natijalar</Link>
                        <Link href="#team" className="transition-colors hover:text-foreground/80 text-foreground/60">Jamoa</Link>
                        <Link href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Bog'lanish</Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <nav className="flex items-center">
                        <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Kursga yozilish
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}
