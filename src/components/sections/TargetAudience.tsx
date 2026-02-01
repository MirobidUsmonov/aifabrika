import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { MonitorPlay, Settings, Briefcase, GraduationCap, ArrowRight, Clock } from "lucide-react"
import { FadeIn, ScaleUp } from "@/components/ui/motion"
import { OpenAILogo } from "@/components/ui/ai-logos"

const audiences = [
    {
        title: "SMM / Kopirayterlar",
        description: "Kontent yaratishni 10 barobar tezlashtirish va sifatini oshirish uchun.",
        icon: MonitorPlay,
        color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
        title: "Bloger va Ekspertlar",
        description: "Shaxsiy brend, kurs va xizmatlarni sotish uchun sifatli kontent.",
        icon: GraduationCap,
        color: "bg-violet-50 text-violet-600 border-violet-200",
    },
    {
        title: "Biznes Egalari",
        description: "Kontentni birovga bermasdan, ichkarida (in-house) qildirmoqchi bo'lganlar.",
        icon: Briefcase,
        color: "bg-indigo-50 text-indigo-600 border-indigo-200",
    },
    {
        title: "Freelancerlar",
        description: "Zamonaviy AI ko'nikmalari orqali daromad qilishni istaganlar.",
        icon: Settings,
        color: "bg-cyan-50 text-cyan-600 border-cyan-200",
    },
    {
        title: "Vaqt Topolmaydiganlar",
        description: "AI yordamida vaqtni tejab, maksimal natijaga erishish.",
        icon: Clock,
        color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    },
]

export function TargetAudience() {
    return (
        <section id="audience" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
            <div className="absolute top-0 inset-0 bg-grid-pattern opacity-40"></div>

            {/* Giant OpenAI Logo Background - Fixed Visibility */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-0">
                <OpenAILogo className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] animate-pulse duration-[10000ms]" />
            </div>

            <div className="container px-4 mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <FadeIn>
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Auditoriya</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
                            Kurs kimlar uchun?
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Ushbu kurs kimlarga eng ko'p foyda keltiradi?
                        </p>
                    </FadeIn>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
                    {audiences.map((audience, index) => (
                        <ScaleUp key={index} delay={index * 0.1}>
                            <Card className="group relative text-center bg-white border-none shadow-xl shadow-slate-200/50 rounded-[2rem] hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
                                {/* Hover Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <CardHeader className="flex flex-col items-center pt-10 pb-6 relative z-10">
                                    <div className={`h-20 w-20 rounded-[1.5rem] ${audience.color} border-2 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                        <audience.icon size={36} />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-slate-900">{audience.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="pb-10 relative z-10">
                                    <p className="text-slate-600 font-medium leading-relaxed mb-6">{audience.description}</p>

                                </CardContent>
                            </Card>
                        </ScaleUp>
                    ))}
                </div>

                {/* Kimlar uchun emas */}
                <FadeIn delay={0.6} className="mt-20">
                    <div className="max-w-4xl mx-auto bg-red-50 border border-red-100 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-red-100 rounded-full blur-2xl opacity-50"></div>
                        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-red-100 rounded-full blur-2xl opacity-50"></div>

                        <h3 className="text-2xl font-bold text-red-900 mb-4 relative z-10">
                            Kimlar uchun emas?
                        </h3>
                        <p className="text-red-700/80 text-lg font-medium relative z-10">
                            “Tez boyib ketaman” deb o‘ylaydiganlar uchun emas. Bu sehrli tayoqcha emas, bu — <span className="font-bold border-b border-red-300">ko‘nikma</span>.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
