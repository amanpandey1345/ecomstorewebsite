import React from "react";

import { Button, Img, Line, List, Text } from "components";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import C10TrackOrderDetailsActivity from "components/C10TrackOrderDetailsActivity";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const TrackOrderDetailsPage = () => {
  const c10TrackOrderDetailsActivityPropList = [
    {},
    {
      timetext: "23 Jan, 2021 at 2:00 PM",
      ordertext:
        "Our delivery man (John Wick) Has picked-up your order for delvery. ",
    },
    {
      timetext: "22 Jan, 2021 at 8:00 AM",
      ordertext: "Your order has reached at last mile hub.",
    },
    {
      timetext: "21, 2021 at 5:32 AM",
      ordertext: "Your order on the way to (last mile) hub.",
    },
    {
      timetext: "20 Jan, 2021 at 7:32 PM",
      ordertext: "Your order is successfully verified.",
    },
    {
      timetext: "19 Jan, 2021 at 2:61 PM",
      ordertext: "Your order has been confirmed.",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-start mx-auto w-full">
        <Header1 className="flex flex-col items-center justify-center md:px-5 w-full" />
        <C07ShopPageBreadcrumb
          className="bg-gray-100 flex flex-col items-start justify-start p-[26px] sm:px-5 w-full"
          shoptext="Pages"
          arrowrightoneimage="images/img_arrowright.svg"
          macbookprotext="Details"
        />
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[468px] py-[72px] w-auto md:w-full">
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start md:px-5 rounded w-auto md:w-full">
            <div className="flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-auto md:w-full">
              <div className="bg-yellow-50 border border-solid border-yellow-200 flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[936px] p-6 sm:px-5 rounded w-full">
                <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-gray-900 text-xl w-auto"
                    size="txtPublicSansRegular20"
                  >
                    #96459761
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray700"
                    >
                      4 Products
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray700"
                    >
                      •
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray700"
                    >
                      Order Placed in 17 Jan, 2021 at 7:32 PM
                    </Text>
                  </div>
                </div>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-blue-500 w-auto"
                  size="txtPublicSansSemiBold28Blue500"
                >
                  $1199.00
                </Text>
              </div>
              <Text
                className="text-gray-900 text-sm w-auto"
                size="txtPublicSansRegular14Gray900"
              >
                <span className="text-blue_gray-700 font-publicsans text-left font-normal">
                  Order expected arrival
                </span>
                <span className="text-gray-900 font-publicsans text-left font-normal">
                  {" "}
                </span>
                <span className="text-gray-900 font-publicsans text-left font-medium">
                  23 Jan, 2021
                </span>
              </Text>
              <div className="flex flex-col gap-6 items-center justify-center w-auto md:w-full">
                <div className="h-6 relative w-[78%] md:w-full">
                  <div className="absolute h-2 inset-[0] justify-center m-auto overflow-hidden w-[98%]">
                    <div className="w-full h-full absolute bg-orange_50 rounded-[4px]"></div>
                    <div
                      className="h-full absolute bg-deep_orange_A200  rounded-[4px]"
                      style={{ width: "33%" }}
                    ></div>
                  </div>
                  <Button
                    className="absolute flex h-6 inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] w-6"
                    shape="circle"
                    color="deep_orange_A200"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-3"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  </Button>
                  <div className="absolute flex flex-row h-full inset-[0] items-center justify-between m-auto w-[36%]">
                    <div className="bg-deep_orange-A200 border-2 border-solid border-white-A700 h-6 rounded-[50%] w-6"></div>
                    <div className="bg-white-A700 border-2 border-deep_orange-A200 border-solid h-6 rounded-[50%] w-6"></div>
                  </div>
                  <div className="absolute bg-white-A700 border-2 border-deep_orange-A200 border-solid h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"></div>
                </div>
                <List
                  className="sm:flex-col flex-row md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-3 items-center justify-center sm:ml-[0] w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_grid_green_700.svg"
                      alt="grid"
                    />
                    <Text
                      className="text-center text-gray-900 text-sm w-auto"
                      size="txtPublicSansMedium14Gray900"
                    >
                      Order Placed
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-center sm:ml-[0] w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                    <Text
                      className="text-center text-gray-900 text-sm w-auto"
                      size="txtPublicSansMedium14Gray900"
                    >
                      Packaging
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-center sm:ml-[0] w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_television_deep_orange_a200.svg"
                      alt="television"
                    />
                    <Text
                      className="text-center text-gray-900 text-sm w-auto"
                      size="txtPublicSansMedium14Gray900"
                    >
                      On The Road
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-center sm:ml-[0] w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_settings_deep_orange_a200_32x32.svg"
                      alt="settings"
                    />
                    <Text
                      className="text-center text-gray-900 text-sm w-auto"
                      size="txtPublicSansMedium14Gray900"
                    >
                      Delivered
                    </Text>
                  </div>
                </List>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start max-w-[984px] p-6 sm:px-5 w-full">
              <Text
                className="text-gray-900 text-lg w-auto"
                size="txtPublicSansMedium18"
              >
                Order Activity
              </Text>
              <List
                className="flex flex-col gap-4 items-start w-auto"
                orientation="vertical"
              >
                {c10TrackOrderDetailsActivityPropList.map((props, index) => (
                  <React.Fragment key={`C10TrackOrderDetailsActivity${index}`}>
                    <C10TrackOrderDetailsActivity
                      className="flex md:flex-col flex-row gap-4 items-start justify-start my-0 w-auto md:w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default TrackOrderDetailsPage;
