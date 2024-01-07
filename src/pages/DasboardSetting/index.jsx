import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import C27DasboardColumndashboardnavite from "components/C27DasboardColumndashboardnavite";
import Footer from "components/Footer";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const DasboardSettingPage = () => {
  const [dashboardnavitevalue, setDashboardnavitevalue] = React.useState("");

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
          <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start pb-6 rounded w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start p-[17px] rounded-tl rounded-tr w-full">
                  <Text
                    className="ml-1.5 md:ml-[0] text-gray-900 text-sm uppercase"
                    size="txtPublicSansMedium14Gray900"
                  >
                    Account Setting
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-6 items-start justify-between w-[96%] md:w-full">
                  <Img
                    className="h-44 md:h-auto rounded-[50%] w-44"
                    src="images/img_avatar.png"
                    alt="avatar"
                  />
                  <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                    <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-auto md:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-[360px]">
                        <Text
                          className="text-gray-900 text-sm w-full"
                          size="txtPublicSansRegular14Gray900"
                        >
                          Display name
                        </Text>
                        <Input
                          name="inputfield"
                          placeholder="Kevin"
                          className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                          wrapClassName="border border-gray-300 border-solid w-full"
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
                          Username
                        </Text>
                        <Input
                          name="inputfield_One"
                          placeholder="Display name"
                          className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                          wrapClassName="border border-gray-300 border-solid w-full"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-auto md:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-[360px]">
                        <Text
                          className="text-gray-900 text-sm w-full"
                          size="txtPublicSansRegular14Gray900"
                        >
                          Full Name
                        </Text>
                        <Input
                          name="inputfield_Two"
                          placeholder="Kevin Gilbert"
                          className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                          wrapClassName="border border-gray-300 border-solid w-full"
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
                          Email
                        </Text>
                        <Input
                          name="email_One"
                          placeholder="Kevin.gilbert@gmail.com"
                          className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                          wrapClassName="border border-gray-300 border-solid w-full"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-auto md:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-[360px]">
                        <Text
                          className="text-gray-900 text-sm w-full"
                          size="txtPublicSansRegular14Gray900"
                        >
                          Secondary Email
                        </Text>
                        <Input
                          name="email_Two"
                          placeholder="kevin12345@gmail.com"
                          className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                          wrapClassName="border border-gray-300 border-solid w-full"
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
                          Phone Number
                        </Text>
                        <Input
                          name="inputfield_Three"
                          placeholder="+1-202-555-0118"
                          className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                          wrapClassName="border border-gray-300 border-solid w-full"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-auto md:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-[360px]">
                        <Text
                          className="text-gray-900 text-sm w-full"
                          size="txtPublicSansRegular14Gray900"
                        >
                          Country/Region
                        </Text>
                        <Input
                          name="dropdown"
                          placeholder="Bangladesh"
                          className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                          wrapClassName="border border-gray-300 border-solid flex w-full"
                          suffix={
                            <Img
                              className="mt-auto mb-px h-4 ml-[35px]"
                              src="images/img_arrowdown_blue_gray_200.svg"
                              alt="arrow_down"
                            />
                          }
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-[172px]">
                        <Text
                          className="text-gray-900 text-sm w-full"
                          size="txtPublicSansRegular14Gray900"
                        >
                          States
                        </Text>
                        <Input
                          name="dropdown_One"
                          placeholder="Dhaka"
                          className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                          wrapClassName="border border-gray-300 border-solid flex w-full"
                          suffix={
                            <Img
                              className="h-4 ml-[35px] my-px"
                              src="images/img_arrowdown_blue_gray_200.svg"
                              alt="arrow_down"
                            />
                          }
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-[172px]">
                        <Text
                          className="text-gray-900 text-sm w-full"
                          size="txtPublicSansRegular14Gray900"
                        >
                          Zip Code
                        </Text>
                        <Input
                          name="zipcode_One"
                          placeholder="1207"
                          className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                          wrapClassName="border border-gray-300 border-solid w-full"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold min-w-[161px] text-center text-sm tracking-[0.17px] uppercase"
                  shape="round"
                  color="deep_orange_A200"
                  size="xl"
                  variant="fill"
                >
                  Save Changes
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-center justify-center pb-6 rounded w-auto sm:w-full">
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start p-[17px] rounded-tl rounded-tr w-full">
                  <Text
                    className="ml-1.5 md:ml-[0] text-gray-900 text-sm uppercase"
                    size="txtPublicSansMedium14Gray900"
                  >
                    Billing Address
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-52">
                        <Text
                          className="text-gray-900 text-sm w-full"
                          size="txtPublicSansRegular14Gray900"
                        >
                          First Name
                        </Text>
                        <Input
                          name="language_One"
                          placeholder="Kevin "
                          className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                          wrapClassName="border border-gray-300 border-solid w-full"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-52">
                        <Text
                          className="text-gray-900 text-sm w-full"
                          size="txtPublicSansRegular14Gray900"
                        >
                          Last Name
                        </Text>
                        <Input
                          name="inputfield_Four"
                          placeholder="Gilbert"
                          className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                          wrapClassName="border border-gray-300 border-solid w-full"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-[432px] sm:w-full">
                      <Text
                        className="text-gray-900 text-sm w-full"
                        size="txtPublicSansRegular14Gray900"
                      >
                        <span className="text-gray-900 font-publicsans text-left font-normal">
                          Company Name{" "}
                        </span>
                        <span className="text-blue_gray-600 font-publicsans text-left font-normal">
                          (Optional)
                        </span>
                      </Text>
                      <Input
                        name="inputfield_Five"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="border border-gray-300 border-solid flex h-11 w-full"
                        shape="round"
                        color="white_A700"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-[432px] sm:w-full">
                      <Text
                        className="text-gray-900 text-sm w-full"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Address
                      </Text>
                      <Input
                        name="inputfield_Six"
                        placeholder="Road No. 13/x, House no. 1320/C, Flat No. 5D"
                        className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                        wrapClassName="border border-gray-300 border-solid w-full"
                        shape="round"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-[431px] sm:w-full">
                      <Text
                        className="text-gray-900 text-sm w-full"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Country
                      </Text>
                      <Input
                        name="dropdown_Two"
                        placeholder="Bangladesh"
                        className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                        wrapClassName="border border-gray-300 border-solid flex w-full"
                        suffix={
                          <Img
                            className="mt-auto mb-px h-4 ml-[35px]"
                            src="images/img_arrowdown_blue_gray_200.svg"
                            alt="arrow_down"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-[431px] sm:w-full">
                      <Text
                        className="text-gray-900 text-sm w-full"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Region/State
                      </Text>
                      <Input
                        name="dropdown_Three"
                        placeholder="Select..."
                        className="!placeholder:text-blue_gray-300 !text-blue_gray-300 p-0 text-left text-sm w-full"
                        wrapClassName="border border-gray-300 border-solid flex w-full"
                        suffix={
                          <Img
                            className="h-4 ml-[35px] my-px"
                            src="images/img_arrowdown_blue_gray_200.svg"
                            alt="arrow_down"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-52">
                        <Text
                          className="text-gray-900 text-sm w-full"
                          size="txtPublicSansRegular14Gray900"
                        >
                          City
                        </Text>
                        <Input
                          name="dropdown_Four"
                          placeholder="Dhaka"
                          className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                          wrapClassName="border border-gray-300 border-solid flex w-full"
                          suffix={
                            <Img
                              className="h-4 ml-[35px] my-px"
                              src="images/img_arrowdown_blue_gray_200.svg"
                              alt="arrow_down"
                            />
                          }
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-52">
                        <Text
                          className="text-gray-900 text-sm w-full"
                          size="txtPublicSansRegular14Gray900"
                        >
                          Zip Code
                        </Text>
                        <Input
                          name="zipcode_Three"
                          placeholder="1207"
                          className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                          wrapClassName="border border-gray-300 border-solid w-full"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-[432px] sm:w-full">
                      <Text
                        className="text-gray-900 text-sm w-full"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Email
                      </Text>
                      <Input
                        name="email_Four"
                        placeholder="kevin12345@gmail.com"
                        className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                        wrapClassName="border border-gray-300 border-solid w-full"
                        shape="round"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-[432px] sm:w-full">
                      <Text
                        className="text-gray-900 text-sm w-full"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Phone Number
                      </Text>
                      <Input
                        name="inputfield_Seven"
                        placeholder="+1-202-555-0118"
                        className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                        wrapClassName="border border-gray-300 border-solid w-full"
                        shape="round"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold min-w-[161px] text-center text-sm tracking-[0.17px] uppercase"
                    shape="round"
                    color="deep_orange_A200"
                    size="xl"
                    variant="fill"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-center justify-center pb-6 rounded w-auto sm:w-full">
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start p-[17px] rounded-tl rounded-tr w-full">
                  <Text
                    className="ml-1.5 md:ml-[0] text-gray-900 text-sm uppercase"
                    size="txtPublicSansMedium14Gray900"
                  >
                    Shipping Address
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-52">
                        <Text
                          className="text-gray-900 text-sm w-full"
                          size="txtPublicSansRegular14Gray900"
                        >
                          First Name
                        </Text>
                        <Input
                          name="language_Two"
                          placeholder="Kevin "
                          className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                          wrapClassName="border border-gray-300 border-solid w-full"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-52">
                        <Text
                          className="text-gray-900 text-sm w-full"
                          size="txtPublicSansRegular14Gray900"
                        >
                          Last Name
                        </Text>
                        <Input
                          name="inputfield_Eight"
                          placeholder="Gilbert"
                          className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                          wrapClassName="border border-gray-300 border-solid w-full"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-[432px] sm:w-full">
                      <Text
                        className="text-gray-900 text-sm w-full"
                        size="txtPublicSansRegular14Gray900"
                      >
                        <span className="text-gray-900 font-publicsans text-left font-normal">
                          Company Name{" "}
                        </span>
                        <span className="text-blue_gray-600 font-publicsans text-left font-normal">
                          (Optional)
                        </span>
                      </Text>
                      <Input
                        name="inputfield_Nine"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="border border-gray-300 border-solid flex h-11 w-full"
                        shape="round"
                        color="white_A700"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-[432px] sm:w-full">
                      <Text
                        className="text-gray-900 text-sm w-full"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Address
                      </Text>
                      <Input
                        name="inputfield_Ten"
                        placeholder="Road No. 13/x, House no. 1320/C, Flat No. 5D"
                        className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                        wrapClassName="border border-gray-300 border-solid w-full"
                        shape="round"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-[431px] sm:w-full">
                      <Text
                        className="text-gray-900 text-sm w-full"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Country
                      </Text>
                      <Input
                        name="dropdown_Five"
                        placeholder="Bangladesh"
                        className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                        wrapClassName="border border-gray-300 border-solid flex w-full"
                        suffix={
                          <Img
                            className="mt-auto mb-px h-4 ml-[35px]"
                            src="images/img_arrowdown_blue_gray_200.svg"
                            alt="arrow_down"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-[431px] sm:w-full">
                      <Text
                        className="text-gray-900 text-sm w-full"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Region/State
                      </Text>
                      <Input
                        name="dropdown_Six"
                        placeholder="Select..."
                        className="!placeholder:text-blue_gray-300 !text-blue_gray-300 p-0 text-left text-sm w-full"
                        wrapClassName="border border-gray-300 border-solid flex w-full"
                        suffix={
                          <Img
                            className="h-4 ml-[35px] my-px"
                            src="images/img_arrowdown_blue_gray_200.svg"
                            alt="arrow_down"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-52">
                        <Text
                          className="text-gray-900 text-sm w-full"
                          size="txtPublicSansRegular14Gray900"
                        >
                          City
                        </Text>
                        <Input
                          name="dropdown_Seven"
                          placeholder="Dhaka"
                          className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                          wrapClassName="border border-gray-300 border-solid flex w-full"
                          suffix={
                            <Img
                              className="h-4 ml-[35px] my-px"
                              src="images/img_arrowdown_blue_gray_200.svg"
                              alt="arrow_down"
                            />
                          }
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-52">
                        <Text
                          className="text-gray-900 text-sm w-full"
                          size="txtPublicSansRegular14Gray900"
                        >
                          Zip Code
                        </Text>
                        <Input
                          name="zipcode_Five"
                          placeholder="1207"
                          className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                          wrapClassName="border border-gray-300 border-solid w-full"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-[432px] sm:w-full">
                      <Text
                        className="text-gray-900 text-sm w-full"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Email
                      </Text>
                      <Input
                        name="email_Six"
                        placeholder="kevin12345@gmail.com"
                        className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                        wrapClassName="border border-gray-300 border-solid w-full"
                        shape="round"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-[432px] sm:w-full">
                      <Text
                        className="text-gray-900 text-sm w-full"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Phone Number
                      </Text>
                      <Input
                        name="inputfield_Eleven"
                        placeholder="+1-202-555-0118"
                        className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                        wrapClassName="border border-gray-300 border-solid w-full"
                        shape="round"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold min-w-[161px] text-center text-sm tracking-[0.17px] uppercase"
                    shape="round"
                    color="deep_orange_A200"
                    size="xl"
                    variant="fill"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-center pb-6 rounded w-auto md:w-full">
              <Input
                name="heading"
                placeholder="Change Password"
                className="!placeholder:text-gray-900 !text-gray-900 font-medium p-0 text-left text-sm uppercase w-full"
                wrapClassName="border border-gray-300 border-solid rounded-tl rounded-tr w-full"
                shape="round"
                color="white_A700"
                size="md"
                variant="fill"
              ></Input>
              <div className="flex flex-col gap-4 items-start justify-start sm:pl-5 pl-6 w-auto md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start max-w-[936px] w-full">
                  <Text
                    className="text-gray-900 text-sm w-full"
                    size="txtPublicSansRegular14Gray900"
                  >
                    Current Password
                  </Text>
                  <Input
                    name="inputfield_Twelve"
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
                <div className="flex flex-col gap-2 items-start justify-start max-w-[936px] w-full">
                  <Text
                    className="text-gray-900 text-sm w-full"
                    size="txtPublicSansRegular14Gray900"
                  >
                    New Password
                  </Text>
                  <Input
                    name="inputfield_Thirteen"
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
                <div className="flex flex-col gap-2 items-start justify-start max-w-[936px] w-full">
                  <Text
                    className="text-gray-900 text-sm w-full"
                    size="txtPublicSansRegular14Gray900"
                  >
                    Confirm Password
                  </Text>
                  <Input
                    name="inputfield_Fourteen"
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
              <div className="flex flex-col items-start justify-start sm:pl-5 pl-6 w-auto">
                <Button
                  className="cursor-pointer font-bold min-w-[197px] text-center text-sm tracking-[0.17px] uppercase"
                  shape="round"
                  color="deep_orange_A200"
                  size="xl"
                  variant="fill"
                >
                  Change Passowrd
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default DasboardSettingPage;
