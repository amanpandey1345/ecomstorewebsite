import React from "react";

import { Img, Text } from "components";

const C01HomepageProduct1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[188px] md:h-auto object-cover w-full"
          alt="image_One"
          src={props?.image}
        />
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="leading-[20.00px] max-w-[216px] md:max-w-full text-gray-900 text-sm"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.title}
          </Text>
          <div className="flex flex-row gap-1 items-start justify-start w-auto">
            {!!props?.originalprice ? (
              <Text
                className="line-through text-blue_gray-300 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray300"
              >
                {props?.originalprice}
              </Text>
            ) : null}
            <Text
              className="text-blue-500 text-sm w-auto"
              size="txtPublicSansSemiBold14Blue500"
            >
              {props?.discountedprice}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

C01HomepageProduct1.defaultProps = {
  image: "images/img_image_7.png",
  title: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM",
  discountedprice: "$70",
};

export default C01HomepageProduct1;
