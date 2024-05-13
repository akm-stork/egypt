import { Link } from "react-router-dom";


const Item = ({ Links, title }) => {
  return (
    <ul className="relative top-20 right-10">
      <h1 className="mb-1 font-semibold text-lg">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <Link
            className="text-gray-200 hover:text-primary-multiply-color duration-300
          text-sm cursor-pointer leading-6"
            to={link.link}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Item;