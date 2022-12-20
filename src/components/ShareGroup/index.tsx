import React from "react";
import * as Style from "./styles";

const ShareGroup = ({ link }) => {
  const handleShare = (e) => {
    event.stopPropagation();
    e.preventDefault() 
    if (navigator.share) {
      navigator.share({
        url: link,
      });
    }
  };

  return (
    <Style.Wrapper>
      <Style.ShareList>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
          target="_blank"
          rel="noreferrer"
        >
          <Style.SingleIcon src="images/fb-icon.svg" />
        </a>
        <Style.SingleIcon src="images/zalo-icon.svg" onClick={handleShare} />
        <Style.SingleIcon src="images/copy-icon.svg" onClick={handleShare} />
      </Style.ShareList>
      <Style.SingleIcon src="images/share-icon.svg" onClick={handleShare} />
    </Style.Wrapper>
  );
};
export default ShareGroup;
