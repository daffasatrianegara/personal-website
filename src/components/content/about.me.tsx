import { Card } from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import AboutData from "@/contents/dynamic-data/about-us.json";

const AboutMeContent = () => {
  const contentData = AboutData["about-us"];

  return (
    <Card className="p-5 h-full">
      <p className="text-base md:text-lg font-semibold">About Me</p>
      <p className="mt-2 font-light text-sm">{contentData["text-main"]}</p>
      <div className="my-3 w-full border-b border-gray-200 dark:border-gray-800"></div>
      <p className="text-base md:text-sm">
        I work with a range of cutting-edge technologies, including:
      </p>
      <div className="w-full h-fit mt-2">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-transparent">
              Programming Languanges
            </AccordionTrigger>
            <AccordionContent className="p-2 ps-5">
              <ul className="grid grid-cols-2 list-disc list-inside gap-1 max-sm:text-xs">
                {contentData["programming-languages"].map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="bg-transparent">
              Framewoks
            </AccordionTrigger>
            <AccordionContent className="p-2 ps-5">
              <ul className="grid grid-cols-2 list-disc list-inside gap-1 max-sm:text-xs">
                {contentData.frameworks.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="bg-transparent">
              Softwares
            </AccordionTrigger>
            <AccordionContent className="p-2 ps-5">
              <ul className="grid grid-cols-2 list-disc list-inside gap-1 max-sm:text-xs">
                {contentData.softwares.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Card>
  );
};

export default AboutMeContent;
