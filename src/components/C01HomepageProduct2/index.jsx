import React from "react";

import { Button, Img, Text } from "components";

const C01HomepageProduct2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[188px] relative w-full">
          <Img
            className="absolute h-[188px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_image_3.png"
            alt="image_Three"
          />
          <div className="absolute bg-black-900_33 flex flex-col h-full inset-[0] items-center justify-center m-auto p-7 sm:px-5 w-full">
            <div className="flex flex-row gap-2 items-start justify-start my-[42px] w-auto">
              <Button
                className="flex h-12 items-center justify-center w-12"
                shape="circle"
                color="deep_orange_A200"
                size="xl"
                variant="fill"
              >
                <Img
                  className="h-6"
                  src="images/img_favorite.svg"
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
                color="white_A700"
                size="xl"
                variant="fill"
              >
                <Img className="h-6" src="images/img_eye.svg" alt="eye" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <Text
            className="leading-[20.00px] max-w-[216px] md:max-w-full text-gray-900 text-sm"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.cameraname}
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

C01HomepageProduct2.defaultProps = {
  cameraname: "Sony DSCHX8 High Zoom Point & Shoot Camera",
  price: "$1,200",
};

export default C01HomepageProduct2;
