import * as style from "./styles";

const Ending = ({ handleBackHome }) => {
  return (
    <style.Wrapper>
      <style.BackgroundLastVideo>
        <video
          className="videoTag"
          autoPlay
          loop
          muted
          onClick={(e) => handleBackHome(e,true)}
        >
          <source src="./images/ending-video.mp4" type="video/mp4" />
        </video>
      </style.BackgroundLastVideo>
    </style.Wrapper>
  );
};
export default Ending;
