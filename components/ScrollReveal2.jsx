import React, { useRef, useEffect } from 'react';
import scrollReveal from 'scrollreveal';

const ScrollRevealContainer2 = ({ children, move }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (sectionRef.current) {
            scrollReveal().reveal(sectionRef.current, {
                duration: 1600,
                origin: 'left',
                distance: '50px',
                reset: true
            });
        }
    }, [sectionRef, move]);

    return <section ref={sectionRef}>{children}</section>;
};

export default ScrollRevealContainer2;
