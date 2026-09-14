import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook to apply GSAP scroll-triggered fade up on elements
 */
export function useGsapFadeUp(options?: {
  selector?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  y?: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const targets = options?.selector 
        ? containerRef.current?.querySelectorAll(options.selector)
        : containerRef.current?.children;

      if (!targets || targets.length === 0) return;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y: options?.y ?? 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: options?.duration ?? 0.85,
          delay: options?.delay ?? 0.05,
          stagger: options?.stagger ?? 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [options?.selector, options?.delay, options?.duration, options?.stagger, options?.y]);

  return containerRef;
}

/**
 * Hook to apply GSAP scroll-triggered subtle parallax to an element
 */
export function useGsapParallax(speed = 0.2) {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!targetRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(targetRef.current, {
        yPercent: speed * 30,
        ease: 'none',
        scrollTrigger: {
          trigger: targetRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, targetRef);

    return () => ctx.revert();
  }, [speed]);

  return targetRef;
}

export { gsap, ScrollTrigger };
