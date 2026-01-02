import { Card } from "../ui/card";
import { useState, useEffect } from "react";
import IntroData from "@/contents/dynamic-data/introduction.json";

const IntroductionContent = () => {
  const contentData = IntroData.introduction;
  const roles = contentData.roles;

  const [text, setText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];
      if (isDeleting) {
        setText((prev) => prev.slice(0, prev.length - 1));
        setSpeed(100);
      } else {
        setText((prev) => currentRole.slice(0, prev.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, speed, roles, currentRoleIndex]);

  return (
    <Card className="p-5">
      <div className="w-full flex flex-col md:flex-row md:items-center gap-3">
        <div className="w-full md:w-[60%]">
          <p className="text-lg md:text-xl">
            Hello, I'm{" "}
            <span className="font-semibold text-emerald">
              Muhammad Daffa Satria Negara
            </span>
          </p>
          <p className="font-bold text-lg sm:text-xl md:text-2xl mt-1">
            <span className="font-normal">A</span> {text}
            <span className="blinking-cursor">|</span>
          </p>
          <div className="md:hidden my-2 w-full flex justify-center">
            <img
              className="w-72 max-sm:w-full"
              src={contentData["link-img"]}
              alt="img_me"
            />
          </div>
          <p
            className="text-sm md:text-base mb-1 text-justify"
            dangerouslySetInnerHTML={{ __html: contentData["text-main"] }}
          ></p>
          <div className="mt-5">
            <a
              className="bg-emerald md:py-2 py-1 md:px-5 px-3 md:text-base text-sm rounded font-bold text-white hover:bg-emeraldhover"
              href={`mailto:${contentData.email}`}
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="md:w-[40%] max-md:hidden flex justify-center items-center">
          <img
            className="w-100 h-[42vh] object-cover"
            src={contentData["link-img"]}
            alt="img_me"
          />
        </div>
      </div>
    </Card>
  );
};

export default IntroductionContent;
