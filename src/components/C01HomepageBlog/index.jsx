import React from "react";

import { Button, Img, Text } from "components";

const C01HomepageBlog = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[248px] sm:h-auto object-cover rounded-[3px] w-[360px] md:w-full"
          alt="unsplashizvrfel"
          src={props?.userprofileimage}
        />
        <div className="flex flex-col gap-3 items-start justify-start w-auto">
          <div className="flex flex-col gap-2 items-start justify-start w-auto">
            <div className="flex flex-row gap-4 items-start justify-start w-auto">
              <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_settings_deep_orange_a200.svg"
                  alt="settings"
                />
                <Text
                  className="text-blue_gray-700 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray700"
                >
                  {props?.username}
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
                  {props?.datetext}
                </Text>
              </div>
              <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_settings_deep_orange_a200_24x24.svg"
                  alt="settings_One"
                />
                <Text
                  className="text-blue_gray-700 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray700"
                >
                  {props?.chattext}
                </Text>
              </div>
            </div>
            <Text
              className="leading-[24.00px] max-w-[360px] md:max-w-full text-gray-900 text-lg"
              size="txtPublicSansMedium18"
            >
              {props?.contenttextone}
            </Text>
          </div>
          <Text
            className="leading-[24.00px] max-w-[360px] md:max-w-full text-base text-blue_gray-400"
            size="txtPublicSansRegular16Bluegray400"
          >
            {props?.contenttexttwo}
          </Text>
        </div>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[162px]"
          rightIcon={
            <Img
              className="h-5 ml-2"
              src="images/img_arrowleft_deep_orange_a200.svg"
              alt="arrow_left"
            />
          }
          shape="round"
          color="orange_50"
          size="xl"
          variant="outline"
        >
          <div className="font-bold font-publicsans text-left text-sm tracking-[0.17px] uppercase">
            {props?.readmorebutton}
          </div>
        </Button>
      </div>
    </>
  );
};

C01HomepageBlog.defaultProps = {
  userprofileimage: "images/img_unsplashizvrfelg1t0.png",
  username: "Kristin",
  datetext: "19Dec, 2013",
  chattext: "453",
  contenttextone:
    "Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.",
  contenttexttwo:
    "Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.",
  readmorebutton: "Read more",
};

export default C01HomepageBlog;
