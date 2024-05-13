import logo from '../assets/logo.png'
export default function SplashScreen() {

  return (
    <div className='w-full h-full flex flex-col justify-center gap-0 items-center fixed bg-primary-multiply-color'>
      <h1 className='regular text-5xl'><span className='bold text-secondary-color animate-fade-up animate-duration-500 animate-infinite'><img src={logo} alt="BELLA" height={250} width={250} /></span></h1>
    </div>
  )
}
