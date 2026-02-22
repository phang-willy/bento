import type { SectionProps } from "@/types/Section";

function Section({ id, title, stickyPriority = 0, children }: SectionProps) {
  const zIndex = 10 + stickyPriority;

  return (
    <section id={id} className="flex flex-col gap-8">
      <h1
        className="text-2xl font-bold sticky top-(--sticky-top) pb-4 pt-6 bg-white dark:bg-gray-950"
        style={{ zIndex }}
      >
        {title}
      </h1>
      {children}
    </section>
  );
}

export default Section;
