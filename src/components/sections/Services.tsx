import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Image, Cpu, Briefcase, ArrowUpRight } from "lucide-react"
import { FadeIn, ScaleUp } from "@/components/ui/motion"
import { GeminiLogo } from "@/components/ui/ai-logos"

const services = [
    {
        title: "AI Video Generatsiya",
        description: "Reklama va ijtimoiy tarmoqlar uchun professional videolar yaratish.",
        icon: Video,
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "AI Rasm Generatsiya",
        description: "Brand va mahsulotlaringiz uchun unikal va sifatli rasmlar.",
        icon: Image,
        color: "from-indigo-500 to-purple-500",
    },
    {
        title: "Biznes Avtomatlashtirish",
        description: "Biznes jarayonlarini AI yordamida optimallashtirish.",
        icon: Cpu,
        color: "from-emerald-500 to-teal-500",
    },
    {
        title: "AI bo'yicha Kurslar",
        description: "Mutaxassislarimizdan AI texnologiyalarini o'rganing.",
        icon: Briefcase,
        color: "from-orange-500 to-amber-500",
    },
]

export function Services() {
    return (
        <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>

            {/* Background Logos - Fixed Visibility */}
            <div className="absolute left-0 top-20 pointer-events-none">
                <GeminiLogo className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] animate-pulse duration-[8000ms]" />
            </div>

            <div className="container px-4 mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <FadeIn>
                        <h2 className="text-4xl font-black tracking-tight sm:text-5xl text-slate-900 mb-6">
                            Xizmatlarimiz
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Biz sizga eng so&apos;nggi AI texnologiyalari yordamida quyidagi xizmatlarni taklif etamiz.
                        </p>
                    </FadeIn>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <ScaleUp key={service.title} delay={index * 0.1}>
                            <Card className="group relative bg-white border-none shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-2 rounded-[2rem] overflow-hidden h-full">
                                <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${service.color}`}></div>

                                <CardHeader className="pt-10">
                                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                                        <service.icon size={32} />
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="pb-10 relative">
                                    <CardDescription className="text-base text-slate-600 leading-relaxed font-medium mb-8">
                                        {service.description}
                                    </CardDescription>

                                    <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        Batafsil
                                        <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </div>

                                    {/* Decorative blob on hover */}
                                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-blue-50 transition-colors -z-10"></div>
                                </CardContent>
                            </Card>
                        </ScaleUp>
                    ))}
                </div>
            </div>
        </section>
    )
}
