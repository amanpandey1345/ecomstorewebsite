import React from "react";

import { Img, Text } from "components";

const C01HomepageFeature3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-10 w-10"
          src="images/img_duotoneheadphones.svg"
          alt="duotoneheadphon"
        />
        <div className="flex flex-col gap-1 items-start justify-start w-auto">
          <Text
            className="text-gray-900 text-sm uppercase w-auto"
            size="txtPublicSansMedium14Gray900"
          >
            {props?.supporttext}
          </Text>
          <Text
            className="text-blue_gray-600 text-sm w-auto"
            size="txtPublicSansRegular14Bluegray600"
          >
            {props?.contacttext}
          </Text>
        </div>
      </div>
    </>
  );
};

C01HomepageFeature3.defaultProps = {
  supporttext: "Support 24/7",
  contacttext: "Live contact/message",
};

export default C01HomepageFeature3;
