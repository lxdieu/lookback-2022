import React, { useState, useRef, useEffect } from "react";
import * as style from "./styles";
import { loadImage } from "src/util/helper";

const SeasonPackage2 = ({ data, handleBackHome }) => {
  const [logoPos, setLogoPos] = useState(0);
  const imgRef = useRef(null);
  useEffect(() => {
    loadImage("./images/season-2-1.jpg").then((img) => {
      const imgElem = imgRef.current;
      if (imgElem) {
        setLogoPos(Math.min(window.innerWidth, imgElem.clientWidth) / 2 - 16);
      }
    });
  }, []);

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
          <img src="./images/season-2-1.jpg" alt="" ref={imgRef}/>
          <style.HscLogo
            src="./images/white-logo.svg"
            style={{ left: `calc(50% - ${logoPos}px)` }}
          />
        </style.BackgroundImage>

        {/* <ShareGroup /> */}
      </style.Slide>

      <style.Slide>
        <style.ContentOuterWrapper>
          <style.Content>
            <p>và &apos;ôm&apos; trong</p>
            <p className="big-text">
              {data.Hold_Day?.trim()} <span>ngày</span>
            </p>
          </style.Content>
        </style.ContentOuterWrapper>

        <style.BackgroundImage>
          <img src="./images/season-2-2.jpg" alt="" />
          <style.HscLogo
            src="./images/white-logo.svg"
            style={{ left: `calc(50% - ${logoPos}px)` }}
          />
        </style.BackgroundImage>

        {/* <ShareGroup /> */}
      </style.Slide>
      <style.Slide>
        <style.BackHomeArea onClick={handleBackHome} />
        <style.BackgroundImage>
          <img src="./images/season-2-3.jpg" alt="" />
        </style.BackgroundImage>
        <style.HscLogoHead src="./images/white-logo.svg" />
        {/* <ShareGroup /> */}
      </style.Slide>
    </style.StyledCarousel>
  );
};

export default SeasonPackage2;
