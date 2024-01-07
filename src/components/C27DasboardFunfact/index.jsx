import React from "react";

import { Button, Img, Text } from "components";

const C27DasboardFunfact = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="flex h-14 items-center justify-center w-14"
          shape="round"
          color="white_A700"
          size="xl"
          variant="fill"
        >
          <Img className="h-8" src="images/img_icon_blue_500.svg" alt="icon" />
        </Button>
        <div className="flex flex-col gap-1 items-start justify-start w-auto">
          <Text
            className="text-gray-900 text-xl w-auto"
            size="txtPublicSansSemiBold20Gray900"
          >
            {props?.numbertext}
          </Text>
          <Text
            className="text-blue_gray-700 text-sm w-auto"
            size="txtPublicSansRegular14Bluegray700"
          >
            {props?.labeltext}
          </Text>
        </div>
      </div>
    </>
  );
};

C27DasboardFunfact.defaultProps = {
  numbertext: "154",
  labeltext: "Total Orders",
};

export default C27DasboardFunfact;
