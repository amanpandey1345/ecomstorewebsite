import React from "react";

import { Button, Img, Line, List, Text } from "components";
import C01HomepageNavigation from "components/C01HomepageNavigation";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import Footer from "components/Footer";

const ComparePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans sm:gap-10 md:gap-10 gap-[72px] items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <C01HomepageNavigation
            className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full"
            language={
              <Text className="text-sm text-white-A700 w-auto">
                <span className="text-white-A700 font-publicsans text-left font-normal">
                  Welcome to{" "}
                </span>
                <span className="text-white-A700 font-publicsans text-left font-bold">
                  E.com
                </span>
                <span className="text-white-A700 font-publicsans text-left font-normal">
                  {" "}
                  online eCommerce store.{" "}
                </span>
              </Text>
            }
            settings="images/img_settings_2.svg"
          />
          <C07ShopPageBreadcrumb
            className="bg-gray-100 flex flex-1 flex-col items-start justify-start p-[26px] sm:px-5 w-full"
            macbookprotext="Compare"
          />
        </header>
        <div className="bg-white-A700 border border-gray-300 border-solid md:h-[1479px] sm:h-[3125px] h-[896px] max-w-[1320px] mx-auto md:px-5 relative rounded w-full">
          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
            <div className="flex flex-col gap-8 justify-start w-full">
              <List
                className="sm:flex-col flex-row md:gap-10 gap-16 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:ml-[0] ml-[356px] w-[72%]"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-4 items-center justify-center w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_close_blue_gray_300_24x24.svg"
                    alt="close"
                  />
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <Img
                      className="h-[272px] md:h-auto object-cover w-[272px]"
                      src="images/img_image_272x272.png"
                      alt="image"
                    />
                    <Text
                      className="leading-[24.00px] text-base text-gray-900 w-full"
                      size="txtPublicSansRegular16"
                    >
                      Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo
                    </Text>
                    <div className="flex flex-row gap-3 items-start justify-start w-auto">
                      <div className="bg-deep_orange-A200 flex flex-row gap-2 items-center justify-center sm:px-5 px-6 rounded-sm w-[212px]">
                        <Text
                          className="text-sm text-white-A700 tracking-[0.17px] uppercase w-auto"
                          size="txtPublicSansBold14"
                        >
                          Add to card
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_cart_white_a700_20x20.svg"
                          alt="cart"
                        />
                      </div>
                      <Button
                        className="flex h-12 items-center justify-center outline-[1px] w-12"
                        shape="round"
                        color="orange_50"
                        size="xl"
                        variant="outline"
                      >
                        <Img
                          className="h-6"
                          src="images/img_favorite_deep_orange_a200.svg"
                          alt="favorite"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-center justify-center w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_close_blue_gray_300_24x24.svg"
                    alt="close"
                  />
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <Img
                      className="h-[272px] md:h-auto object-cover w-[272px]"
                      src="images/img_image_33.png"
                      alt="image"
                    />
                    <Text
                      className="leading-[24.00px] text-base text-gray-900 w-full"
                      size="txtPublicSansRegular16"
                    >
                      <>
                        Apple iMac 24&quot; 4K Retina Display M1 8 Core CPU, 8
                        Core GPU, 256GB SSD, Blue (MGPK3ZP/A) 2021
                      </>
                    </Text>
                    <div className="flex flex-row gap-3 items-start justify-start w-auto">
                      <div className="bg-deep_orange-A200 flex flex-row gap-2 items-center justify-center sm:px-5 px-6 rounded-sm w-[212px]">
                        <Text
                          className="text-sm text-white-A700 tracking-[0.17px] uppercase w-auto"
                          size="txtPublicSansBold14"
                        >
                          Add to card
                        </Text>
                        <Img
                          className="h-5 w-5"
                          src="images/img_cart_white_a700_20x20.svg"
                          alt="cart"
                        />
                      </div>
                      <Button
                        className="flex h-12 items-center justify-center outline-[1px] w-12"
                        shape="round"
                        color="orange_50"
                        size="xl"
                        variant="outline"
                      >
                        <Img
                          className="h-6"
                          src="images/img_favorite_deep_orange_a200.svg"
                          alt="favorite"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-center justify-center w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_close_blue_gray_300_24x24.svg"
                    alt="close"
                  />
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <Img
                      className="h-[272px] md:h-auto object-cover w-[272px]"
                      src="images/img_image_34.png"
                      alt="image"
                    />
                    <Text
                      className="leading-[24.00px] text-base text-gray-900 w-full"
                      size="txtPublicSansRegular16"
                    >
                      Samsung Galaxy S21 FE 5G Cell Phone, Factory Unlocked
                      Android Smartphone, 128GB, 120Hz Display.
                    </Text>
                    <div className="flex flex-row gap-3 items-start justify-start w-auto">
                      <Button
                        className="cursor-pointer flex items-center justify-center w-[212px]"
                        rightIcon={
                          <Img
                            className="h-5 ml-2"
                            src="images/img_cart_white_a700_20x20.svg"
                            alt="cart"
                          />
                        }
                        shape="round"
                        color="blue_gray_200"
                        size="xl"
                        variant="fill"
                      >
                        <div className="font-bold text-left text-sm tracking-[0.17px] uppercase">
                          Add to card
                        </div>
                      </Button>
                      <Button
                        className="flex h-12 items-center justify-center w-12"
                        shape="round"
                        color="gray_300"
                        size="xl"
                        variant="outline"
                      >
                        <Img
                          className="h-6"
                          src="images/img_favorite_blue_gray_200.svg"
                          alt="favorite"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-gray-100 flex md:flex-col flex-row md:gap-10 gap-16 items-center justify-center sm:px-5 px-6 py-3 w-auto md:w-full">
                  <Text
                    className="text-blue_gray-700 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray700"
                  >
                    Customer feedback:
                  </Text>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-16 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[74%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                      <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal_deep_orange_a200_20x20.svg"
                          alt="signal"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal_deep_orange_a200_20x20.svg"
                          alt="signal_One"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal_deep_orange_a200_20x20.svg"
                          alt="signal_Two"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal_deep_orange_a200_20x20.svg"
                          alt="signal_Three"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal_deep_orange_a200_20x20.svg"
                          alt="signal_Four"
                        />
                      </div>
                      <Text
                        className="text-blue_gray-400 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray400"
                      >
                        (51,746,385)
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                      <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal_deep_orange_a200_20x20.svg"
                          alt="signal"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal_deep_orange_a200_20x20.svg"
                          alt="signal_One"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal_deep_orange_a200_20x20.svg"
                          alt="signal_Two"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal_deep_orange_a200_20x20.svg"
                          alt="signal_Three"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal_deep_orange_a200_20x20.svg"
                          alt="signal_Four"
                        />
                      </div>
                      <Text
                        className="text-blue_gray-400 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray400"
                      >
                        (673,971,743)
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                      <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal_deep_orange_a200_20x20.svg"
                          alt="signal"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal_deep_orange_a200_20x20.svg"
                          alt="signal_One"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal_deep_orange_a200_20x20.svg"
                          alt="signal_Two"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal_deep_orange_a200_20x20.svg"
                          alt="signal_Three"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal_deep_orange_a200_20x20.svg"
                          alt="signal_Four"
                        />
                      </div>
                      <Text
                        className="text-blue_gray-400 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray400"
                      >
                        (96,459,761)
                      </Text>
                    </div>
                  </List>
                </div>
                <List
                  className="flex flex-col gap-px items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex md:flex-1 sm:flex-col flex-row md:gap-10 gap-16 items-center justify-center my-0 sm:px-5 px-6 py-3 w-auto md:w-full">
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray700"
                    >
                      Price:
                    </Text>
                    <Text
                      className="text-blue-500 text-lg w-auto"
                      size="txtPublicSansSemiBold18"
                    >
                      $899.00
                    </Text>
                    <Text
                      className="text-blue-500 text-lg w-auto"
                      size="txtPublicSansSemiBold18"
                    >
                      $1,699.00
                    </Text>
                    <Text
                      className="text-blue-500 text-lg w-auto"
                      size="txtPublicSansSemiBold18"
                    >
                      $699.99
                    </Text>
                  </div>
                  <div className="bg-gray-100 flex md:flex-1 flex-row md:gap-10 gap-16 items-center justify-center my-0 sm:px-5 px-6 py-3 w-auto md:w-full">
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray700"
                    >
                      Sold by:
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansRegular14Gray900"
                    >
                      Clicon
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansRegular14Gray900"
                    >
                      Apple
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansRegular14Gray900"
                    >
                      Clicon
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-row md:gap-10 gap-16 items-center justify-center my-0 sm:px-5 px-6 py-3 w-auto md:w-full">
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray700"
                    >
                      Brand:
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansRegular14Gray900"
                    >
                      StarTech
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansRegular14Gray900"
                    >
                      Apple
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansRegular14Gray900"
                    >
                      Samsung
                    </Text>
                  </div>
                  <div className="bg-gray-100 flex md:flex-1 sm:flex-col flex-row md:gap-10 gap-16 items-center justify-center my-0 sm:px-5 px-6 py-3 w-auto md:w-full">
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray700"
                    >
                      Model:
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansRegular14Gray900"
                    >
                      ARES M2 and ZEUS E2
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansRegular14Gray900"
                    >
                      <>Apple iMac 24&quot; M1 Blue 2021</>
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansRegular14Gray900"
                    >
                      S21 FE
                    </Text>
                  </div>
                  <div className="flex md:flex-1 sm:flex-col flex-row md:gap-10 gap-16 items-center justify-center my-0 sm:px-5 px-6 py-3 w-auto md:w-full">
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray700"
                    >
                      Stock status:
                    </Text>
                    <Text
                      className="text-green-700 text-sm w-auto"
                      size="txtPublicSansSemiBold14Green700"
                    >
                      IN STOCK
                    </Text>
                    <Text
                      className="text-green-700 text-sm w-auto"
                      size="txtPublicSansSemiBold14Green700"
                    >
                      IN STOCK
                    </Text>
                    <Text
                      className="text-red-400 text-sm w-auto"
                      size="txtPublicSansSemiBold14Red400"
                    >
                      OUT OF STOCK
                    </Text>
                  </div>
                  <div className="bg-gray-100 flex md:flex-1 sm:flex-col flex-row md:gap-10 gap-16 items-center justify-center my-0 sm:px-5 px-6 py-3 w-auto md:w-full">
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray700"
                    >
                      Size:
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansRegular14Gray900"
                    >
                      6.71 inches, 110.5 cm
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansRegular14Gray900"
                    >
                      6.7 inches, 109.8 cm
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansRegular14Gray900"
                    >
                      6.4 inches, 98.9 cm
                    </Text>
                  </div>
                  <div className="flex md:flex-1 sm:flex-col flex-row md:gap-10 gap-16 items-center justify-center my-0 sm:px-5 px-6 py-3 w-auto md:w-full">
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray700"
                    >
                      Weight:
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansRegular14Gray900"
                    >
                      650 g (7.41 oz)
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansRegular14Gray900"
                    >
                      240 g (8.47 oz)
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansRegular14Gray900"
                    >
                      <>177 g (6.24 oz)</>
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <Img
            className="absolute h-[896px] inset-[0] justify-center m-auto"
            src="images/img_lines.svg"
            alt="lines"
          />
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ComparePage;
