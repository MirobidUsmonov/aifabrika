'use client';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FormEvent, useState } from "react"
import { FadeIn, ScaleUp } from "@/components/ui/motion"

export function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'success'>('idle');

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Mock AmoCRM submission
        setStatus('success');
        setTimeout(() => setStatus('idle'), 3000);
    }

    return (
        <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>

            <div className="container px-4 mx-auto max-w-lg relative z-10">
                <div className="text-center mb-10">
                    <FadeIn>
                        <h2 className="text-4xl font-black tracking-tight text-slate-900">
                            Savollaringiz qoldimi?
                        </h2>
                        <p className="mt-4 text-xl text-slate-600">
                            Ma&apos;lumotlaringizni qoldiring, menejerlarimiz siz bilan bog&apos;lanishadi.
                        </p>
                    </FadeIn>
                </div>

                <ScaleUp className="w-full">
                    <Card className="border-none shadow-2xl shadow-blue-900/10 rounded-[2rem] overflow-hidden bg-white">
                        <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                        <CardHeader className="text-center pb-6 pt-8">
                            <CardTitle className="text-2xl font-black text-slate-900">Kursga yozilish</CardTitle>
                            <CardDescription className="text-slate-500 font-medium">Hoziroq ro&apos;yxatdan o&apos;ting va chegirmaga ega bo&apos;ling</CardDescription>
                        </CardHeader>
                        <CardContent className="px-8 pb-10">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-2">
                                    <Input id="name" name="name" placeholder="Ismingiz" required className="bg-slate-50 border-slate-200 focus:border-blue-500 h-14 text-lg px-4 rounded-xl" />
                                </div>
                                <div className="space-y-2">
                                    <Input id="phone" name="phone" type="tel" placeholder="+998 90 123 45 67" required className="bg-slate-50 border-slate-200 focus:border-blue-500 h-14 text-lg px-4 rounded-xl" />
                                </div>
                                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 h-14 text-lg font-bold rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all hover:-translate-y-1">
                                    {status === 'success' ? 'Yuborildi!' : 'Yuborish'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </ScaleUp>
            </div>
        </section>
    )
}
