import { Card } from "../ui/card";
import { useState, useEffect } from "react";

const IntroductionContent = () => {
  const roles = [
    "Fullstack Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Cloud Engineer",
  ];
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
          <p className="font-bold text-xl md:text-2xl mt-1">
            <span className="font-normal">A</span> {text}
            <span className="blinking-cursor">|</span>
          </p>
          <div className="md:hidden my-2 w-full flex justify-center">
            <img
              className="w-72 max-sm:w-full"
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHZsMGM3bXRnNWsyZDhpaGZveTd0Z2R0eWV0eXh4NzBlNTFuMjE4cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTg8B31DCfCWKEThG8/giphy.webp"
              alt="img_me"
            />
          </div>
          <p className="text-base mb-1">
            I am a versatile <b>software engineer</b> skilled in{" "}
            <b>front-end</b> and <b>back-end development</b>, with expertise in{" "}
            <b>cloud computing</b> using{" "}
            <b className="text-emerald">Google Cloud Platform</b> (GCP). I
            create intuitive, engaging interfaces that prioritize seamless user
            experiences and am driven by curiosity and a commitment to
            continuous growth.
          </p>
          <div className="mt-5">
            <a
              className="bg-emerald py-2 px-5 rounded font-bold text-white hover:bg-emeraldhover"
              href="mailto:daffasatria036@gmail.com"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="md:w-[40%] max-md:hidden flex justify-center items-center">
          <img
            className="w-100 h-[42vh] object-cover"
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHZsMGM3bXRnNWsyZDhpaGZveTd0Z2R0eWV0eXh4NzBlNTFuMjE4cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTg8B31DCfCWKEThG8/giphy.webp"
            alt="img_me"
          />
        </div>
      </div>
    </Card>
  );
};

export default IntroductionContent;
