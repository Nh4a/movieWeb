import herobg from "../assets/image/herobg.jpg";
import threeMovie from "../assets/image/threemovie.jpg";
import murk from "../assets/image/murk.jpg";

const HeroSection = () => {
  return (
    <section
      className="h-screen bg-no-repeat bg-center bg-cover "
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div>
        <div className="center">
          <img src={murk} className="w-[50px] mt-25 mb-20 sm:mt-10 sm:mb-10  md:w-[60px]  xl:w-[80px] " alt="" />
        </div>
        <div className="center">
          <img src={threeMovie} className="w-4/6 md:w-3/6  xl:w-2/5" alt="" />
        </div>
        <div className="center">
          <h1 className="text-4xl w-[300px]  text-center font-bold text-white mt-10 sm:w-[300px] md:w-4/6 lg:w-[500px] xl:w-2/6">
            Find<span className="text-purple-900 "> Movie </span> you'll love
            without the hassle
          </h1>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
