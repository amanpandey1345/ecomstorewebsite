import React from "react";

import { Button, Img, Text } from "components";

const C07ShopPageBanner = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[180px] md:h-auto object-cover w-[180px]"
          src="images/img_image7_180x180.png"
          alt="imageSeven"
        />
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <div className="flex flex-col items-center justify-center w-auto">
            <div className="flex flex-col gap-4 items-center justify-center w-auto">
              <div className="flex flex-col gap-2 items-center justify-center w-auto">
                <Img
                  className="h-[51px] md:h-auto object-cover w-[132px] sm:w-full"
                  src="images/img_image8_51x132.png"
                  alt="imageEight"
                />
                <Text
                  className="leading-[32.00px] max-w-[248px] md:max-w-full text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl"
                  size="txtPublicSansSemiBold24Gray900"
                >
                  {props?.heavyonfeaturestext}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Text
                  className="text-blue_gray-700 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray700"
                >
                  {props?.onlyfortext}
                </Text>
                <Button
                  className="cursor-pointer font-publicsans font-semibold min-w-[103px] rounded-[3px] text-base text-center"
                  shape="round"
                  color="amber_A100"
                  size="md"
                  variant="fill"
                >
                  {props?.pricebutton}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start justify-start w-auto">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[248px]"
              leftIcon={
                <Img
                  className="h-5 mr-2"
                  src="images/img_cart_white_a700.svg"
                  alt="cart"
                />
              }
              shape="round"
              color="deep_orange_A200"
              size="xl"
              variant="fill"
            >
              <div className="font-bold font-publicsans text-left text-sm tracking-[0.17px] uppercase">
                {props?.addtocartbutton}
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center outline-[2px] w-[248px]"
              rightIcon={
                <Img
                  className="h-5 ml-2"
                  src="images/img_arrowleft_deep_orange_a200.svg"
                  alt="arrow_left"
                />
              }
              shape="round"
              color="deep_orange_A200"
              size="xl"
              variant="outline"
            >
              <div className="!text-deep_orange-A200 font-bold font-publicsans text-left text-sm tracking-[0.17px] uppercase">
                {props?.viewdetailsbutton}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

C07ShopPageBanner.defaultProps = {
  heavyonfeaturestext: (
    <>
      Heavy on Features.
      <br />
      Light on Price.
    </>
  ),
  onlyfortext: "Only for:",
  pricebutton: "$299 USD",
  addtocartbutton: "Add to Cart",
  viewdetailsbutton: "View Details",
};

export default C07ShopPageBanner;
