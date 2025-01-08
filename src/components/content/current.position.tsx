import { Card } from "../ui/card";
import CurrentData from "@/contents/dynamic-data/current-cv.json";

const CurrentPositionContent = () => {
  const contentData = CurrentData["current-and-cv"];
  return (
    <Card className="p-5 h-full">
      <div className="w-full flex flex-col md:justify-center h-full">
        <div className="flex items-center">
          <p className="text-base md:text-lg font-semibold">Current Role</p>
          <div className="w-2 h-2  md:w-4 md:h-4 bg-emerald rounded-full animate-ping ms-auto"></div>
        </div>
        <p className="text-xs md:text-sm mt-2">{contentData["current-work"]}</p>
      </div>
    </Card>
  );
};

export default CurrentPositionContent;
