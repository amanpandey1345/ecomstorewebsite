import React from "react";

import { Button, Img, Text } from "components";

const C25BlogListPagination = (props) => {
  return (
    <>
      <div className={props.className}>
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
        <div className="flex flex-row gap-2 items-start justify-start w-auto">
          <Text
            className="bg-deep_orange-A200 flex h-10 items-center justify-center rounded-[50%] text-center text-sm text-white-A700 w-10"
            size="txtPublicSansSemiBold14WhiteA700"
          >
            {props?.pageonetext}
          </Text>
          <Text
            className="bg-white-A700 border border-gray-300 border-solid flex h-10 items-center justify-center rounded-[50%] text-center text-gray-900 text-sm w-10"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.pagetwotext}
          </Text>
          <Text
            className="bg-white-A700 border border-gray-300 border-solid flex h-10 items-center justify-center rounded-[50%] text-center text-gray-900 text-sm w-10"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.pagethreetext}
          </Text>
          <Text
            className="bg-white-A700 border border-gray-300 border-solid flex h-10 items-center justify-center rounded-[50%] text-center text-gray-900 text-sm w-10"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.pagefourtext}
          </Text>
          <Text
            className="bg-white-A700 border border-gray-300 border-solid flex h-10 items-center justify-center rounded-[50%] text-center text-gray-900 text-sm w-10"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.pagefivetext}
          </Text>
          <Text
            className="bg-white-A700 border border-gray-300 border-solid flex h-10 items-center justify-center rounded-[50%] text-center text-gray-900 text-sm w-10"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.pagesixtext}
          </Text>
        </div>
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
    </>
  );
};

C25BlogListPagination.defaultProps = {
  pageonetext: "01",
  pagetwotext: "02",
  pagethreetext: "03",
  pagefourtext: "04",
  pagefivetext: "05",
  pagesixtext: "06",
};

export default C25BlogListPagination;
