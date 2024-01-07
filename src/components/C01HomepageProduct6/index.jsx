import React from "react";

import { Img, Text } from "components";

const C01HomepageProduct6 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-20 md:h-auto object-cover w-20"
          alt="image"
          src={props?.image}
        />
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="leading-[20.00px] max-w-[196px] md:max-w-full text-gray-900 text-sm"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.title}
          </Text>
          <div className="flex flex-col items-start justify-start w-auto">
            <Text
              className="text-blue-500 text-sm w-auto"
              size="txtPublicSansSemiBold14Blue500"
            >
              {props?.price}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

C01HomepageProduct6.defaultProps = {
  image: "images/img_image_21.png",
  title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
  price: "$1,500",
};

export default C01HomepageProduct6;
