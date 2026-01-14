export const CourseDescription = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Açıklama</h2>
      <div className="prose prose-slate max-w-none text-muted-foreground text-sm md:text-base leading-relaxed">
        <p>
          Bu kurs, modern web geliştirme dünyasının en popüler kütüphanesi olan
          React'ı en temelden alıp profesyonel seviyeye taşımak için tasarlandı.
          Sadece teorik bilgi değil, piyasada aranan gerçek becerileri
          kazanacaksınız.
        </p>
        <p>
          <strong>Neden bu kursu almalısınız?</strong>
          <br />
          - Sürekli güncellenen içerik (Next.js 14 dahil)
          <br />
          - Gerçek dünya senaryolarına dayalı 3 büyük proje
          <br />- Discord topluluğumuza özel erişim ve soru-cevap desteği
        </p>
      </div>
    </div>
  );
};
