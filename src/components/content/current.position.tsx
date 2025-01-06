import { Card } from "../ui/card";

const CurrentPosition = () => {
  return (
    <Card className="p-5 h-full">
      <div className="w-full flex flex-col justify-center h-full">
        <p className="text-base md:text-lg font-semibold">Current Role</p>
        <p className="text-sm md:text-base mt-2">
          Currently serving as a freelancer and Cloud Computing cohort at
          Bangkit Academy.
        </p>
      </div>
    </Card>
  );
};

export default CurrentPosition;
