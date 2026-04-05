import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollProgress: React.FC = () => {
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!progressRef.current) return;

        gsap.registerPlugin(ScrollTrigger);

        const anim = gsap.to(progressRef.current, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: document.documentElement,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.3,
            },
        });

        return () => {
            anim.kill();
        };
    }, []);

    return (
        <div className="absolute bottom-0 left-0 w-full h-[3px] pointer-events-none overflow-hidden">
            <div 
                ref={progressRef}
                className="w-full h-full bg-[#C49A6C] origin-left scale-x-0 shadow-[0_0_12px_rgba(196,154,108,0.9)]"
            />
        </div>
    );
};

export default ScrollProgress;
