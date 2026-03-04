import type { RefObject } from "react";
import Information from "@/components/layout/Information";
import Personnal from "@/components/layout/Personnal";

type MainProps = {
  mainRef: RefObject<HTMLElement | null>;
  headerOffset: number;
};

function Main({ mainRef, headerOffset }: MainProps) {
  return (
    <main
      ref={mainRef}
      id="main"
      className="max-width-container z-0 flex-1"
      style={{
        "--header-offset": `${headerOffset}px`,
        "--header-offset-title": `calc(var(--header-offset) - 1px)`
      } as React.CSSProperties}
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-4 w-full">
        <div className="xl:sticky xl:top-(--header-offset) xl:self-start xl:h-fit">
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