import React from "react";

import { Button, Img, Text } from "components";

const C28DasboardOrderHistoryOrderhistory = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-start justify-start w-full">
          <Button
            className="!text-gray-900 cursor-pointer font-publicsans font-semibold min-w-[102px] rounded-[3px] text-center text-xs"
            shape="round"
            color="yellow_100"
            size="xs"
            variant="fill"
          >
            {props?.inprogressbutton}
          </Button>
          <div className="flex flex-col gap-1.5 items-start justify-start w-full">
            <div className="flex flex-row items-start justify-start w-full">
              <Text
                className="text-blue_gray-700 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray700"
              >
                {props?.orderidtext}
              </Text>
              <Text
                className="flex-1 text-gray-900 text-sm w-auto"
                size="txtPublicSansSemiBold14Gray900"
              >
                {props?.languagetext}
              </Text>
            </div>
            <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-400 text-xs w-auto"
                size="txtPublicSansRegular12"
              >
                {props?.datetimetext}
              </Text>
              <Text
                className="text-blue_gray-400 text-xs w-auto"
                size="txtPublicSansRegular12"
              >
                {props?.bulletpointtext}
              </Text>
              <Text
                className="text-blue_gray-400 text-xs w-auto"
                size="txtPublicSansRegular12"
              >
                {props?.productscountertext}
              </Text>
            </div>
          </div>
          <Text
            className="text-blue-500 text-sm w-full"
            size="txtPublicSansSemiBold14Blue500"
          >
            {props?.pricetext}
          </Text>
        </div>
        <Button
          className="flex h-12 items-center justify-center w-12"
          shape="circle"
          color="orange_50"
          size="xl"
          variant="outline"
        >
          <Img
            className="h-6"
            src="images/img_arrowleft_deep_orange_a200.svg"
            alt="arrowleft_Two"
          />
        </Button>
      </div>
    </>
  );
};

C28DasboardOrderHistoryOrderhistory.defaultProps = {
  inprogressbutton: "IN PROGRESS",
  orderidtext: "Order ID:",
  languagetext: " #71667167",
  datetimetext: "Dec 7, 2019 23:26",
  bulletpointtext: "•",
  productscountertext: "2 Products",
  pricetext: "$160.00 USD",
};

export default C28DasboardOrderHistoryOrderhistory;
