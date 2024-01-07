import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const TrackOrderPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="flex flex-col items-center justify-center md:px-5 w-full" />
        <C07ShopPageBreadcrumb
          className="bg-gray-100 flex flex-col items-start justify-start p-[26px] sm:px-5 w-full"
          shoptext="Pages"
          arrowrightoneimage="images/img_arrowright.svg"
          macbookprotext="Track Order"
        />
        <div className="flex flex-col gap-8 items-start justify-start pb-[124px] pt-12 md:px-10 sm:px-5 px-[300px] w-auto md:w-full">
          <div className="flex flex-col gap-6 items-start justify-start max-w-[1320px] mx-auto w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
                size="txtPublicSansSemiBold32"
              >
                Track Order
              </Text>
              <Text
                className="leading-[24.00px] max-w-[760px] md:max-w-full text-base text-blue_gray-600"
                size="txtPublicSansRegular16Bluegray600"
              >
                To track your order please enter your order ID in the input
                field below and press the “Track Order” button. this was given
                to you on your receipt and in the confirmation email you should
                have received.
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14Gray900"
                  >
                    Order ID
                  </Text>
                  <Input
                    name="inputfield"
                    placeholder="ID..."
                    className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-left text-sm w-full"
                    wrapClassName="border border-gray-300 border-solid w-full"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex sm:flex-col flex-row gap-1.5 items-center justify-start w-auto sm:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_inbox_blue_gray_600.svg"
                    alt="inbox_One"
                  />
                  <Text
                    className="text-blue_gray-600 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    Order ID that we sended to your in your email address.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14Gray900"
                >
                  Billing Email
                </Text>
                <Input
                  name="inputfield_One"
                  placeholder="Email address"
                  className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-left text-sm w-full"
                  wrapClassName="border border-gray-300 border-solid w-full"
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[217px] rounded-[3px]"
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
              Track Order
            </div>
          </Button>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default TrackOrderPage;
