import Stacks from "@/components/layout/sections/Stacks";
import Projects from "@/components/layout/sections/Projects";

function Information() {
  return (
    <div className="flex flex-col gap-12 xl:gap-16 pb-6">
      <Stacks />
      <Projects />
    </div>
  );
}

export default Information;