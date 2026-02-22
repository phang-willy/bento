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
      className="max-width-container z-0 flex-1"
      style={
        { "--sticky-top": `calc(${stickyTop}px - 2px)` } as React.CSSProperties
      }
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-4 w-full">
        <div className="xl:sticky xl:top-(--sticky-top) xl:self-start xl:h-fit">
          <Personnal />
        </div>
        <div className="flex flex-col gap-4 xl:gap-8">
          <Information />
        </div>
      </div>
    </main>
  )
}

export default Main;