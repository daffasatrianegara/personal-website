import MainLayout from "@/components/layouts/main.layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ExperiencesData from "@/contents/experiences/index.json";

const ExperiencesPage = () => {
  const contentData = ExperiencesData.experiences;

  return (
    <MainLayout title="Experiences | Muhammad Daffa Satria Negara">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Experiences</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="my-5">
        <p className="text-xl md:text-2xl font-semibold">
          Profesional Experiences
        </p>
        <div className="w-full border-b mt-2 border-gray-200 dark:border-gray-800"></div>
      </div>
      <div className="ms-2">
        <ol className="relative border-s border-emerald dark:border-gray-700">
          {contentData.map((data, index) => (
            <li className="mb-10 ms-4" key={index}>
              <div className="absolute w-3 h-3 bg-emerald rounded-full mt-2 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm md:text-base font-normal leading-none text-gray-400 dark:text-gray-500">
                {data.start_date} - {data.end_Date}
              </time>
              <p className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                {data.position}{" "}
                <span className="text-sm md:text-base font-normal text-gray-400 dark:text-gray-300">
                  - {data.status}
                </span>
              </p>
              <p className="text-sm md:text-base text-gray-400 dark:text-gray-300 my-0.5">
                {data.company_name}
              </p>
              <p className="text-sm md:text-base font-normal text-gray-500 dark:text-gray-400">
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
              </p>
            </li>
          ))}
        </ol>
      </div>
    </MainLayout>
  );
};

export default ExperiencesPage;
