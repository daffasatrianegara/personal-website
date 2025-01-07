import { Card } from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const AboutMeContent = () => {
  return (
    <Card className="p-5">
      <p className="text-base md:text-lg font-semibold">About Me</p>
      <p className="mt-2 font-light text-base">
        Currently pursuing a Bachelor's degree in Information Technology at
        Universitas Negeri Yogyakarta. Proficient in communication, public
        speaking, and critical thinking, with strong collaboration and teamwork
        skills. Experienced in working effectively under pressure and managing
        time efficiently.
      </p>
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
              <ul className="grid grid-cols-2 list-disc list-inside gap-1">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>PHP</li>
                <li>Java</li>
                <li>Python</li>
                <li>Go</li>
                <li>SQL</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="bg-transparent">
              Framewoks
            </AccordionTrigger>
            <AccordionContent className="p-2 ps-5">
              <ul className="grid grid-cols-2 list-disc list-inside gap-1">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Vue.js</li>
                <li>Laravel</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Hapi</li>
                <li>Tailwind CSS</li>
                <li>Chakra UI</li>
                <li>Bootstrap</li>
                <li>Shadcn/ui</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="bg-transparent">
              Softwares
            </AccordionTrigger>
            <AccordionContent className="p-2 ps-5">
              <ul className="grid grid-cols-2 list-disc list-inside gap-1">
                <li>Visual Studio Code</li>
                <li>GIT</li>
                <li>MySQL Workbench</li>
                <li>pgAdmin 4</li>
                <li>Wampserver</li>
                <li>Postgresql</li>
                <li>Postman</li>
                <li>Google Environment</li>
                <li>Microsoft Office</li>
                <li>Trello</li>
                <li>Notion</li>
                <li>Canva</li>
                <li>Figma</li>
                <li>ibisPaint</li>
                <li>GCP</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Card>
  );
};

export default AboutMeContent;
