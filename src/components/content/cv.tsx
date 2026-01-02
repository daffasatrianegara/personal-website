import { Card } from "../ui/card";
import { Download } from "lucide-react";
import CvData from "@/contents/dynamic-data/current-cv.json";

const CvContent = () => {
  const contentData = CvData["current-and-cv"];
  return (
    <Card className="h-full p-5">
      <div className="w-full flex flex-col md:justify-center h-full">
        <div className="flex gap-3 items-center">
          <p className="text-lg md:text-xl font-semibold">CV</p>
          <a
            href={contentData["cv-url"]}
            download="Muhammad_Daffa_Satria_Negara_CV"
            className="text-sm max-sm:text-xs md:w-7 md:h-7 w-6 h-6 flex items-center justify-center ms-auto text-center bg-emerald text-white font-bold rounded hover:bg-emeraldhover"
          >
            <Download className="w-4 h-4" />
          </a>
        </div>
        <p className="text-sm mt-2 text-justify">{contentData["cv-text"]}</p>
      </div>
    </Card>
  );
};

export default CvContent;
