export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">Maxfiylik Siyosati</h1>

                    <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
                        <section>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">1. Kirish</h3>
                            <p>
                                Ushbu "Maxfiylik Siyosati" (keyingi o‘rinlarda — Siyosat) "AI FABRIKA" (keyingi o‘rinlarda — Biz) foydalanuvchilarning (keyingi o‘rinlarda — Siz) shaxsiy ma'lumotlarini qanday yig‘ishi, foydalanishi va himoya qilishini tushuntiradi.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">2. Qanday ma'lumotlarni yig‘amiz?</h3>
                            <p>
                                Xizmatlarimizdan foydalanish jarayonida quyidagi ma'lumotlarni so‘rashimiz mumkin:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li>Ism va familiya;</li>
                                <li>Telefon raqami;</li>
                                <li>Elektron pochta manzili;</li>
                                <li>To‘lov ma'lumotlari (faqat tranzaksiya jarayoni uchun).</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">3. Ma'lumotlardan foydalanish maqsadi</h3>
                            <p>
                                Sizning ma'lumotlaringiz quyidagi maqsadlarda ishlatiladi:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li>Xizmatlarni taqdim etish va kurslarga ulanishni ta’minlash;</li>
                                <li>To‘lovlarni qayta ishlash;</li>
                                <li>Yangi kurslar va aksiyalar haqida xabar berish;</li>
                                <li>Texnik yordam ko‘rsatish.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">4. Ma'lumotlar xavfsizligi</h3>
                            <p>
                                Biz Sizning shaxsiy ma'lumotlaringizni uchinchi shaxslarga sotmaymiz va tarqatmaymiz. Ma'lumotlaringiz xavfsiz serverlarda saqlanadi va zamonaviy shifrlash usullari orqali himoya qilinadi.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">5. Cookie fayllari</h3>
                            <p>
                                Saytimiz foydalanuvchi tajribasini yaxshilash maqsadida "Cookie" fayllaridan foydalanishi mumkin. Siz brauzer sozlamalari orqali ularni o‘chirib qo‘yish huquqiga egasiz.
                            </p>
                        </section>

                        <div className="pt-8 border-t border-slate-100 mt-8">
                            <p className="font-bold text-slate-900">AI FABRIKA</p>
                            <p>Manzil: Abdulla Qodiriy ko'chasi 10A</p>
                            <p>Tel: +998 33 150 77 50</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
