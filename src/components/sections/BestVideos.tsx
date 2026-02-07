'use client';

import { Card } from "@/components/ui/card"
import { FadeIn, ScaleUp } from "@/components/ui/motion"
import { Play } from "lucide-react"
import { useState } from "react"

// Video data from the user's request
const videos = [
    {
        id: "DT_bfYpDCEy",
        url: "https://www.instagram.com/reel/DT_bfYpDCEy/",
        title: "", // Opisaniya olib tashlandi
        views: "1.5M+",
        likes: "48K+",
        color: "from-purple-500 to-pink-500"
    },
    {
        id: "DUEIQFRDJnE",
        url: "https://www.instagram.com/reel/DUEIQFRDJnE/",
        title: "",
        views: "920K+",
        likes: "35K+",
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: "DUIZWyHiBxG",
        url: "https://www.instagram.com/reel/DUIZWyHiBxG/",
        title: "",
        views: "550K+",
        likes: "22K+",
        color: "from-emerald-500 to-green-500"
    },
    {
        id: "DUHIFwZCJVY",
        url: "https://www.instagram.com/reel/DUHIFwZCJVY/",
        title: "",
        views: "290K+",
        likes: "35K+",
        color: "from-orange-500 to-red-500"
    },
    {
        id: "DT_ZlOBiKST",
        url: "https://www.instagram.com/reel/DT_ZlOBiKST/",
        title: "",
        views: "290K+",
        likes: "10K+",
        color: "from-indigo-500 to-violet-500"
    },
    {
        id: "DT_IZlDCjS8",
        url: "https://www.instagram.com/reel/DT_IZlDCjS8/",
        title: "",
        views: "450K+",
        likes: "18K+",
        color: "from-pink-500 to-rose-500"
    }
]

export function BestVideos() {
    const [activeId, setActiveId] = useState<string | null>(null);

    return (
        <section id="results" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Simple decoration background */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="container px-4 mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-4 inline-block">
                            Top Kontent
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight mb-6">
                            Eng Sara <span className="text-purple-600">Videolar</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Minglab insonlar tomonidan sevib tomosha qilingan eng foydali va qiziqarli videolarimiz.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video, index) => (
                        <ScaleUp key={video.id} delay={index * 0.1}>
                            <Card
                                className={`h-full bg-white border-0 shadow-lg shadow-slate-200/50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 ${activeId === video.id ? 'ring-4 ring-purple-500/20' : ''}`}
                            >
                                <div className="relative aspect-[9/16] overflow-hidden bg-slate-100 group">
                                    {/* Interactive Overlay for Inactive Videos */}
                                    {activeId !== video.id && (
                                        <div
                                            onClick={() => setActiveId(video.id)}
                                            className="absolute inset-0 z-20 cursor-pointer flex flex-col justify-between"
                                        >
                                            <div className="flex-1 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors">
                                                <div className="w-16 h-16 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg">
                                                    <Play className="w-8 h-8 text-purple-600 fill-current ml-1" />
                                                </div>
                                            </div>

                                            {/* Footer with Stats (No Title) */}

                                        </div>
                                    )}

                                    {/* Iframe - Always there but hidden by image when inactive */}
                                    <iframe
                                        key={`${video.id}-${activeId === video.id ? 'active' : 'inactive'}`}
                                        src={`https://www.instagram.com/reel/${video.id}/embed${activeId === video.id ? '/?autoplay=1' : '/'}`}
                                        className="absolute inset-0 z-0 w-full h-full object-cover bg-slate-100"
                                        frameBorder="0"
                                        allowFullScreen
                                        scrolling="no"
                                        loading="lazy"
                                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    ></iframe>
                                </div>

                            </Card>
                        </ScaleUp>
                    ))}
                </div>
            </div>
        </section>
    )
}
