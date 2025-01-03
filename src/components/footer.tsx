const FooterComponent: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center border-t-[1px] py-5">
      <p className="font-medium text-sm text-center max-sm:text-xs px-3">
        Crafted with care💚 by{" "}
        <span className="font-semibold">
          <a
            className="text-green-500 underline cursor-pointer hover:text-green-400"
            href="https://www.linkedin.com/in/muhammad-daffa-satria-negara"
            target="_blank"
            rel="noopener noreferrer" 
          >
            Daffa Satria
          </a>
        </span>{" "}
        using Vite, React, TypeScript, Tailwind CSS, and Shadcn/ui.
      </p>
    </div>
  );
};

export default FooterComponent;
