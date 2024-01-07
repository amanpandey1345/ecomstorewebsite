import React from "react";

import { Button, Img, Line, Text } from "components";

const C08ProductDetailColumndescriptionFour = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-3 items-center justify-center w-[49%] md:w-full">
              <Button
                className="!text-gray-900 cursor-pointer font-medium font-publicsans min-w-[134px] shadow-bs6 text-center text-sm uppercase"
                shape="square"
                color="white_A700"
                size="2xl"
                variant="fill"
              >
                {props?.description}
              </Button>
              <div className="flex flex-col items-start justify-start px-5 py-2.5 rounded-sm w-auto">
                <Text
                  className="text-blue_gray-600 text-sm uppercase w-auto"
                  size="txtPublicSansMedium14Bluegray600"
                >
                  {props?.descriptionOne}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start px-5 py-2.5 rounded-sm w-auto">
                <Text
                  className="text-blue_gray-600 text-sm uppercase w-auto"
                  size="txtPublicSansMedium14Bluegray600"
                >
                  {props?.descriptionTwo}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start px-5 py-2.5 rounded-sm w-auto">
                <Text
                  className="text-blue_gray-600 text-sm uppercase w-auto"
                  size="txtPublicSansMedium14Bluegray600"
                >
                  {props?.descriptionThree}
                </Text>
              </div>
            </div>
            <Line className="bg-gray-300 h-px w-full" />
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
          <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              {props?.descriptionFour}
            </Text>
            <Text
              className="leading-[20.00px] md:max-w-full max-w-xl text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.descriptionFive}
            </Text>
            <Text
              className="leading-[20.00px] md:max-w-full max-w-xl text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.descriptionSix}
            </Text>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              {props?.feature}
            </Text>
            <div className="flex flex-col gap-3 items-start justify-start w-auto">
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_home_deep_orange_a200.svg"
                  alt="home_Two"
                />
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14Gray900"
                >
                  {props?.duration}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_regulartruck.svg"
                  alt="regulartruck"
                />
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14Gray900"
                >
                  {props?.freeshipping}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_settings_24x24.svg"
                  alt="settings_One"
                />
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14Gray900"
                >
                  {props?.p100moneyback}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_settings_1.svg"
                  alt="settings_Two"
                />
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14Gray900"
                >
                  {props?.p247customersuppone}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_calendar.svg"
                  alt="calendar"
                />
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14Gray900"
                >
                  {props?.securepaymentmeOne}
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-gray-300 h-[228px] md:h-px md:w-full w-px" />
          <div className="flex flex-col gap-5 items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              {props?.shippinginformaOne}
            </Text>
            <div className="flex flex-col gap-3 items-start justify-start w-auto">
              <div className="flex flex-row items-start justify-start w-auto">
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtPublicSansMedium14Gray900"
                >
                  {props?.courier}
                </Text>
                <Text
                  className="text-blue_gray-600 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  {props?.durationOne}
                </Text>
              </div>
              <div className="flex flex-row items-start justify-start w-auto">
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtPublicSansMedium14Gray900"
                >
                  {props?.localshipping}
                </Text>
                <Text
                  className="text-blue_gray-600 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  {props?.priceThree}
                </Text>
              </div>
              <div className="flex flex-row items-start justify-start w-auto">
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtPublicSansMedium14Gray900"
                >
                  {props?.upsgroundshippiOne}
                </Text>
                <Text
                  className="text-blue_gray-600 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  {props?.priceFour}
                </Text>
              </div>
              <div className="flex flex-row items-start justify-start w-auto">
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtPublicSansMedium14Gray900"
                >
                  {props?.unishopglobalexOne}
                </Text>
                <Text
                  className="text-blue_gray-600 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  {props?.priceFive}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C08ProductDetailColumndescriptionFour.defaultProps = {
  description: "Description",
  descriptionOne: "Additional information",
  descriptionTwo: "Specification",
  descriptionThree: "Review",
  descriptionFour: "Description",
  descriptionFive:
    "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.",
  descriptionSix: (
    <>
      Even the most ambitious projects are easily handled with up to 10 CPU
      cores, up to 16 GPU cores, a 16‑core Neural Engine, and dedicated encode
      and decode media engines that support H.264, HEVC, and ProRes codecs.
    </>
  ),
  feature: "Feature",
  duration: "Free 1 Year Warranty",
  freeshipping: "Free Shipping & Fasted Delivery",
  p100moneyback: "100% Money-back guarantee",
  p247customersuppone: "24/7 Customer support",
  securepaymentmeOne: "Secure payment method",
  shippinginformaOne: "Shipping Information",
  courier: "Courier:",
  durationOne: " 2 - 4 days, free shipping",
  localshipping: "Local Shipping:",
  priceThree: <> up to one week, $19.00</>,
  upsgroundshippiOne: "UPS Ground Shipping:",
  priceFour: <> 4 - 6 days, $29.00</>,
  unishopglobalexOne: "Unishop Global Export:",
  priceFive: " 3 - 4 days, $39.00",
};

export default C08ProductDetailColumndescriptionFour;
