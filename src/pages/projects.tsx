import MainLayout from "@/components/layouts/main.layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ProjectsData from "@/contents/projects/index.json";
import { SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  const contentData = ProjectsData.projects;
  const [imageIndex, setImageIndex] = useState<{ [key: string]: number }>({});

  const handleRedirect = (link?: string, newTab = false) => {
    if (!link) return;
    newTab
      ? window.open(link, "_blank", "noopener,noreferrer")
      : (window.location.href = link);
  };

  const handleNextImage = (projectId: number, photos: string[]) => {
    setImageIndex((prev) => ({
      ...prev,
      [projectId]:
        (prev[projectId] ?? 0) + 1 >= photos.length
          ? 0
          : (prev[projectId] ?? 0) + 1,
    }));
  };

  return (
    <MainLayout title="Projects | Muhammad Daffa Satria Negara">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Projects</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="my-5">
        <p className="text-xl md:text-2xl font-semibold">Projects</p>
        <div className="w-full border-b mt-2 border-gray-200 dark:border-gray-800"></div>
      </div>
      <div className="ms-2">
        {contentData.map((data) => {
          const { repository, website } = data.url;
          return (
            <>
              <div
                className="grid grid-cols-6 md:grid-cols-6 gap-3 md:gap-5 my-5 md:my-5"
                key={data.id}
              >
                <div className="col-span-3 max-[800px]:col-span-6 md:col-span-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="p-0 m-0 border-none">
                        <motion.img
                          className="w-full object-cover rounded-md h-full cursor-pointer"
                          src={data.photos_url[imageIndex[data.id] ?? 0]}
                          alt={`${data.name}-img`}
                          onClick={() =>
                            handleNextImage(data.id, data.photos_url)
                          }
                          key={imageIndex[data.id] ?? 0}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Click for change image</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="col-span-3 md:col-span-3 max-[800px]:col-span-6 mb-auto mt-auto">
                  <p className="text-base md:text-lg font-semibold">
                    {data.name}
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 dark:text-gray-300 text-justify line-clamp-[7]">
                    {data.description}
                  </p>
                  <div className="w-full flex flex-wrap my-3 gap-2">
                    {data.technologies.map((techs, index) => (
                      <Badge
                        className="bg-emerald hover:bg-emeraldhover"
                        key={index}
                      >
                        <p className="text-[#FAFAFA]">{techs}</p>
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
              <div className="w-full border-b mb-8 border-gray-200 dark:border-gray-800"></div>
            </>
          );
        })}
      </div>
    </MainLayout>
  );
};

export default ProjectsPage;
