import React, { useState, useEffect, useRef } from "react";
import * as Style from "./styles";
import { useRouter } from "next/router";
import Script from "next/script";

interface IPos {
  top:number,
  left:number
}
const ShareGroup = () => {
  const router = useRouter();
  const shareRef = useRef(null);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [sharePos, setSharePos] = useState<IPos>({top:-999, left:-999});
  const shareLink = `${window.location.origin}/?d=${router.query.d}`;
  const handleClickShare = () => {
    const shareElem = shareRef.current;
    if(shareElem){
      if(sharePos.top === -999){
        setSharePos({
          top:-60,
          left:-52
        })
      }
      else{
        setSharePos({top:-999,left:-999})
      }
    }
    
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}${router.pathname}/?d=${router.query.d}`
    );
    setIsShow(true);
    setTimeout(() => {
      setIsShow(false);
    }, 1000);
  };

  return (
    <React.Fragment>
      <Style.Wrapper>
        <Style.ShareList isShow={!!(sharePos.top !== -999)} style={sharePos}>
          <a
            style={{ height: 40 }}
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`}
            target="_blank"
            rel="noreferrer"
          >
            <Style.SingleIcon src="images/fb-icon.svg" />
          </a>
          <div
            className="zalo-share-button"
            data-href={shareLink}
            data-oaid="2429252483303962412"
            data-customize="true"
            data-layout="4"
            data-color="blue"
            style={{ height: 40, marginRight: 8 }}
          >
            <Style.SingleIcon src="images/zalo-icon.svg" />
          </div>
          <Style.SingleIcon
            src="images/copy-icon.svg"
            onClick={handleCopyUrl}
          />
        </Style.ShareList>
        <Style.SingleIcon
          src="images/share-icon.svg"
          onClick={handleClickShare}
          ref={shareRef}
        />
        <Style.CopyNoti isShow={isShow}>
          <p>Copied</p>
        </Style.CopyNoti>
      </Style.Wrapper>
      <Script src="https://sp.zalo.me/plugins/sdk.js" />
    </React.Fragment>
  );
};
export default ShareGroup;
