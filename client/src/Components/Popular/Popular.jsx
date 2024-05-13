import React from 'react'
import './Popular.css'
// import Item from '../Item/Item'
import { useTranslation } from 'react-i18next'
import HorizontalScroll from '../HorizontalScroll/HorizontalScroll'

const Popular = (props) => {
  const {t} = useTranslation();
  return (
    <div className='popular overflow-hidden'>
      <h1 className='bold text-primary-multiply-color'>{t(`${props.title}`)}</h1>
      <hr />
      <div className={`popular-item relative flex justify-center items-center w-full`}>
        <HorizontalScroll category={props.category}/>
      </div>
    </div>
  )
}

export default Popular
