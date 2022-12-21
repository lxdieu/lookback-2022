import React, { useState } from "react";
import * as Style from "./styles";
import { useRouter } from "next/router";
import Script from "next/script";
import ZaloShareButton from "./ZaloShareButton";
const ShareGroup = ({ link }) => {
  const router = useRouter();
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleShare = (e) => {
    if (navigator.share) {
      navigator.share({
        url: link,
      });
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
        <Style.ShareList>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
            target="_blank"
            rel="noreferrer"
          >
            <Style.SingleIcon src="images/fb-icon.svg" />
          </a>

          {/* <ZaloShareButton url={link} /> */}
          <div
            className="zalo-share-button"
            data-href="${url}"
            data-oaid="2429252483303962412"
            data-customize="false"
            style={{ marginRight: 8 }}
          >
            <Style.SingleIcon src="images/zalo-icon.svg" />
          </div>
          <Style.SingleIcon
            src="images/copy-icon.svg"
            onClick={handleCopyUrl}
          />
        </Style.ShareList>
        <Style.SingleIcon src="images/share-icon.svg" onClick={handleShare} />
        <Style.CopyNoti isShow={isShow}>
          <p>Copied</p>
        </Style.CopyNoti>
      </Style.Wrapper>
      <Script src="https://sp.zalo.me/plugins/sdk.js" />
    </React.Fragment>
  );
};
export default ShareGroup;
