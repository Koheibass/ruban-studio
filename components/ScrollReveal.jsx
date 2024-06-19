import React, { useRef, useEffect } from 'react';
import scrollReveal from 'scrollreveal';

const ScrollRevealContainer = ({ children, move }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (sectionRef.current) {
            scrollReveal().reveal(sectionRef.current, {
                reset: true,
                delay: 100,
                duration: 1000,
                opacity: 0,
                distance: '40px',
            });
        }
    }, [sectionRef, move]);

    return <section ref={sectionRef}>{children}</section>;
};

export default ScrollRevealContainer;
