import React from "react";

import { Button, Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="bg-gray-900 flex md:flex-col flex-row gap-6 items-start justify-start md:px-10 sm:px-5 px-[300px] py-[72px] w-auto md:w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-auto">
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <div className="bg-deep_orange-A200 h-12 rounded-[50%] w-12"></div>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.64px] w-auto"
                  size="txtPublicSansBold32"
                >
                  E.com
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-400 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray400"
                  >
                    Customer Supports:
                  </Text>
                  <Text
                    className="text-lg text-white-A700 w-auto"
                    size="txtPublicSansMedium18WhiteA700"
                  >
                    (629) 555-0129
                  </Text>
                </div>
                <Text
                  className="leading-[24.00px] max-w-[248px] md:max-w-full text-base text-blue_gray-200"
                  size="txtPublicSansRegular16Bluegray200"
                >
                  4517 Washington Ave. Manchester, Kentucky 39495
                </Text>
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtPublicSansMedium16WhiteA700"
                >
                  <span className="text-white-A700 font-publicsans text-left font-medium">
                    info@e
                  </span>
                  <span className="text-white-A700 font-publicsans text-left font-bold">
                    com
                  </span>
                  <span className="text-white-A700 font-publicsans text-left font-medium">
                    .com
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-auto">
              <Text
                className="text-base text-white-A700 uppercase w-auto"
                size="txtPublicSansMedium16WhiteA700"
              >
                Top Category
              </Text>
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansMedium14Bluegray300"
                  >
                    Computer & Laptop
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansMedium14Bluegray300"
                  >
                    SmartPhone
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansMedium14Bluegray300"
                  >
                    Headphone
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start py-1.5 w-auto">
                  <Line className="bg-amber-500 h-0.5 w-[22%]" />
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtPublicSansMedium14"
                  >
                    Accessories
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansMedium14Bluegray300"
                  >
                    Camera & Photo
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansMedium14Bluegray300"
                  >
                    TV & Homes
                  </Text>
                </div>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[153px]"
                  rightIcon={
                    <Img
                      className="h-5 ml-2"
                      src="images/img_arrowleft_amber_500.svg"
                      alt="arrow_left"
                    />
                  }
                  shape="square"
                  color="gray_900"
                  size="sm"
                  variant="fill"
                >
                  <div className="!text-amber-500 font-medium font-publicsans text-left text-sm">
                    Browse All Product
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-auto">
              <Text
                className="text-base text-white-A700 uppercase w-auto"
                size="txtPublicSansMedium16WhiteA700"
              >
                Quick links
              </Text>
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansMedium14Bluegray300"
                  >
                    Shop Product
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansMedium14Bluegray300"
                  >
                    Shoping Cart
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansMedium14Bluegray300"
                  >
                    Wishlist
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansMedium14Bluegray300"
                  >
                    Compare
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansMedium14Bluegray300"
                  >
                    Track Order
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansMedium14Bluegray300"
                  >
                    Customer Help
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-blue_gray-300 text-sm w-auto"
                    size="txtPublicSansMedium14Bluegray300"
                  >
                    About Us
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
              <Text
                className="text-base text-white-A700 uppercase w-auto"
                size="txtPublicSansMedium16WhiteA700"
              >
                Download APp
              </Text>
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <div className="bg-blue_gray-900 flex flex-row gap-4 items-center justify-center px-5 py-4 rounded-[3px] w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_icongoogleplay.svg"
                    alt="icongoogleplay"
                  />
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-[11px] text-white-A700 w-auto"
                      size="txtInterRegular11"
                    >
                      Get it now
                    </Text>
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtInterSemiBold14"
                    >
                      Google Play
                    </Text>
                  </div>
                </div>
                <div className="bg-blue_gray-900 flex flex-row gap-4 items-center justify-center px-5 py-4 rounded-[3px] w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_applenegative.svg"
                    alt="applenegative"
                  />
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-[11px] text-white-A700 w-auto"
                      size="txtInterRegular11"
                    >
                      Get it now
                    </Text>
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtInterSemiBold14"
                    >
                      App Store
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
              <Text
                className="text-base text-white-A700 uppercase w-auto"
                size="txtPublicSansMedium16WhiteA700"
              >
                Popular Tag
              </Text>
              <ul className="flex flex-col gap-2 items-start justify-start w-auto md:w-full common-column-list">
                <li>
                  <div className="flex flex-row gap-2 items-start justify-start">
                    <Button
                      className="!text-white-A700 cursor-pointer font-medium font-publicsans min-w-[63px] text-center text-sm"
                      shape="round"
                      color="blue_gray_900"
                      size="md"
                      variant="outline"
                    >
                      Game
                    </Button>
                    <Button
                      className="!text-white-A700 cursor-pointer font-medium font-publicsans min-w-[69px] text-center text-sm"
                      shape="round"
                      color="blue_gray_900"
                      size="md"
                      variant="outline"
                    >
                      iPhone
                    </Button>
                    <Button
                      className="!text-white-A700 cursor-pointer font-medium font-publicsans min-w-[43px] text-center text-sm"
                      shape="round"
                      color="blue_gray_900"
                      size="md"
                      variant="outline"
                    >
                      TV
                    </Button>
                    <Button
                      className="!text-white-A700 cursor-pointer font-medium font-publicsans min-w-[113px] text-center text-sm"
                      shape="round"
                      color="blue_gray_900"
                      size="md"
                      variant="outline"
                    >
                      Asus Laptops
                    </Button>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2 items-start justify-start">
                    <Button
                      className="!text-white-A700 cursor-pointer font-medium font-publicsans min-w-[85px] text-center text-sm"
                      shape="round"
                      color="blue_gray_900"
                      size="md"
                      variant="outline"
                    >
                      Macbook{" "}
                    </Button>
                    <Button
                      className="!text-white-A700 cursor-pointer font-medium font-publicsans min-w-[53px] text-center text-sm"
                      shape="round"
                      color="blue_gray_900"
                      size="md"
                      variant="outline"
                    >
                      SSD
                    </Button>
                    <Button
                      className="!text-white-A700 border border-solid border-white-A700 cursor-pointer font-medium font-publicsans min-w-[117px] text-center text-sm"
                      shape="round"
                      color="blue_gray_900"
                      size="md"
                      variant="fill"
                    >
                      Graphics Card{" "}
                    </Button>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2 items-start justify-start">
                    <Button
                      className="!text-white-A700 cursor-pointer font-medium font-publicsans min-w-[102px] text-center text-sm"
                      shape="round"
                      color="blue_gray_900"
                      size="md"
                      variant="outline"
                    >
                      Power Bank{" "}
                    </Button>
                    <Button
                      className="!text-white-A700 cursor-pointer font-medium font-publicsans min-w-[87px] text-center text-sm"
                      shape="round"
                      color="blue_gray_900"
                      size="md"
                      variant="outline"
                    >
                      Smart TV
                    </Button>
                    <Button
                      className="!text-white-A700 cursor-pointer font-medium font-publicsans min-w-[79px] text-center text-sm"
                      shape="round"
                      color="blue_gray_900"
                      size="md"
                      variant="outline"
                    >
                      Speaker
                    </Button>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2 items-start justify-start">
                    <Button
                      className="!text-white-A700 cursor-pointer font-medium font-publicsans min-w-[66px] text-center text-sm"
                      shape="round"
                      color="blue_gray_900"
                      size="md"
                      variant="outline"
                    >
                      Tablet
                    </Button>
                    <Button
                      className="!text-white-A700 cursor-pointer font-medium font-publicsans min-w-[95px] text-center text-sm"
                      shape="round"
                      color="blue_gray_900"
                      size="md"
                      variant="outline"
                    >
                      Microwave
                    </Button>
                    <Button
                      className="!text-white-A700 cursor-pointer font-medium font-publicsans min-w-[86px] text-center text-sm"
                      shape="round"
                      color="blue_gray_900"
                      size="md"
                      variant="outline"
                    >
                      Samsung
                    </Button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <Button
            className="!text-blue_gray-200 cursor-pointer font-publicsans min-w-[1920px] md:min-w-full shadow-bs11 text-center text-sm"
            shape="square"
            color="gray_900"
            size="3xl"
            variant="fill"
          >
            Expert Developer - eCommerce Template © 2023. Design by
            Templatecookie
          </Button>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
