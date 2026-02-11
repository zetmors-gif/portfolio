
import React, { useEffect, useState, useRef } from 'react';
import { ITEMS } from './Animation.data';

export function Animations() {
  const [positions, setPositions] = useState([]);
  const [showTitle, setShowTitle] = useState(false);
  const containerRef = useRef(null);

    useEffect(() => {
    const calculateLayout = () => {
      if (!containerRef.current) return;

      const cw = containerRef.current.clientWidth;
      const ch = containerRef.current.clientHeight;
      
      const isMobile = cw < 768;
      const scale = isMobile ? 0.6 : 1; 

      const newPositions = ITEMS.map((item, i) => {
        const group = i % 4;
        const ringSize = item.ring.size * scale;
        
        const ex = cw / 2 - ringSize / 2;
        const ey = ch / 2 - ringSize / 2;

        const offsets = [
          { x: -ringSize, y: -ringSize },
          { x: cw + ringSize, y: -ringSize },
          { x: -ringSize, y: ch + ringSize },
          { x: cw + ringSize, y: ch + ringSize }
        ];

        return { 
          sx: offsets[group].x, 
          sy: offsets[group].y, 
          ex, 
          ey, 
          delay: i * 150,
          currentSize: ringSize,
          currentIconSize: parseInt(item.icon.size) * scale
        };
      });
      setPositions(newPositions);

      const totalDuration = (ITEMS.length - 1) * 150 + 1500;
      const timer = setTimeout(() => setShowTitle(true), totalDuration);
      return () => clearTimeout(timer);
    };

    const initialTimer = setTimeout(calculateLayout, 50); 
    window.addEventListener('resize', calculateLayout);
    return () => {
        window.removeEventListener('resize', calculateLayout);
        clearTimeout(initialTimer);
    }
  }, []);


  return (
    <div ref={containerRef} className="relative w-full h-80 md:h-150  bg-black overflow-hidden rounded-2xl flex items-center justify-center mt-10">
      
      <svg className="absolute w-0 h-0">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </svg>

      {!showTitle && (
        <div className="w-full h-full relative" style={{ filter: 'url(#goo)' }}>
          {positions.length > 0 && ITEMS.map((item, i) => (
            <div
              key={i}
              className="absolute top-0 left-0 opacity-0 animate-fly-in"
              style={{
                width: `${positions[i].currentSize}px`,
                height: `${positions[i].currentSize}px`,
                '--sx': `${positions[i].sx}px`,
                '--sy': `${positions[i].sy}px`,
                '--ex': `${positions[i].ex}px`,
                '--ey': `${positions[i].ey}px`,
                animationDelay: `${positions[i].delay}ms`,
                zIndex: i,
                backgroundColor: '#8cee1d',
                borderRadius: '50%'
              }}
            >
              <div className="relative  w-full h-full flex items-center justify-center">
                <img 
                  src={item.icon.src} 
                  className="relative z-10 brightness-0 pointer-events-none select-none" 
                  style={{ width: `${positions[i].currentIconSize}px` }} 
                  alt="" 
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {showTitle && (
        <div className="relative w-full h-full flex items-center justify-center px-4 max-w-337.5">
          
          <div className="absolute inset-4 md:inset-10 pointer-events-none">

            <div className="corner-decor absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-[#8cee1d]" />
            <div className="corner-decor absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-[#8cee1d]" />
            <div className="corner-decor absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-[#8cee1d]" />
            <div className="corner-decor absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-[#8cee1d]" />
            

            <div className="hidden md:block corner-decor absolute top-0 left-2/3 w-15 h-0.5 bg-[#8cee1d] -translate-x-1/2" />
            <div className="hidden md:block corner-decor absolute top-0 left-1/3 w-15 h-0.5 bg-[#8cee1d] -translate-x-1/2" />
            <div className="corner-decor absolute top-1/2 left-0 w-0.5 h-8 md:h-12 bg-[#8cee1d] -translate-y-1/2" />
            <div className="corner-decor absolute top-1/2 right-0 w-0.5 h-8 md:h-12 bg-[#8cee1d] -translate-y-1/2" />
          </div>

          <h1 className="text-[#8cee1d] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter animate-title text-center font-bowler break-all md:break-normal">
            PORTFOLIO
          </h1>

          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 overflow-hidden whitespace-nowrap opacity-50">
            <span className="text-[#8cee1d] text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] animate-pulse">
              System.init() // Status: Active // Core: React_v18
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
