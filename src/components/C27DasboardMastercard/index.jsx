import React from "react";

import { Img, Text } from "components";

const C27DasboardMastercard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <Text
              className="text-base text-white-A700"
              size="txtPublicSansRegular16WhiteA700"
            >
              {props?.price}
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_user_white_a700_24x24.svg"
              alt="user"
            />
          </div>
          <div className="flex flex-col gap-2 items-start justify-start mt-6 w-auto">
            <Text
              className="text-[11px] text-white-A700_99 uppercase w-auto"
              size="txtPublicSansMedium11"
            >
              {props?.cardnumber}
            </Text>
            <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtPublicSansRegular20WhiteA700"
              >
                {props?.cardnumber1}
              </Text>
              <Img
                className="h-5 w-5"
                src="images/img_grid_white_a700.svg"
                alt="grid"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between mt-2 w-full">
            <Img
              className="h-10 w-10"
              src="images/img_mastercard21.svg"
              alt="mastercardTwentyOne"
            />
            <Text
              className="text-sm text-white-A700"
              size="txtPublicSansMedium14"
            >
              {props?.username}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

C27DasboardMastercard.defaultProps = {
  price: "$87, 583.00 USD",
  cardnumber: "Card number",
  cardnumber1: "****  ****  ****  1761",
  username: "Kevin Gilbert",
};

export default C27DasboardMastercard;
