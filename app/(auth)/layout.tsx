import { Play } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white">
      {/* Left Side: Form Content */}
      <div className="flex flex-col p-8 md:p-12 lg:p-16 justify-center relative overflow-hidden">
        {/* Logo */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12">
          <Link href={ROUTES.HOME} className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-blue-600/30">
              <Play className="text-white fill-current w-5 h-5 ml-0.5" />
            </div>
            <span className="text-2xl font-black tracking-tighter font-poppins text-slate-900">
              veduo
            </span>
          </Link>
        </div>

        {/* Form area */}
        <div className="w-full max-w-md mx-auto z-10">{children}</div>

        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Right Side: Visual Content */}
      <div className="hidden lg:flex flex-col justify-between p-12 relative bg-slate-900 overflow-hidden">
        {/* Background Patterns & Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[24px_24px] opacity-20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(79,70,229,0.15),transparent)]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="max-w-md">
            <h2 className="text-4xl font-black text-white leading-tight mb-6">
              Öğrenme Yolculuğunuza <br />
              <span className="text-blue-500 italic">Bugün</span> Başlayın.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              Dünya çapında 1 milyondan fazla öğrenciye katılın. Sektörün en
              iyilerinden öğrenin ve kariyerinizi zirveye taşıyın.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              {[
                {
                  title: "Sertifika",
                  desc: "Tamamladığınız her kurs için onaylı sertifika.",
                  color: "bg-amber-500",
                },
                {
                  title: "7/24 Erişim",
                  desc: "Derslere dilediğiniz zaman, her cihazdan ulaşın.",
                  color: "bg-emerald-500",
                },
                {
                  title: "Topluluk",
                  desc: "Uzman eğitmenler ve öğrencilerle etkileşime geçin.",
                  color: "bg-blue-500",
                },
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div
                    className={`w-1 h-10 ${feature.color} rounded-full opacity-50 group-hover:opacity-100 transition-opacity`}
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                      {feature.title}
                    </h4>
                    <p className="text-slate-400 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12 mt-20">
            {/* Testimonial Card */}
            <div className="relative group p-8 rounded-[2rem] bg-white text-slate-900 shadow-2xl shadow-blue-500/10 transform -rotate-2 hover:rotate-0 transition-all duration-500 max-w-sm">
              <div className="flex gap-1 text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg font-bold leading-snug mb-8">
                "Veduo sayesinde 3 ay içinde Full-Stack Developer oldum.
                Kursların kalitesi ve topluluk desteği inanılmazdı!"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                  alt="User"
                  className="w-12 h-12 rounded-full bg-slate-100 shadow-inner"
                />
                <div>
                  <p className="text-sm font-black">Emre Korkmaz</p>
                  <p className="text-xs text-slate-500">
                    Google'da Yazılım Geliştirici
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-12 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-slate-900 overflow-hidden bg-slate-800"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?u=${i + 20}`}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-white">
                <p className="text-2xl font-black leading-none">4.9/5</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">
                  Müşteri Memnuniyeti
                </p>
              </div>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} Veduo Academy. Tüm hakları saklıdır.
            </p>
          </div>
        </div>

        {/* Abstract Background Element */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>
    </div>
  );
}
