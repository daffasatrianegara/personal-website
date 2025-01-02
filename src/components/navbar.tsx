import { ModeToggle } from "./mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SiInstagram, SiLinkedin, SiSpotify, SiGithub } from "react-icons/si";

const NavbarComponent: React.FC = () => {
  const handleRedirectToSocmed = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full sticky top-0 px-5 flex items-center py-3 border-gray-200 dark:border-gray-800 border-b-[1px] backdrop-blur bg-white/30 dark:bg-gray-900/30 z-50">
      <p className="font-semibold text-lg mr-auto max-md:text-base">
        Daffa Satria
      </p>
      <div className="ms-auto items-center flex gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm text-white">
            Hit Me Up!
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Let's Connect!</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() =>
                handleRedirectToSocmed(
                  "https://www.linkedin.com/in/muhammad-daffa-satria-negara",
                )
              }
            >
              <SiLinkedin />
              Linkedin
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                handleRedirectToSocmed("https://github.com/daffasatrianegara")
              }
            >
              <SiGithub />
              Github
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                handleRedirectToSocmed("https://www.instagram.com/dapaasat/")
              }
            >
              <SiInstagram />
              Instagram
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                handleRedirectToSocmed(
                  "https://open.spotify.com/user/31ilmpqdgjqh7g45uwnoofkyb4za?si=etzrVEZVSlKlmzSeKHv9kQ",
                )
              }
            >
              <SiSpotify />
              Spotify
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavbarComponent;
