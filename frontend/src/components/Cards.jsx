import PropTypes from "prop-types";

function Cards({ item }) {
  return (
    <div className="ml-1 my-5">
      <div className="card bg-base-100 mb-4 mr-4 shadow-lg border py-3 px-2 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white h-full flex flex-col">
        <figure className="flex-grow">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-contain"
          />
        </figure>
        <div className="card-body flex flex-col justify-between">
          <div className="flex items-start justify-start mb-2">
            <h2 className="card-title text-lg font-semibold flex justify-between items-center">
              {item.title}
              <div className="badge badge-primary ml-2">FREE</div>
            </h2>
          </div>
          <div className="card-actions flex justify-between mt-auto">
            <div className="badge badge-outline">${item.price}</div>
            <div className="btn px-8 cursor-pointer hover:bg-primary hover:text-white">
              Buy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Cards.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cards;
