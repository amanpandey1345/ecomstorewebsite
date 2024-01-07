import React from "react";

import { Img, Text } from "components";

const C07ShopPageBreadcrumb = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row gap-2 items-center justify-center md:ml-[0] ml-[274px] w-auto sm:w-full">
          <Img className="h-5 w-5" src="images/img_home.svg" alt="home" />
          <Text
            className="text-blue_gray-600 text-sm w-auto"
            size="txtPublicSansRegular14Bluegray600"
          >
            {props?.hometext}
          </Text>
          <Img
            className="h-3 w-3"
            src="images/img_arrowright.svg"
            alt="arrowright"
          />
          {!!props?.shoptext ? (
            <Text
              className="text-blue_gray-600 text-sm w-auto"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.shoptext}
            </Text>
          ) : null}
          {!!props?.arrowrightoneimage ? (
            <Img
              className="h-3 w-3"
              alt="arrowright_One"
              src={props?.arrowrightoneimage}
            />
          ) : null}
          {!!props?.shopgridtext ? (
            <Text
              className="text-blue_gray-600 text-sm w-auto"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.shopgridtext}
            </Text>
          ) : null}
          {!!props?.arrowrighttwoimage ? (
            <Img
              className="h-3 w-3"
              alt="arrowright_Two"
              src={props?.arrowrighttwoimage}
            />
          ) : null}
          {!!props?.electronicsdevicestext ? (
            <Text
              className="text-blue_gray-600 text-sm w-auto"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.electronicsdevicestext}
            </Text>
          ) : null}
          {!!props?.arrowrightthreeimage ? (
            <Img
              className="h-3 w-3"
              alt="arrowright_Three"
              src={props?.arrowrightthreeimage}
            />
          ) : null}
          <Text
            className="text-blue-500 text-sm w-auto"
            size="txtPublicSansMedium14Blue500"
          >
            {props?.macbookprotext}
          </Text>
        </div>
      </div>
    </>
  );
};

C07ShopPageBreadcrumb.defaultProps = {
  hometext: "Home",
  macbookprotext: "Macbook Pro",
};

export default C07ShopPageBreadcrumb;
