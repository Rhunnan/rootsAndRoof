import { useState } from "react";

interface ImageSkeletonProps{
    index: number;
    src: string;
    indexImageClick:React.Dispatch<React.SetStateAction<number>>;
    isImageClick: React.Dispatch<React.SetStateAction<boolean>>;


}

export default function ImageWithSkeleton({ index, src, indexImageClick, isImageClick }:ImageSkeletonProps){
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative rounded-md bg-no-repeat bg-cover bg-center  h-[300px] w-[300px] bg-gray-200 aspect-square  border-white border-4 overflow-hidden">
      {/* Skeleton shimmer effect */}
      {!loaded && (
        <div className="absolute inset-0 w-full h-full bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-[shimmer_1.4s_infinite] bg-size-[400%_100%] rounded-xs z-0" />
      )}

      {/* Actual image */}
      <img
        key={index}
        src={error ? "/akiro-logo.png" : src}
        alt="Biophilic residential architecture project by Roots & Roof Designers Inc. in Cebu"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);
          setLoaded(true);
        }}
        onMouseDown={()=>{
            indexImageClick(index);
            isImageClick(true);
        }
        }
        className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 rounded-md ${
          loaded ? "opacity-100" : "opacity-0"
        } hover:scale-105 z-10 `}
      />
    </div>
  );
};