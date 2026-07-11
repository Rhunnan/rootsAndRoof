import { useEffect, useRef, useState } from "react";

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function LazyImage({
  src,
  alt,
  className,
}: LazyImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] = useState(false);

  const [loaded, setLoaded] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    },
    {
      root: null,
      rootMargin: "400px",
      threshold: 0,
    }
  );

  if (ref.current) {
    observer.observe(ref.current);
  }

  return () => observer.disconnect();
}, []);

  return (
    <div
      ref={ref}
      className="relative w-full h-full overflow-hidden bg-[#ECE7DE]"
    >
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-[#ECE7DE]" />
      )}

      {visible && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          decoding="async"
          className={`
            w-full
            h-full
            object-cover
            transition-all
            duration-700
            ${loaded ? "opacity-100" : "opacity-0"}
            ${className}
          `}
        />
      )}
    </div>
  );
}