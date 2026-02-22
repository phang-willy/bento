import {
  SiAdminer,
  SiBootstrap,
  SiC,
  SiCss3,
  SiDigitalocean,
  SiDocker,
  SiDotnet,
  SiFigma,
  SiGit,
  SiGithub,
  SiGithubpages,
  SiGitlab,
  SiGo,
  SiGoogle,
  SiHostinger,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNotion,
  SiNodedotjs,
  SiNuxtdotjs,
  SiOvh,
  SiPhp,
  SiPhpmyadmin,
  SiPhpstorm,
  SiPostgresql,
  SiReact,
  SiSymfony,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
  SiWordpress,
  Si4D,
} from "react-icons/si";

import { 
  BsWindows,
  BsMicrosoft
} from "react-icons/bs";

import { VscVscode } from "react-icons/vsc";

import Section from "./Section";
import stacksData from "@/data/stacks.json";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiPhp,
  SiLaravel,
  SiSymfony,
  SiWordpress,
  SiC,
  SiDotnet,
  SiGo,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiNestjs,
  SiPhpmyadmin,
  SiAdminer,
  VscVscode,
  SiPhpstorm,
  Si4D,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGoogle,
  SiHostinger,
  SiOvh,
  SiDigitalocean,
  SiGithubpages,
  SiVercel,
  SiFigma,
  SiTrello,
  SiNotion,
  SiLinux,
  BsWindows,
  BsMicrosoft,
};

type Stack = { id: string; name: string; icon: string };
type Category = { id: string; label: string; stacks: Stack[] };
type StacksData = { categories: Category[] };

function Stacks() {
  const { categories } = stacksData as StacksData;

  return (
    <Section id="stacks" title="Stack Technique" stickyPriority={0}>
      {categories.map((category) => {
        const stacks = category.stacks.filter((s) => iconMap[s.icon]);
        if (stacks.length === 0) return null;

        return (
          <div key={category.id} className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-400">
              {category.label}
            </h2>
            <div className="grid grid-cols-12 gap-4">
              {stacks.map((stack) => {
                const Icon = iconMap[stack.icon];
                if (!Icon) return null;

                return (
                  <article
                    key={stack.id}
                    role="img"
                    aria-label={stack.name}
                    className="card p-4 flex items-center justify-center hover:text-main col-span-6 xl:col-span-2"
                    title={stack.name}
                  >
                    <div className="flex flex-col items-center justify-center gap-4">
                      <Icon
                        aria-hidden
                        className="text-2xl"
                      />
                      <span className="text-xs xl:sr-only">{stack.name}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        );
      })}
    </Section>
  );
}

export default Stacks;
