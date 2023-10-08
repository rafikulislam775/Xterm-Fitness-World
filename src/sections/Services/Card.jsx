import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";
const Card = ({ data }) => {
  const { img, eventName, shortDescription, price, id } = data;
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  hover:border-info outline-offset-2 outline-1 ">
        <div>
          <img className="rounded-t-lg w-96 h-64" src={img} alt="" />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {eventName}
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {shortDescription}
          </p>
          <div className="flex justify-between items-center">
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border  hover:bg-cyan-500 rounded-lg">
              <Link to={`/details/${id}`}>Details</Link>

              <AiOutlineArrowRight className="text-2xl"></AiOutlineArrowRight>
            </div>
            <div className="badge badge-info badge-lg p-5">{price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  data: PropTypes.object,
};
export default Card;
