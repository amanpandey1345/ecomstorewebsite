import React from "react";

import { Img, Input, Text } from "components";

const C27DasboardColumndashboardnavite = (props) => {
  return (
    <>
      <div className={props.className}>
        {!!props?.dashboardnavite ? (
          <Input
            name="dashboardnavite"
            placeholder="Dashboard"
            value={props?.dashboardnavite}
            className="!placeholder:text-white-A700 !text-white-A700 font-publicsans font-semibold p-0 text-left text-sm w-full"
            wrapClassName="flex w-full"
            prefix={
              <Img
                className="h-5 mr-3 my-auto"
                src="images/img_arrowdown_white_a700.svg"
                alt="arrow_down"
              />
            }
            shape="square"
            color="deep_orange_A200"
            size="xs"
            variant="fill"
          ></Input>
        ) : null}
        <div className="flex flex-row gap-3 items-center justify-start p-2.5 w-full">
          {!!props?.thumbsup ? (
            <Img
              className="h-5 ml-3.5 w-5"
              alt="thumbsup"
              src={props?.thumbsup}
            />
          ) : null}
          {!!props?.dashboardOne ? (
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.dashboardOne}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-row gap-3 items-center justify-start p-2.5 w-full">
          {!!props?.linkedinOne ? (
            <Img
              className="h-5 ml-3.5 w-5"
              alt="linkedin_One"
              src={props?.linkedinOne}
            />
          ) : null}
          {!!props?.dashboardTwo ? (
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.dashboardTwo}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-row gap-3 items-center justify-start p-2.5 w-full">
          {!!props?.cartOne ? (
            <Img
              className="h-5 ml-3.5 w-5"
              alt="cart_One"
              src={props?.cartOne}
            />
          ) : null}
          {!!props?.dashboardThree ? (
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.dashboardThree}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-row gap-3 items-center justify-start p-2.5 w-full">
          {!!props?.favoriteOne ? (
            <Img
              className="h-5 ml-3.5 w-5"
              alt="favorite_One"
              src={props?.favoriteOne}
            />
          ) : null}
          {!!props?.dashboardFour ? (
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.dashboardFour}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-row gap-3 items-center justify-start p-2.5 w-full">
          {!!props?.settingsOne ? (
            <Img
              className="h-5 ml-3.5 w-5"
              alt="settings_One"
              src={props?.settingsOne}
            />
          ) : null}
          {!!props?.dashboardFive ? (
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.dashboardFive}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-row gap-3 items-center justify-start p-2.5 w-full">
          {!!props?.reply ? (
            <Img className="h-5 ml-3.5 w-5" alt="reply" src={props?.reply} />
          ) : null}
          {!!props?.dashboardSix ? (
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.dashboardSix}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-row gap-3 items-center justify-start p-2.5 w-full">
          {!!props?.clock ? (
            <Img className="h-5 ml-3.5 w-5" alt="clock" src={props?.clock} />
          ) : null}
          {!!props?.dashboardSeven ? (
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.dashboardSeven}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-row gap-3 items-center justify-start p-2.5 w-full">
          {!!props?.search ? (
            <Img className="h-5 ml-3.5 w-5" alt="search" src={props?.search} />
          ) : null}
          {!!props?.dashboardEight ? (
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.dashboardEight}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-row gap-3 items-center justify-start p-2.5 w-full">
          {!!props?.thumbsupOne ? (
            <Img
              className="h-5 ml-3.5 w-5"
              alt="thumbsup_One"
              src={props?.thumbsupOne}
            />
          ) : null}
          {!!props?.dashboardNine ? (
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.dashboardNine}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

C27DasboardColumndashboardnavite.defaultProps = {};

export default C27DasboardColumndashboardnavite;
