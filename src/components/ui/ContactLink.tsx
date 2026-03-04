import type { ReactNode } from "react";
import { GoLinkExternal } from "react-icons/go";

export interface ContactLinkProps {
  href: string;
  username: string;
  "aria-label": string;
  where: string;
  icon: ReactNode;
}

function ContactLink({ href, username, where, "aria-label": ariaLabel, icon }: ContactLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={`${where} : ${username}`}
      aria-label={ariaLabel}
      className="card p-4 flex items-center justify-center w-full h-full hover:text-main focus-visible:text-main cursor-pointer col-span-6 xl:col-span-2"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-2xl">{icon}</span>
        <span className="text-sm flex items-center gap-2 xl:sr-only"><span>{`${where}`}</span> <GoLinkExternal /></span>
      </div>
    </a>
  );
}

export default ContactLink;
