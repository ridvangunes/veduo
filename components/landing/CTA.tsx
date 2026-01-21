import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const CTA = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="bg-blue-600 rounded-[56px] py-20 px-10 relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 relative">
            Kariyerinizi Bugün Değiştirmeye Hazır mısınız?
          </h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto relative opacity-90">
            1 milyondan fazla öğrenciye katılın ve hayalinizdeki kariyere giden
            yolda ilk adımınızı atın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative">
            <Link
              href={ROUTES.COURSES}
              className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-xl"
            >
              Ücretsiz Kaydolun
            </Link>
            <Link
              href={ROUTES.COURSES}
              className="bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-800 transition-colors"
            >
              Kurs Kataloğu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
