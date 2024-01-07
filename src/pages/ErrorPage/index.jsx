import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header2 from "components/Header2";

const ErrorPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans sm:gap-10 md:gap-10 gap-[124px] items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <Header2 className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start max-w-[1320px] mx-auto md:px-5 w-full">
          <Img
            className="h-[500px] w-[500px]"
            src="images/img_oops404error.svg"
            alt="oops404error"
          />
          <div className="flex flex-col gap-6 items-center justify-center w-auto md:w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-center text-gray-900 w-auto"
              size="txtPublicSansSemiBold36"
            >
              404, Page not founds
            </Text>
            <Text
              className="leading-[24.00px] max-w-[536px] md:max-w-full text-base text-blue_gray-700 text-center"
              size="txtPublicSansRegular16Bluegray700"
            >
              Something went wrong. It’s look that your requested could not be
              found. It’s look like the link is broken or the page is removed.
            </Text>
            <div className="flex flex-row gap-4 items-start justify-start w-auto">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[141px]"
                leftIcon={
                  <Img
                    className="h-5 mr-2"
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
                  Go Back
                </div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[168px]"
                leftIcon={
                  <Img
                    className="h-5 mr-2"
                    src="images/img_home_deep_orange_a200_20x20.svg"
                    alt="home"
                  />
                }
                shape="round"
                color="orange_50"
                size="xl"
                variant="outline"
              >
                <div className="font-bold text-left text-sm tracking-[0.17px] uppercase">
                  Go To home
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

export default ErrorPagePage;
