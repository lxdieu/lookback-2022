import { useEffect, useState } from "react";
import * as style from "./styles";

const coverList = ["pack_1", "pack_2", "pack_3", "pack_4"];
const Opening = ({ handleSelectPack, data, packOpened }) => {
  const renderCover = coverList.map((item, idx) => (
    <style.PackCover
      key={`cover_img_${idx}`}
      onClick={() => handleSelectPack(idx)}
    >
      <img
        src={`images/${packOpened.includes(idx) ? "open" : "close"}-pack-${
          idx + 1
        }.png`}
      />
    </style.PackCover>
  ));
  return (
    <style.Wrapper>
      <style.ContentWrapper>
        <style.ContentBackground src="images/opening-bg.png" />
        <style.Logo src="images/logo.svg" />
        <style.Text>
          Xin chào <style.TextBold>{data.AccountName?.trim()}</style.TextBold>
        </style.Text>
        <style.Text>Hãy chọn bất kỳ bao lì xì bạn muốn nhé!</style.Text>
        <style.ListCovers>{renderCover}</style.ListCovers>
      </style.ContentWrapper>
    </style.Wrapper>
  );
};
export default Opening;
