import { Card } from "../ui/card";
import { Download } from "lucide-react";

const CvContent = () => {
  return (
    <Card className="h-full p-5">
      <div className="w-full flex flex-col md:justify-center h-full">
        <div className="flex gap-3 items-center">
          <p className="text-base md:text-lg font-semibold">CV</p>
          <a
            href="/files/CV.pdf"
            download="Muhammad_Daffa_Satria_Negara_CV"
            className="text-sm max-sm:text-xs px-2 md:px-2 ms-auto text-center py-1 bg-emerald text-white font-bold rounded hover:bg-emeraldhover"
          >
            <Download className="w-3 h-3  md:w-5 md:h-5" />
          </a>
        </div>
        <p className="text-xs md:text-sm mt-2">
          Discover my professional journey and skills in detail by downloading
          my full CV.
        </p>
      </div>
    </Card>
  );
};

export default CvContent;
