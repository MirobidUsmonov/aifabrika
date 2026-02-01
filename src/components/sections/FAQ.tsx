import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "Dasturlash (kod yozish) kerakmi?",
        answer: "Yo‘q. Hammasi oddiy promptlar va tayyor sun'iy intellekt xizmatlari orqali amalga oshiriladi. Hech qanday murakkab kod yozish talab qilinmaydi.",
    },
    {
        question: "Telefon bilan o'qisa bo‘ladimi?",
        answer: "Ha. Asosan telefon yordamida ham topshiriqlarni bajarish mumkin (Canva, CapCut, ChatGPT mobil ilovalari). Kompyuter bo'lsa montaj ishlari osonlashadi, lekin shart emas.",
    },
    {
        question: "O‘zbek tilida ishlaydimi?",
        answer: "Ha. Biz o'rgatadigan usullar orqali post, caption va ovozlarni o‘zbek tilida sifatli tayyorlash mumkin.",
    },
    {
        question: "Qancha vaqtda natija ko‘raman?",
        answer: "1-haftadayoq birinchi Reels va postlaringiz chiqishni boshlaydi (agar uyga vazifalarni o'z vaqtida bajarsangiz).",
    },
    {
        question: "Kurs offline bo'ladimi yoki online?",
        answer: "Asosiy darslar online (video yozuv) shaklida. Lekin STANDARD va PRO tariflarida jonli zoom sessiyalar va qo'llab-quvvatlash mavjud.",
    },
]

export function FAQ() {
    return (
        <section className="py-20 bg-white">
            <div className="container px-4 mx-auto max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black tracking-tight text-slate-900">
                        Ko‘p beriladigan savollar
                    </h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200">
                            <AccordionTrigger className="text-left text-lg font-medium text-slate-800 hover:text-blue-600 transition-colors py-6">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-base pb-6 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
