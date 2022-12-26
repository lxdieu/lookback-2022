import React from "react";
import { useRouter } from "next/router";
import * as style from "./styles";
import ShareGroup from "./ShareGroup";

const SeasonPackage3 = ({ data }) => {
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
            <p className="big-text">{data.Position_max_code?.trim()}</p>
            <p>rất được &apos;ưu ái&apos; chiếm tỷ trọng nhiều nhất trong danh mục</p>
          </style.Content>
        </style.ContentOuterWrapper>

        <style.BackgroundImage>
          <img src='./images/season-3-1.jpg' alt="" />
          <style.HscLogo src="./images/white-logo.svg" />
        </style.BackgroundImage>

        <ShareGroup link={shareLink} />
      </style.Slide>

      <style.Slide>
        <style.ContentOuterWrapper>
          <style.Content>
            <p className="big-text">{data.Position_min_code?.trim()}</p>
            <p>chiếm tỷ trọng ít nhất trong danh mục</p>
          </style.Content>
        </style.ContentOuterWrapper>

        <style.BackgroundImage>
          <img src="./images/season-3-2.jpg" alt="" />
          <style.HscLogo src="./images/white-logo.svg" />
        </style.BackgroundImage>

        <ShareGroup link={shareLink} />
      </style.Slide>
      <style.Slide>
        <style.BackHomeArea onClick={handleBackHome} />
        <style.BackgroundLastImage>
          <img src="./images/season-3-3.jpg" alt="" />
        </style.BackgroundLastImage>
        <style.HscLogoHead src="./images/white-logo.svg" />
        <ShareGroup link={shareLink} />
      </style.Slide>
    </style.StyledCarousel>
  );
};

export default SeasonPackage3;
