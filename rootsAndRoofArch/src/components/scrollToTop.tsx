import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Give the browser a moment to render new route before scrolling
    setTimeout(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    }, 0);
  }, [pathname, hash]);

  return null;
}