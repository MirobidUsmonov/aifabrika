'use client';

import { useState } from "react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Check, X, Clock, Video, Zap, ShieldCheck, Gift } from "lucide-react"
import { FadeIn, ScaleUp } from "@/components/ui/motion"
import { Button } from "@/components/ui/button"

const packages = [
    {
        name: "Maslahat Kerakmi?",
        price: 0,
        originalPrice: 0,
        currency: "",
        description: "Agar qaysi tarif sizga mos kelishini bilmayotgan bo'lsangiz",
        features: [
            { text: "Mutaxassis bilan 15 daqiqa suhbat", included: true, highlight: true },
            { text: "Sizning holatingiz tahlili", included: true, highlight: false },
            { text: "To'g'ri yo'nalish tanlashda yordam", included: true, highlight: false },
            { text: "Barcha savollarga javoblar", included: true, highlight: false },
        ],
        color: "slate",
        icon: Clock,
        popular: false,
        isConsultation: true
    },
    {
        name: "START",
        price: 499000,
        originalPrice: 1499000,
        currency: "so‘m",
        description: "“O‘zim mustaqil qilaman” deganlar uchun",
        features: [
            { text: "Kurator yordami", included: true, highlight: true },
            { text: "Asosiy video darslar", included: true, highlight: false },
            { text: "Prompt shablonlar (copy-paste)", included: true, highlight: false },
            { text: "Umumiy chat (kuratorsiz)", included: true, highlight: false },
            { text: "Jonli darslar", included: false, highlight: false },
            { text: "Uyga vazifa tekshiruvi", included: false, highlight: false },
        ],
        color: "blue",
        icon: Video,
        popular: false
    },
    {
        name: "STANDARD",
        price: 1199000,
        originalPrice: 1899000,
        currency: "so‘m",
        popular: true,
        description: "Natijaga tez va ishonchli chiqmoqchi bo‘lganlar uchun",
        features: [
            { text: "START’dagi barcha imkoniyatlar", included: true, highlight: true },
            { text: "Kurator bilan individual ishlash", included: true, highlight: true },
            { text: "149$ lik Gemini Ultra (1 oy bepul)", included: true, highlight: true },
            { text: "Jonli darslar + yozuvlar", included: true, highlight: true },
            { text: "Uyga vazifa + tekshiruv", included: true, highlight: true },
            { text: "Prompt bank + template + cheklist", included: true, highlight: false },
            { text: "14 kun chat yordam", included: true, highlight: false },
            { text: "Asosiy video darslar", included: true, highlight: false },
            { text: "1:1 Konsultatsiya", included: false, highlight: false },
        ],
        color: "indigo",
        icon: Zap
    },
    {
        name: "PRO (Individual)",
        price: 7499000,
        originalPrice: 12499000,
        currency: "so‘m",
        description: "“Men natijani kafolat bilan xohlayman” deganlar uchun",
        features: [
            { text: "STANDARD’dagi barcha imkoniyatlar", included: true, highlight: true },
            { text: "149$ lik Gemini Ultra (1 oy bepul)", included: true, highlight: true },
            { text: "Kurator bilan individual feedback", included: true, highlight: true },
            { text: "1:1 konsultatsiya (30–60 min)", included: true, highlight: true },
            { text: "Kontent paket: 10 reels + 10 post", included: true, highlight: true },
            { text: "30 kun qo‘llab-quvvatlash", included: true, highlight: true },
            { text: "Barcha bonuslar va shablonlar", included: true, highlight: true },
        ],
        color: "amber",
        icon: ShieldCheck
    }
]

export function Pricing() {
    const [billingCycle, setBillingCycle] = useState<'installment' | 'full'>('installment');

    const formatPrice = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    return (
        <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>

            <div className="container px-4 mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-12 space-y-4">
                    <FadeIn>
                        <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                            Tariflar
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
                            Sizga mos tarifni tanlang
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Bilimga tikilgan sarmoya — eng katta foyda keltiradigan sarmoyadir
                        </p>

                        {/* Billing Toggle */}
                        <div className="inline-flex w-full max-w-[350px] items-center p-1.5 bg-white border border-slate-200 rounded-2xl shadow-sm mb-8 relative">
                            <button
                                onClick={() => setBillingCycle('installment')}
                                className={`relative flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-300 z-10 whitespace-nowrap flex items-center justify-center ${billingCycle === 'installment'
                                    ? 'text-white shadow-md'
                                    : 'text-slate-500 hover:text-slate-900'
                                    }`}
                            >
                                Bo&apos;lib to&apos;lash (3 oy)
                            </button>
                            <button
                                onClick={() => setBillingCycle('full')}
                                className={`relative flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-300 z-10 whitespace-nowrap flex items-center justify-center ${billingCycle === 'full'
                                    ? 'text-white shadow-md'
                                    : 'text-slate-500 hover:text-slate-900'
                                    }`}
                            >
                                To&apos;liq to&apos;lov
                            </button>

                            {/* Animated Background for Active Tab */}
                            <div
                                className={`absolute top-1.5 bottom-1.5 rounded-xl bg-indigo-600 transition-all duration-300 ease-in-out z-0 ${billingCycle === 'installment'
                                    ? 'left-1.5 w-[calc(50%-6px)]'
                                    : 'left-[50%] w-[calc(50%-6px)]'
                                    }`}
                            ></div>
                        </div>
                    </FadeIn>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto items-start">
                    {packages.map((pkg, index) => {
                        const isInstallment = billingCycle === 'installment' && !pkg.isConsultation;
                        const displayPrice = isInstallment ? Math.ceil(pkg.price / 3) : pkg.price;
                        const originalDisplayPrice = isInstallment ? Math.ceil(pkg.originalPrice / 3) : pkg.originalPrice;

                        return (
                            <ScaleUp key={pkg.name} delay={index * 0.1} className="h-full">
                                <Card className={`relative h-full flex flex-col border-0 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-[2rem] overflow-hidden ${pkg.popular ? 'ring-4 ring-indigo-500/20 z-10 scale-105 shadow-indigo-900/10' : 'bg-white'}`}>
                                    {pkg.popular && (
                                        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                                    )}

                                    <CardHeader className={`text-center pb-8 pt-10 ${pkg.popular ? 'bg-slate-900 text-white' : 'bg-white'}`}>
                                        {pkg.popular && (
                                            <div className="mx-auto w-fit px-4 py-1 rounded-full bg-indigo-500 text-white text-xs font-bold uppercase tracking-widest mb-4">
                                                Eng Ommabop
                                            </div>
                                        )}
                                        <h3 className={`text-xl font-black tracking-tight uppercase mb-2 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>{pkg.name}</h3>
                                        <div className="flex flex-col items-center justify-center gap-0 mb-2">
                                            {!pkg.isConsultation && (
                                                <span className={`text-lg line-through decoration-red-500/50 ${pkg.popular ? 'text-indigo-200' : 'text-slate-400'}`}>
                                                    {formatPrice(originalDisplayPrice)}
                                                </span>
                                            )}
                                            <div className="flex items-center gap-1">
                                                <span className={`text-3xl font-bold ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                                                    {pkg.isConsultation ? "Bepul" : formatPrice(displayPrice)}
                                                </span>
                                                {!pkg.isConsultation && (
                                                    <span className={`text-sm font-bold opacity-60 ${pkg.popular ? 'text-indigo-300' : 'text-slate-500'}`}>
                                                        {isInstallment ? 'so‘m / oy' : 'so‘m'}
                                                    </span>
                                                )}
                                            </div>
                                            {isInstallment && !pkg.isConsultation && (
                                                <span className={`text-xs font-medium mt-1 ${pkg.popular ? 'text-indigo-300' : 'text-slate-400'}`}>
                                                    3 oy davomida
                                                </span>
                                            )}
                                        </div>
                                        <div className={`text-sm px-6 font-medium ${pkg.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                                            {pkg.description}
                                        </div>
                                    </CardHeader>

                                    <CardContent className="flex-1 p-8 space-y-6 bg-white">
                                        <div className="space-y-4">
                                            {pkg.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    {feature.included ? (
                                                        <div className={`mt-1 p-1 rounded-full ${feature.highlight ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'}`}>
                                                            <Check className="w-3 h-3 font-bold" />
                                                        </div>
                                                    ) : (
                                                        <div className="mt-1 p-1 rounded-full bg-slate-100 text-slate-300">
                                                            <X className="w-3 h-3" />
                                                        </div>
                                                    )}
                                                    <span className={`text-sm font-medium leading-tight ${!feature.included ? 'text-slate-400' :
                                                        feature.highlight ? 'text-slate-900 font-bold' : 'text-slate-600'
                                                        }`}>
                                                        {feature.text}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {pkg.name === 'PRO (Individual)' && (
                                            <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-100 text-xs text-amber-800 font-medium">
                                                Bonus: 10 ta Reels + 10 ta Post tayyorlab beriladi
                                            </div>
                                        )}
                                    </CardContent>

                                    <CardFooter className="p-8 pt-0 bg-white">
                                        <Button
                                            onClick={() => {
                                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className={`w-full h-14 text-lg font-bold rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 ${pkg.popular
                                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-indigo-200'
                                                //
                                                : pkg.isConsultation
                                                    ? 'bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-50'
                                                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                                                }`}>
                                            {/*  */}
                                            {pkg.isConsultation ? "Maslahat Olish" : (billingCycle === 'installment' ? "Bo'lib to'lash" : "Tanlash")}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </ScaleUp>
                        )
                    })}
                </div>

                <div className="mt-16 text-center space-y-4">
                    <FadeIn>
                        <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-white p-6 rounded-3xl shadow-xl shadow-slate-200 border border-indigo-100 max-w-3xl mx-auto">
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shrink-0 shadow-lg">
                                    <Gift className="w-6 h-6 animate-pulse" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-slate-900 text-lg">Maxsus Bonus</h4>
                                    <p className="text-slate-600 text-sm">Bugun ro&apos;yxatdan o&apos;tsangiz</p>
                                </div>
                            </div>

                            <div className="h-px w-full md:w-px md:h-12 bg-slate-100"></div>

                            <p className="text-left font-medium text-slate-700 md:flex-1">
                                <span className="font-bold text-indigo-600">100+ tayyor promptlar</span> va <span className="font-bold text-indigo-600">10 ta ssenariy</span> bepul taqdim etiladi!
                            </p>

                            <div className="w-full md:w-auto">
                                <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-bold border border-green-200">
                                    ✅ Cheklovsiz foydalanish
                                </span>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}
