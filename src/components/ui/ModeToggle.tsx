import { ThemeButton } from "@/components/ui/ThemeButton";

export function ModeToggle() {
  return (
    <div className="relative inline-flex gap-2 p-2 rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <ThemeButton theme="light" />
      <ThemeButton theme="dark" />
      <ThemeButton theme="system" />
    </div>
  );
}
