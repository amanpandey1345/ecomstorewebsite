import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import C25BlogListPagination from "components/C25BlogListPagination";
import C27DasboardColumndashboardnavite from "components/C27DasboardColumndashboardnavite";
import C28DasboardOrderHistoryOrderhistory from "components/C28DasboardOrderHistoryOrderhistory";
import Footer from "components/Footer";
import Header from "components/Header";

const DasboardOrderHistoryPage = () => {
  const table2Data = React.useRef([
    {
      orderid: "#96459761",
      status: "IN PROGRESS",
      date: "Dec 30, 2019 07:52",
      total: "$80 (5 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#71667167",
      status: "COMPLETED",
      date: "Dec 7, 2019 23:26",
      total: "$70 (4 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#95214362",
      status: "CANCELED",
      date: "Dec 7, 2019 23:26",
      total: "$2,300 (2 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#71667167",
      status: "COMPLETED",
      date: "Feb 2, 2019 19:28",
      total: "$250 (1 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#51746385",
      status: "COMPLETED",
      date: "Dec 30, 2019 07:52",
      total: "$360 (2 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#51746385",
      status: "CANCELED",
      date: "Dec 4, 2019 21:42",
      total: "$220 (7 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#673971743",
      status: "COMPLETED",
      date: "Feb 2, 2019 19:28",
      total: "$80 (1 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#673971743",
      status: "COMPLETED",
      date: "Mar 20, 2019 23:14",
      total: "$160 (1 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#673971743",
      status: "COMPLETED",
      date: "Dec 4, 2019 21:42",
      total: "$1,500 (3 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#673971743",
      status: "COMPLETED",
      date: "Dec 30, 2019 07:52",
      total: "$1,200 (19 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#673971743",
      status: "CANCELED",
      date: "Dec 30, 2019 05:18",
      total: "$1,500 (1 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#673971743",
      status: "COMPLETED",
      date: "Dec 30, 2019 07:52",
      total: "$80 (1 Products)",
      action: "images/img_arrowdown.svg",
    },
  ]);
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("orderid", {
        cell: (info) => (
          <Text
            className="pb-[13px] sm:pl-5 pl-6 pt-[25px] text-gray-900 text-sm"
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
      table2ColumnHelper.accessor("status", {
        cell: (info) => (
          <Text
            className="pb-[13px] pt-[25px] text-deep_orange-A200 text-sm"
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
      table2ColumnHelper.accessor("date", {
        cell: (info) => (
          <Text
            className="pb-3 pt-[26px] text-blue_gray-600 text-sm"
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
      table2ColumnHelper.accessor("total", {
        cell: (info) => (
          <Text
            className="pb-[13px] pt-[25px] text-blue_gray-700 text-sm"
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
      table2ColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex flex-row gap-2 items-start justify-center pr-[13px] py-[13px]">
            <Text
              className="mt-[11px] text-blue-500 text-sm"
              size="txtPublicSansSemiBold14Blue500"
            >
              View Details
            </Text>
            <Img
              className="h-4 mr-5 mt-3 w-4"
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

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <C07ShopPageBreadcrumb
          className="bg-gray-100 flex flex-col items-start justify-start p-[26px] sm:px-5 w-full"
          shoptext="User Account"
          arrowrightoneimage="images/img_arrowright.svg"
          shopgridtext="Dashboard"
          arrowrighttwoimage="images/img_arrowright.svg"
          macbookprotext="Order History"
        />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-start justify-start max-w-[1320px] mx-auto pb-[72px] pt-10 md:px-5 w-full">
          <C27DasboardColumndashboardnavite className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start py-4 rounded shadow-bs10 w-auto" />
          <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-center justify-center pb-6 rounded w-auto md:w-full">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="flex flex-col items-start justify-start p-[17px] rounded-tl rounded-tr w-full">
                <Text
                  className="ml-1.5 md:ml-[0] text-gray-900 text-sm uppercase"
                  size="txtPublicSansMedium14Gray900"
                >
                  Order HIstory
                </Text>
              </div>
            </div>
            <div className="overflow-auto w-full">
              <ReactTable
                columns={table2Columns}
                data={table2Data.current}
                rowClass={""}
                headerClass="bg-gray-100 border border-gray-300"
              />
            </div>
            <C25BlogListPagination className="flex sm:flex-col flex-row gap-5 items-center justify-center w-auto sm:w-full" />
          </div>
        </div>
        <C28DasboardOrderHistoryOrderhistory className="flex sm:flex-col flex-row gap-6 items-center justify-center md:px-5 w-[380px] sm:w-full" />
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default DasboardOrderHistoryPage;
