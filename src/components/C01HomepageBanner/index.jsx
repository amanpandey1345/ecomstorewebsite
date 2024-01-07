import React from "react";

import { Button, Img, Text } from "components";

const C01HomepageBanner = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-center justify-center w-auto">
          <Img
            className="h-[108px] md:h-auto object-cover w-[108px]"
            src="images/img_image_108x108.png"
            alt="image_Four"
          />
          <div className="flex flex-col gap-4 items-center justify-center w-auto">
            <div className="flex flex-col gap-2 items-center justify-center w-auto">
              <Text
                className="leading-[32.00px] max-w-[248px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900"
                size="txtPublicSansSemiBold28Gray900"
              >
                {props?.productname}
              </Text>
              <Text
                className="leading-[24.00px] max-w-[248px] md:max-w-full text-base text-blue_gray-700 text-center"
                size="txtPublicSansRegular16Bluegray700"
              >
                {props?.productdescription}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <Text
                className="text-blue_gray-700 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray700"
              >
                {props?.pricelabel}
              </Text>
              <Button
                className="!text-gray-900 cursor-pointer font-publicsans font-semibold min-w-[103px] rounded-[3px] text-base text-center"
                shape="round"
                color="white_A700"
                size="md"
                variant="fill"
              >
                {props?.pricebutton}
              </Button>
            </div>
          </div>
        </div>
        <Button
          className="cursor-pointer flex items-center justify-center w-[248px]"
          rightIcon={
            <Img
              className="h-5 ml-2"
              src="images/img_arrowleft_white_a700.svg"
              alt="arrow_left"
            />
          }
          shape="round"
          color="deep_orange_A200"
          size="xl"
          variant="fill"
        >
          <div className="font-bold font-publicsans text-left text-sm tracking-[0.17px] uppercase">
            {props?.shopNowFive}
          </div>
        </Button>
      </div>
    </>
  );
};

C01HomepageBanner.defaultProps = {
  productname: "Xiaomi True Wireless Earbuds",
  productdescription:
    "Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.",
  pricelabel: "Only for:",
  pricebutton: "$299 USD",
  shopNowFive: "Shop now",
};

export default C01HomepageBanner;
