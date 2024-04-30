import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  // const [trailerId, setTrailerId] = useState(null);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video top-0 bottom-0"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share fullscreen"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
