import { useEffect, useRef, useState } from "react";

type props = {
    slideDirection: string;
    description: string;
}

export default function Slider({slideDirection, description}:props){
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    
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
     let animation = "";

    if(slideDirection === "left"){
        animation = "slideFromRightNormal"
    }else{
        animation = "slideFromLeftNormal"
    }
    
    return <li ref={ref} className={`${isVisible ? animation :"opacity-0"} `}>
                  {description}
            </li>
}