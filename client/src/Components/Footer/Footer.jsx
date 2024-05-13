import ItemsContainer from "./ItemContainer";
import SocialIcons from "./Social";

const Footer = () => {
  return (
    <footer className=" text-white relative overflow-hidden h-[70vh]">
      <div className="absolute h-[150%] rotate-[20deg] w-[150%] bg-black top-20 right-10 -z-10"></div>
      <div className="absolute h-[150%] rotate-[-10deg] w-[150%] bg-primary-multiply-color top-20 left-10 -z-20"></div>
      {/* <div className="absolute h-full w-full -z-30 bg-primary-blend-color"></div> */}
      <ItemsContainer />
      <div
        className="flex flex-wrap justify-around items-end h-24 text-gray-200 bg-primary-multiply-colo text-sm"
      >
        <span className="transition-all duration-500 hover:text-white">© 2024 <span className="text-primary-multiply-color text-xl">Eye of Egypt</span>.</span>
        <span className="transition-all duration-500 hover:text-white">Terms · Privacy Policy</span>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;