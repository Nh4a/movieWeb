import { Camera } from "lucide-react";
import HeroSection from "../Components/HeroSection";
import Card from "../Components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [movie, setMovie] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjlkYWFmYjY3NzM4ZjMwOGZhMDAyN2RhMmNkZWFjNiIsIm5iZiI6MTc2NjU1MDg0OS41NjMsInN1YiI6IjY5NGI2ZDQxNTdkNDhkY2VmMWIxZDYyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YMX57dQ5c7UjzSluXJ0BBfbl2GdzbWdNZBhyPHqHrmk",
    },
  };
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
        options,
      )
      .then((res) => {
        setMovie(res.data.results); // ✅ save to state
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  console.log(movie);
  return (
    <div style={{ backgroundColor: "#08040a" }} className="h-auto">
      <HeroSection />
      <div>
        <h1 className="text-white text-5xl font-bold mb-8">Popular page1</h1>
      </div>
      <div className="p-10 w-full bg-white h-auto  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-7">
        {movie.map((item) => (
          <Card
            key={item.id}
            title={item.name}
            image={"https://image.tmdb.org/t/p/"+item.image}
            rate={item.vote_average}
          />
        ))}
      </div>
      <div className="h-[500px]"></div>
    </div>
  );
};
export default HomePage;
