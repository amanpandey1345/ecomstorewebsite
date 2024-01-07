import React from "react";

import { Img, Text } from "components";

const C01HomepageFeature2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-10 w-10"
          src="images/img_computer.svg"
          alt="computer"
        />
        <div className="flex flex-col gap-1 items-start justify-start w-auto">
          <Text
            className="text-gray-900 text-sm uppercase w-auto"
            size="txtPublicSansMedium14Gray900"
          >
            {props?.securepaymenttext}
          </Text>
          <Text
            className="text-blue_gray-600 text-sm w-auto"
            size="txtPublicSansRegular14Bluegray600"
          >
            {props?.yourmoneyissafetext}
          </Text>
        </div>
      </div>
    </>
  );
};

C01HomepageFeature2.defaultProps = {
  securepaymenttext: "Secure Payment",
  yourmoneyissafetext: "Your money is safe",
};

export default C01HomepageFeature2;
