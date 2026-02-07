import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white py-16">
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
                    <div className="flex flex-col gap-6">
                        <span className="text-2xl font-black text-blue-600">AI FABRIKA</span>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Kelajak kasbini bugun o&apos;rganing. Biznes uchun sun&apos;iy intellekt va avtomatlashtirish yechimlari.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="font-bold text-slate-900">Bo&apos;limlar</span>
                        <Link href="#programm" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Dastur</Link>
                        <Link href="#services" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Xizmatlar</Link>
                        <Link href="#results" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Natijalar</Link>
                        <Link href="#team" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">Mentor</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="font-bold text-slate-900">Bog&apos;lanish</span>
                        <Link href="tel:+998331507750" className="text-sm text-slate-600 hover:text-blue-600 flex items-center gap-2">
                            📞 +998 33 150 77 50
                        </Link>
                        <span className="text-sm text-slate-600 hover:text-blue-600 cursor-default">
                            📍 Abdulla Qodiriy ko&apos;chasi 10A
                        </span>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="font-bold text-slate-900">Hujjatlar</span>
                        <Link href="/oferta" className="text-sm text-slate-600 hover:text-blue-600">Ommaviy oferta</Link>
                        <Link href="/privacy" className="text-sm text-slate-600 hover:text-blue-600">Maxfiylik siyosati</Link>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-400 text-center md:text-left">
                        © 2024 AI FABRIKA. Barcha huquqlar himoyalangan.
                    </p>
                </div>
            </div>
        </footer>
    )
}
