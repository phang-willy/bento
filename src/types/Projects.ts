type ProjectStack = {
  id: string;
  name: string;
  icon?: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  dates: {
    start: string;
    end?: string;
  };
  for: string;
  stacks: ProjectStack[];
};

type ProjectsData = {
  projects: Project[];
};

export type { Project, ProjectStack, ProjectsData };
