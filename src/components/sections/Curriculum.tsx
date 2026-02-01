import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn, ScaleUp } from "@/components/ui/motion"
import { Layers, Zap, Video, MonitorPlay, Mic, Layout, Search, BarChart, FileText, Briefcase, Lock, Image as ImageIcon } from "lucide-react"

const modules = [
    {
        title: "Sun’iy intellektga kirish",
        topics: [
            "AI nima va u qayerlarda ishlatiladi (real misollar)",
            "AI turlari: ChatGPT (OpenAI), Google Gemini",
            "Generativ AI nima? (matn/rasm/video/ovoz)",
            "AI cheklovlari: xatolar, “gallyutsinatsiya”, kontekst muammosi",
            "Cheklovlarni aylanib o‘tish: savolni to‘g‘ri berish, tekshiruv"
        ],
        icon: Zap,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "“Prompt Engineering” Masteri",
        topics: [
            "Mukammal prompt yozish formulasi: Kontekst + Vazifa + Cheklov + Format",
            "Rol berish (Expert role), maqsad va auditoriya aniqlash",
            "Uslub/format boshqaruvi: tone, uzunlik, “step-by-step”",
            "Template’lar (prompt kutubxonasi) va ularni tez moslash",
            "Eng muhim ko‘nikma: AI bilan “to‘g‘ri gaplashish”"
        ],
        icon: Layers,
        color: "bg-indigo-100 text-indigo-600",
    },
    {
        title: "AI Rasm Generatsiya",
        topics: [
            "Text-to-Image ishlash prinsipi: matndan rasmga",
            "Stil tanlash: realistik, ilustratsiya, 3D, anime, minimal",
            "Formatlar: 9:16 / 1:1 / 16:9, kompozitsiya va kadr qurilishi",
            "Brend ranglari, vizual identika, “consistent character”",
            "Yorug‘lik (lighting), kamera, detal, “negative prompt”"
        ],
        icon: ImageIcon,
        color: "bg-purple-100 text-purple-600",
    },
    {
        title: "Grafik Dizayn va Kreativlar",
        topics: [
            "Canva AI imkoniyatlari (Magic Edit, Magic Eraser)",
            "Mavjud rasmlarni kengaytirish va o‘zgartirish (Generative Fill)",
            "Shriftlar, rang palitra, cover/shablonlar, bir xil vizual stil",
            "Thumbnail (YouTube muqovasi) tayyorlash"
        ],
        icon: Layout,
        color: "bg-pink-100 text-pink-600",
    },
    {
        title: "AI Video Generatsiya",
        topics: [
            "Text-to-Video: Matndan video hosil qilish",
            "Statik rasmlarni jonlantirish (animatsiya): image-to-video",
            "Kadr bo‘lib ssenariy, harakat (motion) va “cinematic” promptlar",
            "Gapiruvchi “diktor” yasash, yuz mimikalarini to‘g‘irlash",
            "Raqamli klon (Avatar) yaratish va uni gapirtirish"
        ],
        icon: Video,
        color: "bg-rose-100 text-rose-600",
    },
    {
        title: "AI Ovoz va Dublyaj",
        topics: [
            "Matnni ovozga aylantirish (Text-to-Speech) — o‘zbek va rus tillarida",
            "Ovoz tanlash: emotsiya, tezlik, urg‘u, pauza",
            "Sun’iy spiker, lab sinxron, bir matn—turli ovozlar",
            "Voice cloning (etik qoidalar va ruxsat bilan)",
            "Audio tozalash: shovqin, “hiss”, echo"
        ],
        icon: Mic,
        color: "bg-orange-100 text-orange-600",
    },
    {
        title: "Video Montaj va Shorts",
        topics: [
            "Reels/TikTok standartlari: hook, ritm, subtitr, “beat cut”",
            "4–8 soniyalik “micro-content” uslubi",
            "Uzun videodan avtomatik “shorts” qirqish",
            "Avtomatik caption/subtitr va stil sozlash",
            "Sifatni oshirish: sharp, stabilizatsiya, rang correction"
        ],
        icon: MonitorPlay,
        color: "bg-amber-100 text-amber-600",
    },
    {
        title: "Workflow — “Real Sehr”",
        topics: [
            "G‘oyadan tayyor mahsulotgacha zanjir qurish",
            "ChatGPT → Gemini → Runway → ElevenLabs → CapCut",
            "Shablon workflow’lar: reklama, edukatsiya, storytelling",
            "Tezlik va sifat balansi: “fast draft → refine” modeli"
        ],
        icon: Zap,
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        title: "AI Kontent Strategiyasi",
        topics: [
            "Nisha tanlash, auditoriya avatari",
            "Kontent ustunlari (rubrikalar) va “1 oylik plan”",
            "Reels ssenariy: hook (1–2 soniya), body, CTA",
            "Caption + hashtag + rejalashtirish",
            "Raqobatchi tahlili va “trend”ni topish"
        ],
        icon: Search,
        color: "bg-emerald-100 text-emerald-600",
    },
    {
        title: "Joylash va Optimizatsiya",
        topics: [
            "Instagram/TikTok/YouTube Shorts algoritm asoslari",
            "Post vaqti, retention, watch time, A/B test",
            "Sotuvchi postlar: AIDA, PAS formulalari",
            "60 soniyalik ssenariylar (Reels/Shorts) + CTA",
            "Blog post/maqola: strukturali yozish, SEO kirish"
        ],
        icon: BarChart,
        color: "bg-teal-100 text-teal-600",
    },
    {
        title: "AI Yordamida Taqdimotlar",
        topics: [
            "Matndan tayyor slayd: tez va dizaynli",
            "B2B, trening va o‘quv kontenti uchun struktura",
            "Infografika: jadval/diagramma/ikonlar",
            "Pitch deck va “sales deck” tayyorlash"
        ],
        icon: FileText,
        color: "bg-cyan-100 text-cyan-600",
    },
    {
        title: "Etika va Monetizatsiya",
        topics: [
            "AI kontent va mualliflik huquqi (Copyright)",
            "“AI SMM-mutaxassisi” sifatida portfolio yig‘ish",
            "Monetizatsiya: xizmat, kurs, affiliate, marketplace",
            "Freelance birjalarda (Upwork, Kwork) AI xizmatlarini sotish"
        ],
        icon: Lock,
        color: "bg-slate-100 text-slate-600",
    },
]

export function Curriculum() {
    return (
        <section id="programm" className="py-16 bg-white relative overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute top-0 right-0 w-full h-full bg-slate-50/50 -skew-y-3 transform origin-top-right -z-10"></div>

            <div className="container px-4 mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-12 space-y-4">
                    <FadeIn>
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-xs bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-flex items-center gap-2">
                            <Layers className="w-3 h-3" />
                            Dastur
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
                            Kurs Dasturi (12 Modul)
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-base">
                            0 dan PRO darajagacha: har bir modulda aniq natija va amaliyot.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {modules.map((module, index) => (
                        <ScaleUp key={index} delay={index * 0.05}>
                            <div className="group h-full bg-white border border-slate-100 shadow-sm hover:shadow-md rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 text-slate-100 font-black text-5xl opacity-50 select-none pointer-events-none group-hover:text-blue-50 transition-colors">
                                    {(index + 1).toString().padStart(2, '0')}
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`w-10 h-10 rounded-xl ${module.color} flex items-center justify-center shrink-0`}>
                                            <module.icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                                            {module.title}
                                        </h3>
                                    </div>

                                    <ul className="space-y-2">
                                        {module.topics.slice(0, 5).map((topic, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm font-medium leading-snug">
                                                <div className="w-1 h-1 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                                                <span className="opacity-90">{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScaleUp>
                    ))}
                </div>
            </div>
        </section>
    )
}
