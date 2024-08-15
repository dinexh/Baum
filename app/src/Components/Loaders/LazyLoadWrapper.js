import React, { useRef, lazy, Suspense } from 'react';
import useOnScreen from './useOnScreen';

const LazyLoadWrapper = ({ component: Component }) => {
    const ref = useRef();
    const isVisible = useOnScreen(ref, 0.1); // 10% visibility threshold

    return (
        <div ref={ref} style={{ minHeight: '100px' }}> {/* Adjust minHeight as needed */}
            {isVisible && (
                <Suspense fallback={<div>Loading...</div>}>
                    <Component />
                </Suspense>
            )}
        </div>
    );
}

export default LazyLoadWrapper;
