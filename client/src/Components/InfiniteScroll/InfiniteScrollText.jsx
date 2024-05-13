import React from 'react'
import { useTranslation } from 'react-i18next'
const InfiniteScrollText = ({isLeft}) => {
  const {t} = useTranslation();
  return (
    <div className="w-full mb-20 mt-10 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
    <ul className={isLeft ? "flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll mx-40" : "flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-right"}>
        <li>
        <h1 className='empty-text bold text-[1.5rem]'>{t("aswan")}</h1>
        </li>
        <li>
        <h1 className='empty-text bold text-[1.5rem]'>{t("pyramids")}</h1>
        </li>
        <li>
        <h1 className='empty-text bold text-[1.5rem]'>{t("Abu Simbel")}</h1>
        </li>
        <li>
        <h1 className='empty-text bold text-[1.5rem]'>{t("Valley of Kings")}</h1>
        </li>
        <li>
        <h1 className='empty-text bold text-[1.5rem]'>{t("Holy Azhar")}</h1>
        </li>
        <li>
        <h1 className='empty-text bold text-[1.5rem]'>{t("Mohamed Ali Mosque")}</h1>
        </li>
        <li>
        <h1 className='empty-text bold text-[1.5rem]'>{t("El Hussien")}</h1>
        </li>
        <li>
        <h1 className='empty-text bold text-[1.5rem]'>{t("dahab")}</h1>
        </li>
    </ul>
    <ul className={isLeft ? "flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" : "flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-right"} aria-hidden="true">
        <li>
        <h1 className='empty-text bold text-[1.5rem]'>{t("sharm")}</h1>
        </li>
        <li>
        <h1 className='empty-text bold text-[1.5rem]'>{t("new-alamein")}</h1>
        </li>
        <li>
        <h1 className='empty-text bold text-[1.5rem]'>{t("soft-cairo")}</h1>
        </li>
        <li>
        <h1 className='empty-text bold text-[1.5rem]'>{t("inter-cairo")}</h1>
        </li>
        <li>
        <h1 className='empty-text bold text-[1.5rem]'>{t("sb")}</h1>
        </li>
        <li>
        <h1 className='empty-text bold text-[1.5rem]'>{t("gouna")}</h1>
        </li>
        <li>
        <h1 className='empty-text bold text-[1.5rem]'>{t("alex")}</h1>
        </li>
        <li>
        <h1 className='empty-text bold text-[1.5rem]'>{t("nc")}</h1>
        </li>
    </ul>
</div>
  )
}

export default InfiniteScrollText