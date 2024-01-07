import React from "react";

import { Button, Img, Text } from "components";

const C01HomepageProduct3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-44 md:h-[172px] relative w-[99%]">
          <Img
            className="absolute h-[172px] inset-[0] justify-center m-auto object-cover w-[99%]"
            alt="image"
            src={props?.image}
          />
          <Button
            className="absolute cursor-pointer font-publicsans font-semibold left-[0] min-w-[73px] text-center text-xs top-[0]"
            shape="round"
            color="amber_A200"
            size="md"
            variant="fill"
          >
            {props?.p25off}
          </Button>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start mb-1 w-auto">
          <div className="flex flex-row gap-1 items-start justify-start w-auto">
            <div className="flex flex-row items-start justify-start w-auto">
              <Img className="h-4 w-4" alt="signal" src={props?.signal} />
              <Img
                className="h-4 w-4"
                alt="signal_One"
                src={props?.signalOne}
              />
              <Img
                className="h-4 w-4"
                alt="signal_Two"
                src={props?.signalTwo}
              />
              <Img
                className="h-4 w-4"
                alt="signal_Three"
                src={props?.signalThree}
              />
              <Img
                className="h-4 w-4"
                alt="signal_Four"
                src={props?.signalFour}
              />
            </div>
            <Text
              className="text-blue_gray-400 text-xs w-auto"
              size="txtPublicSansRegular12"
            >
              {props?.p56767}
            </Text>
          </div>
          <Text
            className="leading-[20.00px] max-w-[202px] md:max-w-full text-gray-900 text-sm"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.dell215inchfull}
          </Text>
          <div className="flex flex-row gap-1 items-start justify-start w-auto">
            {!!props?.price ? (
              <Text
                className="line-through text-blue_gray-300 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray300"
              >
                {props?.price}
              </Text>
            ) : null}
            <Text
              className="text-blue-500 text-sm w-auto"
              size="txtPublicSansSemiBold14Blue500"
            >
              {props?.priceOne}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

C01HomepageProduct3.defaultProps = {
  image: "images/img_image_16.png",
  p25off: "25% OFF",
  signal: "images/img_signal_deep_orange_a200.svg",
  signalOne: "images/img_signal_deep_orange_a200.svg",
  signalTwo: "images/img_signal_deep_orange_a200.svg",
  signalThree: "images/img_signal_deep_orange_a200.svg",
  signalFour: "images/img_signal_white_a700.svg",
  p56767: "(877)",
  dell215inchfull:
    "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
  priceOne: "$1,200",
};

export default C01HomepageProduct3;
