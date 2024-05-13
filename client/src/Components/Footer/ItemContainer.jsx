import { EnvelopeOpenIcon, MobileIcon } from "@radix-ui/react-icons";
import Item from "./Item";
import { PROJECTS} from "./data";
import img from '../../assets/logo.png';
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 bg-primary-multiply-colo">
         <div>
          <img src={img} alt="" />
         </div>
      <Item Links={PROJECTS} title="USEFUL LINKS" />
      <ul className="absolute right-20 top-40 text-black">
      <h1 className="mb-1 font-semibold text-lg">CONTACTS</h1>
    
        <li >
          <p
            className="text-black hover:text-white duration-300
          text-sm cursor-pointer leading-6"
          >
 Giza, 6th of October City, Family Mall
          </p>
        </li>
        <li >
          <p
            className="text-black hover:text-white duration-300
          text-sm cursor-pointer leading-6 flex items-center gap-2"
          >
<MobileIcon height={16} width={16} />  +20 128 100 4800
          </p>
        </li>
        <li >
          <p
            className="text-black hover:text-white duration-300
          text-sm cursor-pointer leading-6 flex items-center gap-2"
          >
<EnvelopeOpenIcon height={16} width={16} />  bella.eg@bellastore.com
          </p>
        </li>
      
    </ul>
    </div>
  );
};

export default ItemsContainer;