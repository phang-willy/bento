import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex cursor-default items-center gap-1 rounded bg-main/10 px-2 py-1 text-xs font-medium text-main ${className}`.trim()}
    >
      {children}
    </span>
  );
}

export default Badge;
