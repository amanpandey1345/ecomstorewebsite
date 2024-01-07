import React from "react";

import { Img, Text } from "components";

const C01HomepageProduct4 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[172px] md:h-auto object-cover w-full"
          alt="image"
          src={props?.userimage}
        />
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <div className="flex flex-row gap-1 items-start justify-start w-auto">
            <div className="flex flex-row items-start justify-start w-auto">
              <Img className="h-4 w-4" alt="signal" src={props?.signalimage} />
              <Img
                className="h-4 w-4"
                alt="signal_One"
                src={props?.signaloneimage}
              />
              <Img
                className="h-4 w-4"
                alt="signal_Two"
                src={props?.signaltwoimage}
              />
              <Img
                className="h-4 w-4"
                alt="signal_Three"
                src={props?.signalthreeimage}
              />
              <Img
                className="h-4 w-4"
                alt="signal_Four"
                src={props?.signalfourimage}
              />
            </div>
            <Text
              className="text-blue_gray-400 text-xs w-auto"
              size="txtPublicSansRegular12"
            >
              {props?.text798}
            </Text>
          </div>
          <Text
            className="leading-[20.00px] max-w-[202px] md:max-w-full text-gray-900 text-sm"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.textdescription}
          </Text>
          <div className="flex flex-row gap-1 items-start justify-start w-auto">
            {!!props?.textprice ? (
              <Text
                className="line-through text-blue_gray-300 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray300"
              >
                {props?.textprice}
              </Text>
            ) : null}
            <Text
              className="text-blue-500 text-sm w-auto"
              size="txtPublicSansSemiBold14Blue500"
            >
              {props?.textpriceone}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

C01HomepageProduct4.defaultProps = {
  userimage: "images/img_image_31.png",
  signalimage: "images/img_signal_deep_orange_a200.svg",
  signaloneimage: "images/img_signal_deep_orange_a200.svg",
  signaltwoimage: "images/img_signal_deep_orange_a200.svg",
  signalthreeimage: "images/img_signal_deep_orange_a200.svg",
  signalfourimage: "images/img_signal_deep_orange_a200.svg",
  text798: "(798)",
  textdescription: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
  textpriceone: "$80",
};

export default C01HomepageProduct4;
