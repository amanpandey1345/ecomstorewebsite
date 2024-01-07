import React from "react";

import { Img, Text } from "components";

const C29DasboardOrderDetailProduct = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-auto sm:w-full">
          <Img
            className="h-20 md:h-auto object-cover rounded w-20"
            src="images/img_image_49.png"
            alt="image"
          />
          <div className="flex flex-col gap-1 items-start justify-start w-auto">
            <Text
              className="text-blue-500 text-xs w-auto"
              size="txtPublicSansSemiBold12Blue500"
            >
              {props?.smartphone}
            </Text>
            <Text
              className="leading-[20.00px] max-w-[304px] md:max-w-full text-gray-900 text-sm"
              size="txtPublicSansRegular14Gray900"
            >
              {props?.producttitle}
            </Text>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-start justify-start w-auto sm:w-full">
          <Text
            className="text-blue_gray-700 text-sm w-auto"
            size="txtPublicSansRegular14Bluegray700"
          >
            {props?.productprice}
          </Text>
          <Text
            className="text-blue_gray-700 text-sm w-auto"
            size="txtPublicSansRegular14Bluegray700"
          >
            {props?.productquantity}
          </Text>
          <Text
            className="text-gray-900 text-sm w-auto"
            size="txtPublicSansMedium14Gray900"
          >
            {props?.producttotalprice}
          </Text>
        </div>
      </div>
    </>
  );
};

C29DasboardOrderDetailProduct.defaultProps = {
  smartphone: "ACCESSORIES",
  producttitle:
    "Tech21 Evo Clear for Google Pixel 6 Pro – Crystal Clear Phone Case with 12ft Multi-Dr...",
  productprice: "$39",
  productquantity: "x1",
  producttotalprice: "$39",
};

export default C29DasboardOrderDetailProduct;
