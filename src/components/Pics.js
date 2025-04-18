import { useState } from "react"

import Sliders from '@/components/Sliders'

export default function Gallery(){
      const [sliderPics, setSliderPics] = useState([
        "ig-1.jpg",
        "ig-2.jpg",
        "ig-3.jpg",
        "ig-4.jpg",
        "ig-5.jpg",
      ]);
    const [pics, setPics] = useState(['banner1.jpg','banner.webp','holi.webp','neon-flame.webp','c.jpg','dca.jpg','dtp.jpg','tally.jpg','adca.jpg','graphic-designing.jpg','hi-en-typing.jpg','video-editing.jpg'])
    return(
        <section >
            <Sliders pics={sliderPics}/>
            <h2 className="text-xl text-orange-500  tracking-tight sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-5 text-center lg:text-left font-[MachinaR]">Gallery</h2>
            <div className=" grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
                {pics.map((e, i)=>{
                    return(
                        <img className=" rounded hover:translate-y-[-8px] transition-all hover:shadow-slate-900 dark:hover:shadow-slate-200" key={i} src={e} alt="" />
                    )
                })}
            </div>
        </section>
    )
}