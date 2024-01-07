import React from "react";

import { Img, Text } from "components";

const C01HomepageFeature1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img className="h-10 w-10" src="images/img_ticket.svg" alt="ticket" />
        <div className="flex flex-col gap-1 items-start justify-start w-auto">
          <Text
            className="text-gray-900 text-sm uppercase w-auto"
            size="txtPublicSansMedium14Gray900"
          >
            {props?.duration}
          </Text>
          <Text
            className="text-blue_gray-600 text-sm w-auto"
            size="txtPublicSansRegular14Bluegray600"
          >
            {props?.p100moneyback}
          </Text>
        </div>
      </div>
    </>
  );
};

C01HomepageFeature1.defaultProps = {
  duration: "24 Hours Return",
  p100moneyback: "100% money-back guarantee",
};

export default C01HomepageFeature1;
