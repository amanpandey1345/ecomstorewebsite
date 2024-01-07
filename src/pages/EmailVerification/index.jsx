import React from "react";

import { Button, Img, Line, List, Text } from "components";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import Footer from "components/Footer";
import Header from "components/Header";

const EmailVerificationPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-start mx-auto w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <C07ShopPageBreadcrumb
          className="bg-gray-100 flex flex-col items-start justify-start p-[26px] sm:px-5 w-full"
          macbookprotext="Email Verification"
        />
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start mt-[100px] p-8 md:px-5 rounded shadow-bs7 w-auto sm:w-full">
          <div className="flex flex-col gap-3 items-start justify-start w-auto">
            <Text
              className="text-center text-gray-900 text-xl w-auto"
              size="txtPublicSansSemiBold20Gray900"
            >
              Verify Your Email Address
            </Text>
            <Text
              className="leading-[20.00px] max-w-[360px] md:max-w-full text-blue_gray-600 text-center text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              Nam ultricies lectus a risus blandit elementum. Quisque arcu arcu,
              tristique a eu in diam.
            </Text>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-[360px]">
            <div className="flex flex-row gap-2 items-center justify-between w-[360px]">
              <Text
                className="text-gray-900 text-sm w-auto"
                size="txtPublicSansRegular14Gray900"
              >
                Verification Code
              </Text>
              <Text
                className="text-blue-500 text-sm w-auto"
                size="txtPublicSansMedium14Blue500"
              >
                Resend Code
              </Text>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid h-11 rounded-sm w-full"></div>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center w-[360px]"
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
              Verify me
            </div>
          </Button>
        </div>
        <Footer className="flex items-center justify-center mt-[100px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default EmailVerificationPage;
