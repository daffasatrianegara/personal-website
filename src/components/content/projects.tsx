import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa6";
import ProjectsData from "@/contents/projects/index.json";

const ProjectsContent = ({
  number_of_projects,
}: {
  number_of_projects: number;
}) => {
  const contentData = ProjectsData.projects.slice(0, number_of_projects);

  const handleRedirect = (link?: string, newTab = false) => {
    if (!link) return;
    newTab
      ? window.open(link, "_blank", "noopener,noreferrer")
      : (window.location.href = link);
  };

  return (
    <Card className="p-5">
      <p className="text-base md:text-lg font-semibold">Projects</p>
      <div className="mt-2 md:mt-4 w-full">
        <div className="p-1">
          {contentData.map((data) => {
            const { repository, website } = data.url;

            return (
              <div
                className="grid grid-cols-6 md:grid-cols-5 gap-3 md:gap-5 mb-5"
                key={data.id}
              >
                <div className="col-span-3 max-[800px]:col-span-6 md:col-span-2">
                  <img
                    className="w-full object-cover rounded-md h-full"
                    src={data.photos_url[0]}
                    alt={`${data.name}-img`}
                  />
                </div>
                <div className="col-span-3 md:col-span-3 max-[800px]:col-span-6 mb-auto mt-auto">
                  <p className="text-base md:text-lg font-semibold">
                    {data.name}
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 dark:text-gray-300 line-clamp-5">
                    {data.description}
                  </p>
                  <div className="w-full flex flex-wrap my-3 gap-2">
                    {data.technologies.map((tech, index) => (
                      <Badge
                        className="bg-emerald hover:bg-emeraldhover"
                        key={index}
                      >
                        <p className="text-[#FAFAFA]">{tech}</p>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex w-full flex-wrap mt-3 gap-2">
                    <Button
                      className="md:text-sm text-xs"
                      size={"xs"}
                      onClick={() => handleRedirect(`/projects/${data.id}`)}
                    >
                      Detail
                    </Button>

                    {repository === null && website && (
                      <Button
                        className="md:text-sm text-xs"
                        size={"xs"}
                        onClick={() => handleRedirect(website, true)}
                      >
                        <FaLink /> Visit Website
                      </Button>
                    )}

                    {typeof repository === "object" && repository && (
                      <>
                        {repository.frontend && (
                          <Button
                            className="md:text-sm text-xs"
                            size={"xs"}
                            onClick={() =>
                              handleRedirect(repository.frontend, true)
                            }
                          >
                            <SiGithub /> Frontend Repository
                          </Button>
                        )}
                        {repository.backend && (
                          <Button
                            className="md:text-sm text-xs"
                            size={"xs"}
                            onClick={() =>
                              handleRedirect(repository.backend, true)
                            }
                          >
                            <SiGithub /> Backend Repository
                          </Button>
                        )}
                      </>
                    )}

                    {typeof repository === "string" && website && (
                      <Button
                        className="md:text-sm text-xs"
                        size={"xs"}
                        onClick={() => handleRedirect(website, true)}
                      >
                        <FaLink /> Visit Website
                      </Button>
                    )}

                    {typeof repository === "string" && (
                      <Button
                        className="md:text-sm text-xs"
                        size={"xs"}
                        onClick={() => handleRedirect(repository, true)}
                      >
                        <SiGithub /> Web Repository
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
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
