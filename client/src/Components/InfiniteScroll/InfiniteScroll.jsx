import { BrainIcon } from 'lucide-react'
import React from 'react'

const InfiniteScroll = ({isLeft}) => {
  return (
    <div className="w-full my-8 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
    <ul className={isLeft ? "flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" : "flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-right"}>
        <li>
            <BrainIcon color='#095538fb' height={70} width={70}/>
        </li>
        <li>
        <BrainIcon color='#095538fb' height={70} width={70}/>
        </li>
        <li>
        <BrainIcon color='#095538fb' height={70} width={70}/>
        </li>
        <li>
        <BrainIcon color='#095538fb' height={70} width={70}/>
        </li>
        <li>
        <BrainIcon color='#095538fb' height={70} width={70}/>
        </li>
        <li>
        <BrainIcon color='#095538fb' height={70} width={70}/>
        </li>
        <li>
        <BrainIcon color='#095538fb' height={70} width={70}/>
        </li>
        <li>
        <BrainIcon color='#095538fb' height={70} width={70}/>
        </li>
    </ul>
    <ul className={isLeft ? "flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" : "flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-right"} aria-hidden="true">
        <li>
        <BrainIcon color='#095538fb' height={70} width={70}/>
        </li>
        <li>
        <BrainIcon color='#095538fb' height={70} width={70}/>
        </li>
        <li>
        <BrainIcon color='#095538fb' height={70} width={70}/>
        </li>
        <li>
        <BrainIcon color='#095538fb' height={70} width={70}/>
        </li>
        <li>
        <BrainIcon color='#095538fb' height={70} width={70}/>
        </li>
        <li>
        <BrainIcon color='#095538fb' height={70} width={70}/>
        </li>
        <li>
        <BrainIcon color='#095538fb' height={70} width={70}/>
        </li>
        <li>
        <BrainIcon color='#095538fb' height={70} width={70}/>
        </li>
    </ul>
</div>
  )
}

export default InfiniteScroll