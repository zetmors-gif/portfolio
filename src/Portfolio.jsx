
import { useState, useEffect } from "react";
import { PORTFOLIO } from "./portfolio.data";
import { ArrowUpRightIcon } from "lucide-react";

export function Portfolio() {
  const [activeSlideId, setActiveSlideId] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesPerStep = isMobile ? 1 : 2;
  const maxSteps = Math.ceil(PORTFOLIO.length / slidesPerStep);

  return (
    <div className="flex flex-col justify-center gap-6 mt-10 relative px-4 md:px-0">
      <div className="flex justify-between items-center">
        <div className="max-w-lg">
          <h3 className="text-gray-500 font-buhn uppercase tracking-widest text-sm md:text-base">Portfolio</h3>
        </div>
      </div>

      <div className="border-b border-b-gray-500"></div>

      <div className="overflow-hidden px-2 md:px-10 mt-6 md:mt-10 mb-4">
        <div
          className="flex flex-nowrap transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${(activeSlideId - 1) * 100}%)` }}
        >
          {PORTFOLIO.map((port) => (
            <div
              key={port.id}
              className="flex flex-col shrink-0 w-full md:w-[50%] px-2 md:px-10 py-2"
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={port.image}
                  alt={port.title}
                  className="w-full h-40 md:h-75 object-cover rounded-2xl pointer-events-none px-2 select-none"
                  draggable="false"
                />
              </div>

              <a href={port.link || "#"} className="block w-full mt-4 px-1 group cursor-pointer">
                <div className="flex justify-between items-center">
                  <p className="font-bowler text-[22px] transition-colors group-hover:text-[#8cee1d]">
                    view project
                  </p>
                  <ArrowUpRightIcon size={30} color="#8cee1d" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>


      <div className="absolute flex h-1/2 translate-y-1/2 w-full justify-between p left-0 pointer-events-none">
          <button
            onClick={() => activeSlideId > 1 && setActiveSlideId(activeSlideId - 1)}
            className={`w-10 h-10 md:w-15 md:h-15 flex justify-center items-center transition-colors pointer-events-auto ${
              activeSlideId === 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-100'
            }`}
            disabled={activeSlideId === 1}
          >
            <img src={`${import.meta.env.BASE_URL}LA.svg`} alt="Prev" className="w-1/2 h-1/2"/>
          </button>
          <button
            onClick={() => activeSlideId < maxSteps && setActiveSlideId(activeSlideId + 1)}
            className={`w-10 h-10 md:w-15 md:h-15 flex justify-center items-center transition-colors pointer-events-auto ${
              activeSlideId === maxSteps ? 'opacity-20 cursor-not-allowed' : 'opacity-100'
            }`}
            disabled={activeSlideId === maxSteps}
          >
            <img src={`${import.meta.env.BASE_URL}RA.svg`} alt="Next" className="w-1/2 h-1/2"/>
          </button>
        </div>
    </div>
  );
}

