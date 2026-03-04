import { BsMoonFill, BsSunFill } from "react-icons/bs"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-context"

function ThemeMenuItems() {
  const { setTheme } = useTheme()
  return (
    <>
      <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">
        Clair
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">
        Sombre
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer">
        Appareil
      </DropdownMenuItem>
    </>
  )
}

export function ModeToggle({ className }: { className?: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className={className}>
          <BsSunFill className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <BsMoonFill className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <ThemeMenuItems />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/** Contenu du sous-menu Thème, à placer dans DropdownMenuSubContent */
export { ThemeMenuItems }