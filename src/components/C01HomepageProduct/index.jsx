import React from "react";

import { Button, Img, Text } from "components";

const C01HomepageProduct = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-48 md:h-[188px] relative w-[99%]">
          <Img
            className="absolute h-[188px] inset-[0] justify-center m-auto object-cover w-[99%]"
            alt="image_Two"
            src={props?.imageTwo}
          />
          <Button
            className="absolute cursor-pointer font-publicsans font-semibold left-[0] min-w-[70px] text-center text-xs top-[0]"
            shape="round"
            color="amber_A200"
            size="md"
            variant="fill"
          >
            {props?.p19off}
          </Button>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start mb-1 w-auto">
          <Text
            className="leading-[20.00px] max-w-[216px] md:max-w-full text-gray-900 text-sm"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.dell215inchfullone}
          </Text>
          <div className="flex flex-row gap-1 items-start justify-start w-auto">
            {!!props?.priceTwo ? (
              <Text
                className="line-through text-blue_gray-300 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray300"
              >
                {props?.priceTwo}
              </Text>
            ) : null}
            <Text
              className="text-blue-500 text-sm w-auto"
              size="txtPublicSansSemiBold14Blue500"
            >
              {props?.priceThree}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

C01HomepageProduct.defaultProps = {
  imageTwo: "images/img_image_2.png",
  p19off: "19% OFF",
  dell215inchfullone: "4K UHD LED Smart TV with Chromecast Built-in",
  priceThree: "$1,50",
};

export default C01HomepageProduct;
