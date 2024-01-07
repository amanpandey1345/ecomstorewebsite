import React from "react";

import { Img, Text } from "components";

const C27DasboardVisa = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gradient1  flex flex-col items-center justify-start ml-[undefinedpx] my-auto p-6 sm:px-5 rounded w-[77%] z-[1]">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-row items-center justify-between w-full">
              <Text
                className="text-base text-white-A700"
                size="txtPublicSansRegular16WhiteA700"
              >
                {props?.pricetext}
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_user_white_a700_24x24.svg"
                alt="user_One"
              />
            </div>
            <div className="flex flex-col gap-2 items-start justify-start mt-6 w-auto">
              <Text
                className="text-[11px] text-white-A700_99 uppercase w-auto"
                size="txtPublicSansMedium11"
              >
                {props?.cardnumberOne}
              </Text>
              <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtPublicSansRegular20WhiteA700"
                >
                  {props?.cardnumbertext}
                </Text>
                <Img
                  className="h-5 w-5"
                  src="images/img_grid_white_a700.svg"
                  alt="grid_One"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between mt-2 w-full">
              <Img
                className="h-10 w-10"
                alt="settings_Two"
                src={props?.settingsTwo}
              />
              <Text
                className="text-sm text-white-A700"
                size="txtPublicSansMedium14"
              >
                {props?.usernametext}
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-end justify-start ml-[-48px] mt-12 py-2 rounded-sm shadow-bs7 w-auto z-[1]">
          <div className="flex flex-col items-start justify-start p-[9px] w-full">
            <Text
              className="ml-1.5 md:ml-[0] text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.editcardtext}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start p-[9px] w-full">
            <Text
              className="ml-1.5 md:ml-[0] text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.deletecardtext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

C27DasboardVisa.defaultProps = {
  pricetext: "$95, 400.00 USD",
  cardnumberOne: "Card number",
  cardnumbertext: "****  ****  ****  3814",
  settingsTwo: "images/img_settings_white_a700.svg",
  usernametext: "Kevin Gilbert",
  editcardtext: "Edit Card",
  deletecardtext: "Delete Card",
};

export default C27DasboardVisa;
