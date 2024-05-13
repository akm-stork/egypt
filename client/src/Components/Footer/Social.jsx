import { Facebook, Instagram } from "lucide-react";

const SocialIcons = () => {
  return (
    <div className="text-primary">
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-blue-600 mx-1.5 text-xl 
        duration-300 "
        >
            <Facebook fill="white" stroke="black"/>
        </span>
        <span
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gradient-to-r from-purple-700 to-pink-600 mx-1.5 text-xl 
        duration-300 "
        >
            <Instagram fill="white" stroke="black"/>
        </span>
    </div>
  );
};

export default SocialIcons;