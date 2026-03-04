import { useEffect, useState } from "react";

export function useHeaderOffset(mainRef: React.RefObject<HTMLElement | null>) {
  const [headerOffset, setHeaderOffset] = useState(24);

  useEffect(() => {
    const updateHeaderOffset = () => {
      const header = document.getElementById("header");
      const main = mainRef.current;
      if (!header || !main) return;

      const headerHeight = header.offsetHeight;
      const mainPaddingTop = parseFloat(getComputedStyle(main).paddingTop) || 0;
      setHeaderOffset(headerHeight + mainPaddingTop);
    };

    updateHeaderOffset();

    const resizeObserver = new ResizeObserver(updateHeaderOffset);
    const header = document.getElementById("header");
    const main = mainRef.current;
    if (header) resizeObserver.observe(header);
    if (main) resizeObserver.observe(main);

    return () => resizeObserver.disconnect();
  }, [mainRef]);

  return headerOffset;
}
