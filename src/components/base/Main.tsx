import { useRef } from "react";
import Information from "@/components/layout/Information";
import Personnal from "@/components/layout/Personnal";
import { useStickyTop } from "@/hooks/useStickyTop";

function Main() {
  const mainRef = useRef<HTMLElement>(null);
  const stickyTop = useStickyTop(mainRef);

  return (
    <main
      ref={mainRef}
      id="main"
      className="max-width-container z-0 flex-1 h-full"
      style={{ "--sticky-top": `${stickyTop}px` } as React.CSSProperties}
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full h-full">
        <section className="xl:sticky xl:top-[var(--sticky-top)] xl:self-start xl:h-fit">
          <Personnal />
        </section>
        <section className="overflow-y-auto">
          <Information />
        </section>
      </div>
    </main>
  )
}

export default Main;