import React from "react";

import { Img, Text } from "components";

const C01HomepageFeature = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img className="h-10 w-10" src="images/img_user.svg" alt="user" />
        <div className="flex flex-col gap-1 items-start justify-start w-auto">
          <Text
            className="text-gray-900 text-sm uppercase w-auto"
            size="txtPublicSansMedium14Gray900"
          >
            {props?.fasteddelivery}
          </Text>
          <Text
            className="text-blue_gray-600 text-sm w-auto"
            size="txtPublicSansRegular14Bluegray600"
          >
            {props?.deliveryin24h}
          </Text>
        </div>
      </div>
    </>
  );
};

C01HomepageFeature.defaultProps = {
  fasteddelivery: "Fasted Delivery",
  deliveryin24h: "Delivery in 24/H",
};

export default C01HomepageFeature;
