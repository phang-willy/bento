import { BsBuilding, BsGear, BsStack } from "react-icons/bs";
import { LuCodeXml } from "react-icons/lu";

import profile from "@/assets/profile.webp?w=256;512;768&format=webp&as=srcset";
import Image from "@/components/ui/custom/Image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeMenuItems } from "@/components/ui/mode-toggle";

function Header() {
  return (
    <header 
      id="header"
      className="sticky order-last bottom-0 border-t border-gray-200 dark:border-gray-700 z-50 p-4 bg-background flex items-center justify-between xl:order-0 xl:border-b xl:border-t-0 xl:top-0 xl:left-0"
      >
      <div className="max-width-container">
        <nav className="flex items-center justify-between gap-2 px-4 min-h-10 sm:gap-4">
          <a href="/" className="flex h-10 items-center justify-center gap-2 shrink-0 order-3 xl:order-1" aria-label="Accueil">
            <Image
              srcSet={profile}
              sizes="(max-width: 768px) 256px, (max-width: 1580px) 512px, 768px"
              alt="Photo de PHANG Willy"
              className="size-9 shrink-0 rounded-full object-cover border-3 border-main bg-main"
            />
            <span className="text-sm font-bold hidden xl:inline">PHANG Willy</span>
          </a>
          <a href="#projects" className="flex min-w-9 h-10 items-center justify-center gap-2 shrink-0 order-1 xl:order-2" aria-label="Projets">
            <LuCodeXml className="size-5 shrink-0" />
            <span className="text-sm font-bold hidden xl:inline">Projets</span>
          </a>
          <a href="#stacks" className="flex min-w-9 h-10 items-center justify-center gap-2 shrink-0 order-2 xl:order-3" aria-label="Stack Technique">
            <BsStack className="size-5 shrink-0" />
            <span className="text-sm font-bold hidden xl:inline">Stack Technique</span>
          </a>
          <a href="#companies" className="flex min-w-9 h-10 items-center justify-center gap-2 shrink-0 order-4" aria-label="Parcours Professionnel">
            <BsBuilding className="size-5 shrink-0" />
            <span className="text-sm font-bold hidden xl:inline">Parcours Professionnel</span>
          </a>
          <div className="flex h-10 items-center justify-center shrink-0 order-5">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Paramètres">
                  <BsGear className="size-5 shrink-0" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Paramètres</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="cursor-pointer">Thème</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <ThemeMenuItems />
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;