import NavbarComponent from "@/components/navbar";
import FooterComponent from "@/components/footer";
import { Helmet } from "react-helmet-async";

const MainLayout = ({ children, title }: Readonly<{ children: React.ReactNode, title: string }>) => {
  return (
    <main>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <NavbarComponent />
      <div className="px-5 md:px-16 sm:px-5 my-5">{children}</div>
      <FooterComponent />
    </main>
  );
};

export default MainLayout;
