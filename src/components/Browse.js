import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div className="bg-black">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* {
        Main Container
          - VideoBackground
          - VideoTitle
        Secondary Container
          - MoviesList * n
          - Cards * n
      } */}
    </div>
  );
};

export default Browse;
