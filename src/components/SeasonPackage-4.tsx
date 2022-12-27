import React, { useState, useRef, useEffect } from "react";
import * as style from "./styles";
import { loadImage } from "src/util/helper";

const SeasonPackage4 = ({ data, handleBackHome }) => {
  const [logoPos, setLogoPos] = useState(0);
  const imgRef = useRef(null);
  useEffect(() => {
    loadImage("./images/season-4-1.jpg").then((img) => {
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
            <p className="big-text">{data.end_code?.trim()}</p>
            <p>là mã khớp lệnh cuối cùng khép lại năm 2022</p>
          </style.Content>
        </style.ContentOuterWrapper>

        <style.BackgroundImage>
          <img src="./images/season-4-1.jpg" alt=""  ref={imgRef}/>
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
            <p>Khớp lệnh vào ngày</p>
            <p className="big-text">{data.end_code_date?.trim()}</p>
          </style.Content>
        </style.ContentOuterWrapper>

        <style.BackgroundImage>
          <img src="./images/season-4-2.jpg" alt="" />
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
          <img src="./images/season-4-3.jpg" alt="" />
        </style.BackgroundImage>
        <style.HscLogoHead src="./images/white-logo.svg" />
        {/* <ShareGroup /> */}
      </style.Slide>
    </style.StyledCarousel>
  );
};

export default SeasonPackage4;
