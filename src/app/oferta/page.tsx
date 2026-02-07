
export default function OfertaPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">Ommaviy Oferta</h1>

                    <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
                        <section>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">1. Umumiy qoidalar</h3>
                            <p>
                                Ushbu &quot;Ommaviy oferta&quot; (keyingi o‘rinlarda — Shartnoma) &quot;AI FABRIKA&quot; (keyingi o‘rinlarda — Ijrochi) va xizmatlardan foydalanuvchi jismoniy yoki yuridik shaxs (keyingi o‘rinlarda — Buyurtmachi) o‘rtasida tuzilgan rasmiy taklif hisoblanadi.
                            </p>
                            <p>
                                Mazkur Shartnoma O‘zbekiston Respublikasi Fuqarolik Kodeksining tegishli moddalariga asosan tuzilgan bo‘lib, to‘lov amalga oshirilgan paytdan boshlab qonuniy kuchga kiradi va imzolangan hisoblanadi.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">2. Xizmat maqsadi</h3>
                            <p>
                                Ijrochi Buyurtmachiga quyidagi yo‘nalishlar bo‘yicha masofaviy ta’lim kurslari hamda konsalting xizmatlarini taqdim etadi:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li>Sun’iy intellekt vositalaridan foydalanishni o‘rgatish.</li>
                                <li>Raqamli kontent yaratish bo&apos;yicha amaliy mashg‘ulotlar.</li>
                                <li>Marketing va SMM strategiyalarini ishlab chiqish bo‘yicha qo‘llanmalar.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">3. To‘lov va Xizmat narxi</h3>
                            <p>
                                Xizmatlar narxi saytning &quot;Tariflar&quot; bo‘limida ko‘rsatilgan. To‘lovlar milliy valyutada (so‘m) Click, Payme yoki boshqa elektron to‘lov tizimlari orqali amalga oshiriladi.
                            </p>
                            <p>
                                To‘lov amalga oshirilgandan so‘ng, mablag‘ qaytarilmaydi, agar xizmat Ijrochi tomonidan to‘liq ko‘rsatilmagan holatlar bundan mustasno.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">4. Mas&apos;uliyat va Majburiyatlar</h3>
                            <p>
                                <strong>Ijrochi:</strong> Xizmatlarni sifatli va o‘z vaqtida taqdim etish majburiyatini oladi. Texnik nosozliklar yuzaga kelganda, ularni imkon qadar tezroq bartaraf etishga harakat qiladi.
                            </p>
                            <p>
                                <strong>Buyurtmachi:</strong> Taqdim etilgan materiallardan faqat shaxsiy maqsadlarda foydalanishi, ularni uchinchi shaxslarga tarqatmasligi va mualliflik huquqlarini hurmat qilishi shart.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">5. Mualliflik huquqi</h3>
                            <p>
                                Barcha darsliklar, videolar va qo‘llanmalar &quot;AI FABRIKA&quot;ning intellektual mulki hisoblanadi. Ruxsatsiz nusxa ko‘chirish va tarqatish qonuniy javobgarlikka sabab bo‘ladi.
                            </p>
                        </section>

                        <div className="pt-8 border-t border-slate-100 mt-8">
                            <p className="font-bold text-slate-900">AI FABRIKA</p>
                            <p>Manzil: Abdulla Qodiriy ko&apos;chasi 10A</p>
                            <p>Tel: +998 33 150 77 50</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
