import list from "../list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Cards({ item }) {
  return (
    <div className="ml-1 my-5 ">
      <div className="card bg-base-100 mb-4 mr-4 shadow-md">
        <figure>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-contain"
          />
        </figure>
        <div className="card-body">
          <h12 className="card-title text-lg font-semibold">
            {item.title}
            <div className="badge badge-secondary">FREE</div>
          </h12>

          <div className="card-actions flex justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="btn px-8 cursor-pointer hover:bg-secondary hover:text-white">
              Buy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Freebook() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const filterData = list.filter((data) => data.category === "free");
  // console.log(filterData);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 p-5">
        <div>
          <h1 className="text-xl font-semibold pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            esse voluptatem cum consectetur veniam et nemo blanditiis
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
