import React from "react";
import { useRouter } from "next/router";
import * as style from "./styles";
import ShareGroup from "../ShareGroup";

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
            <p className="big-text">{data.largest_stock}</p>
            <p>rất được `ưu ái` chiếm tỷ trọng nhiều nhất trong danh mục</p>
          </style.Content>
        </style.ContentOuterWrapper>

        <style.BackgroundImage>
          <img src='./images/season-3-img-1.png' alt="" />
          <img src='./images/season-3-bg-1.png' alt="" />
          <style.HscLogo src="./images/white-logo.svg" />
        </style.BackgroundImage>

        <ShareGroup link={shareLink} />
      </style.Slide>

      <style.Slide>
        <style.ContentOuterWrapper>
          <style.Content>
            <p className="big-text">{data.smallest_stock}</p>
            <p>chiếm tỷ trọng ít nhất trong danh mục</p>
          </style.Content>
        </style.ContentOuterWrapper>

        <style.BackgroundImage>
          <img src="./images/season-3-img-2.png" alt="" />
          <img src="./images/season-3-bg-2.png" alt="" />
          <style.HscLogo src="./images/white-logo.svg" />
        </style.BackgroundImage>

        <ShareGroup link={shareLink} />
      </style.Slide>
      <style.Slide>
        <style.BackHomeArea onClick={handleBackHome} />
        <style.BackgroundLastImage>
          <img src="./images/season-3-img-3.png" alt="" />
          <img src="./images/season-3-bg-3.png" alt="" />
        </style.BackgroundLastImage>
        <ShareGroup link={shareLink} />
      </style.Slide>
    </style.StyledCarousel>
  );
};

export default SeasonPackage3;
