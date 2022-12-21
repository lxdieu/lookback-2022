import React from 'react'
import _ from 'lodash';
const ZaloShareButton = ({ url }: { url: string }) => {
    return (
        <div dangerouslySetInnerHTML={
            {
                __html: `<div class="zalo-share-button" data-href="${url}" data-oaid="2429252483303962412" data-layout="4" data-color="blue" data-customize="false"></div>`
            }
        }
        ></div>
    )
}
export default ZaloShareButton