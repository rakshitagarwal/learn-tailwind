import { FaLandmark } from "react-icons/fa";
import img from "../assets/imgdemo.jpg";

const Cardsimple = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <a href="#">
          <img className="rounded-t-lg" src={img} alt="" />
        </a>
        <div className="p-5 my-8 flex justify-between items-center">
          <FaLandmark />

          <FaLandmark />
          <FaLandmark />
        </div>
      </div>
    </div>
  );
};

export default Cardsimple;
