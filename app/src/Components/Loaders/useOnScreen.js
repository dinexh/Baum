import { useState, useEffect } from 'react';

const useOnScreen = (ref, threshold = 0.1) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsIntersecting(entry.isIntersecting),
            { threshold } // Visibility threshold
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, threshold]);

    return isIntersecting;
};

export default useOnScreen;
