import { Card } from "./ui/card";
import MarkdownRenderer from "./ui/markdown-renderer";
import contentMd from "@/contents/example.md";

const HeadMainComponent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <Card className="p-5 md:col-span-2">
        <MarkdownRenderer mdUrl={contentMd} />
      </Card>
      <Card className="p-5 md:col-span-1 md:hidden">
        <p>About Me</p>
      </Card>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:col-span-1">
        <Card className="p-5 h-full">
          <p>Current Position</p>
        </Card>
        <Card className="p-5 h-full">
          <p>Download CV</p>
        </Card>
      </div>
      <Card className="p-5 md:col-span-1 max-md:hidden">
        <p>About Me</p>
      </Card>
    </div>
  );
};

export default HeadMainComponent;
