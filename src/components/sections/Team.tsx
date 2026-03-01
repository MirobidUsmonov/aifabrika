import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { FadeIn, ScaleUp } from "@/components/ui/motion"

import Image from "next/image"

const team = [
    {
        name: "ai.fabrika",
        role: "Asosiy Loyiha",
        followers: "21.8K obunachi",
        image: "/images/team/ai.fabrika.jpg",
        badges: ["AI Mahsulot", "10+ Jamoa"],
        description: "Bu yerda g‘oyalar — AI mahsulotga aylanadi. 10+ AI ijodkor — bitta jamoa.",
        instagram: "https://instagram.com/ai.fabrika"
    },
    {
        name: "ai.zamon",
        role: "AI Creator",
        followers: "127K obunachi",
        image: "/images/team/ai.zamon.jpg",
        badges: ["AI Content", "Video Creator"],
        description: "Sizdan bu ❤️ gina — Bizdan bu 🎬 gina. Obuna bo‘l ~ Kreativlikda bo‘l 💡",
        instagram: "https://instagram.com/ai.zamon"
    },
    {
        name: "ai.idrok",
        role: "Digital Creator",
        followers: "55.1K obunachi",
        image: "/images/team/ai.idrok.jpg",
        badges: ["AI Real Foyda", "Lifehack"],
        description: "AI’dan real foyda 🤖. Qisqa video | lifehack 🎬. Har post — foyda ⚡️",
        instagram: "https://instagram.com/ai_idrok"
    },
    {
        name: "ai.ustaxona",
        role: "Digital Creator",
        followers: "59.3K obunachi",
        image: "/images/team/ai.ustaxona.jpg",
        badges: ["AI Content", "Kreativlik"],
        description: "Buyurtmaga AI KONTENT 🎥. Sizdan bu ❤️ gina — Bizdan bu 🎬 gina.",
        instagram: "https://instagram.com/ai.ustaxona"
    }
]

export function Team() {
    return (
        <section id="team" className="py-24 bg-white relative">
            <div className="container px-4 mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 inline-block">Jamoa</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                            Bizning <span className="text-blue-600">Jamoa</span>
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {team.map((member, index) => (
                        <ScaleUp key={member.name} delay={index * 0.1} className="h-full">
                            <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="block h-full">
                                <Card className="h-full bg-white border-0 shadow-xl shadow-slate-200/50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-2">
                                    <div className="p-8 pb-0 flex justify-center">
                                        <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
                                            <div className="w-full h-full rounded-full border-4 border-white overflow-hidden bg-white relative">
                                                <Image src={member.image} alt={member.name} fill className="object-cover" />
                                            </div>
                                        </div>
                                    </div>

                                    <CardHeader className="text-center pb-2">
                                        <CardTitle className="text-2xl font-black text-slate-900 mb-1">{member.name}</CardTitle>
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="text-sm font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                                                {member.role}
                                            </span>
                                            <span className="text-xs font-bold text-slate-400">
                                                {member.followers}
                                            </span>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="text-center px-6 pb-8 flex-1 flex flex-col">
                                        <div className="mb-6 flex-1">
                                            <p className="text-slate-600 font-medium italic">
                                                &quot;{member.description}&quot;
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {member.badges.map(badge => (
                                                <Badge key={badge} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-100">
                                                    {badge}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </a>
                        </ScaleUp>
                    ))}
                </div>
            </div>
        </section>
    )
}
