'use client';

import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"
import { FadeIn, ScaleUp, Marquee } from "@/components/ui/motion"

export function Hero() {
    return (
        <section className="relative pt-12 pb-0 md:pt-20 lg:pt-24 overflow-hidden bg-white">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 inset-x-0 h-[800px] bg-radial-gradient opacity-60"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.6]"></div>

                {/* Floating Blobs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="container relative z-10 px-4 mx-auto max-w-7xl pb-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col text-left space-y-10">
                        <FadeIn delay={0.1}>
                            <div className="inline-flex items-center self-start gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-blue-600 border border-blue-100 shadow-lg shadow-blue-900/5 hover:scale-105 transition-transform cursor-default">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                                </span>
                                Sun’iy intellekt — Kelajak Imkoniyati
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-[1.1] text-balance">
                                AI KONTENT FABRIKA <br className="hidden md:block" />
                                <span className="relative z-10 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 drop-shadow-sm">
                                    “0 DAN PRO GACHA”
                                    <svg className="absolute -bottom-2 w-full h-3 text-blue-200 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                                    </svg>
                                </span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
                                Sun&apos;iy intellekt — bu shunchaki trend emas, bu sizning yangi imkoniyatingiz. <span className="text-slate-900 font-bold">Raqobatchilardan 10 qadam oldinda bo&apos;ling</span> va kelajak kasbini bugun egallang.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-2">
                            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="h-16 px-10 text-xl font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 transition-all transform hover:-translate-y-1 active:scale-95 duration-200 group relative overflow-hidden">
                                <span className="relative z-10 flex items-center">
                                    Kursga yozilish
                                    <Zap className="ml-2 w-5 h-5 fill-current" />
                                </span>
                                {/* Button Shine Effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                            </Button>
                            <Button size="lg" variant="outline" onClick={() => document.getElementById('programm')?.scrollIntoView({ behavior: 'smooth' })} className="h-16 px-10 text-lg font-bold rounded-2xl border-2 border-slate-200 bg-white hover:border-blue-200 hover:bg-blue-50 text-slate-700 hover:text-blue-700 transition-all shadow-sm hover:shadow-md">
                                Dastur bilan tanishish
                            </Button>
                        </FadeIn>

                        <FadeIn delay={0.5} className="pt-8">
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Zap className="w-4 h-4 text-blue-500" />
                                O&apos;rganiladigan Top A.I. Vositalar:
                            </p>
                            <div className="flex flex-wrap items-center gap-3">
                                {['ChatGPT', 'Gemini', 'Google Flow', 'ElevenLabs', 'Canva', 'Edits'].map((tool, i) => (
                                    <div key={i} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-bold text-sm hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-default shadow-sm">
                                        {tool}
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    {/* Detailed Video Player Placeholder */}
                    <ScaleUp delay={0.4} className="relative mx-auto w-full max-w-xl lg:max-w-none perspective-[1000px]">
                        {/* Decorative back layer */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2.5rem] rotate-2 opacity-20 blur-2xl animate-pulse"></div>

                        <div className="relative rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(37,99,235,0.3)] bg-slate-900 aspect-[4/3] group border-[6px] border-white ring-1 ring-slate-100 transition-transform duration-500 hover:rotate-1 hover:scale-[1.02]">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/QfiLvnoLFWg?autoplay=0&controls=1&rel=0&modestbranding=1"
                                title="AI Fabrika Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full object-cover rounded-[1.5rem]"
                            ></iframe>
                        </div>
                    </ScaleUp>
                </div>
            </div>

            {/* Infinite Marquee */}
            <div className="bg-blue-600 py-4 -rotate-1 origin-left scale-105 border-y-4 border-white/10">
                <Marquee className="text-white font-black text-2xl tracking-widest uppercase">
                    <span>AI FABRIKA</span> <span>•</span> <span>SUN&apos;IY INTELLEKT</span> <span>•</span> <span>KELAJAK KASBI</span> <span>•</span> <span>YUQORI DAROMAD</span> <span>•</span> <span>TEZKOR TA&apos;LIM</span> <span>•</span>
                </Marquee>
            </div>
        </section>
    )
}
