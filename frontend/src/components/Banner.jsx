import banner from "../../public/banner1.jpg";
function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32 ">
        <div className="space-y-12">
          <h1 className="text-4xl font-bold ">
            Hello, welcome here to learn something{" "}
            <span className="text-primary"> new everyday!!!</span>
          </h1>
          <p className="text-xl  text-justify md:w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            esse voluptatem cum consectetur veniam et nemo blanditiis
            perspiciatis tenetur, corporis numquam amet nisi quia iste.
          </p>
          <button className="btn bg-primary text-white ">Get Started</button>
        </div>
      </div>
      <div className=" order-1 md:order-2 w-full md:w-1/2 flex justify-center items-end ">
        <img src={banner} width={"400px"} alt="banner.jpg" />
      </div>
    </div>
  );
}

export default Banner;
