import { Card } from "../ui/card";
import ExperiencesData from "@/contents/experiences/index.json";

const ExperiencesContent = () => {
  const contentData = ExperiencesData.experiences.slice(0, 8);
  return (
    <Card className="p-5 h-full">
      <p className="text-base md:text-lg font-semibold">Experiences</p>
      <div className="ms-1 mt-2 w-full">
        <ol className="relative border-s border-emerald dark:border-gray-700">
          {contentData.map((data, index) => (
            <li className="mb-5 ms-4" key={index}>
              <div className="absolute w-3 h-3 bg-emerald rounded-full mt-2 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-xs md:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {data.start_date} - {data.end_Date}
              </time>
              <p className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                {data.position}{" "}
                <span className="text-[0.7rem] md:text-[0.8rem] font-normal text-gray-400 dark:text-gray-300">
                  - {data.status}
                </span>
              </p>
              <p className="text-xs md:text-sm text-gray-400 dark:text-gray-300 my-0.5">
                {data.company_name}
              </p>
              {/* <p className="text-xs md:text-sm font-normal text-gray-500 dark:text-gray-400">
                {data.text_intro} <br />
                {data.description_role.length > 0 ? (
                  <ul className="mt-1 ms-2">
                    {data.description_role.map((data, index) => (
                      <li
                        key={index}
                        className="grid grid-cols-[auto,1fr] gap-x-2 items-start my-1"
                      >
                        <span className="list-disc">•</span>
                        <span>{data}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <></>
                )}
              </p> */}
            </li>
          ))}
        </ol>
        <div className="w-full border-b my-1"></div>
        <div className="flex justify-center mt-3">
          <a
            href="/experiences"
            className="text-sm text-emerald underline md:text-sm hover:text-emeraldhover"
          >
            Explore More...
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ExperiencesContent;
