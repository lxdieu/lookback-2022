import React, { useState, useRef, useEffect } from "react";
import * as style from "./styles";
import { loadImage } from "src/util/helper";

const SeasonPackage3 = ({ data, handleBackHome }) => {
  const [logoPos, setLogoPos] = useState(0);
  const imgRef = useRef(null);
  useEffect(() => {
    loadImage("./images/season-3-1.jpg").then((img) => {
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
            <p className="big-text">{data.Position_max_code?.trim()}</p>
            <p>
              rất được &apos;ưu ái&apos; chiếm tỷ trọng nhiều nhất trong danh
              mục
            </p>
          </style.Content>
        </style.ContentOuterWrapper>

        <style.BackgroundImage>
          <img src="./images/season-3-1.jpg" alt=""  ref={imgRef}/>
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
            <p className="big-text">{data.Position_min_code?.trim()}</p>
            <p>chiếm tỷ trọng ít nhất trong danh mục</p>
          </style.Content>
        </style.ContentOuterWrapper>

        <style.BackgroundImage>
          <img src="./images/season-3-2.jpg" alt="" />
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
          <img src="./images/season-3-3.jpg" alt="" />
        </style.BackgroundImage>
        {/* <ShareGroup /> */}
      </style.Slide>
    </style.StyledCarousel>
  );
};

export default SeasonPackage3;
