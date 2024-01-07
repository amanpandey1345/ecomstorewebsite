import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  Text,
} from "components";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import Footer from "components/Footer";
import Header from "components/Header";

const BlogDetailPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <C07ShopPageBreadcrumb
          className="bg-gray-100 flex flex-col items-start justify-start p-[26px] sm:px-5 w-full"
          shoptext="Pages"
          arrowrightoneimage="images/img_arrowright.svg"
          shopgridtext="Blog"
          arrowrighttwoimage="images/img_arrowright.svg"
          macbookprotext="Blog Detail"
        />
        <div className="flex flex-col gap-12 items-start justify-start md:px-10 sm:px-5 px-[300px] py-[72px] w-auto md:w-full">
          <Img
            className="h-[740px] sm:h-auto max-w-[1320px] mx-auto object-cover rounded-[3px] w-full"
            src="images/img_unsplashqhnutbbnzoc.png"
            alt="unsplashqhnutbb"
          />
          <div className="flex md:flex-col flex-row gap-12 items-start justify-start max-w-[1320px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col gap-8 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                  <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings_3.svg"
                        alt="settings_One"
                      />
                      <Text
                        className="text-blue_gray-700 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray700"
                      >
                        Electronics
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings_deep_orange_a200.svg"
                        alt="settings_Two"
                      />
                      <Text
                        className="text-blue_gray-700 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray700"
                      >
                        Marvin McKinney
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                      <Text
                        className="text-blue_gray-700 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray700"
                      >
                        8 Sep, 2020
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings_deep_orange_a200_24x24.svg"
                        alt="settings_Three"
                      />
                      <Text
                        className="text-blue_gray-700 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray700"
                      >
                        738
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[40.00px] max-w-[872px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                    size="txtPublicSansSemiBold32"
                  >
                    How artist collective Meow Wolf’s website complements their
                    immersive venues
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[860px] w-full">
                  <div className="flex flex-row gap-3 items-center justify-start w-auto">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_images.png"
                      alt="images"
                    />
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtPublicSansMedium16"
                    >
                      Cameron Williamson
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Button
                      className="flex h-10 items-center justify-center rounded-[50%] w-10"
                      shape="circle"
                      color="green_A700"
                      size="xl"
                      variant="fill"
                    >
                      <Img src="images/img_volume.svg" alt="volume" />
                    </Button>
                    <Button
                      className="flex h-10 items-center justify-center rounded-[50%] w-10"
                      shape="circle"
                      color="indigo_600"
                      size="xl"
                      variant="fill"
                    >
                      <Img src="images/img_facebook.svg" alt="facebook" />
                    </Button>
                    <Button
                      className="flex h-10 items-center justify-center rounded-[50%] w-10"
                      shape="circle"
                      color="blue_500_01"
                      size="xl"
                      variant="fill"
                    >
                      <Img src="images/img_trash.svg" alt="trash" />
                    </Button>
                    <Button
                      className="flex h-10 items-center justify-center rounded-[50%] w-10"
                      shape="circle"
                      color="light_blue_800"
                      size="xl"
                      variant="fill"
                    >
                      <Img
                        className="h-4"
                        src="images/img_linkedin1.svg"
                        alt="linkedinOne"
                      />
                    </Button>
                    <Button
                      className="flex h-10 items-center justify-center rounded-[50%] w-10"
                      shape="circle"
                      color="red_800"
                      size="xl"
                      variant="fill"
                    >
                      <Img src="images/img_user_white_a700.svg" alt="user" />
                    </Button>
                    <Button
                      className="flex h-10 items-center justify-center rounded-[50%] w-10"
                      shape="circle"
                      color="blue_gray_400"
                      size="lg"
                      variant="fill"
                    >
                      <Img
                        className="h-5"
                        src="images/img_arrowup.svg"
                        alt="arrowup"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <Text
                className="leading-[24.00px] max-w-[872px] md:max-w-full text-base text-blue_gray-700"
                size="txtPublicSansRegular16Bluegray700"
              >
                <>
                  Sed a laoreet erat, in vehicula erat. Vivamus a viverra ipsum,
                  ut interdum tellus. Donec quis ex quis metus sodales facilisis
                  ut nec ex. Ut commodo lacus vel odio venenatis, sit amet
                  lacinia lacus cursus. Ut sodales laoreet dapibus. Sed aliquam
                  nisl odio, sed blandit erat placerat sed. Mauris eleifend,
                  magna in convallis congue, orci est fermentum leo, at
                  tincidunt massa ligula semper dolor. Nunc tristique enim in
                  risus tristique rutrum eget ac eros.
                </>
              </Text>
              <div className="bg-red-50 flex md:flex-col flex-row gap-6 items-start justify-start p-10 sm:px-5 shadow-bs15 w-auto md:w-full">
                <Img
                  className="h-14 w-14"
                  src="images/img_doublequotesr.svg"
                  alt="doublequotesr"
                />
                <Text
                  className="leading-[28.00px] max-w-[712px] md:max-w-full text-gray-900 text-xl"
                  size="txtPublicSansRegular20"
                >
                  Vintage meets vogue is the only way to describe this serif
                  typeface. Neue World encompasses the mode high-fashion
                  aesthetic of the 1960s with a commercial take.
                </Text>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                <Text
                  className="leading-[24.00px] max-w-[872px] md:max-w-full text-base text-blue_gray-700"
                  size="txtPublicSansRegular16Bluegray700"
                >
                  Mauris fermentum faucibus risus a efficitur. Morbi sit amet
                  arcu turpis. Ut nisl velit, mattis at augue vel, molestie
                  egestas justo. Aliquam elementum nibh neque, eu ornare nunc
                  feugiat sed. Aliquam erat volutpat. Praesent vitae orci
                  blandit, semper felis ac, interdum lacus.
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[872px] md:max-w-full text-base text-blue_gray-700"
                  size="txtPublicSansRegular16Bluegray700"
                >
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    iaculis nunc urna, id lobortis elit dapibus et. Etiam
                    ultricies leo justo, nec vehicula augue auctor et. Sed
                    finibus volutpat dui. Nunc vitae urna dictum tellus luctus
                    tincidunt quis feugiat dolor. Aliquam malesuada tristique
                    urna, quis ornare diam venenatis quis. Nunc ligula lectus,
                    posuere sit amet ultrices ut, porttitor efficitur mauris.
                    Aliquam bibendum vitae turpis sed molestie. Donec massa
                    lorem, semper vel pellentesque ut, ultrices in enim. Sed
                    fringilla, mi porttitor sodales vehicula, felis enim gravida
                    nisi, at mollis ante leo et ligula. Quisque non aliquam
                    eros, in aliquet tellus. Mauris ullamcorper quam erat,
                    vehicula rhoncus velit interdum eget.
                  </>
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
                <Img
                  className="h-[424px] md:h-auto object-cover w-[424px] sm:w-full"
                  src="images/img_unsplash2ejcsulrwc8.png"
                  alt="unsplash2ejcsul"
                />
                <Img
                  className="h-[424px] md:h-auto object-cover w-[424px] sm:w-full"
                  src="images/img_unsplashrn1yev8ke.png"
                  alt="unsplashrn1yevEight"
                />
              </div>
              <Text
                className="leading-[24.00px] max-w-[872px] md:max-w-full text-base text-blue_gray-700"
                size="txtPublicSansRegular16Bluegray700"
              >
                Proin pulvinar quam at aliquet sagittis. Quisque laoreet luctus
                bibendum. Aenean in dignissim orci. Suspendisse at augue eget
                neque dictum vestibulum eu ac orci. Integer imperdiet lectus nec
                urna mollis euismod. Proin et risus nulla. Cras at diam in risus
                feugiat accumsan. Nulla sit amet blandit mi, a convallis mauris.
                Quisque lacus dolor, cursus ac quam ac, tempus ultrices sem. Ut
                porttitor.
              </Text>
            </div>
            <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start p-6 sm:px-5 rounded w-auto sm:w-full">
                <Text
                  className="text-base text-gray-900 uppercase w-auto"
                  size="txtPublicSansMedium16"
                >
                  Search
                </Text>
                <Input
                  name="search_One"
                  placeholder="Search..."
                  className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-left text-sm w-full"
                  wrapClassName="border border-gray-300 border-solid flex w-auto"
                  suffix={
                    <Img
                      className="h-5 ml-[35px] my-auto"
                      src="images/img_rewind.svg"
                      alt="rewind"
                    />
                  }
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 items-start justify-start p-6 sm:px-5 rounded w-auto sm:w-full">
                <Text
                  className="text-base text-gray-900 uppercase w-auto"
                  size="txtPublicSansMedium16"
                >
                  Category
                </Text>
                <RadioGroup
                  selectedValue="All"
                  className="flex flex-col gap-3 items-start justify-start w-auto"
                  name="radio3"
                >
                  <Radio
                    value="All"
                    className="font-medium sm:pr-5 text-gray-900 text-left text-sm"
                    inputClassName="bg-deep_orange-A200 h-5 mr-[5px] rounded-[10px] w-5"
                    checked={true}
                    name="radio3"
                    label="All"
                    id="All"
                  ></Radio>
                  <Radio
                    value="ElectronicsDevices"
                    className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                    inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                    checked={false}
                    name="radio3"
                    label="Electronics Devices"
                    id="ElectronicsDevices"
                  ></Radio>
                  <Radio
                    value="ComputerLaptop"
                    className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                    inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                    checked={false}
                    name="radio3"
                    label="Computer  Laptop"
                    id="ComputerLaptop"
                  ></Radio>
                  <Radio
                    value="ComputerAccessories"
                    className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                    inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                    checked={false}
                    name="radio3"
                    label="Computer Accessories"
                    id="ComputerAccessories"
                  ></Radio>
                  <Radio
                    value="SmartPhone"
                    className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                    inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                    checked={false}
                    name="radio3"
                    label="SmartPhone"
                    id="SmartPhone"
                  ></Radio>
                  <Radio
                    value="Headphone"
                    className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                    inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                    checked={false}
                    name="radio3"
                    label="Headphone"
                    id="Headphone"
                  ></Radio>
                  <Radio
                    value="MobileAccessories"
                    className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                    inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                    checked={false}
                    name="radio3"
                    label="Mobile Accessories"
                    id="MobileAccessories"
                  ></Radio>
                  <Radio
                    value="GamingConsole"
                    className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                    inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                    checked={false}
                    name="radio3"
                    label="Gaming Console"
                    id="GamingConsole"
                  ></Radio>
                  <Radio
                    value="CameraPhoto"
                    className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                    inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                    checked={false}
                    name="radio3"
                    label="Camera  Photo"
                    id="CameraPhoto"
                  ></Radio>
                </RadioGroup>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start p-6 sm:px-5 rounded-md w-auto sm:w-full">
                <Text
                  className="text-base text-gray-900 uppercase w-auto"
                  size="txtPublicSansMedium16"
                >
                  Latest Blog
                </Text>
                <List
                  className="flex flex-col gap-6 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-row gap-4 items-center justify-center w-auto">
                    <Img
                      className="h-20 md:h-auto object-cover rounded-sm w-[104px]"
                      src="images/img_image_80x104.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="leading-[20.00px] max-w-[232px] md:max-w-full text-gray-900 text-sm"
                        size="txtPublicSansMedium14Gray900"
                      >
                        Curabitur pulvinar aliquam lectus, non blandit erat
                        mattis vitae.{" "}
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray400"
                      >
                        28 Nov, 2015
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-center w-auto">
                    <Img
                      className="h-20 md:h-auto object-cover rounded-sm w-[104px]"
                      src="images/img_image_80x104.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="leading-[20.00px] max-w-[232px] md:max-w-full text-gray-900 text-sm"
                        size="txtPublicSansMedium14Gray900"
                      >
                        Curabitur pulvinar aliquam lectus, non blandit erat
                        mattis vitae.{" "}
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray400"
                      >
                        28 Nov, 2015
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-center w-auto">
                    <Img
                      className="h-20 md:h-auto object-cover rounded-sm w-[104px]"
                      src="images/img_image_80x104.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="leading-[20.00px] max-w-[232px] md:max-w-full text-gray-900 text-sm"
                        size="txtPublicSansMedium14Gray900"
                      >
                        Curabitur pulvinar aliquam lectus, non blandit erat
                        mattis vitae.{" "}
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray400"
                      >
                        28 Nov, 2015
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start p-6 sm:px-5 rounded-md w-auto sm:w-full">
                <Text
                  className="text-base text-gray-900 uppercase w-auto"
                  size="txtPublicSansMedium16"
                >
                  Gallery
                </Text>
                <List
                  className="flex flex-col gap-3 items-start w-auto"
                  orientation="vertical"
                >
                  <div className="flex flex-row gap-[11px] items-center justify-between my-0 w-[352px]">
                    <Img
                      className="h-20 md:h-auto object-cover rounded-sm w-20"
                      src="images/img_unsplashasgx9dgqeng.png"
                      alt="unsplashasgx9dg"
                    />
                    <Img
                      className="h-20 md:h-auto object-cover rounded-sm w-20"
                      src="images/img_unsplash8ye39squ3ci.png"
                      alt="unsplash8ye39sq"
                    />
                    <Img
                      className="h-20 md:h-auto object-cover rounded-sm w-20"
                      src="images/img_unsplashxt1oiyeucou.png"
                      alt="unsplashxt1oiye"
                    />
                    <Img
                      className="h-20 md:h-auto object-cover rounded-sm w-20"
                      src="images/img_unsplashqzqrxmvafzo.png"
                      alt="unsplashqzqrxmv"
                    />
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-between my-0 w-[352px]">
                    <Img
                      className="h-20 md:h-auto object-cover rounded-sm w-20"
                      src="images/img_unsplashznuhehb16gu.png"
                      alt="unsplashznuhehb"
                    />
                    <Img
                      className="h-20 md:h-auto object-cover rounded-sm w-20"
                      src="images/img_unsplashdxn4dy55yxw.png"
                      alt="unsplashdxn4dyFive"
                    />
                    <Img
                      className="h-20 md:h-auto object-cover rounded-sm w-20"
                      src="images/img_unsplashzbmumeridfa.png"
                      alt="unsplashzbmumer"
                    />
                    <Img
                      className="h-20 md:h-auto object-cover rounded-sm w-20"
                      src="images/img_unsplashf4lbjj8apxu.png"
                      alt="unsplashf4lbjjEight"
                    />
                  </div>
                </List>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-base text-gray-900 uppercase w-auto"
                  size="txtPublicSansMedium16"
                >
                  Popular Tag
                </Text>
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Button
                      className="cursor-pointer font-medium min-w-[63px] text-center text-sm"
                      shape="round"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      Game
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[69px] text-center text-sm"
                      shape="round"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      iPhone
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[43px] text-center text-sm"
                      shape="round"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      TV
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[113px] text-center text-sm"
                      shape="round"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      Asus Laptops
                    </Button>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Button
                      className="cursor-pointer font-medium min-w-[85px] text-center text-sm"
                      shape="round"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      Macbook{" "}
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[53px] text-center text-sm"
                      shape="round"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      SSD
                    </Button>
                    <Button
                      className="border border-deep_orange-A200 border-solid cursor-pointer font-medium min-w-[117px] text-center text-sm"
                      shape="round"
                      color="red_50"
                      size="md"
                      variant="fill"
                    >
                      Graphics Card{" "}
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[79px] text-center text-sm"
                      shape="round"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      Speaker
                    </Button>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-auto sm:w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[66px] text-center text-sm"
                      shape="round"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      Tablet
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[95px] text-center text-sm"
                      shape="round"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      Microwave
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[86px] text-center text-sm"
                      shape="round"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      Samsung
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[102px] text-center text-sm"
                      shape="round"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      Power Bank{" "}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
            <Text
              className="text-gray-900 text-xl w-auto"
              size="txtPublicSansMedium20"
            >
              Leave a Commends
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                  <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start w-[428px] sm:w-full">
                    <Text
                      className="text-gray-900 text-sm w-full"
                      size="txtPublicSansRegular14Gray900"
                    >
                      Full Name
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
                  <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start w-[428px] sm:w-full">
                    <Text
                      className="text-gray-900 text-sm w-full"
                      size="txtPublicSansRegular14Gray900"
                    >
                      Email Address
                    </Text>
                    <Input
                      name="inputfield_One"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-gray-300 border-solid flex h-11 w-full"
                      shape="round"
                      color="white_A700"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start max-w-[872px] w-full">
                  <Text
                    className="text-gray-900 text-sm w-full"
                    size="txtPublicSansRegular14Gray900"
                  >
                    Descripi
                  </Text>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start p-3.5 rounded-sm w-full">
                    <Text
                      className="mb-[78px] text-blue_gray-400 text-sm"
                      size="txtPublicSansRegular14Bluegray400"
                    >
                      What’s your thought about this blog...
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-bold min-w-[178px] text-center text-sm tracking-[0.17px] uppercase"
              shape="round"
              color="deep_orange_A200"
              size="xl"
              variant="fill"
            >
              post Commends
            </Button>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
            <Text
              className="text-gray-900 text-xl w-auto"
              size="txtPublicSansMedium20"
            >
              Commends
            </Text>
            <List
              className="flex flex-col gap-6 items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-3 items-start justify-between w-full">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_ellipse8.png"
                    alt="ellipseEight"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start">
                    <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPublicSansMedium14Gray900"
                      >
                        Annette Black
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray400"
                      >
                        •
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray400"
                      >
                        26 Apr, 2021
                      </Text>
                    </div>
                    <Text
                      className="leading-[20.00px] text-blue_gray-700 text-sm w-full"
                      size="txtPublicSansRegular14Bluegray700"
                    >
                      In a nisi commodo, porttitor ligula consequat, tincidunt
                      dui. Nulla volutpat, metus eu aliquam malesuada, elit
                      libero venenatis urna, consequat maximus arcu diam non
                      diam.
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-gray-300 w-full" />
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-3 items-start justify-between w-full">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src="images/img_ellipse8_40x40.png"
                    alt="ellipseEight"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start">
                    <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPublicSansMedium14Gray900"
                      >
                        Devon Lane
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray400"
                      >
                        •
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray400"
                      >
                        24 Apr, 2021
                      </Text>
                    </div>
                    <Text
                      className="leading-[20.00px] text-blue_gray-700 text-sm w-full"
                      size="txtPublicSansRegular14Bluegray700"
                    >
                      Quisque eget tortor lobortis, facilisis metus eu,
                      elementum est. Nunc sit amet erat quis ex convallis
                      suscipit. Nam hendrerit, velit ut aliquam euismod, nibh
                      tortor rutrum nisi, ac sodales nunc eros porta nisi. Sed
                      scelerisque, est eget aliquam venenatis, est sem tempor
                      eros.
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-col items-center justify-start w-[72%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-3 items-start justify-between w-full">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_ellipse8_1.png"
                  alt="ellipseEight"
                />
                <div className="flex flex-col gap-2 items-start justify-start">
                  <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansMedium14Gray900"
                    >
                      Jacob Jones
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray400"
                    >
                      •
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray400"
                    >
                      20 Apr, 2021
                    </Text>
                  </div>
                  <Text
                    className="text-blue_gray-700 text-sm"
                    size="txtPublicSansRegular14Bluegray700"
                  >
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia curae.
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-3 items-start justify-between w-full">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_ellipse8_2.png"
                  alt="ellipseEight_One"
                />
                <div className="flex flex-col gap-1.5 items-start justify-start">
                  <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansMedium14Gray900"
                    >
                      Jane Cooper
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray400"
                    >
                      •
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray400"
                    >
                      18 Apr, 2021
                    </Text>
                  </div>
                  <Text
                    className="leading-[20.00px] text-blue_gray-700 text-sm w-full"
                    size="txtPublicSansRegular14Bluegray700"
                  >
                    Pellentesque feugiat, nibh vel vehicula pretium, nibh nibh
                    bibendum elit, a volutpat arcu dui nec orci. Aenean dui
                    odio, ullamcorper quis turpis ac, volutpat imperdiet ex.
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[32%] md:w-full">
              <div className="flex flex-row gap-3 items-start justify-between w-full">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_ellipse8_3.png"
                  alt="ellipseEight_Two"
                />
                <div className="flex flex-col gap-[7px] items-start justify-start">
                  <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansMedium14Gray900"
                    >
                      Darrell Steward
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray400"
                    >
                      •
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray400"
                    >
                      7 Apr, 2021
                    </Text>
                  </div>
                  <Text
                    className="text-blue_gray-700 text-sm"
                    size="txtPublicSansRegular14Bluegray700"
                  >
                    Nulla molestie interdum ultricies.{" "}
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[161px]"
              leftIcon={
                <Img
                  className="h-5 mr-2"
                  src="images/img_settings_20x20.svg"
                  alt="settings"
                />
              }
              shape="round"
              color="orange_50"
              size="xl"
              variant="outline"
            >
              <div className="font-bold text-left text-sm tracking-[0.17px] uppercase">
                Load More
              </div>
            </Button>
          </div>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default BlogDetailPage;
