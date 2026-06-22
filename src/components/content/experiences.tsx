import { Card } from "../ui/card";
import ExperiencesData from "@/contents/experiences/index.json";

const ExperiencesContent = ({
  number_of_experiences,
}: Readonly<{ number_of_experiences: number }>) => {
  const contentData = ExperiencesData.experiences.slice(
    0,
    number_of_experiences,
  );

  return (
    <Card className="p-5 h-full flex flex-col">
      <p className="text-lg md:text-xl font-semibold">Experiences</p>
      <div className="ms-1 mt-2 w-full flex flex-col flex-1">
        <ol className="relative border-s border-emerald">
          {contentData.map((data, index) => (
            <li className="mb-5 ms-4" key={index}>
              <div className="absolute w-3 h-3 bg-emerald rounded-full mt-2 -start-1.5 border border-white dark:border-gray-900"></div>
              <time className="mb-1 text-xs md:text-sm font-normal leading-none text-gray-600 dark:text-gray-300">
                {data.start_date} - {data.end_Date}
              </time>
              <p className="text-sm md:text-base font-semibold text-emerald">
                {data.position}{" "}
                <span className="text-[0.7rem] md:text-[0.8rem] font-normal text-gray-600 dark:text-gray-300">
                  - {data.status}
                </span>
              </p>
              <p className="text-xs md:text-sm text-gray-900 dark:text-white font-medium my-0.5">
                {data.company_name}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-auto mb-1">
          <div className="w-full border-b"></div>
          <div className="flex justify-center mt-3">
            <a
              href="/experiences"
              className="text-sm text-emerald underline hover:text-emeraldhover"
            >
              Explore More...
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ExperiencesContent;
