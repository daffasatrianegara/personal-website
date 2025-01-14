import { Card } from "../ui/card";

const ProjectsContent = ({
  number_of_projects,
}: Readonly<{ number_of_projects: number }>) => {
  const sementara = number_of_projects;
  console.log(sementara);
  return (
    <Card className="p-5">
      <p className="text-base md:text-lg font-semibold">Projects</p>
      <div className="mt-2 md:mt-4 w-full">
        <div className="p-1">
          <div className="grid grid-cols-6 md:grid-cols-5 gap-3 md:gap-5">
            {/* <div className="col-span-2 max-[457px]:col-span-6 md:col-span-1">
              <img
                className="w-full object-cover rounded-md"
                src="/img/test.png"
                alt=""
              />
            </div>
            <div className="col-span-4 md:col-span-4 max-[457px]:col-span-6">
              <p className="text-base md:text-lg font-semibold">
                Perpigi Organization Website Profile
              </p>
              <p className=""></p>
            </div> */}
          </div>
          <div className="w-full border-b my-1"></div>
          <div className="flex justify-center mt-3">
            <a
              href="/projects"
              className="text-sm text-emerald underline md:text-sm hover:text-emeraldhover"
            >
              Explore More...
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectsContent;
