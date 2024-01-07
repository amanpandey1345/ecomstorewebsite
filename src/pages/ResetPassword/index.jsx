import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import Footer from "components/Footer";
import Header from "components/Header";

const ResetPasswordPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-start mx-auto w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <C07ShopPageBreadcrumb
          className="bg-gray-100 flex flex-col items-start justify-start p-[26px] sm:px-5 w-full"
          macbookprotext="Reset Password"
        />
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start mt-[100px] p-8 md:px-5 rounded shadow-bs7 w-auto sm:w-full">
          <div className="flex flex-col gap-3 items-start justify-start w-auto">
            <Text
              className="text-center text-gray-900 text-xl w-auto"
              size="txtPublicSansSemiBold20Gray900"
            >
              Reset Password
            </Text>
            <Text
              className="leading-[20.00px] max-w-[360px] md:max-w-full text-blue_gray-600 text-center text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              Duis sagittis molestie tellus, at eleifend sapien pellque quis.
              Fusce lorem nunc, fringilla sit amet nunc.
            </Text>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <div className="flex flex-col gap-2 items-start justify-start w-[360px]">
              <Text
                className="text-gray-900 text-sm w-full"
                size="txtPublicSansRegular14Gray900"
              >
                Password
              </Text>
              <Input
                name="inputfield"
                placeholder="8+ characters"
                className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-left text-sm w-full"
                wrapClassName="border border-gray-300 border-solid flex w-full"
                suffix={
                  <Img
                    className="h-5 ml-[35px] my-auto"
                    src="images/img_eye.svg"
                    alt="eye"
                  />
                }
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-[360px]">
              <Text
                className="text-gray-900 text-sm w-full"
                size="txtPublicSansRegular14Gray900"
              >
                Confirm Password
              </Text>
              <Input
                name="inputfield_One"
                placeholder=""
                className="p-0 w-full"
                wrapClassName="border border-gray-300 border-solid flex w-full"
                suffix={
                  <Img
                    className="h-5 ml-[35px] my-auto"
                    src="images/img_eye.svg"
                    alt="eye"
                  />
                }
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
            </div>
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
              Reset Password
            </div>
          </Button>
        </div>
        <Footer className="flex items-center justify-center mt-[100px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ResetPasswordPage;
