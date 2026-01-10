import { Award, Smartphone, Users } from "lucide-react"

const Features = () => {
    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl lg:text-5xl font-black mb-6">Neden Veduo'yu Seçmelisiniz?</h2>
                    <p className="text-slate-400 text-lg">Eğitim sürecini kolaylaştıran ve verimliliği artıran benzersiz özellikler.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-10 bg-white/5 border border-white/10 rounded-[40px] hover:bg-white/10 transition-colors">
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8">
                            <Award className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Sertifikalı Eğitimler</h3>
                        <p className="text-slate-400 leading-relaxed">Kursları başarıyla tamamlayın, global geçerliliği olan sertifikalarla CV'nizi güçlendirin.</p>
                    </div>
                    <div className="p-10 bg-white/5 border border-white/10 rounded-[40px] hover:bg-white/10 transition-colors">
                        <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8">
                            <Smartphone className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Her Yerden Erişim</h3>
                        <p className="text-slate-400 leading-relaxed">İster mobilde ister webde. Çevrimdışı izleme özelliğiyle internetiniz olmasa da öğrenmeye devam edin.</p>
                    </div>
                    <div className="p-10 bg-white/5 border border-white/10 rounded-[40px] hover:bg-white/10 transition-colors">
                        <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-8">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Soru & Cevap Topluluğu</h3>
                        <p className="text-slate-400 leading-relaxed">Eğitmenlerle ve diğer öğrencilerle etkileşime geçin. Aklınıza takılan her şeyi anında sorun.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features