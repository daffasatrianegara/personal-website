import { ModeToggle } from "./mode-toggle";

const NavbarComponent = () => {
  return (
    <div className="w-full sticky top-0 px-5 flex items-center py-3 border-gray-200 dark:border-gray-800 border-b-[1px] backdrop-blur bg-white/30 dark:bg-gray-900/30 z-50">
      <p className="font-semibold text-lg mr-auto max-md:text-base">
        Muhammad Daffa Satria Negara
      </p>
      <div className="ms-auto">
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavbarComponent;
