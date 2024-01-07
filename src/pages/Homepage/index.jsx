import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";
import C01HomepageBanner from "components/C01HomepageBanner";
import C01HomepageBlog from "components/C01HomepageBlog";
import C01HomepageFeature from "components/C01HomepageFeature";
import C01HomepageFeature1 from "components/C01HomepageFeature1";
import C01HomepageFeature2 from "components/C01HomepageFeature2";
import C01HomepageFeature3 from "components/C01HomepageFeature3";
import C01HomepageNavigation from "components/C01HomepageNavigation";
import C01HomepageNewsletter from "components/C01HomepageNewsletter";
import C01HomepageProduct from "components/C01HomepageProduct";
import C01HomepageProduct1 from "components/C01HomepageProduct1";
import C01HomepageProduct2 from "components/C01HomepageProduct2";
import C01HomepageProduct3 from "components/C01HomepageProduct3";
import C01HomepageProduct4 from "components/C01HomepageProduct4";
import C01HomepageProduct5 from "components/C01HomepageProduct5";
import C01HomepageProduct6 from "components/C01HomepageProduct6";
import Footer from "components/Footer";

const HomepagePage = () => {
  const c01HomepageBlogPropList = [
    {},
    {
      username: "Robert",
      chattext: "738",
      contenttexttwo:
        "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. ",
      datetext: "28 Nov, 2015",
      userprofileimage: "images/img_unsplashfo7jilwjotu.png",
      contenttextone:
        "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
    },
    {
      username: "Arlene",
      chattext: "826",
      contenttexttwo:
        "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
      datetext: "9 May, 2014",
      userprofileimage: "images/img_unsplash6mnmdi1hcy.png",
      contenttextone:
        "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-6 items-center justify-center w-auto md:w-full">
          <header className="flex flex-col items-center justify-center md:px-5 w-full">
            <div className="bg-gray-900 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end p-4 w-full">
              <Button
                className="cursor-pointer font-semibold min-w-[75px] md:mt-0 my-0.5 rotate-[3deg] text-center text-xl"
                shape="square"
                color="amber_A100"
                size="md"
                variant="fill"
              >
                Black
              </Button>
              <Text
                className="ml-3 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPublicSansSemiBold24"
              >
                Friday
              </Text>
              <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[411px] w-auto">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPublicSansMedium14"
                >
                  Up to
                </Text>
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-amber-500 w-auto"
                  size="txtPublicSansSemiBold40"
                >
                  59%
                </Text>
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtPublicSansSemiBold20"
                >
                  OFF
                </Text>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[156px] md:ml-[0] ml-[414px]"
                rightIcon={
                  <Img
                    className="h-5 ml-2"
                    src="images/img_arrowleft.svg"
                    alt="arrow_left"
                  />
                }
                shape="round"
                color="amber_500"
                size="xl"
                variant="fill"
              >
                <div className="font-bold text-left text-sm tracking-[0.17px] uppercase">
                  Shop now
                </div>
              </Button>
              <Button
                className="flex h-8 items-center justify-center md:ml-[0] ml-[243px] mr-2 md:mt-0 my-2 w-8"
                shape="round"
                color="blue_gray_900"
                size="md"
                variant="fill"
              >
                <Img className="h-4" src="images/img_close.svg" alt="close" />
              </Button>
            </div>
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
            />
          </header>
          <div className="flex flex-col gap-6 items-center justify-start max-w-[1320px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
              <div className="bg-gray-100 flex flex-col items-center justify-center p-[54px] md:px-10 sm:px-5 rounded-md w-[67%] md:w-full">
                <div className="flex md:flex-col flex-row gap-9 items-end justify-start my-0.5 w-full">
                  <div className="flex md:flex-1 flex-col md:gap-10 gap-[90px] items-start justify-start md:mt-0 mt-[84px] w-[47%] md:w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-auto">
                      <div className="flex flex-col gap-4 items-start justify-start w-auto">
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <div className="flex flex-row gap-2 items-center justify-center w-auto">
                            <Line className="bg-blue-500 h-0.5 w-[12%]" />
                            <Text
                              className="text-blue-700 text-sm w-auto"
                              size="txtPublicSansSemiBold14"
                            >
                              THE BEST PLACE TO PLAY
                            </Text>
                          </div>
                          <Text
                            className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto"
                            size="txtPublicSansSemiBold48"
                          >
                            Xbox Consoles
                          </Text>
                        </div>
                        <Text
                          className="leading-[24.00px] max-w-[356px] md:max-w-full text-blue_gray-700 text-lg"
                          size="txtPublicSansRegular18"
                        >
                          Save up to 50% on select Xbox games. Get 3 months of
                          PC Game Pass for $2 USD.
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[191px] rounded-[3px]"
                        rightIcon={
                          <Img
                            className="h-6 ml-3"
                            src="images/img_arrowleft_white_a700.svg"
                            alt="arrow_left"
                          />
                        }
                        shape="round"
                        color="deep_orange_A200"
                        size="xl"
                        variant="fill"
                      >
                        <div className="font-bold text-base text-left tracking-[0.19px] uppercase">
                          Shop Now
                        </div>
                      </Button>
                    </div>
                    <PagerIndicator
                      className="flex gap-2 h-2.5 items-start justify-start w-[46px]"
                      count={3}
                      activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-gray-900 w-2.5"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-200 w-2.5"
                      selectedWrapperCss="inline-block"
                      unselectedWrapperCss="inline-block"
                    />
                  </div>
                  <div className="h-[408px] relative w-[49%] md:w-full">
                    <Img
                      className="absolute h-[408px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_image.png"
                      alt="image_One"
                    />
                    <Button
                      className="absolute cursor-pointer font-semibold h-[100px] outline outline-[4px] outline-white-A700 py-[35px] right-[0] rounded-[50px] text-[22px] text-center sm:text-lg md:text-xl top-[0] w-[101px]"
                      color="blue_500"
                      variant="fill"
                    >
                      $299
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                <div className="bg-gray-900 md:h-[201px] h-[248px] sm:pl-5 pl-6 pt-6 relative rounded-md w-full">
                  <Img
                    className="absolute bottom-[0] h-[201px] object-cover right-[0] w-[56%]"
                    src="images/img_image5.png"
                    alt="imageFive"
                  />
                  <Button
                    className="!text-gray-900_01 absolute cursor-pointer font-semibold h-10 right-[6%] text-base text-center top-[10%] w-[102px]"
                    shape="round"
                    color="amber_A200"
                    size="lg"
                    variant="fill"
                  >
                    29% OFF
                  </Button>
                  <div className="absolute flex flex-col gap-[18px] h-max inset-y-[0] items-center justify-start left-[9%] my-auto w-auto">
                    <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                      <Text
                        className="text-amber-500 text-sm uppercase w-auto"
                        size="txtPublicSansMedium14Amber500"
                      >
                        Summer Sales
                      </Text>
                      <Text
                        className="leading-[32.00px] max-w-[160px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtPublicSansSemiBold24"
                      >
                        New Google Pixel 6 Pro
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[156px]"
                      rightIcon={
                        <Img
                          className="h-5 ml-2"
                          src="images/img_arrowleft_white_a700.svg"
                          alt="arrow_left"
                        />
                      }
                      shape="round"
                      color="deep_orange_A200"
                      size="xl"
                      variant="fill"
                    >
                      <div className="font-bold text-left text-sm tracking-[0.17px] uppercase">
                        Shop Now
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-100 flex flex-row gap-5 items-center justify-center pl-8 pr-10 sm:px-5 py-10 rounded-md w-auto sm:w-full">
                  <Img
                    className="h-40 md:h-auto object-cover w-40"
                    src="images/img_image4.png"
                    alt="imageFour"
                  />
                  <div className="flex flex-col gap-5 items-start justify-start w-auto">
                    <div className="flex flex-col gap-3 items-start justify-start w-auto">
                      <Text
                        className="leading-[32.00px] max-w-[172px] md:max-w-full text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtPublicSansSemiBold24Gray900"
                      >
                        Xiaomi FlipBuds Pro
                      </Text>
                      <Text
                        className="text-blue-500 text-lg w-auto"
                        size="txtPublicSansSemiBold18"
                      >
                        $299 USD
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[156px]"
                      rightIcon={
                        <Img
                          className="h-5 ml-2"
                          src="images/img_arrowleft_white_a700.svg"
                          alt="arrow_left"
                        />
                      }
                      shape="round"
                      color="deep_orange_A200"
                      size="xl"
                      variant="fill"
                    >
                      <div className="font-bold text-left text-sm tracking-[0.17px] uppercase">
                        Shop Now
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <List
              className="bg-white-A700 border border-gray-300 border-solid sm:flex-col flex-row gap-7 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(3,_1fr_1px)_1fr] justify-center p-4 rounded-md w-auto md:w-full"
              orientation="horizontal"
            >
              <C01HomepageFeature className="bg-white-A700 flex flex-row gap-4 items-center justify-center p-4 w-auto" />
              <Line className="self-center h-14 bg-gray-300 w-px" />
              <C01HomepageFeature1 className="bg-white-A700 flex flex-row gap-4 items-center justify-center p-4 w-auto" />
              <Line className="self-center h-14 bg-gray-300 w-px" />
              <C01HomepageFeature2 className="bg-white-A700 flex flex-row gap-4 items-center justify-center p-4 w-auto" />
              <Line className="self-center h-14 bg-gray-300 w-px" />
              <C01HomepageFeature3 className="bg-white-A700 flex flex-row gap-4 items-center justify-center p-4 w-auto" />
            </List>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center justify-center md:px-10 sm:px-5 px-[300px] py-[72px] w-auto md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] mx-auto w-full">
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-start justify-start w-auto sm:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtPublicSansSemiBold24Gray900"
              >
                Best Deals
              </Text>
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <Text
                  className="text-black-900 text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  Deals ends in
                </Text>
                <div className="bg-amber-A100 flex flex-row gap-1.5 items-center justify-start px-3 py-1.5 rounded-sm w-auto">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtPublicSansRegular16"
                  >
                    16d
                  </Text>
                  <Text
                    className="text-base text-center text-gray-900 w-auto"
                    size="txtPublicSansRegular16"
                  >
                    :
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtPublicSansRegular16"
                  >
                    21h
                  </Text>
                  <Text
                    className="text-base text-center text-gray-900 w-auto"
                    size="txtPublicSansRegular16"
                  >
                    :
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtPublicSansRegular16"
                  >
                    57m
                  </Text>
                  <Text
                    className="text-base text-center text-gray-900 w-auto"
                    size="txtPublicSansRegular16"
                  >
                    :
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtPublicSansRegular16"
                  >
                    23s
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[154px]"
              rightIcon={
                <Img
                  className="h-5 ml-2"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              shape="square"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              <div className="!text-blue-500 font-semibold text-left text-sm">
                Browse All Product
              </div>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1320px] mx-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col gap-6 items-center justify-start outline outline-[0.5px] outline-gray-300 p-4 w-1/4 md:w-full">
                <div className="md:h-[268px] h-[276px] relative w-[98%]">
                  <Img
                    className="absolute h-[268px] inset-[0] justify-center m-auto object-cover w-[98%]"
                    src="images/img_image_268x280.png"
                    alt="image_Two"
                  />
                  <div className="absolute flex flex-col gap-2 items-start justify-start left-[0] top-[0] w-auto">
                    <Button
                      className="cursor-pointer font-semibold min-w-[73px] text-center text-xs"
                      shape="round"
                      color="amber_A200"
                      size="md"
                      variant="fill"
                    >
                      32% OFF
                    </Button>
                    <Button
                      className="cursor-pointer font-semibold min-w-[46px] text-center text-xs"
                      shape="round"
                      color="red_400"
                      size="md"
                      variant="fill"
                    >
                      HOT
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-center justify-start mb-1.5 w-[97%] md:w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                      <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal.svg"
                          alt="signal"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal.svg"
                          alt="signal_One"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal.svg"
                          alt="signal_Two"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal.svg"
                          alt="signal_Three"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal.svg"
                          alt="signal_Four"
                        />
                        <Text
                          className="text-blue_gray-400 text-sm w-auto"
                          size="txtPublicSansRegular14Bluegray400"
                        >
                          {" "}
                          (52,677)
                        </Text>
                      </div>
                      <Text
                        className="leading-[24.00px] max-w-[280px] md:max-w-full text-base text-gray-900"
                        size="txtPublicSansRegular16"
                      >
                        Xbox Series S - 512GB SSD Console with Wireless
                        Controller - EU Versio...
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                      <Text
                        className="line-through text-base text-blue_gray-200 w-auto"
                        size="txtPublicSansRegular16Bluegray200"
                      >
                        $865.99
                      </Text>
                      <Text
                        className="text-blue-500 text-lg w-auto"
                        size="txtPublicSansSemiBold18"
                      >
                        $442.12
                      </Text>
                    </div>
                    <Text
                      className="leading-[20.00px] max-w-[280px] md:max-w-full text-blue_gray-600 text-sm"
                      size="txtPublicSansRegular14Bluegray600"
                    >
                      Games built using the Xbox Series X|S development kit
                      showcase unparalleled load times, visuals.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Button
                      className="flex h-12 items-center justify-center w-12"
                      shape="round"
                      color="orange_50"
                      size="xl"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_favorite_gray_900.svg"
                        alt="favorite_One"
                      />
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[173px]"
                      leftIcon={
                        <Img
                          className="h-5 mr-2"
                          src="images/img_cart_white_a700.svg"
                          alt="cart"
                        />
                      }
                      shape="round"
                      color="deep_orange_A200"
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
                      color="orange_50"
                      size="xl"
                      variant="fill"
                    >
                      <Img className="h-6" src="images/img_eye.svg" alt="eye" />
                    </Button>
                  </div>
                </div>
              </div>
              <List
                className="flex flex-col gap-px w-[76%]"
                orientation="vertical"
              >
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                  <C01HomepageProduct
                    className="bg-white-A700 flex md:flex-1 flex-col gap-2 items-center justify-start outline outline-[0.5px] outline-gray-300 p-3 w-1/4 md:w-full"
                    imageTwo="images/img_image_188x216.png"
                    p19off="SOLD OUT"
                    dell215inchfullone="Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear..."
                    priceThree="$2,300"
                  />
                  <C01HomepageProduct1
                    className="bg-white-A700 flex md:flex-1 flex-col gap-2 items-center justify-start outline outline-[0.5px] outline-gray-300 p-4 w-1/4 md:w-full"
                    image="images/img_image_1.png"
                    title="Simple Mobile 4G LTE Prepaid Smartphone"
                    discountedprice="$220"
                  />
                  <C01HomepageProduct
                    className="bg-white-A700 flex md:flex-1 flex-col gap-2 items-center justify-start outline outline-[0.5px] outline-gray-300 p-3 w-1/4 md:w-full"
                    priceTwo="$865"
                  />
                  <C01HomepageProduct2 className="bg-white-A700 flex md:flex-1 flex-col gap-2 items-center justify-start outline outline-[0.5px] outline-gray-300 p-4 w-1/4 md:w-full" />
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly my-0 w-full">
                  <C01HomepageProduct1
                    className="bg-white-A700 flex md:flex-1 flex-col gap-2 items-center justify-start outline outline-[0.5px] outline-gray-300 p-4 w-1/4 md:w-full"
                    image="images/img_image_6.png"
                    title="Dell Optiplex 7000x7480 All-in-One Computer Monitor"
                    discountedprice="$299"
                  />
                  <C01HomepageProduct1
                    className="bg-white-A700 flex md:flex-1 flex-col gap-2 items-center justify-start outline outline-[0.5px] outline-gray-300 p-4 w-1/4 md:w-full"
                    originalprice="$865.99"
                  />
                  <C01HomepageProduct
                    className="bg-white-A700 flex md:flex-1 flex-col gap-2 items-center justify-start outline outline-[0.5px] outline-gray-300 p-3 w-1/4 md:w-full"
                    imageTwo="images/img_image_8.png"
                    p19off="HOT"
                    dell215inchfullone="2-Barrel Carburetor Carb 2100 Engine Increase Horsepower"
                    priceThree="$160"
                  />
                  <C01HomepageProduct
                    className="bg-white-A700 flex md:flex-1 flex-col gap-2 items-center justify-start outline outline-[0.5px] outline-gray-300 p-3 w-1/4 md:w-full"
                    imageTwo="images/img_image_9.png"
                    p19off="32% OFF"
                    dell215inchfullone="JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black"
                    priceTwo="$360"
                    priceThree="$250"
                  />
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-start justify-start md:px-10 sm:px-5 px-[300px] w-auto md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900 w-auto"
            size="txtPublicSansSemiBold32"
          >
            Shop with Categorys
          </Text>
          <div className="sm:h-[1476px] h-[236px] md:h-[480px] max-w-[1368px] mx-auto relative w-full">
            <List
              className="absolute sm:flex-col flex-row gap-[18px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 inset-[0] justify-start m-auto w-auto"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-center justify-center px-3 py-6 rounded w-auto">
                <Img
                  className="h-[148px] md:h-auto object-cover w-[148px]"
                  src="images/img_image_148x148.png"
                  alt="image"
                />
                <Text
                  className="text-base text-center text-gray-900 w-auto"
                  size="txtPublicSansMedium16"
                >
                  Computer & Laptop
                </Text>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-center justify-center px-3 py-6 rounded w-auto">
                <Img
                  className="h-[148px] md:h-auto object-cover w-[148px]"
                  src="images/img_image_10.png"
                  alt="image"
                />
                <Text
                  className="text-base text-center text-gray-900 w-auto"
                  size="txtPublicSansMedium16"
                >
                  SmartPhone
                </Text>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-center justify-center px-3 py-6 rounded w-auto">
                <Img
                  className="h-[148px] md:h-auto object-cover w-[148px]"
                  src="images/img_image_11.png"
                  alt="image"
                />
                <Text
                  className="text-base text-center text-gray-900 w-auto"
                  size="txtPublicSansMedium16"
                >
                  Headphones
                </Text>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-center justify-center px-3 py-6 rounded w-auto">
                <Img
                  className="h-[148px] md:h-auto object-cover w-[148px]"
                  src="images/img_image_12.png"
                  alt="image"
                />
                <Text
                  className="text-base text-center text-gray-900 w-auto"
                  size="txtPublicSansMedium16"
                >
                  Accessories
                </Text>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-center justify-center px-3 py-6 rounded w-auto">
                <Img
                  className="h-[148px] md:h-auto object-cover w-[148px]"
                  src="images/img_image_13.png"
                  alt="image"
                />
                <Text
                  className="text-base text-center text-gray-900 w-auto"
                  size="txtPublicSansMedium16"
                >
                  Camera & Photo
                </Text>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-center justify-center px-3 py-6 rounded w-auto">
                <Img
                  className="h-[148px] md:h-auto object-cover w-[148px]"
                  src="images/img_image_14.png"
                  alt="image"
                />
                <Text
                  className="text-base text-center text-gray-900 w-auto"
                  size="txtPublicSansMedium16"
                >
                  TV & Homes
                </Text>
              </div>
            </List>
            <div className="absolute flex flex-row md:gap-10 h-max inset-[0] items-center justify-between m-auto w-full">
              <Button
                className="flex h-12 items-center justify-center w-12"
                shape="circle"
                color="deep_orange_A200"
                size="xl"
                variant="fill"
              >
                <Img
                  className="h-6"
                  src="images/img_arrowleft_white_a700.svg"
                  alt="arrowleft"
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
                  src="images/img_arrowleft_white_a700.svg"
                  alt="arrowleft_One"
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start md:px-10 sm:px-5 px-[300px] py-[72px] w-auto md:w-full">
          <div className="bg-amber-A100 flex flex-col items-center justify-start pt-8 md:px-5 rounded-[3px] w-[24%] md:w-full">
            <div className="flex flex-col gap-4 items-center justify-center w-auto">
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-center text-red-700 text-sm w-auto"
                    size="txtPublicSansSemiBold14Red700"
                  >
                    COMPUTER & ACCESSORIES
                  </Text>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900 w-auto"
                    size="txtPublicSansSemiBold32"
                  >
                    32% Discount
                  </Text>
                </div>
                <Text
                  className="text-base text-blue_gray-700 text-center w-auto"
                  size="txtPublicSansRegular16Bluegray700"
                >
                  For all ellectronics products
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtPublicSansMedium14Gray900"
                >
                  Offers ends in:
                </Text>
                <Button
                  className="!text-gray-900 cursor-pointer font-semibold min-w-[173px] text-center text-sm"
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  ENDS OF CHRISTMAS
                </Button>
              </div>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[191px] mt-8 rounded-[3px]"
              rightIcon={
                <Img
                  className="h-6 ml-3"
                  src="images/img_arrowleft_white_a700.svg"
                  alt="arrow_left"
                />
              }
              shape="round"
              color="deep_orange_A200"
              size="xl"
              variant="fill"
            >
              <div className="font-bold text-base text-left tracking-[0.19px] uppercase">
                Shop now
              </div>
            </Button>
            <Img
              className="h-[428px] sm:h-auto mt-4 object-cover rounded-bl-[3px] rounded-br-[3px] w-full"
              src="images/img_image_428x312.png"
              alt="image_Three"
            />
          </div>
          <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[984px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtPublicSansSemiBold24Gray900"
              >
                Featured Products
              </Text>
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-center justify-center w-auto sm:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-auto sm:w-full">
                  <Button
                    className="!text-gray-900 cursor-pointer font-semibold min-w-[90px] shadow-bs12 text-center text-sm"
                    shape="square"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    All Product
                  </Button>
                  <Button
                    className="cursor-pointer min-w-[101px] text-center text-sm"
                    shape="square"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Smart Phone
                  </Button>
                  <Button
                    className="cursor-pointer min-w-[62px] text-center text-sm"
                    shape="square"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Laptop
                  </Button>
                  <Button
                    className="cursor-pointer min-w-[91px] text-center text-sm"
                    shape="square"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Headphone
                  </Button>
                  <Button
                    className="cursor-pointer h-9 text-center text-sm w-[35px]"
                    shape="square"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    TV
                  </Button>
                </div>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[154px]"
                  rightIcon={
                    <Img
                      className="h-5 ml-2"
                      src="images/img_arrowleft_deep_orange_a200.svg"
                      alt="arrow_left"
                    />
                  }
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  <div className="!text-deep_orange-A200 font-semibold text-left text-sm">
                    Browse All Product
                  </div>
                </Button>
              </div>
            </div>
            <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start min-h-[auto] w-auto md:w-full">
              <C01HomepageProduct3
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                image="images/img_image_172x202.png"
                p25off="HOT"
                signalFour="images/img_signal_deep_orange_a200.svg"
                p56767="(738)"
                dell215inchfull="TOZO T6 True Wireless Earbuds Bluetooth Headphon..."
                priceOne="$70"
              />
              <C01HomepageProduct4
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                userimage="images/img_image_6.png"
                text798="536)"
                textdescription="Samsung Electronics Samsung Galexy S21 5G"
                textpriceone="$2,300"
              />
              <C01HomepageProduct3
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                image="images/img_image_15.png"
                p25off="BEST DEALS"
                signalFour="images/img_signal_deep_orange_a200.svg"
                p56767="423)"
                dell215inchfull="Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6..."
                priceOne="$360"
              />
              <C01HomepageProduct4
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                userimage="images/img_image_3.png"
                signalfourimage="images/img_signal_white_a700.svg"
                text798="816)"
              />
              <C01HomepageProduct4
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                userimage="images/img_image_7.png"
                text798="(647)"
                textdescription="Wired Over-Ear Gaming Headphones with USB"
                textpriceone="$1,500"
              />
              <C01HomepageProduct3
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                price="$1600"
              />
              <C01HomepageProduct5 className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs3 shadow-bs3 hover:w-full w-full" />
              <C01HomepageProduct3
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                image="images/img_image_1.png"
                p25off="SALE"
                signalFour="images/img_signal_deep_orange_a200.svg"
                p56767="(583)"
                dell215inchfull="4K UHD LED Smart TV with Chromecast Built-in"
                priceOne="$220"
              />
            </div>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 justify-start md:px-10 sm:px-5 px-[300px] w-auto md:w-full"
          orientation="horizontal"
        >
          <div className="bg-gray-100 flex sm:flex-col flex-row gap-10 items-center justify-center p-11 md:px-5 rounded w-auto md:w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-auto">
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-semibold min-w-[123px] text-center text-sm"
                    shape="round"
                    color="blue_500"
                    size="md"
                    variant="fill"
                  >
                    INTRODUCING
                  </Button>
                  <Text
                    className="leading-[40.00px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                    size="txtPublicSansSemiBold32"
                  >
                    <>
                      New Apple
                      <br />
                      Homepod Mini
                    </>
                  </Text>
                </div>
                <Text
                  className="leading-[24.00px] max-w-[280px] md:max-w-full text-base text-blue_gray-700"
                  size="txtPublicSansRegular16Bluegray700"
                >
                  Jam-packed with innovation, HomePod mini delivers
                  unexpectedly.
                </Text>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[156px]"
                rightIcon={
                  <Img
                    className="h-5 ml-2"
                    src="images/img_arrowleft_white_a700.svg"
                    alt="arrow_left"
                  />
                }
                shape="round"
                color="deep_orange_A200"
                size="xl"
                variant="fill"
              >
                <div className="font-bold text-left text-sm tracking-[0.17px] uppercase">
                  Shop now
                </div>
              </Button>
            </div>
            <Img
              className="h-60 md:h-auto object-cover w-60"
              src="images/img_image6_240x240.png"
              alt="imageSix"
            />
          </div>
          <div className="bg-gray-900 flex md:flex-col flex-row gap-3 items-start justify-center pl-6 pt-6 md:px-5 rounded w-full">
            <div className="flex flex-col gap-5 items-start justify-start ml-5 md:ml-[0] md:mt-0 mt-5 w-auto">
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-semibold min-w-[159px] text-center text-sm"
                    shape="round"
                    color="amber_A200"
                    size="md"
                    variant="fill"
                  >
                    INTRODUCING NEW
                  </Button>
                  <Text
                    className="leading-[40.00px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtPublicSansSemiBold32WhiteA700"
                  >
                    <>
                      Xiaomi Mi 11 Ultra
                      <br />
                      12GB+256GB
                    </>
                  </Text>
                </div>
                <Text
                  className="leading-[24.00px] max-w-[280px] md:max-w-full text-base text-blue_gray-200"
                  size="txtPublicSansRegular16Bluegray200"
                >
                  *Data provided by internal laboratories. Industry measurment.
                </Text>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[156px]"
                rightIcon={
                  <Img
                    className="h-5 ml-2"
                    src="images/img_arrowleft_white_a700.svg"
                    alt="arrow_left"
                  />
                }
                shape="round"
                color="deep_orange_A200"
                size="xl"
                variant="fill"
              >
                <div className="font-bold text-left text-sm tracking-[0.17px] uppercase">
                  Shop now
                </div>
              </Button>
            </div>
            <div className="md:h-[305px] h-[312px] relative w-[312px]">
              <Img
                className="absolute h-[305px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_image_305x312.png"
                alt="image"
              />
              <Text
                className="absolute bg-blue-500 flex h-[88px] items-center justify-center right-[8%] rounded-[50%] text-center text-white-A700 text-xl top-[0] w-[88px]"
                size="txtPublicSansSemiBold20"
              >
                $590
              </Text>
            </div>
          </div>
        </List>
        <div className="flex md:flex-col flex-row gap-6 items-center justify-center md:px-10 sm:px-5 px-[300px] py-[72px] w-auto md:w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[984px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtPublicSansSemiBold24Gray900"
              >
                Computer Accessories
              </Text>
              <div className="flex md:flex-1 md:flex-col flex-row gap-4 items-center justify-center w-auto md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-auto sm:w-full">
                  <Button
                    className="!text-gray-900 cursor-pointer font-semibold min-w-[90px] shadow-bs12 text-center text-sm"
                    shape="square"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    All Product
                  </Button>
                  <Button
                    className="cursor-pointer min-w-[138px] text-center text-sm"
                    shape="square"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Keyboard & Mouse
                  </Button>
                  <Button
                    className="cursor-pointer min-w-[91px] text-center text-sm"
                    shape="square"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Headphone
                  </Button>
                  <Button
                    className="cursor-pointer min-w-[73px] text-center text-sm"
                    shape="square"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Webcam
                  </Button>
                  <Button
                    className="cursor-pointer min-w-[61px] text-center text-sm"
                    shape="square"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Printer
                  </Button>
                </div>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[154px]"
                  rightIcon={
                    <Img
                      className="h-5 ml-2"
                      src="images/img_arrowleft_deep_orange_a200.svg"
                      alt="arrow_left"
                    />
                  }
                  shape="square"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  <div className="!text-deep_orange-A200 font-semibold text-left text-sm">
                    Browse All Product
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <C01HomepageProduct3
                  className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-6 items-center justify-start p-3 rounded-[3px] w-full"
                  image="images/img_image_18.png"
                  p25off="BEST DEALS"
                  p56767="(994)"
                  dell215inchfull="Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6..."
                  priceOne="$360"
                />
                <C01HomepageProduct4
                  className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-6 items-center justify-start p-4 rounded-[3px] w-full"
                  userimage="images/img_image_3.png"
                />
                <C01HomepageProduct3
                  className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-6 items-center justify-start p-3 rounded-[3px] w-full"
                  image="images/img_image_19.png"
                  p25off="HOT"
                  signalFour="images/img_signal_deep_orange_a200.svg"
                  p56767="(600)"
                  dell215inchfull="TOZO T6 True Wireless Earbuds Bluetooth Headphon..."
                  priceOne="$70"
                />
                <C01HomepageProduct4
                  className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-6 items-center justify-start p-4 rounded-[3px] w-full"
                  userimage="images/img_image_20.png"
                  text798="(492)"
                  textdescription="Dell Optiplex 7000x7480 All-in-One Computer Monitor"
                  textpriceone="$250"
                />
                <C01HomepageProduct4
                  className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-6 items-center justify-start p-4 rounded-[3px] w-full"
                  userimage="images/img_image_9.png"
                  signalfourimage="images/img_signal_white_a700.svg"
                  text798="(740)"
                  textdescription="Samsung Electronics Samsung Galexy S21 5G"
                  textpriceone="$2,300"
                />
                <C01HomepageProduct3
                  className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-6 items-center justify-start p-3 rounded-[3px] w-full"
                  image="images/img_image_21.png"
                  p25off="SALE"
                  p56767="(556)"
                  dell215inchfull="4K UHD LED Smart TV with Chromecast Built-in"
                  priceOne="$220"
                />
                <C01HomepageProduct4
                  className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-6 items-center justify-start p-4 rounded-[3px] w-full"
                  userimage="images/img_image_22.png"
                  signalfourimage="images/img_signal_white_a700.svg"
                  text798="(536)"
                  textdescription="Wired Over-Ear Gaming Headphones with USB"
                  textpriceone="$1,500"
                />
                <C01HomepageProduct3
                  className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-6 items-center justify-start p-3 rounded-[3px] w-full"
                  image="images/img_image_23.png"
                  p56767="(423)"
                  price="$1600"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start w-auto">
            <C01HomepageBanner className="bg-yellow-200 flex flex-col gap-6 items-center justify-center p-8 sm:px-5 rounded w-auto" />
            <div className="bg-cyan-900 flex flex-col gap-6 items-center justify-center sm:px-5 px-6 py-10 rounded w-auto">
              <div className="flex flex-col gap-3 items-center justify-center w-auto">
                <Button
                  className="cursor-pointer font-semibold min-w-[137px] text-center text-sm"
                  shape="round"
                  color="white_A700_1e"
                  size="md"
                  variant="fill"
                >
                  SUMMER SALES
                </Button>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700 w-auto"
                  size="txtPublicSansSemiBold28"
                >
                  37% DISCOUNT
                </Text>
                <Text
                  className="text-center text-lg text-white-A700 w-auto"
                  size="txtPublicSansRegular18WhiteA700"
                >
                  <span className="text-white-A700 font-publicsans font-normal">
                    only for{" "}
                  </span>
                  <span className="text-amber-500 font-publicsans font-semibold">
                    SmartPhone
                  </span>
                  <span className="text-white-A700 font-publicsans font-normal">
                    {" "}
                    product.
                  </span>
                </Text>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center w-[248px]"
                rightIcon={
                  <Img
                    className="h-5 ml-2"
                    src="images/img_arrowleft_white_a700.svg"
                    alt="arrow_left"
                  />
                }
                shape="round"
                color="blue_500"
                size="xl"
                variant="fill"
              >
                <div className="font-bold text-left text-sm tracking-[0.17px] uppercase">
                  Shop now
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-orange-50 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1438px] mx-auto md:px-5 px-[46px] w-full">
          <div className="flex sm:flex-1 flex-col gap-[22px] items-start justify-start md:ml-[0] ml-[26px] w-auto sm:w-full">
            <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
              <Button
                className="cursor-pointer font-semibold min-w-[165px] text-center text-sm"
                shape="round"
                color="blue_500"
                size="md"
                variant="fill"
              >
                SAVE UP TO $200.00
              </Button>
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto"
                size="txtPublicSansSemiBold48"
              >
                Macbook Pro
              </Text>
            </div>
            <Text
              className="leading-[32.00px] max-w-[424px] md:max-w-full text-2xl md:text-[22px] text-gray-900 sm:text-xl"
              size="txtPublicSansRegular24"
            >
              Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
            </Text>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[191px] rounded-[3px]"
              rightIcon={
                <Img
                  className="h-6 ml-3"
                  src="images/img_arrowleft_white_a700.svg"
                  alt="arrow_left"
                />
              }
              shape="round"
              color="deep_orange_A200"
              size="xl"
              variant="fill"
            >
              <div className="font-bold text-base text-left tracking-[0.19px] uppercase">
                Shop now
              </div>
            </Button>
          </div>
          <div className="h-[424px] relative w-[42%] md:w-full">
            <Img
              className="absolute h-[424px] inset-[0] justify-center m-auto object-cover w-[97%]"
              src="images/img_image_424x536.png"
              alt="image_Five"
            />
            <Text className="absolute left-[0] top-[9%]"></Text>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center md:px-10 sm:px-5 px-[300px] py-[72px] w-auto md:w-full"
          orientation="horizontal"
        >
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              FLASH SALE TODAY
            </Text>
            <C01HomepageProduct6 className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto" />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_6.png"
              title="Simple Mobile 4G LTE Prepaid Smartphone"
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_19.png"
              title="4K UHD LED Smart TV with Chromecast Built-in"
            />
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              BEST SELLERS
            </Text>
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_80x80.png"
              title="Samsung Electronics Samsung Galexy S21 5G"
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_24.png"
              title="Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone"
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_172x202.png"
              title="Sony DSCHX8 High Zoom Point & Shoot Camera"
            />
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              TOP RATED
            </Text>
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_16.png"
              title="Portable Wshing Machine, 11lbs capacity Model 18NMF..."
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_25.png"
              title="Sony DSCHX8 High Zoom Point & Shoot Camera"
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_26.png"
              title="Dell Optiplex 7000x7480 All-in-One Computer Monitor"
            />
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              NEW ARRIVAL
            </Text>
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_1.png"
              title="TOZO T6 True Wireless Earbuds Bluetooth Headpho..."
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_22.png"
              title="JBL FLIP 4 - Waterproof Portable Bluetooth Speaker..."
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_2.png"
              title="Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar..."
            />
          </div>
        </List>
        <div className="bg-gray-100 flex flex-col gap-10 items-start justify-start md:px-10 sm:px-5 px-[300px] py-[72px] w-auto md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900 w-auto"
            size="txtPublicSansSemiBold32"
          >
            Latest News
          </Text>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1320px] mx-auto w-full"
            orientation="horizontal"
          >
            {c01HomepageBlogPropList.map((props, index) => (
              <React.Fragment key={`C01HomepageBlog${index}`}>
                <C01HomepageBlog
                  className="bg-white-A700 border border-gray-300 border-solid flex sm:flex-1 flex-col gap-6 items-start justify-start p-8 sm:px-5 rounded shadow-bs4 w-auto sm:w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
        </div>
        <C01HomepageNewsletter className="bg-light_blue-900 flex flex-col gap-8 items-center justify-center md:px-10 sm:px-5 px-[300px] py-[72px] w-auto md:w-full" />
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default HomepagePage;
