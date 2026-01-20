"use client";

const StudentCertificatesHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          <span className="bg-linear-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Sertifikalarım
          </span>
        </h1>
        <p className="text-muted-foreground mt-1">
          Tamamladığın kurslardan kazandığın başarı sertifikalarını buradan
          görüntüleyebilir ve indirebilirsin.
        </p>
      </div>
    </div>
  );
};

export default StudentCertificatesHeader;
