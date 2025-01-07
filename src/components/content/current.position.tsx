import { Card } from "../ui/card";

const CurrentPosition = () => {
  return (
    <Card className="p-5 h-full">
      <div className="w-full flex flex-col md:justify-center h-full">
        <div className="flex items-center">
          <p className="text-base md:text-lg font-semibold">Current Role</p>
          <div className="w-2 h-2  md:w-4 md:h-4 bg-emerald rounded-full animate-ping ms-auto"></div>
        </div>
        <p className="text-xs md:text-sm mt-2">
          Currently serving as a freelancer and Cloud Computing cohort at
          Bangkit Academy.
        </p>
      </div>
    </Card>
  );
};

export default CurrentPosition;
