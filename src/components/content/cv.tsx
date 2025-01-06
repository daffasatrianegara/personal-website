import { Card } from "../ui/card";

const CvContent = () => {
  return (
    <Card className="h-full p-5">
      <div className="w-full flex flex-col justify-center h-full">
        <div className="flex gap-3 items-center">
          <p className="text-base md:text-lg font-semibold">CV</p>
          <a
            href="/files/CV.pdf"
            download="Muhammad_Daffa_Satria_Negara_CV"
            className="text-sm max-sm:text-xs px-5 ms-auto text-center py-1 bg-emerald text-white font-bold rounded hover:bg-emeraldhover"
          >
            Download
          </a>
        </div>
        <p className="text-sm md:text-base mt-2">
          Discover my professional journey and skills in detail by downloading
          my full CV.
        </p>
      </div>
    </Card>
  );
};

export default CvContent;
