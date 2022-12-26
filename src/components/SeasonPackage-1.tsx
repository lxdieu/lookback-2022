import React from "react";
import { useRouter } from "next/router";
import * as style from "./styles";
import ShareGroup from "./ShareGroup";

const SeasonPackage1 = ({ data }) => {
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
            <p className="big-text">{data.Start_code?.trim()}</p>
            <p>là mã khớp lệnh khai xuân đầu năm của bạn</p>
          </style.Content>
        </style.ContentOuterWrapper>

        <style.BackgroundImage>
          <img src="./images/season-1-1.jpg" alt="" />
          <style.HscLogo src="./images/white-logo.svg" />
        </style.BackgroundImage>
        <ShareGroup link={shareLink} />
      </style.Slide>

      <style.Slide>
        <style.ContentOuterWrapper>
          <style.Content>
            <p>Khớp lệnh vào ngày</p>
            <p className="big-text">{data.Start_code_date?.trim()}</p>
          </style.Content>
        </style.ContentOuterWrapper>

        <style.BackgroundImage>
          <img src="./images/season-1-2.jpg" alt="" />
          <style.HscLogo src="./images/white-logo.svg" />
        </style.BackgroundImage>
        <ShareGroup link={shareLink} />
      </style.Slide>
      <style.Slide>
        <style.BackHomeArea onClick={handleBackHome} />
        <style.BackgroundImage>
          <img src="./images/season-1-3.jpg" alt="" />
        </style.BackgroundImage>
        <style.HscLogoHead src="./images/white-logo.svg" />
        <ShareGroup link={shareLink} />
      </style.Slide>
    </style.StyledCarousel>
  );
};

export default SeasonPackage1;
