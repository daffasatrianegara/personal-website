import { Card } from "../ui/card";

const CertificatesContent = () => {
  return (
    <Card className="p-5">
      <p className="text-base md:text-lg font-semibold">Certificates</p>
      <div className="w-full flex flex-col gap-2 mt-2">
        <div>
          <a
            className="text-sm hover:underline font-medium"
            href="https://www.dicoding.com/certificates/2VX347GNNZYQ"
            target="_blank"
          >
            <span className="text-emerald">Certificate of {"Competency"}</span>{" "}
            - Belajar Penerapan Machine Learning dengan Google Cloud
          </a>
          <p className="text-xs my-1">21 Desember 2024 - 21 Desember 2027</p>
          <p className="text-xs my-1">Dicoding Indonesia</p>
        </div>
        <div>
          <a
            className="text-sm hover:underline font-medium"
            href="https://www.dicoding.com/certificates/2VX347GNNZYQ"
            target="_blank"
          >
            <span className="text-emerald">Certificate of {"Competency"}</span>{" "}
            - Belajar Penerapan Machine Learning dengan Google Cloud
          </a>
          <p className="text-xs my-1">21 Desember 2024 - 21 Desember 2027</p>
          <p className="text-xs my-1">Dicoding Indonesia</p>
        </div>
        <div>
          <a
            className="text-sm hover:underline font-medium"
            href="https://www.dicoding.com/certificates/2VX347GNNZYQ"
            target="_blank"
          >
            <span className="text-emerald">Certificate of {"Competency"}</span>{" "}
            - Belajar Penerapan Machine Learning dengan Google Cloud
          </a>
          <p className="text-xs my-1">21 Desember 2024 - 21 Desember 2027</p>
          <p className="text-xs my-1">Dicoding Indonesia</p>
        </div>
        <div className="w-full border-b my-1"></div>
        <div className="flex justify-center">
          <a
            href="/certificates"
            className="text-base text-emerald underline md:text-sm hover:text-emeraldhover"
          >
            Explore More...
          </a>
        </div>
      </div>
    </Card>
  );
};

export default CertificatesContent;
