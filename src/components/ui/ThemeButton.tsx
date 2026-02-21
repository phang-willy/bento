import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { PiDevicesBold } from "react-icons/pi";
import { useTheme } from "@/hooks/UseTheme";
import type { Theme } from "@/hooks/UseTheme";

const themeConfig: Record<
  Theme,
  { icon: typeof BsSunFill; label: string }
> = {
  light: { icon: BsSunFill, label: "Mode clair" },
  dark: { icon: BsMoonFill, label: "Mode sombre" },
  system: { icon: PiDevicesBold, label: "Suivre le système" },
};

export interface ThemeButtonProps {
  theme: Theme;
}

export function ThemeButton({ theme }: ThemeButtonProps) {
  const { theme: currentTheme, setTheme } = useTheme();
  const { icon: Icon, label } = themeConfig[theme];
  const isActive = currentTheme === theme;

  return (
    <button
      type="button"
      onClick={() => setTheme(theme)}
      className={`card p-2 cursor-pointer hover:bg-main focus-visible:bg-main hover:text-white focus-visible:text-white ${
        isActive ? "bg-main text-white" : ""
      }`}
      aria-label={label}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
