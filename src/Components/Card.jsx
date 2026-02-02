import { Link } from "react-router-dom";

const Card = ({ title, image, rate }) => {
  console.log(image);
  return (
    <Link to={"detail/id:"}>
      <div className="h-96 w-[300px] bg-red-500 p-2 rounded-xl">
        <img className="h-3/4 w-full rounded-xl" src={image} alt="" />
        {/* footer */}
        <div className="text-white">
          <p className="text-2xl font-bold ">{title}</p>
          <div className="text-xl">
            <span className="mr-3">X</span>
            <span>{rate.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
