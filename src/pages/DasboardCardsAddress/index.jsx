import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import C27DasboardColumndashboardnavite from "components/C27DasboardColumndashboardnavite";
import C27DasboardMastercard from "components/C27DasboardMastercard";
import C27DasboardVisa from "components/C27DasboardVisa";
import Footer from "components/Footer";
import Header from "components/Header";

const DasboardCardsAddressPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
          <C07ShopPageBreadcrumb
            className="bg-gray-100 flex flex-col items-start justify-start p-[26px] sm:px-5 w-full"
            shoptext="User Account"
            arrowrightoneimage="images/img_arrowright.svg"
            shopgridtext="Dashboard"
            arrowrighttwoimage="images/img_arrowright.svg"
            macbookprotext="Cards & Address"
          />
          <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-start justify-center max-w-[1320px] mt-10 mx-auto md:px-5 w-full">
            <C27DasboardColumndashboardnavite className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start mb-[200px] py-4 rounded shadow-bs10 w-auto" />
            <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-3/4 md:w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 justify-start pb-6 rounded w-full">
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row sm:gap-10 items-center justify-between p-2.5 rounded-tl rounded-tr w-full">
                  <Text
                    className="ml-3.5 text-gray-900 text-sm uppercase"
                    size="txtPublicSansMedium14Gray900"
                  >
                    Payment Option
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[90px] mr-3.5"
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
                      Add Card
                    </div>
                  </Button>
                </div>
                <div className="md:h-[193px] h-[196px] ml-6 md:ml-[0] relative w-[63%] md:w-full">
                  <C27DasboardMastercard className="absolute bg-gradient  flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-6 sm:px-5 right-[0] rounded w-[49%]" />
                  <C27DasboardVisa
                    className="absolute flex inset-y-[0] left-[0] my-auto w-[63%] sm:w-full"
                    settingsTwo="images/img_settings_white_a700_40x40.svg"
                  />
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 border border-gray-300 border-solid flex sm:flex-1 flex-col gap-6 items-start justify-center pb-6 rounded w-auto sm:w-full">
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start p-[17px] rounded-tl rounded-tr w-full">
                    <Text
                      className="ml-1.5 md:ml-[0] text-gray-900 text-sm uppercase"
                      size="txtPublicSansMedium14Gray900"
                    >
                      Billing address
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-center sm:pl-5 pl-6 w-auto sm:w-full">
                    <div className="flex flex-col gap-3 items-start justify-center w-auto sm:w-full">
                      <Text
                        className="text-base text-gray-900 w-auto"
                        size="txtPublicSansMedium16"
                      >
                        Kevin Gilbert
                      </Text>
                      <Text
                        className="leading-[20.00px] max-w-[432px] md:max-w-full text-blue_gray-600 text-sm"
                        size="txtPublicSansRegular14Bluegray600"
                      >
                        East Tejturi Bazar, Word No. 04, Road No. 13/x, House
                        no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-center w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Phone Number:
                      </Text>
                      <Text
                        className="text-blue_gray-600 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray600"
                      >
                        {" "}
                        +1-202-555-0118
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-center w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Email:
                      </Text>
                      <Text
                        className="text-blue_gray-600 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray600"
                      >
                        {" "}
                        kevin.gilbert@gmail.com
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:pl-5 pl-6 w-auto">
                    <Button
                      className="cursor-pointer font-bold min-w-[154px] text-center text-sm tracking-[0.17px] uppercase"
                      shape="round"
                      color="light_blue_50"
                      size="xl"
                      variant="outline"
                    >
                      Edit Address
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-300 border-solid flex sm:flex-1 flex-col gap-6 items-start justify-center pb-6 rounded w-auto sm:w-full">
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start p-[17px] rounded-tl rounded-tr w-full">
                    <Text
                      className="ml-1.5 md:ml-[0] text-gray-900 text-sm uppercase"
                      size="txtPublicSansMedium14Gray900"
                    >
                      Shipping Address
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-center sm:pl-5 pl-6 w-auto sm:w-full">
                    <div className="flex flex-col gap-3 items-start justify-center w-auto sm:w-full">
                      <Text
                        className="text-base text-gray-900 w-auto"
                        size="txtPublicSansMedium16"
                      >
                        Kevin Gilbert
                      </Text>
                      <Text
                        className="leading-[20.00px] max-w-[432px] md:max-w-full text-blue_gray-600 text-sm"
                        size="txtPublicSansRegular14Bluegray600"
                      >
                        East Tejturi Bazar, Word No. 04, Road No. 13/x, House
                        no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-center w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Phone Number:
                      </Text>
                      <Text
                        className="text-blue_gray-600 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray600"
                      >
                        {" "}
                        +1-202-555-0118
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-center w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Email:
                      </Text>
                      <Text
                        className="text-blue_gray-600 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray600"
                      >
                        {" "}
                        kevin.gilbert@gmail.com
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:pl-5 pl-6 w-auto">
                    <Button
                      className="cursor-pointer font-bold min-w-[154px] text-center text-sm tracking-[0.17px] uppercase"
                      shape="round"
                      color="light_blue_50"
                      size="xl"
                      variant="outline"
                    >
                      Edit Address
                    </Button>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <Footer className="flex items-center justify-center mt-[72px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default DasboardCardsAddressPage;
