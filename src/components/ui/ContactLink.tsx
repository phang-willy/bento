import type { ReactNode } from "react";

export interface ContactLinkProps {
  href: string;
  title: string;
  "aria-label": string;
  icon: ReactNode;
}

function ContactLink({ href, title, "aria-label": ariaLabel, icon }: ContactLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      aria-label={ariaLabel}
      className="card p-4 flex items-center justify-center w-full h-full hover:text-main focus-visible:text-main cursor-pointer col-span-3 xl:col-span-2"
    >
      <span className="text-2xl">{icon}</span>
    </a>
  );
}

export default ContactLink;
