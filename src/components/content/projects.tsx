import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { SiGithub } from "react-icons/si";

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
          <div className="grid grid-cols-6 md:grid-cols-5 gap-3 md:gap-5 mb-5">
            {/* ini looping data projek */}
            <div className="col-span-3 max-[800px]:col-span-6 md:col-span-2">
              <img
                className="w-full object-cover rounded-md h-full"
                src="/img/test.png"
                alt=""
              />
            </div>
            <div className="col-span-3 md:col-span-3 max-[800px]:col-span-6 mb-auto mt-auto">
              <p className="text-base md:text-lg font-semibold">
                Perpigi Organization Website Profile
              </p>
              <p className="text-xs md:text-sm text-gray-400 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto aperiam inventore, ipsa deserunt consectetur atque,
                possimus provident ducimus et quaerat, hic nisi fugit
                consequuntur magni assumenda nostrum dolores esse velit! Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                aperiam inventore, ipsa deserunt consectetur atque, possimus
                provident ducimus et quaerat, hic nisi fugit consequuntur magni
                assumenda nostrum dolores esse velit!
              </p>
              <div className="w-full flex flex-wrap my-3 gap-2">
                <Badge className="bg-emerald hover:bg-emeraldhover">PHP</Badge>
                <Badge className="bg-emerald hover:bg-emeraldhover">
                  MySQL
                </Badge>
              </div>
              <div className="flex w-full mt-3 gap-2">
                <Button className="py-0 px-5 text-sm">Detail</Button>
                <Button className="py-0 px-5 text-sm">
                  <SiGithub /> Repository
                </Button>
              </div>
            </div>
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
