import { useEffect, useState } from "react";

export function useStickyTop(mainRef: React.RefObject<HTMLElement | null>) {
  const [stickyTop, setStickyTop] = useState(24);

  useEffect(() => {
    const updateStickyTop = () => {
      const header = document.getElementById("header");
      const main = mainRef.current;
      if (!header || !main) return;

      const headerHeight = header.offsetHeight;
      const mainPaddingTop = parseFloat(getComputedStyle(main).paddingTop) || 0;
      setStickyTop(headerHeight + mainPaddingTop);
    };

    updateStickyTop();

    const resizeObserver = new ResizeObserver(updateStickyTop);
    const header = document.getElementById("header");
    const main = mainRef.current;
    if (header) resizeObserver.observe(header);
    if (main) resizeObserver.observe(main);

    return () => resizeObserver.disconnect();
  }, [mainRef]);

  return stickyTop;
}
