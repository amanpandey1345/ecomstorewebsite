import React from "react";

import { Button, Img, Input, Line, List, Switch, Text } from "components";
import C01HomepageProduct3 from "components/C01HomepageProduct3";
import C01HomepageProduct4 from "components/C01HomepageProduct4";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import C27DasboardColumndashboardnavite from "components/C27DasboardColumndashboardnavite";
import Footer from "components/Footer";
import Header from "components/Header";

const DasboardBrowsingHistoryPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <C07ShopPageBreadcrumb
          className="bg-gray-100 flex flex-col items-start justify-start p-[26px] sm:px-5 w-full"
          shoptext="User Account"
          arrowrightoneimage="images/img_arrowright.svg"
          shopgridtext="Dashboard"
          arrowrighttwoimage="images/img_arrowright.svg"
          macbookprotext="Cards & Address"
        />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-start justify-start pb-[72px] pt-10 md:px-10 sm:px-5 px-[300px] w-auto md:w-full">
          <C27DasboardColumndashboardnavite className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start md:px-5 py-4 rounded shadow-bs10 w-auto" />
          <div className="flex flex-col gap-6 items-start justify-start w-3/4 md:w-full">
            <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-between max-w-[984px] w-full">
              <Text
                className="text-gray-900 text-xl w-auto"
                size="txtPublicSansSemiBold20Gray900"
              >
                Browsing History
              </Text>
              <div className="flex flex-row gap-3 items-start justify-start w-auto">
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14Gray900"
                >
                  Turn Browsing History on/off
                </Text>
                <Switch
                  onColor="#f98131"
                  offColor="#f98131"
                  onHandleColor="#ffffff"
                  offHandleColor="#ffffff"
                  value={true}
                  className="w-[16%]"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-3 items-start justify-start w-auto md:w-full">
              <Input
                name="inputfield"
                placeholder="Search in browsing history"
                className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-left text-sm w-full"
                wrapClassName="border border-gray-300 border-solid flex w-[57%] md:w-full"
                prefix={
                  <Img
                    className="h-5 mr-3 my-auto"
                    src="images/img_rewind_deep_orange_a200.svg"
                    alt="rewind"
                  />
                }
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
              <Input
                name="date"
                placeholder="DD/MM/YYYY"
                className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-left text-sm w-full"
                wrapClassName="border border-gray-300 border-solid flex w-[42%] md:w-full"
                prefix={
                  <Img
                    className="h-5 mr-3 my-auto"
                    src="images/img_calendar_deep_orange_a200_20x20.svg"
                    alt="calendar"
                  />
                }
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-center justify-center pb-6 rounded w-auto md:w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-4 rounded-tl rounded-tr w-full">
                <Text
                  className="md:ml-[0] ml-[7px] text-gray-900 text-sm uppercase"
                  size="txtPublicSansMedium14Gray900"
                >
                  17 Oct, 2020
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <List
                  className="sm:flex-col flex-row gap-1 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(3,_1fr_1px)_1fr] justify-start w-auto md:w-full"
                  orientation="horizontal"
                >
                  <C01HomepageProduct3
                    className="flex flex-col gap-6 items-center justify-start p-3 w-full"
                    image="images/img_image_172x202.png"
                    p25off="HOT"
                    signal="images/img_signal_deep_orange_a200_20x20.svg"
                    signalOne="images/img_signal_deep_orange_a200_20x20.svg"
                    signalTwo="images/img_signal_deep_orange_a200_20x20.svg"
                    signalThree="images/img_signal_deep_orange_a200_20x20.svg"
                    signalFour="images/img_signal_deep_orange_a200_20x20.svg"
                    p56767="(738)"
                    dell215inchfull="TOZO T6 True Wireless Earbuds Bluetooth Headphon..."
                    priceOne="$70"
                  />
                  <Line className="self-center h-80 bg-gray-300 w-px" />
                  <C01HomepageProduct4
                    className="flex flex-col gap-6 items-center justify-start p-4 w-full"
                    userimage="images/img_image_6.png"
                    signalimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signaloneimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signaltwoimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signalthreeimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signalfourimage="images/img_signal_deep_orange_a200_20x20.svg"
                    text798="536)"
                    textdescription="Samsung Electronics Samsung Galexy S21 5G"
                    textpriceone="$2,300"
                  />
                  <Line className="self-center h-80 bg-gray-300 w-px" />
                  <C01HomepageProduct3
                    className="flex flex-col gap-6 items-center justify-start p-3 w-full"
                    image="images/img_image_15.png"
                    p25off="BEST DEALS"
                    signal="images/img_signal_deep_orange_a200_20x20.svg"
                    signalOne="images/img_signal_deep_orange_a200_20x20.svg"
                    signalTwo="images/img_signal_deep_orange_a200_20x20.svg"
                    signalThree="images/img_signal_deep_orange_a200_20x20.svg"
                    signalFour="images/img_signal_deep_orange_a200_20x20.svg"
                    p56767="423)"
                    dell215inchfull="Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6..."
                    priceOne="$360"
                  />
                  <Line className="self-center h-80 bg-gray-300 w-px" />
                  <C01HomepageProduct4
                    className="flex flex-col gap-6 items-center justify-start p-4 w-full"
                    userimage="images/img_image_3.png"
                    signalimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signaloneimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signaltwoimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signalthreeimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signalfourimage="images/img_signal_white_a700_16x16.svg"
                    text798="816)"
                  />
                </List>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-center pb-6 rounded w-auto md:w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-4 rounded-tl rounded-tr w-full">
                <Text
                  className="md:ml-[0] ml-[7px] text-gray-900 text-sm uppercase"
                  size="txtPublicSansMedium14Gray900"
                >
                  17 Oct, 2020
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-1 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(2,_1fr_1px)_1fr] justify-start sm:pl-5 pl-6 w-auto md:w-full"
                orientation="horizontal"
              >
                <C01HomepageProduct3
                  className="flex flex-col gap-6 items-center justify-start p-3 w-full"
                  image="images/img_image_18.png"
                  p25off="BEST DEALS"
                  signal="images/img_signal_deep_orange_a200_20x20.svg"
                  signalOne="images/img_signal_deep_orange_a200_20x20.svg"
                  signalTwo="images/img_signal_deep_orange_a200_20x20.svg"
                  signalThree="images/img_signal_deep_orange_a200_20x20.svg"
                  signalFour="images/img_signal_white_a700_16x16.svg"
                  p56767="(994)"
                  dell215inchfull="Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6..."
                  priceOne="$360"
                />
                <Line className="self-center h-80 bg-gray-300 w-px" />
                <C01HomepageProduct4
                  className="flex flex-col gap-6 items-center justify-start p-4 w-full"
                  userimage="images/img_image_3.png"
                  signalimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signaloneimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signaltwoimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signalthreeimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signalfourimage="images/img_signal_deep_orange_a200_20x20.svg"
                />
                <Line className="self-center h-80 bg-gray-300 w-px" />
                <C01HomepageProduct3
                  className="flex flex-col gap-6 items-center justify-start p-3 w-full"
                  image="images/img_image_19.png"
                  p25off="HOT"
                  signal="images/img_signal_deep_orange_a200_20x20.svg"
                  signalOne="images/img_signal_deep_orange_a200_20x20.svg"
                  signalTwo="images/img_signal_deep_orange_a200_20x20.svg"
                  signalThree="images/img_signal_deep_orange_a200_20x20.svg"
                  signalFour="images/img_signal_deep_orange_a200_20x20.svg"
                  p56767="(600)"
                  dell215inchfull="TOZO T6 True Wireless Earbuds Bluetooth Headphon..."
                  priceOne="$70"
                />
              </List>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-center justify-center pb-6 rounded w-auto md:w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-4 rounded-tl rounded-tr w-full">
                <Text
                  className="md:ml-[0] ml-[7px] text-gray-900 text-sm uppercase"
                  size="txtPublicSansMedium14Gray900"
                >
                  24 May, 2020
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
                <List
                  className="sm:flex-col flex-row gap-1 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(3,_1fr_1px)_1fr] justify-start w-auto md:w-full"
                  orientation="horizontal"
                >
                  <C01HomepageProduct3
                    className="flex flex-col gap-6 items-center justify-start p-3 w-full"
                    image="images/img_image_18.png"
                    p25off="BEST DEALS"
                    signal="images/img_signal_deep_orange_a200_20x20.svg"
                    signalOne="images/img_signal_deep_orange_a200_20x20.svg"
                    signalTwo="images/img_signal_deep_orange_a200_20x20.svg"
                    signalThree="images/img_signal_deep_orange_a200_20x20.svg"
                    signalFour="images/img_signal_white_a700_16x16.svg"
                    p56767="(994)"
                    dell215inchfull="Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6..."
                    priceOne="$360"
                  />
                  <Line className="self-center h-80 bg-gray-300 w-px" />
                  <C01HomepageProduct4
                    className="flex flex-col gap-6 items-center justify-start p-4 w-full"
                    userimage="images/img_image_3.png"
                    signalimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signaloneimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signaltwoimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signalthreeimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signalfourimage="images/img_signal_deep_orange_a200_20x20.svg"
                  />
                  <Line className="self-center h-80 bg-gray-300 w-px" />
                  <C01HomepageProduct3
                    className="flex flex-col gap-6 items-center justify-start p-3 w-full"
                    image="images/img_image_19.png"
                    p25off="HOT"
                    signal="images/img_signal_deep_orange_a200_20x20.svg"
                    signalOne="images/img_signal_deep_orange_a200_20x20.svg"
                    signalTwo="images/img_signal_deep_orange_a200_20x20.svg"
                    signalThree="images/img_signal_deep_orange_a200_20x20.svg"
                    signalFour="images/img_signal_deep_orange_a200_20x20.svg"
                    p56767="(600)"
                    dell215inchfull="TOZO T6 True Wireless Earbuds Bluetooth Headphon..."
                    priceOne="$70"
                  />
                  <Line className="self-center h-80 bg-gray-300 w-px" />
                  <C01HomepageProduct4
                    className="flex flex-col gap-6 items-center justify-start p-4 w-full"
                    userimage="images/img_image_20.png"
                    signalimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signaloneimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signaltwoimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signalthreeimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signalfourimage="images/img_signal_deep_orange_a200_20x20.svg"
                    text798="(492)"
                    textdescription="Dell Optiplex 7000x7480 All-in-One Computer Monitor"
                    textpriceone="$250"
                  />
                </List>
                <Line className="bg-gray-300 h-px w-[98%]" />
                <C01HomepageProduct3
                  className="flex flex-col gap-6 items-center justify-start p-3 w-1/4 md:w-full"
                  image="images/img_image_9.png"
                  p25off="SOLD OUT"
                  signal="images/img_signal_deep_orange_a200_20x20.svg"
                  signalOne="images/img_signal_deep_orange_a200_20x20.svg"
                  signalTwo="images/img_signal_deep_orange_a200_20x20.svg"
                  signalThree="images/img_signal_deep_orange_a200_20x20.svg"
                  signalFour="images/img_signal_white_a700_16x16.svg"
                  p56767="(740)"
                  dell215inchfull="Samsung Electronics Samsung Galexy S21 5G"
                  priceOne="$2,300"
                />
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-center justify-center pb-6 rounded w-auto md:w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-4 rounded-tl rounded-tr w-full">
                <Text
                  className="md:ml-[0] ml-[7px] text-gray-900 text-sm uppercase"
                  size="txtPublicSansMedium14Gray900"
                >
                  21 Sep, 2020
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-1 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(3,_1fr_1px)_1fr] justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <C01HomepageProduct4
                  className="flex flex-col gap-6 items-center justify-start p-4 w-full"
                  userimage="images/img_image_7.png"
                  signalimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signaloneimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signaltwoimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signalthreeimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signalfourimage="images/img_signal_deep_orange_a200_20x20.svg"
                  text798="(647)"
                  textdescription="Wired Over-Ear Gaming Headphones with USB"
                  textpriceone="$1,500"
                />
                <Line className="self-center h-80 bg-gray-300 w-px" />
                <C01HomepageProduct3
                  className="flex flex-col gap-6 items-center justify-start p-3 w-full"
                  signal="images/img_signal_deep_orange_a200_20x20.svg"
                  signalOne="images/img_signal_deep_orange_a200_20x20.svg"
                  signalTwo="images/img_signal_deep_orange_a200_20x20.svg"
                  signalThree="images/img_signal_deep_orange_a200_20x20.svg"
                  signalFour="images/img_signal_white_a700_16x16.svg"
                  price="$1600"
                />
                <Line className="self-center h-80 bg-gray-300 w-px" />
                <C01HomepageProduct4
                  className="flex flex-col gap-6 items-center justify-start p-4 w-full"
                  userimage="images/img_image_20.png"
                  signalimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signaloneimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signaltwoimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signalthreeimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signalfourimage="images/img_signal_deep_orange_a200_20x20.svg"
                  text798="(492)"
                  textdescription="Dell Optiplex 7000x7480 All-in-One Computer Monitor"
                  textpriceone="$250"
                />
                <Line className="self-center h-80 bg-gray-300 w-px" />
                <C01HomepageProduct3
                  className="flex flex-col gap-6 items-center justify-start p-3 w-full"
                  image="images/img_image_23.png"
                  signal="images/img_signal_deep_orange_a200_20x20.svg"
                  signalOne="images/img_signal_deep_orange_a200_20x20.svg"
                  signalTwo="images/img_signal_deep_orange_a200_20x20.svg"
                  signalThree="images/img_signal_deep_orange_a200_20x20.svg"
                  signalFour="images/img_signal_white_a700_16x16.svg"
                  p56767="(423)"
                  price="$1600"
                />
              </List>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-center pb-6 rounded w-auto md:w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-4 rounded-tl rounded-tr w-full">
                <Text
                  className="md:ml-[0] ml-[7px] text-gray-900 text-sm uppercase"
                  size="txtPublicSansMedium14Gray900"
                >
                  22 Oct, 2020
                </Text>
              </div>
              <div className="flex flex-col items-start justify-center sm:pl-5 pl-6 w-auto">
                <div className="flex flex-col items-start justify-start w-auto">
                  <C01HomepageProduct3
                    className="flex flex-col gap-6 items-center justify-start p-3 w-full"
                    image="images/img_image_21.png"
                    p25off="SALE"
                    signal="images/img_signal_deep_orange_a200_20x20.svg"
                    signalOne="images/img_signal_deep_orange_a200_20x20.svg"
                    signalTwo="images/img_signal_deep_orange_a200_20x20.svg"
                    signalThree="images/img_signal_deep_orange_a200_20x20.svg"
                    signalFour="images/img_signal_white_a700_16x16.svg"
                    p56767="(556)"
                    dell215inchfull="4K UHD LED Smart TV with Chromecast Built-in"
                    priceOne="$220"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-4 md:px-10 sm:px-5 px-[394px] w-auto md:w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[197px] rounded-[3px]"
                leftIcon={
                  <Img
                    className="h-6 mr-3"
                    src="images/img_close_deep_orange_a200_24x24.svg"
                    alt="close"
                  />
                }
                shape="round"
                color="orange_50"
                size="2xl"
                variant="outline"
              >
                <div className="font-bold text-base text-left tracking-[0.19px] uppercase">
                  Load more
                </div>
              </Button>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default DasboardBrowsingHistoryPage;
