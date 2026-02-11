
export function Main() {
  return (
    <div className="flex flex-col justify-center gap-4 md:gap-6">

      <div className="flex justify-between items-center h-10 md:mt-10 ">
        <div className="max-w-lg">
          <h3 className="text-gray-500 tracking-widest uppercase text-sm md:text-base ">About me</h3>
        </div>
      </div>
      
      <div className="border-b border-b-gray-500"></div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
        
        <div className="w-full md:w-2/3 lg:w-1/2 pt-6 md:pt-10 flex justify-center">
            <img 
              src={`${import.meta.env.BASE_URL}Portret.jpg`}
              alt="Portrait" 
              draggable="false" 
              className="pointer-events-none select-none rounded-2xl w-full max-w-sm lg:max-w-none object-cover"
            />
        </div>

        <div className="w-full lg:w-1/2 py-5">
            <div className="px-0 md:px-5">
                <h1 className="text-gn text-3xl md:text-4xl mb-6 md:mb-10 mt-5">Introduction</h1>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  My journey as a frontend developer has been a perpetual quest to transform the mundane into the remarkable, 
                  to craft seamless digital experiences, and to bring visions to life through code. 
                  Rooted in the ever‑evolving landscape of web technologies...
                </p>
                <div className="border-b border-b-gray-500 mt-10 md:mt-20 mb-10"></div>
            </div>

            <div className="px-0 md:px-5">
                <h1 className="text-gn text-3xl md:text-4xl mb-6 md:mb-10 mt-8 md:mt-16">Contact information</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 md:text-[13px] gap-8 xl:text-[22px]">
                    <div>
                        <p className="font-medium">Email</p>
                        <a href='mailto:zetmors@gmail.com' className="text-[13px] xl:text-[15px] whitespace-nowrap text-gray-500 mt-1.75 block hover:text-gn transition-colors">
                          zetmors@gmail.com
                        </a>
                    </div>
                    <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-[13px] xl:text-[16px] whitespace-nowrap text-gray-500 mt-1.75">+7 989 809 4680</p>
                    </div>
                    <div>
                        <p className="font-medium">Telegram</p>
                        <a href="https://t.me/ZetMors" target="_blank" rel="noreferrer" className="text-gray-500 text-[13px] xl:text-[15px] mt-1.75 block hover:text-gn transition-colors">
                          @zetmors
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

