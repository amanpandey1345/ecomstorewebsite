import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  SelectBox,
  Text,
} from "components";
import C01HomepageBlog from "components/C01HomepageBlog";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import C25BlogListPagination from "components/C25BlogListPagination";
import Footer from "components/Footer";
import Header from "components/Header";

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BlogListPage = () => {
  const c01HomepageBlogPropList = [
    {
      username: "Cameron",
      chattext: "738",
      contenttexttwo:
        "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. ",
      datetext: "1 Feb, 2020",
      userprofileimage: "images/img_unsplashfwoqldwlnq.png",
      contenttextone:
        "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
    },
    {
      username: "Floyd Miles",
      chattext: "826",
      contenttexttwo:
        "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
      datetext: "17 Oct, 2020",
      userprofileimage: "images/img_unsplashlfsuzbuqzco.png",
      contenttextone:
        "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
    },
    {
      username: "Marvin McKinney",
      chattext: "738",
      contenttexttwo:
        "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. ",
      datetext: "8 Sep, 2020",
      userprofileimage: "images/img_unsplash64yrpkiguae.png",
      contenttextone:
        "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
    },
    {
      username: "Darlene",
      chattext: "826",
      contenttexttwo:
        "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
      datetext: "24 May, 2020",
      userprofileimage: "images/img_unsplashjxd2fsvcrr8.png",
      contenttextone:
        "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
    },
    {
      username: "Brooklyn Simmons",
      chattext: "738",
      contenttexttwo:
        "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. ",
      datetext: "21 Sep, 2020",
      userprofileimage: "images/img_unsplashhorhcnqsxnq.png",
      contenttextone:
        "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
    },
    {
      username: "Devon Lane",
      chattext: "826",
      contenttexttwo:
        "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
      datetext: "22 Oct, 2020",
      userprofileimage: "images/img_unsplashogvqxgl7xo4.png",
      contenttextone:
        "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
    },
    {
      username: "Bessie Cooper",
      chattext: "738",
      contenttexttwo:
        "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. ",
      datetext: "8 Sep, 2020",
      userprofileimage: "images/img_unsplashryyrk3ysqg.png",
      contenttextone:
        "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
    },
    {
      username: "Kristin Watson",
      chattext: "826",
      contenttexttwo:
        "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
      datetext: "1 Feb, 2020",
      userprofileimage: "images/img_unsplashehtcc9syxsw.png",
      contenttextone:
        "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <C07ShopPageBreadcrumb
          className="bg-gray-100 flex flex-col items-start justify-start p-[26px] sm:px-5 w-full"
          shoptext="Pages"
          arrowrightoneimage="images/img_arrowright.svg"
          macbookprotext="Blog"
        />
        <div className="flex md:flex-col flex-row gap-12 items-start justify-start md:px-10 sm:px-5 px-[300px] py-[72px] w-auto md:w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
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
                name="radio2"
              >
                <Radio
                  value="All"
                  className="font-medium sm:pr-5 text-gray-900 text-left text-sm"
                  inputClassName="bg-deep_orange-A200 h-5 mr-[5px] rounded-[10px] w-5"
                  checked={true}
                  name="radio2"
                  label="All"
                  id="All"
                ></Radio>
                <Radio
                  value="ElectronicsDevices"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio2"
                  label="Electronics Devices"
                  id="ElectronicsDevices"
                ></Radio>
                <Radio
                  value="ComputerLaptop"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio2"
                  label="Computer  Laptop"
                  id="ComputerLaptop"
                ></Radio>
                <Radio
                  value="ComputerAccessories"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio2"
                  label="Computer Accessories"
                  id="ComputerAccessories"
                ></Radio>
                <Radio
                  value="SmartPhone"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio2"
                  label="SmartPhone"
                  id="SmartPhone"
                ></Radio>
                <Radio
                  value="Headphone"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio2"
                  label="Headphone"
                  id="Headphone"
                ></Radio>
                <Radio
                  value="MobileAccessories"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio2"
                  label="Mobile Accessories"
                  id="MobileAccessories"
                ></Radio>
                <Radio
                  value="GamingConsole"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio2"
                  label="Gaming Console"
                  id="GamingConsole"
                ></Radio>
                <Radio
                  value="CameraPhoto"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio2"
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
                      Curabitur pulvinar aliquam lectus, non blandit erat mattis
                      vitae.{" "}
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
                      Curabitur pulvinar aliquam lectus, non blandit erat mattis
                      vitae.{" "}
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
                      Curabitur pulvinar aliquam lectus, non blandit erat mattis
                      vitae.{" "}
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
          <div className="flex flex-col gap-10 items-center justify-center w-auto md:w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[872px] w-full">
                <Input
                  name="search"
                  placeholder="Search..."
                  className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-left text-sm w-full"
                  wrapClassName="border border-gray-300 border-solid flex md:flex-1 w-auto md:w-full"
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
                <div className="flex flex-row gap-[22px] items-center justify-start w-auto">
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14Gray900"
                  >
                    Sort by:
                  </Text>
                  <SelectBox
                    className="border border-gray-300 border-solid text-left text-sm w-[72%] sm:w-full"
                    placeholderClassName="text-blue_gray-700"
                    indicator={
                      <Img
                        className="h-4 mr-[0] w-4"
                        src="images/img_arrowdown_blue_gray_200.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="dropdown"
                    options={dropdownOptionsList}
                    isSearchable={false}
                    placeholder="Most Popular"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  />
                </div>
              </div>
              <div className="md:gap-5 gap-6 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                {c01HomepageBlogPropList.map((props, index) => (
                  <React.Fragment key={`C01HomepageBlog${index}`}>
                    <C01HomepageBlog
                      className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-6 items-start justify-start p-8 sm:px-5 rounded shadow-bs4 w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
            <C25BlogListPagination className="flex sm:flex-col flex-row gap-5 items-center justify-center w-auto sm:w-full" />
          </div>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default BlogListPage;
