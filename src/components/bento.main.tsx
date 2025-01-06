import { Card } from "./ui/card";
import IntroductionContent from "./content/introduction";
import CurrentPosition from "./content/current.position";
import CvContent from "./content/cv";

const HeadMainComponent: React.FC = () => {
  return (
    <>
      <div className="my-5 sm:my-10">
        <p className="text-emerald font-semibold text-base sm:text-xl">
          Profesional Portofolio
        </p>
        <p className="font-bold text-lg sm:text-2xl">
          Showcasing Skills & Creativity to Deliver Outstanding Digital
          Solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="md:col-span-2">
          <IntroductionContent />
        </div>
        <Card className="p-5 md:col-span-1 md:hidden">
          <p>About Me</p>
        </Card>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:col-span-1">
          <CurrentPosition />
          <CvContent />
        </div>
        <div className="grid grid-cols-1 gap-3">
          <Card className="p-5 md:col-span-1 max-md:hidden">
            <p>About Me</p>
            <h1>Lanjut kalo ga mager wak!</h1>
            <h1>Lanjut kalo ga mager wak!</h1>
            <h1>Lanjut kalo ga mager wak!</h1>
            <h1>Lanjut kalo ga mager wak!</h1>
            <h1>Lanjut kalo ga mager wak!</h1>
          </Card>
          <Card className="p-5 md:col-span-1 md:hidden">
            <p>Experiences</p>
          </Card>
          <Card className="p-5 md:col-span-1 md:hidden">
            <p>Projects</p>
          </Card>
          <Card className="p-5 md:col-span-1">
            <p>Certificates</p>
          </Card>
        </div>
        <Card className="p-5 md:col-span-2 max-md:hidden">
          <p>Experiences</p>
        </Card>
        <Card className="p-5 md:col-span-full max-md:hidden">
          <p>Projects</p>
        </Card>
      </div>
    </>
  );
};

export default HeadMainComponent;
