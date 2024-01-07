import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import Footer from "components/Footer";
import Header from "components/Header";

const ForgetPasswordPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-start mx-auto w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <C07ShopPageBreadcrumb
          className="bg-gray-100 flex flex-col items-start justify-start p-[26px] sm:px-5 w-full"
          macbookprotext="Forget Password"
        />
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start mt-[100px] p-8 md:px-5 rounded shadow-bs7 w-auto sm:w-full">
          <div className="flex flex-col gap-3 items-start justify-start w-auto">
            <Text
              className="text-center text-gray-900 text-xl w-auto"
              size="txtPublicSansSemiBold20Gray900"
            >
              Forget Password
            </Text>
            <Text
              className="leading-[20.00px] max-w-[360px] md:max-w-full text-blue_gray-600 text-center text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              Enter the email address or mobile phone number associated with
              your Clicon account.
            </Text>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-[360px]">
            <Text
              className="text-gray-900 text-sm w-full"
              size="txtPublicSansRegular14Gray900"
            >
              Email Address
            </Text>
            <Input
              name="inputfield"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-gray-300 border-solid flex h-11 w-full"
              shape="round"
              color="white_A700"
              variant="fill"
            ></Input>
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
              Send Code
            </div>
          </Button>
          <div className="flex flex-col gap-2 items-start justify-start w-auto">
            <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-600 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray600"
              >
                Already have account?
              </Text>
              <Text
                className="text-blue-500 text-sm w-auto"
                size="txtPublicSansMedium14Blue500"
              >
                Sign In
              </Text>
            </div>
            <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
              <Text
                className="text-blue_gray-600 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray600"
              >
                Don’t have account?
              </Text>
              <Text
                className="text-blue-500 text-sm w-auto"
                size="txtPublicSansMedium14Blue500"
              >
                Sign Up
              </Text>
            </div>
          </div>
          <Line className="bg-gray-300 h-px w-full" />
          <Text
            className="leading-[20.00px] max-w-[360px] md:max-w-full text-blue_gray-700 text-sm"
            size="txtPublicSansRegular14Bluegray700"
          >
            <span className="text-blue_gray-700 font-publicsans text-left font-normal">
              You may contact{" "}
            </span>
            <span className="text-deep_orange-A200 font-publicsans text-left font-medium">
              Customer Service
            </span>
            <span className="text-blue_gray-700 font-publicsans text-left font-normal">
              {" "}
              for help restoring access to your account.
            </span>
          </Text>
        </div>
        <Footer className="flex items-center justify-center mt-[100px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ForgetPasswordPage;
