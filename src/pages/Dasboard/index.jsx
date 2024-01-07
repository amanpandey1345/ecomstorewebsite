import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  ReactTable,
  Slider,
  Text,
} from "components";
import C01HomepageProduct3 from "components/C01HomepageProduct3";
import C01HomepageProduct4 from "components/C01HomepageProduct4";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import C27DasboardColumndashboardnavite from "components/C27DasboardColumndashboardnavite";
import C27DasboardFunfact from "components/C27DasboardFunfact";
import C27DasboardFunfact1 from "components/C27DasboardFunfact1";
import C27DasboardFunfact2 from "components/C27DasboardFunfact2";
import C27DasboardMastercard from "components/C27DasboardMastercard";
import C27DasboardVisa from "components/C27DasboardVisa";
import Footer from "components/Footer";
import Header from "components/Header";

const DasboardPage = () => {
  const table1Data = React.useRef([
    {
      orderid: "#96459761",
      status: "IN PROGRESS",
      date: "Dec 30, 2019 05:18",
      total: "$1,500 (5 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#71667167",
      status: "COMPLETED",
      date: "Feb 2, 2019 19:28",
      total: "$80 (11 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#95214362",
      status: "CANCELED",
      date: "Mar 20, 2019 23:14",
      total: "$160 (3 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#71667167",
      status: "COMPLETED",
      date: "Feb 2, 2019 19:28",
      total: "$80 ( 1 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#51746385",
      status: "COMPLETED",
      date: "Feb 2, 2019 19:28",
      total: "$2,300 (2 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#51746385",
      status: "CANCELED",
      date: "Dec 30, 2019 07:52",
      total: "$70 (1 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#673971743",
      status: "COMPLETED",
      date: "Dec 7, 2019 23:26",
      total: "$220 (1 Products)",
      action: "images/img_arrowdown.svg",
    },
  ]);
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("orderid", {
        cell: (info) => (
          <Text
            className="sm:pl-5 pl-6 py-[13px] text-gray-900 text-sm"
            size="txtPublicSansMedium14Gray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[172px] sm:pl-5 pl-6 py-[11px] text-blue_gray-700 text-xs uppercase"
            size="txtPublicSansMedium12"
          >
            Order ID
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("status", {
        cell: (info) => (
          <Text
            className="py-[13px] text-deep_orange-A200 text-sm"
            size="txtPublicSansSemiBold14DeeporangeA200"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[176px] py-[11px] text-blue_gray-700 text-xs uppercase"
            size="txtPublicSansMedium12"
          >
            Status
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("date", {
        cell: (info) => (
          <Text
            className="py-[13px] text-blue_gray-600 text-sm"
            size="txtPublicSansRegular14Bluegray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[224px] py-[11px] text-blue_gray-700 text-xs uppercase"
            size="txtPublicSansMedium12"
          >
            Date
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("total", {
        cell: (info) => (
          <Text
            className="py-[13px] text-blue_gray-700 text-sm"
            size="txtPublicSansRegular14Bluegray700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[272px] py-[11px] text-blue_gray-700 text-xs uppercase"
            size="txtPublicSansMedium12"
          >
            Total
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex flex-row gap-2 items-center justify-center pr-[13px] py-[13px]">
            <Text
              className="text-blue-500 text-sm"
              size="txtPublicSansSemiBold14Blue500"
            >
              View Details
            </Text>
            <Img
              className="h-4 mr-5 w-4"
              alt="arrowdown_One"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[140px] py-[11px] text-blue_gray-700 text-center text-xs uppercase"
            size="txtPublicSansMedium12"
          >
            Action
          </Text>
        ),
      }),
    ];
  }, []);

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <C07ShopPageBreadcrumb
          className="bg-gray-100 flex flex-col items-start justify-start p-[26px] sm:px-5 w-full"
          macbookprotext="Dashboard"
        />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-start justify-start pb-[72px] pt-10 md:px-10 sm:px-5 px-[300px] w-auto md:w-full">
          <C27DasboardColumndashboardnavite
            className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start md:px-5 py-4 rounded shadow-bs10 w-auto"
            thumbsup="images/img_thumbsup_blue_gray_600.svg"
            dashboardOne="Order History"
            linkedinOne="images/img_linkedin.svg"
            dashboardTwo="Track Order"
            cartOne="images/img_cart_blue_gray_600.svg"
            dashboardThree="Shopping Cart"
            favoriteOne="images/img_favorite_blue_gray_600.svg"
            dashboardFour="Wishlist"
            settingsOne="images/img_settings.svg"
            dashboardFive="Compare"
            reply="images/img_reply.svg"
            dashboardSix="Cards & Address"
            clock="images/img_clock.svg"
            dashboardSeven="Browsing History"
            search="images/img_search.svg"
            dashboardEight="Setting"
            thumbsupOne="images/img_thumbsup_blue_gray_600_20x20.svg"
            dashboardNine="Log-out"
          />
          <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
            <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
              <Text
                className="text-gray-900 text-xl w-auto"
                size="txtPublicSansSemiBold20Gray900"
              >
                Hello, Kevin
              </Text>
              <Text
                className="leading-[20.00px] max-w-[423px] md:max-w-full text-blue_gray-700 text-sm"
                size="txtPublicSansRegular14Bluegray700"
              >
                <span className="text-blue_gray-700 font-publicsans text-left font-normal">
                  From your account dashboard. you can easily check & view your{" "}
                </span>
                <span className="text-blue-500 font-publicsans text-left font-medium">
                  Recent Orders
                </span>
                <span className="text-blue_gray-700 font-publicsans text-left font-normal">
                  , manage your
                </span>
                <span className="text-blue-500 font-publicsans text-left font-medium">
                  {" "}
                  Shipping and Billing Addresses{" "}
                </span>
                <span className="text-blue_gray-700 font-publicsans text-left font-normal">
                  and edit your{" "}
                </span>
                <span className="text-blue-500 font-publicsans text-left font-medium">
                  Password
                </span>
                <span className="text-blue_gray-700 font-publicsans text-left font-normal">
                  {" "}
                  and
                </span>
                <span className="text-blue-500 font-publicsans text-left font-medium">
                  {" "}
                  Account Details.
                </span>
              </Text>
            </div>
            <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto md:w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[22px] items-start justify-start pb-6 rounded w-[312px]">
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start p-[17px] rounded-tl rounded-tr w-full">
                  <Text
                    className="ml-1.5 md:ml-[0] text-gray-900 text-sm uppercase"
                    size="txtPublicSansMedium14Gray900"
                  >
                    Account Info
                  </Text>
                </div>
                <div className="flex flex-col gap-5 items-start justify-center sm:pl-5 pl-6 w-auto">
                  <div className="flex flex-row gap-4 items-center justify-center w-auto">
                    <Img
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="images/img_image_48x48.png"
                      alt="image_One"
                    />
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-900 w-auto"
                        size="txtPublicSansSemiBold16"
                      >
                        Kevin Gilbert
                      </Text>
                      <Text
                        className="text-blue_gray-600 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray600"
                      >
                        Dhaka - 1207, Bangladesh
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <div className="flex flex-row items-start justify-start w-auto">
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
                    <div className="flex flex-row items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Sec Email:
                      </Text>
                      <Text
                        className="text-blue_gray-600 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray600"
                      >
                        {" "}
                        kevin12345@gmail.com
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Phone:
                      </Text>
                      <Text
                        className="text-blue_gray-600 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray600"
                      >
                        {" "}
                        +1-202-555-0118
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start sm:pl-5 pl-6 w-auto">
                  <Button
                    className="cursor-pointer font-bold min-w-[155px] text-center text-sm tracking-[0.17px] uppercase"
                    shape="round"
                    color="light_blue_50"
                    size="xl"
                    variant="outline"
                  >
                    Edit Account
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-[22px] items-start justify-center pb-6 rounded w-[312px]">
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start p-[17px] rounded-tl rounded-tr w-full">
                  <Text
                    className="ml-1.5 md:ml-[0] text-gray-900 text-sm uppercase"
                    size="txtPublicSansMedium14Gray900"
                  >
                    Billing address
                  </Text>
                </div>
                <div className="flex flex-col gap-2 items-start justify-center sm:pl-5 pl-6 w-auto">
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtPublicSansMedium14Gray900"
                  >
                    Kevin Gilbert
                  </Text>
                  <Text
                    className="leading-[20.00px] max-w-[264px] md:max-w-full text-blue_gray-600 text-sm"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    East Tejturi Bazar, Word No. 04, Road No. 13/x, House no.
                    1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh
                  </Text>
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
              <List
                className="flex flex-col gap-6 items-start w-[312px]"
                orientation="vertical"
              >
                <C27DasboardFunfact className="bg-blue-50 flex flex-row gap-4 items-center justify-center my-0 p-4 rounded w-auto" />
                <C27DasboardFunfact1 className="bg-red-50 flex flex-row gap-4 items-center justify-center my-0 p-4 rounded w-auto" />
                <C27DasboardFunfact2 className="bg-green-50 flex flex-row gap-4 items-center justify-center my-0 p-4 rounded w-auto" />
              </List>
            </div>
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
                <C27DasboardVisa className="absolute flex inset-y-[0] left-[0] my-auto w-[63%] sm:w-full" />
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-3 items-center justify-center pb-3 rounded w-auto md:w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="flex flex-row sm:gap-10 items-center justify-between p-2.5 rounded-tl rounded-tr w-full">
                  <Text
                    className="ml-3.5 text-gray-900 text-sm uppercase"
                    size="txtPublicSansMedium14Gray900"
                  >
                    Recent Order
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[82px] mr-3.5"
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
                      View All
                    </div>
                  </Button>
                </div>
              </div>
              <div className="overflow-auto w-full">
                <ReactTable
                  columns={table1Columns}
                  data={table1Data.current}
                  rowClass={""}
                  headerClass="bg-gray-100 border border-gray-300"
                />
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-center justify-center pb-6 rounded w-auto md:w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row sm:gap-10 items-center justify-between p-2.5 rounded-tl rounded-tr w-full">
                <Text
                  className="ml-3.5 text-gray-900 text-sm uppercase"
                  size="txtPublicSansMedium14Gray900"
                >
                  Browsing history
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[82px] mr-3.5"
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
                    View All
                  </div>
                </Button>
              </div>
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 2 },
                  1050: { items: 4 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="flex gap-1 w-auto"
                items={[...Array(20)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <C01HomepageProduct3
                      className="flex flex-col gap-6 items-center justify-start mx-2.5 p-3"
                      image="images/img_image_172x202.png"
                      p25off="HOT"
                      signal="images/img_signal_deep_orange_a200_20x20.svg"
                      signalOne="images/img_signal_deep_orange_a200_20x20.svg"
                      signalTwo="images/img_signal_deep_orange_a200_20x20.svg"
                      signalThree="images/img_signal_deep_orange_a200_20x20.svg"
                      signalFour="images/img_signal_deep_orange_a200_20x20.svg"
                      p56767="(738)"
                      dell215inchfull="TOZO T6 True Wireless Earbuds Bluetooth Headphon..."
                      priceOne="$70"
                    />
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer rounded-[50%] h-2 bg-deep_orange-A200 w-2" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-[50%] h-2 bg-deep_orange-100 w-2"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
              <div className="flex flex-row gap-4 items-center justify-center w-auto">
                <Button
                  className="flex h-10 items-center justify-center rounded-[50%] w-10"
                  shape="circle"
                  color="deep_orange_A200"
                  size="md"
                  variant="outline"
                >
                  <Img
                    className="h-6"
                    src="images/img_arrowleft_deep_orange_a200.svg"
                    alt="arrowleft"
                  />
                </Button>
                <PagerIndicator
                  className="flex gap-2 h-2 items-start justify-start w-[72px]"
                  count={5}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-2 bg-deep_orange-A200 w-2"
                  activeIndex={sliderState}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-deep_orange-100 w-2"
                  sliderRef={sliderRef}
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
                <Button
                  className="flex h-10 items-center justify-center rounded-[50%] w-10"
                  shape="circle"
                  color="deep_orange_A200"
                  size="md"
                  variant="outline"
                >
                  <Img
                    className="h-6"
                    src="images/img_arrowleft_deep_orange_a200.svg"
                    alt="arrowleft_One"
                  />
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

export default DasboardPage;
