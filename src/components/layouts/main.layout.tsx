import NavbarComponent from "@/components/navbar";
import FooterComponent from "@/components/footer";

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <NavbarComponent />
      <div className="px-5 md:px-16 sm:px-5 my-5">{children}</div>
      <FooterComponent />
    </main>
  );
};

export default MainLayout;
