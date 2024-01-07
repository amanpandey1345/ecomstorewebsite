import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, List, ReactTable, Text } from "components";
import C01HomepageNavigation from "components/C01HomepageNavigation";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import Footer from "components/Footer";

const WishlistPage = () => {
  const tableData = React.useRef([
    {
      products:
        "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black",
      price: "$999",
      stockstatus: "IN STOCK",
      actions: "images/img_close_blue_gray_300_24x24.svg",
    },
    {
      products: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
      price: "$2,300.00",
      stockstatus: "IN STOCK",
      actions: "images/img_close_blue_gray_300_24x24.svg",
    },
    {
      products: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM",
      price: "$70.00",
      stockstatus: "IN STOCK",
      actions: "images/img_close_blue_gray_300_24x24.svg",
    },
    {
      products:
        "TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof Stereo Earphones in-Ear",
      price: "$220.00",
      stockstatus: "OUT OF STOCK",
      actions: "images/img_close_blue_gray_300_24x24.svg",
    },
    {
      products:
        "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart Home Camera with Color Night Vision, 2-Way Audio",
      price: "$1,499.99",
      stockstatus: "IN STOCK",
      actions: "images/img_close_blue_gray_300_24x24.svg",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("products", {
        cell: (info) => (
          <div className="flex sm:flex-col flex-row gap-4 items-center justify-start p-2">
            <Img
              className="h-[72px] md:h-auto ml-4 sm:ml-[0] sm:mt-0 mt-4 object-cover rounded-sm w-[72px]"
              src="images/img_image_72x72.png"
              alt="image_One"
            />
            <Text
              className="leading-[20.00px] text-blue_gray-700 text-sm w-[69%] sm:w-full"
              size="txtPublicSansRegular14Bluegray700"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[627px] sm:pl-5 pl-6 py-[11px] text-blue_gray-700 text-xs uppercase"
            size="txtPublicSansMedium12"
          >
            Products
          </Text>
        ),
      }),
      tableColumnHelper.accessor("price", {
        cell: (info) => (
          <div className="flex flex-row items-start justify-center sm:pr-5 pr-[35px] py-[35px]">
            <Text
              className="line-through mt-[15px] text-blue_gray-300 text-sm"
              size="txtPublicSansRegular14Bluegray300"
            >
              $1299
            </Text>
            <Text
              className="ml-1 mr-[107px] mt-[15px] text-gray-900 text-sm"
              size="txtPublicSansMedium14Gray900"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[224px] py-[11px] text-blue_gray-700 text-center text-xs uppercase"
            size="txtPublicSansMedium12"
          >
            Price
          </Text>
        ),
      }),
      tableColumnHelper.accessor("stockstatus", {
        cell: (info) => (
          <Text
            className="py-[35px] text-green-700 text-sm"
            size="txtPublicSansSemiBold14Green700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[224px] py-[11px] text-blue_gray-700 text-xs uppercase"
            size="txtPublicSansMedium12"
          >
            Stock Status
          </Text>
        ),
      }),
      tableColumnHelper.accessor("actions", {
        cell: (info) => (
          <div className="flex flex-row gap-6 items-center justify-start pr-5 py-5">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[173px] mt-4"
              rightIcon={
                <Img
                  className="h-5 ml-2"
                  src="images/img_cart_white_a700_20x20.svg"
                  alt="cart"
                />
              }
              shape="round"
              color="deep_orange_A200"
              size="xl"
              variant="fill"
            >
              <div className="font-bold text-left text-sm tracking-[0.17px] uppercase">
                add to card
              </div>
            </Button>
            <Img className="h-6 w-6" alt="close" src={info?.getValue()} />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[245px] py-[11px] text-blue_gray-700 text-xs uppercase"
            size="txtPublicSansMedium12"
          >
            Actions
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans sm:gap-10 md:gap-10 gap-[72px] items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <C01HomepageNavigation
            className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full"
            language={
              <Text className="text-sm text-white-A700 w-auto">
                <span className="text-white-A700 font-publicsans text-left font-normal">
                  Welcome to{" "}
                </span>
                <span className="text-white-A700 font-publicsans text-left font-bold">
                  E.com
                </span>
                <span className="text-white-A700 font-publicsans text-left font-normal">
                  {" "}
                  online eCommerce store.{" "}
                </span>
              </Text>
            }
          />
          <C07ShopPageBreadcrumb
            className="bg-gray-100 flex flex-1 flex-col items-start justify-start p-[26px] sm:px-5 w-full"
            macbookprotext="Wishlist"
          />
        </header>
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start max-w-[1320px] mx-auto md:px-5 rounded w-full">
          <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-5 w-auto md:w-full">
            <Text
              className="text-gray-900 text-lg w-auto"
              size="txtPublicSansMedium18"
            >
              Wishlist
            </Text>
          </div>
          <div className="overflow-auto w-full">
            <ReactTable
              columns={tableColumns}
              data={tableData.current}
              rowClass={""}
              headerClass="bg-gray-100 border border-gray-300"
            />
          </div>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default WishlistPage;
