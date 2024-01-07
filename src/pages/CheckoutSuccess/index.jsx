import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import Footer from "components/Footer";
import Header from "components/Header";

const CheckoutSuccessPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <C07ShopPageBreadcrumb
          className="bg-gray-100 flex flex-col items-start justify-start p-[26px] sm:px-5 w-full"
          shoptext="Shopping Card"
          arrowrightoneimage="images/img_arrowright.svg"
          macbookprotext="Checkout"
        />
        <div className="flex flex-col gap-8 items-center justify-center max-w-[1320px] mx-auto md:px-5 py-[124px] w-full">
          <div className="flex flex-col gap-6 items-center justify-center w-auto md:w-full">
            <Img
              className="h-[88px] w-[88px]"
              src="images/img_checkmark_green_700_88x88.svg"
              alt="checkmark"
            />
            <div className="flex flex-col gap-3 items-center justify-center w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl w-auto"
                size="txtPublicSansSemiBold24Gray900"
              >
                Your order is successfully place
              </Text>
              <Text
                className="leading-[20.00px] max-w-[424px] md:max-w-full text-blue_gray-600 text-center text-sm"
                size="txtPublicSansRegular14Bluegray600"
              >
                Pellentesque sed lectus nec tortor tristique accumsan quis
                dictum risus. Donec volutpat mollis nulla non facilisis.
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-3 items-start justify-start w-auto sm:w-full">
            <Input
              name="button"
              placeholder="Go to Dashboard"
              className="font-bold p-0 placeholder:text-deep_orange-A200 text-left text-sm tracking-[0.17px] uppercase w-full"
              wrapClassName="flex w-[55%] sm:w-full"
              prefix={
                <Img
                  className="h-5 mr-2 my-auto"
                  src="images/img_settings_deep_orange_a200_20x20.svg"
                  alt="settings"
                />
              }
              shape="round"
              color="orange_50"
              size="xs"
              variant="outline"
            ></Input>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[167px]"
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
                View Order
              </div>
            </Button>
          </div>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default CheckoutSuccessPage;
