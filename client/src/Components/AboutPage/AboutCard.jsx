// import { useTranslation } from 'react-i18next';


export default function AboutCard({title,description, icon: Icon}) {
    // const {t} = useTranslation();
  return (
    <div className='h-60 w-60 border-primary-multiply-color border-[3px] flex flex-col gap-4 justify-center items-center rounded-2xl'>
    <div className="flex flex-col gap-4">
      {Icon && <Icon className='text-primary-multiply-color border-primary-multiply-color m-auto' height={45} width={45}/>}
      <div className='regular text-lg  text-primary-multiply-color'>{title}</div></div>
    <div>
      <div className='light text-black text-center'>
        {description}
    </div>
    </div>
  </div>
  )
}
