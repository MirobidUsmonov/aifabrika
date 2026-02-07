
import { Trophy, Users, CheckCircle, Clock } from "lucide-react"
import { FadeIn, ScaleUp } from "@/components/ui/motion"

const stats = [
    {
        value: "30 kunlik",
        label: "Kontent Plan (Tayyor)",
        icon: Users,
    },
    {
        value: "10 ta",
        label: "Reels/Shorts (Montaj+Ovoz)",
        icon: Trophy,
    },
    {
        value: "9 ta",
        label: "Post Dizayn (Feed Stil)",
        icon: Clock,
    },
    {
        value: "Portfolio",
        label: "+ Xizmat Paketlari",
        icon: CheckCircle,
    },
]

export function Results() {
    return (
        <section id="stats" className="py-24 bg-blue-600 relative overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-100 mix-blend-overlay"></div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-900/30 to-transparent"></div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6">
                            Kursdan keyingi real natijalar
                        </h2>
                        <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-2 gap-y-12 gap-x-8 lg:grid-cols-4 divide-x-0 lg:divide-x divide-blue-400/30">
                    {stats.map((stat, index) => (
                        <ScaleUp key={stat.label} delay={index * 0.1}>
                            <div className="text-center group p-4">
                                <div className="mb-4 inline-flex p-3 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 group-hover:scale-110 transition-transform">
                                    <stat.icon className="w-8 h-8" />
                                </div>
                                <div className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter drop-shadow-sm">
                                    {stat.value}
                                </div>
                                <div className="text-sm md:text-base font-bold text-blue-100 uppercase tracking-widest opacity-90">
                                    {stat.label}
                                </div>
                            </div>
                        </ScaleUp>
                    ))}
                </div>
            </div>
        </section>
    )
}
