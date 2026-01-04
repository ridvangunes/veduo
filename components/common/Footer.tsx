import { ArrowRight, Globe, Play } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const Footer = () => {
    return (
        <footer className="bg-white pt-12 pb-4 px-6 border-t border-slate-100">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div>
                        <div className="flex items-center gap-2 mb-8 group cursor-pointer">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                                <Play className="text-white fill-current w-5 h-5 ml-0.5" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter font-poppins">veduo</span>
                        </div>
                        <p className="text-slate-500 leading-relaxed pr-10">
                            Eğitimi herkes için erişilebilir, eğlenceli ve etkili hale getirmek için buradayız.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-black text-slate-900 mb-6 uppercase tracking-wider text-sm">Platform</h4>
                        <ul className="space-y-4 text-slate-500 font-semibold">
                            <li><a href="#" className="hover:text-blue-600">Kurslar</a></li>
                            <li><a href="#" className="hover:text-blue-600">Eğitmenler</a></li>
                            <li><a href="#" className="hover:text-blue-600">Kurumsal Eğitim</a></li>
                            <li><a href="#" className="hover:text-blue-600">Fiyatlandırma</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-slate-900 mb-6 uppercase tracking-wider text-sm">Destek</h4>
                        <ul className="space-y-4 text-slate-500 font-semibold">
                            <li><a href="#" className="hover:text-blue-600">Yardım Merkezi</a></li>
                            <li><a href="#" className="hover:text-blue-600">Sıkça Sorulan Sorular</a></li>
                            <li><a href="#" className="hover:text-blue-600">İletişim</a></li>
                            <li><a href="#" className="hover:text-blue-600">Gizlilik Politikası</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-slate-900 mb-6 uppercase tracking-wider text-sm">Bülten</h4>
                        <p className="text-xs text-slate-500 mb-6">En yeni eğitimlerden ve fırsatlardan haberdar olun.</p>
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="E-posta"
                                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 w-full"
                            />
                            <Button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors cursor-pointer">
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 font-bold text-sm">© {new Date().getFullYear()} Veduo Academy. Tüm hakları saklıdır.</p>
                    <div className="flex gap-8">
                        <div className="flex gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <a href="#" className="hover:text-blue-600">Instagram</a>
                            <a href="#" className="hover:text-blue-600">Twitter</a>
                            <a href="#" className="hover:text-blue-600">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer