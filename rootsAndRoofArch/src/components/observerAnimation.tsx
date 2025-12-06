import { useEffect, useRef, useState } from "react";
import React from "react"

type props = {
  children: React.ReactNode;
}

export default function AnimationObserver({children}:props){
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 } 
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${isVisible ? "fade-in-normal" : "opacity-0"} w-auto h-auto`}>
      {children}
    </div>
  )
}