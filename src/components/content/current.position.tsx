import { Card } from "../ui/card";
import CurrentData from "@/contents/dynamic-data/current-cv.json";

const CurrentPositionContent = () => {
  const contentData = CurrentData["current-and-cv"];
  return (
    <Card className="p-5 h-full">
      <div className="w-full flex flex-col md:justify-center h-full">
        <div className="flex items-center">
          <p className="text-lg md:text-xl font-semibold">Current Role</p>
          <div className="relative w-3 h-3 md:w-4 md:h-4 ms-auto flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-emerald animate-ping"></span>
            <span className="rounded-full bg-emerald w-2 h-2 md:w-3 md:h-3"></span>
          </div>
        </div>
        <p className="text-sm mt-2 text-justify">
          {contentData["current-work"]}
        </p>
      </div>
    </Card>
  );
};

export default CurrentPositionContent;
