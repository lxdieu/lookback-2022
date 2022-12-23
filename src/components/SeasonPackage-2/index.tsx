import React from "react";
import { useRouter } from "next/router";
import * as style from "./styles";
import ShareGroup from "../ShareGroup";

const SeasonPackage2 = ({ data }) => {
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
            <p className="big-text">{data.longest_stock}</p>
            <p>được bạn `ôm` lâu nhất trong năm</p>
          </style.Content>
        </style.ContentOuterWrapper>

        <style.BackgroundImage>
          <img src="./images/season-2-img-1.png" alt="" />
          <img src="./images/season-2-bg-1.png" alt="" />
          <style.HscLogo src="./images/white-logo.svg" />
        </style.BackgroundImage>

        <ShareGroup link={shareLink} />
      </style.Slide>

      <style.Slide>
        <style.ContentOuterWrapper>
          <style.Content>
            <p>và `ôm` trong</p>
          <p className="big-text">{data.longest_hold_time}<span>ngày</span></p>
          </style.Content>
        </style.ContentOuterWrapper>

        <style.BackgroundImage>
          <img src="./images/season-2-img-2.png" alt="" />
          <img src="./images/season-2-bg-2.png" alt="" />
          <style.HscLogo src="./images/white-logo.svg" />
        </style.BackgroundImage>

        <ShareGroup link={shareLink} />
      </style.Slide>
      <style.Slide>
        <style.BackHomeArea onClick={handleBackHome} />
        <style.BackgroundLastImage>
          <img src="./images/season-2-img-3.png" alt="" />
          <img src="./images/season-2-bg-3.png" alt="" />
        </style.BackgroundLastImage>
        <style.HscLogoHead src="./images/white-logo.svg" />
        <ShareGroup link={shareLink} />
      </style.Slide>
    </style.StyledCarousel>
  );
};

export default SeasonPackage2;
