// import { useTranslation } from 'react-i18next'
import {  PanelTopInactiveIcon, PersonStandingIcon, Pyramid } from 'lucide-react';
export default function FilterComp() {
    // const {t} = useTranslation();



  return (
    <div className="props-filter-container flex md:flex-row flex-col justify-center items-center bg-white text-primary-color light w-[90vw] md:h-28 h-40 rounded-[20px] md:relative absolute mt-5 border shadow-xl regular">
      <div className="item text-left text-secondary-color flex justify-center items-center">
      <PersonStandingIcon height={50} className='m-2 p-2 border-2 rounded-full border-primary-multiply-color' color='var(--primary-color)' width={50}/>
      <div className="i">
      <h1 className='text-xl text-primary-color'>Tour Guides</h1>
      </div>
      </div>
      <div className="item text-left text-secondary-color flex justify-center items-center">
      <Pyramid height={50} className='m-2 p-2 border-2 rounded-full border-primary-multiply-color'color='var(--primary-color)' width={50}/>
      <div className="i">
      <h1 className='text-xl text-primary-color'>Touristic Places</h1>
      </div>
      </div>
      <div className="item text-left text-secondary-color flex justify-center items-center">
      <PanelTopInactiveIcon height={50} className='m-2 p-2 border-2 rounded-full border-primary-multiply-color'color='var(--primary-color)' width={50}/>
      <div className="i">
      <h1 className='text-xl text-primary-color'>Reservations</h1>
      </div>
      </div>
  </div>
  )
}
