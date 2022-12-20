import React from "react";
import { useRouter } from "next/router";
import * as style from "./styles";
import ShareGroup from "../ShareGroup";

const SeasonPackage4 = ({ data }) => {
  const router = useRouter();
  const shareLink = `${window.location.origin}/?d=${router.query.d}`;
  const handleBackHome = () => {
    router.back();
  };

  return (
    <style.StyledCarousel
      dot={{ sharp: "bar", playtimeEffect: true, placement: "t" }}
      navigation={{ type: "full" }}
      autoPlayTime={600}
    >
      <style.Slide>
        <style.ContentOuterWrapper>
          <style.Content>
            <p className="big-text">{data.lastest_stock}</p>
            <p>là mã khớp lệnh cuối cùng khép lại năm 2022</p>
          </style.Content>
        </style.ContentOuterWrapper>

        <style.BackgroundImage>
          <img src="./images/season-4-img-1.png" alt="" />
          <img src="./images/season-4-bg-1.png" alt="" />
          <style.HscLogo src="./images/white-logo.svg" />
        </style.BackgroundImage>

        <ShareGroup link={shareLink} />
      </style.Slide>

      <style.Slide>
        <style.ContentOuterWrapper>
          <style.Content>
            <p>Khớp lệnh vào ngày</p>
            <p className="big-text">{data.lastest_date}</p>
          </style.Content>
        </style.ContentOuterWrapper>

        <style.BackgroundImage>
          <img src="./images/season-4-img-2.png" alt="" />
          <img src="./images/season-4-bg-2.png" alt="" />
          <style.HscLogo src="./images/white-logo.svg" />
        </style.BackgroundImage>
        <ShareGroup link={shareLink} />
      </style.Slide>
      <style.Slide>
        <style.BackgroundLastImage>
          <img src="./images/season-4-img-3.png" alt="" />
          <img src="./images/season-4-bg-3.png" alt="" />
        </style.BackgroundLastImage>
      </style.Slide>
      <style.Slide>
        <style.BackgroundLastVideo>
          <video className="videoTag" autoPlay loop muted onClick={handleBackHome}>
            <source src="./images/ending-video.mp4" type="video/mp4" />
          </video>
        </style.BackgroundLastVideo>
      </style.Slide>
    </style.StyledCarousel>
  );
};

export default SeasonPackage4;
