import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layouts/main.layout";
import { Card } from "@/components/ui/card";
import MarkdownRenderer from "@/components/ui/markdown-renderer";
import contentMd from "@/contents/example.md";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Profesional Portofolio | Muhammad Daffa Satria Negara</title>
      </Helmet>
      <MainLayout>
        <Card className="p-5">
          <MarkdownRenderer mdUrl={contentMd} />
        </Card>
      </MainLayout>
    </>
  );
};

export default LandingPage;
