
export function Services() {
  return (
    <div className="flex flex-col justify-center gap-6 mt-10 mb-10 ">

      <div className="flex justify-between items-center">
        <div className="max-w-lg flex">
          <h3 className="text-gray-500 uppercase tracking-widest text-sm md:text-base">Services</h3>
        </div>
      </div>
        
      <div className="border-b border-b-gray-800"></div>

      <div className="flex flex-col lg:flex-row items-start mt-5 gap-10 lg:gap-15">

        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <p className="text-gn text-xl md:text-[22px] font-bold leading-tight">
            Frontend Development: My Journey and Aspirations
          </p>
          <br />
          <p className="text-gray-300 text-sm md:text-base">
            I am a passionate frontend developer with a solid foundation in the core technologies of the web: HTML, CSS, and JavaScript. I take pride in writing semantic, accessible HTML and crafting responsive, visually appealing interfaces with modern CSS techniques.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <p className="text-gn font-bold mb-2">Core Skills:</p>
              <ul className="list-disc list-inside text-gray-400 text-sm">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript (ES6+)</li>
              </ul> 
            </div>
            <div>
              <p className="text-gn font-bold mb-2">Styling:</p>
              <ul className="list-disc list-inside text-gray-400 text-sm"> 
                <li>SCSS (Sass)</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gn font-bold mb-2">Current Focus: React & TypeScript</p>
            <ul className="list-disc list-inside text-gray-400 text-sm">
              <li>React</li>
              <li>TypeScript</li>
            </ul>
          </div>

          <div className="mt-8 p-4 border border-gn/20 rounded-xl bg-gn/5">
            <p className="text-gn font-bold">Goal: Full‑stack developer</p>
            <p className="text-sm mt-2 text-gray-300">Path:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs md:text-sm text-gray-400">
              <li>• Advance React skills</li>
              <li>• Learn Node.js & DB</li>
              <li>• Use Next.js</li>
              <li>• End‑to‑end projects</li>
            </ul>
          </div>
          <p className="mt-6 italic text-gray-500 text-sm">Committed to growth and creating seamless user experiences.</p>
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-125 lg:max-w-none">
              <img 
                src={`${import.meta.env.BASE_URL}tree.svg`} 
                alt="Tech Tree" 
                draggable='false' 
                className="w-full h-auto max-h-100 lg:max-h-158.25 pointer-events-none select-none object-contain"
              />
            </div>
        </div>
      </div>
    </div>
  )
}
