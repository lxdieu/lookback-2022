import React from "react";
import { useRouter } from "next/router";
import * as style from "./styles";
import ShareGroup from "./ShareGroup";

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
      autoPlayTime={6}
    >
      <style.Slide>
        <style.ContentOuterWrapper>
          <style.Content>
            <p className="big-text">{data.Hold_max_code?.trim()}</p>
            <p>được bạn &apos;ôm&apos; lâu nhất trong năm</p>
          </style.Content>
        </style.ContentOuterWrapper>

        <style.BackgroundImage>
          <img src="./images/season-2-1.jpg" alt="" />
          <style.HscLogo src="./images/white-logo.svg" />
        </style.BackgroundImage>

        <ShareGroup link={shareLink} />
      </style.Slide>

      <style.Slide>
        <style.ContentOuterWrapper>
          <style.Content>
            <p>và &apos;ôm&apos; trong</p>
          <p className="big-text">{data.Hold_Day?.trim()} <span>ngày</span></p>
          </style.Content>
        </style.ContentOuterWrapper>

        <style.BackgroundImage>
          <img src="./images/season-2-2.jpg" alt="" />
          <style.HscLogo src="./images/white-logo.svg" />
        </style.BackgroundImage>

        <ShareGroup link={shareLink} />
      </style.Slide>
      <style.Slide>
        <style.BackHomeArea onClick={handleBackHome} />
        <style.BackgroundImage>
          <img src="./images/season-2-3.jpg" alt="" />
        </style.BackgroundImage>
        <style.HscLogoHead src="./images/white-logo.svg" />
        <ShareGroup link={shareLink} />
      </style.Slide>
    </style.StyledCarousel>
  );
};

export default SeasonPackage2;
