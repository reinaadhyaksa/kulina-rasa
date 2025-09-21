import { useEffect } from "react";

export const animate = (name, ContainerRef, setVisible) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = ContainerRef.current.querySelectorAll(name);
          cards.forEach((_, i) => {
            setTimeout(() => {
              setVisible((prev) => [...prev, i]);
            }, i * 300);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ContainerRef.current) {
      observer.observe(ContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);
}