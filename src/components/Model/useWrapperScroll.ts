import { useContext, useEffect } from "react";
import { useMotionValue } from "framer-motion";

import ModelsContext from "./ModelsContext";

export default function useWrapperScroll() {
  const { wrapperRef } = useContext(ModelsContext);

  const scrollY = useMotionValue(0);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const element = wrapperRef.current;

    if (element) {
      const upadateScrollValue = () => {
        if (wrapperRef.current) {
          const { scrollTop, scrollHeight, offsetHeight } = element;

          const fullScroll = scrollHeight - offsetHeight;

          scrollY.set(scrollTop); //px
          scrollYProgress.set(scrollTop / fullScroll); //0 - 1 (%)
        }
      };

      element.addEventListener("scroll", upadateScrollValue);

      return () => element?.removeEventListener("scroll", upadateScrollValue);
    }
  }, [scrollY, scrollYProgress, wrapperRef]);

  return { scrollY, scrollYProgress };
}
