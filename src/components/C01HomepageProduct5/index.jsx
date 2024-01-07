import React from "react";

import { Button, Img, Text } from "components";

const C01HomepageProduct5 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[172px] relative w-full">
          <Img
            className="absolute h-[172px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_image_17.png"
            alt="image"
          />
          <div className="absolute bottom-[31%] flex flex-row gap-2 items-center justify-center right-[7%] w-auto">
            <Button
              className="flex h-12 items-center justify-center w-12"
              shape="circle"
              color="white_A700"
              size="xl"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_favorite_gray_900.svg"
                alt="favorite"
              />
            </Button>
            <Button
              className="flex h-12 items-center justify-center w-12"
              shape="circle"
              color="white_A700"
              size="xl"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_cart_gray_900.svg"
                alt="cart"
              />
            </Button>
            <Button
              className="flex h-12 items-center justify-center w-12"
              shape="circle"
              color="deep_orange_A200"
              size="xl"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_eye_white_a700.svg"
                alt="eye"
              />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <div className="flex flex-row gap-1 items-start justify-start w-auto">
            <div className="flex flex-row items-start justify-start w-auto">
              <Img
                className="h-4 w-4"
                src="images/img_signal_deep_orange_a200.svg"
                alt="signal"
              />
              <Img
                className="h-4 w-4"
                src="images/img_signal_deep_orange_a200.svg"
                alt="signal_One"
              />
              <Img
                className="h-4 w-4"
                src="images/img_signal_deep_orange_a200.svg"
                alt="signal_Two"
              />
              <Img
                className="h-4 w-4"
                src="images/img_signal_deep_orange_a200.svg"
                alt="signal_Three"
              />
              <Img
                className="h-4 w-4"
                src="images/img_signal_deep_orange_a200.svg"
                alt="signal_Four"
              />
            </div>
            <Text
              className="text-blue_gray-400 text-xs w-auto"
              size="txtPublicSansRegular12"
            >
              {props?.text56767}
            </Text>
          </div>
          <Text
            className="leading-[20.00px] max-w-[202px] md:max-w-full text-gray-900 text-sm"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.textdell215inchfull}
          </Text>
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-blue-500 text-sm w-auto"
              size="txtPublicSansSemiBold14Blue500"
            >
              {props?.textprice}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

C01HomepageProduct5.defaultProps = {
  text56767: "(426)",
  textdell215inchfull: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
  textprice: "$250",
};

export default C01HomepageProduct5;
