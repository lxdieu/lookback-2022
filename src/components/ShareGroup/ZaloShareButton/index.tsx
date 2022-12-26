import React from "react";
import _ from "lodash";
const ZaloShareButton = ({ url }: { url: string }, children) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="zalo-share-button" data-href="${url}" data-oaid="2429252483303962412" data-layout="4" data-color="blue" data-customize="true"></div>`,
      }}
    >
      {children}
    </div>
  );
};
export default ZaloShareButton;
