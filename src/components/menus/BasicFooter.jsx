import { Link } from "react-router-dom";


const homeIcon = `${process.env.PUBLIC_URL}/img2/home.svg`;
const searchMapIcon = `${process.env.PUBLIC_URL}/img2/map.svg`;
const searchIcon = `${process.env.PUBLIC_URL}/img2/search.svg`;

const BasicFooter = () => {
  return (
    <nav id="camFooter" className="grid grid-cols-8 ">
      <div className="col-start-1 col-span-8 bg-[#12372A]">
        <ul className="grid grid-cols-7 p-2">
          <li className="col-start-2 col-span-1 flex justify-center">
            <Link to={"/gocamping"}>
            <img src={searchIcon} alt="Home Icon" />
            </Link>
          </li>
          <li className="col-start-4 col-span-1 flex justify-center">
            <Link to={"/"}>
            <img src={homeIcon} alt="Home Icon" />
            </Link>
          </li>
          <li className="col-start-6 col-span-1 flex justify-center">
            <Link to={"/mappage"}>
            <img src={searchMapIcon} alt="Home Icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BasicFooter;
