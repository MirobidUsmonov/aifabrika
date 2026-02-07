'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Loader2 } from 'lucide-react';
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { FadeIn } from '@/components/ui/motion';
import { submitQuizToTelegram } from '@/app/actions';

type Question = {
    id: number;
    question: string;
    options: string[];
};

const questions: Question[] = [
    {
        id: 1,
        question: "Yoshingiz nechada?",
        options: ["15-18", "19-24", "25-35", "35+"]
    },
    {
        id: 2,
        question: "Hozirgi holatingiz?",
        options: [
            "O'quvchi / Talaba",
            "Davlat ishchisi",
            "Tadbirkor / Biznes egasi",
            "Ishsiz / Freelancer"
        ]
    },
    {
        id: 3,
        question: "Kursdan asosiy maqsadingiz nima?",
        options: [
            "Daromadga chiqish (Pul ishlash)",
            "Shaxsiy brendni rivojlantirish",
            "Ishimni osonlashtirish (AI yordamida)",
            "Yangi zamonaviy kasb egallash"
        ]
    },
    {
        id: 4,
        question: "Qaysi tarif sizga ma'qul?",
        options: [
            "START (Mustaqil)",
            "STANDARD (Natija uchun)",
            "PRO (Kurator bilan)",
            "Hali bir qarorga kelmadim"
        ]
    }
];

export function QualificationTest() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [isFinished, setIsFinished] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Form State
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleOptionSelect = (option: string) => {
        setAnswers(prev => ({ ...prev, [currentStep]: option }));
        if (currentStep < 4) {
            setTimeout(() => {
                setCurrentStep(prev => prev + 1);
            }, 300);
        }
    };



    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const result = await submitQuizToTelegram({
                name,
                phone,
                answers
            });

            if (result.success) {
                setIsFinished(true); // Show success screen
            } else {
                alert('Xatolik yuz berdi. Iltimos qayta urinib ko\'ring.');
            }
        } catch (error) {
            console.error(error);
            alert('Xatolik yuz berdi.');
        } finally {
            setIsLoading(false);
        }
    };

    const progress = Math.min(((currentStep + 1) / 5) * 100, 100);

    return (
        <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

            <div className="container px-4 mx-auto max-w-4xl relative z-10">
                <div className="text-center mb-12 space-y-4">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                            Sun&apos;iy Intellekt kursiga <span className="text-red-600">qabul cheklangan</span>.
                        </h2>
                        <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
                            Testdan o&apos;ting, shunda siz bizga mos ekanligingizni bilamiz.
                        </p>
                    </FadeIn>
                </div>

                <div className="max-w-2xl mx-auto">
                    <AnimatePresence mode="wait">
                        {!isFinished ? (
                            <motion.div
                                key="quiz"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="border-0 shadow-2xl shadow-slate-200/50 rounded-3xl overflow-hidden bg-white min-h-[500px] flex flex-col">
                                    <div className="h-2 bg-slate-100 w-full">
                                        <motion.div
                                            className="h-full bg-blue-600 rounded-r-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${progress}%` }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                    <CardContent className="p-8 md:p-12 flex-1 flex flex-col">
                                        {currentStep < 4 ? (
                                            /* Question Steps */
                                            <div className="space-y-8 flex-1">
                                                <div>
                                                    <span className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 block">
                                                        Savol {currentStep + 1}/5
                                                    </span>
                                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                                                        {questions[currentStep].question}
                                                    </h3>
                                                </div>

                                                <div className="grid gap-4">
                                                    {questions[currentStep].options.map((option, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => handleOptionSelect(option)}
                                                            className={cn(
                                                                "w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between group",
                                                                answers[currentStep] === option
                                                                    ? "border-blue-600 bg-blue-50/50 shadow-md shadow-blue-100"
                                                                    : "border-slate-100 bg-white hover:border-blue-200 hover:bg-slate-50"
                                                            )}
                                                        >
                                                            <span className={cn(
                                                                "font-medium text-lg",
                                                                answers[currentStep] === option ? "text-blue-700" : "text-slate-600 group-hover:text-slate-900"
                                                            )}>
                                                                {option}
                                                            </span>
                                                            <div className={cn(
                                                                "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                                                                answers[currentStep] === option
                                                                    ? "border-blue-600 bg-blue-600 text-white"
                                                                    : "border-slate-200 group-hover:border-blue-300"
                                                            )}>
                                                                {answers[currentStep] === option && <CheckCircle2 className="w-4 h-4" />}
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            /* Contact Form Step - Step 5 */
                                            <div className="space-y-8 flex-1">
                                                <div>
                                                    <span className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 block">
                                                        Qadam 5/5
                                                    </span>
                                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                                                        Bog&apos;lanish uchun telefon raqamingizni qoldiring
                                                    </h3>
                                                </div>

                                                <form id="quiz-form" onSubmit={handleSubmitForm} className="space-y-6">
                                                    <div className="space-y-2">
                                                        <label htmlFor="name" className="text-sm font-medium text-slate-700 ml-1">Ismingiz</label>
                                                        <Input
                                                            id="name"
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                            placeholder="Ismingizni yozing"
                                                            required
                                                            className="bg-slate-50 border-slate-200 focus:border-blue-500 h-14 text-lg px-4 rounded-xl"
                                                        />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label htmlFor="phone" className="text-sm font-medium text-slate-700 ml-1">Telefon raqamingiz</label>
                                                        <div className="relative">
                                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                                                <Image src="https://flagcdn.com/w20/uz.png" width={20} height={15} alt="Uzbekistan" unoptimized />
                                                                <span className="text-slate-500 font-medium">+998</span>
                                                            </div>
                                                            <Input
                                                                id="phone"
                                                                type="tel"
                                                                value={phone}
                                                                onChange={(e) => {
                                                                    // Simple number only filter for convenience
                                                                    const val = e.target.value.replace(/\D/g, '');
                                                                    setPhone(val);
                                                                }}
                                                                placeholder="90 123 45 67"
                                                                required
                                                                className="bg-slate-50 border-slate-200 focus:border-blue-500 h-14 text-lg pl-[6.5rem] pr-4 rounded-xl font-medium"
                                                            />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        )}

                                        <div className="flex items-center justify-between pt-8 mt-auto">
                                            <Button
                                                variant="ghost"
                                                onClick={handlePrev}
                                                className="text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                                            >
                                                <ArrowLeft className="w-4 h-4 mr-2" />
                                                Ortga
                                            </Button>

                                            {currentStep < 4 ? (
                                                /* Next Button for Questions - HIDDEN */
                                                null
                                            ) : (
                                                /* Submit Button for Form */
                                                <Button
                                                    form="quiz-form"
                                                    type="submit"
                                                    disabled={isLoading || !name || !phone}
                                                    className="bg-[#C0492C] hover:bg-[#a83e25] text-white px-8 h-14 rounded-xl font-bold text-lg shadow-lg shadow-orange-600/20 md:w-auto w-36"
                                                >
                                                    {isLoading ? (
                                                        <Loader2 className="w-5 h-5 animate-spin" />
                                                    ) : (
                                                        "Yuborish"
                                                    )}
                                                </Button>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Card className="border-0 shadow-2xl shadow-green-200/50 rounded-3xl overflow-hidden bg-white text-center">
                                    <CardContent className="p-12 space-y-6">
                                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="w-12 h-12 text-green-600" />
                                        </div>
                                        <h3 className="text-3xl font-black text-slate-900">
                                            Tabriklaymiz!
                                        </h3>
                                        <p className="text-xl text-slate-600 max-w-md mx-auto">
                                            Sizning arizangiz qabul qilindi. Tez orada menejerlarimiz siz bilan bog&apos;lanishadi.
                                        </p>
                                        <div className="pt-8">
                                            <Button
                                                onClick={() => {
                                                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                                                }}
                                                className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white h-16 px-12 rounded-2xl font-bold text-xl shadow-xl shadow-green-600/20 animate-pulse"
                                            >
                                                Kurs narxlarini ko&apos;rish
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
