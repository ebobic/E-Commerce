'use client';

export default function Hero() {
    return (
    <section 
      className="h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 md:px-4 w-full max-w-screen-2xl mx-auto"
      style={{
        backgroundImage: "url('/hero/heroimage.png')"
      }}
    >
      {/* Content box with hero text and CTA */}
      <div className="content-box bg-blue-100 rounded-lg p-4 md:p-12 w-full max-w-[85vw] md:max-w-[643px] h-auto md:h-[443px] flex flex-col justify-center items-center md:items-start mx-auto md:mx-0 md:ml-150">
        {/* New arrival */}
        <p className="text-neutral-800 text-xs md:text-base mb-2 font-semibold tracking-[1px] md:tracking-[3px] text-center md:text-left">New arrival</p>
        
        {/*  headline */}
        <h1 className="text-2xl md:text-6xl leading-[1.1] text-blue-900 mb-3 md:mb-4 text-center md:text-left">
          <span className="text-blue-900 text-2xl md:text-6xl font-bold">
            Discover our<br />new collection
          </span>
        </h1>
        
        {/* info text */}
        <p className="text-neutral-800 text-sm md:text-lg mb-4 md:mb-8 font-medium text-center md:text-left leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamper mattis.
        </p>
        
        {/* CTA button */}
        <button 
          className="flex flex-row items-center justify-center px-4 py-2 md:px-[60px] md:py-[25px] gap-[10px] w-[140px] h-[45px] md:w-[220px] md:h-[70px] bg-blue-900 rounded-[50px] text-white font-bold hover:bg-blue-800 transition-colors cursor-pointer text-xs md:text-base"
          onClick={() => {
            // TODO: Add navigation to products page when created!!
            console.log('CTA button clicked - will navigate to products page');
          }}
        >
          <span className="whitespace-nowrap">SEE ALL</span>
          <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="w-3 h-3 md:w-4 md:h-4">
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
          </svg>
        </button>
      </div>
      </section>
    );
  }