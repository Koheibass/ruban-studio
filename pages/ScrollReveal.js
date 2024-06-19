import ScrollReveal from "scrollreveal";
import { useRef, useEffect } from "react";

const Scroll = ({ children }) => {
  const sectionRef = useRef();

  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, {
        reset: true,
        opacity: 0,
        duration: 1200,
        distance: "50px"
      });
    }
  }, []);

  return <section ref={sectionRef}>{children}</section>;
};

export default Scroll;
