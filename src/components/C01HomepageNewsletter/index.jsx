import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const C01HomepageNewsletter = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-center justify-center w-auto md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-auto"
            size="txtPublicSansSemiBold32WhiteA700"
          >
            {props?.subscribetoour}
          </Text>
          <Text
            className="leading-[24.00px] max-w-[536px] md:max-w-full text-base text-center text-white-A700_99"
            size="txtPublicSansRegular16WhiteA70099"
          >
            {props?.description}
          </Text>
        </div>
        <div className="bg-white-A700 flex md:flex-col flex-row gap-4 items-center justify-start p-3 rounded-[3px] shadow-bs5 w-auto md:w-full">
          <Input
            name="input"
            placeholder="Email address"
            className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-publicsans p-0 text-base text-left w-full"
            wrapClassName="w-[71%] md:w-full"
            shape="round"
            color="white_A700"
            size="xs"
            variant="fill"
          ></Input>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[160px]"
            rightIcon={
              <Img
                className="h-5 ml-2"
                src="images/img_arrowleft_white_a700.svg"
                alt="arrow_left"
              />
            }
            shape="round"
            color="deep_orange_A200"
            size="xl"
            variant="fill"
          >
            <div className="font-bold font-publicsans text-left text-sm tracking-[0.17px] uppercase">
              {props?.onsubscribe}
            </div>
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center w-auto sm:w-full">
          <Line className="bg-white-A700_65 h-px w-[77%]" />
          <div className="flex sm:flex-col flex-row gap-12 items-start justify-start w-auto sm:w-full">
            <Img
              className="h-[72px] w-[72px]"
              src="images/img_google20151.svg"
              alt="google20151"
            />
            <Img
              className="h-[72px] w-[72px]"
              src="images/img_frame.svg"
              alt="frame"
            />
            <Img
              className="h-[72px] w-[72px]"
              src="images/img_philips1.svg"
              alt="philipsOne"
            />
            <Img
              className="h-[72px] w-[72px]"
              src="images/img_search_white_a700_72x72.svg"
              alt="search"
            />
            <Img
              className="h-[72px] w-[72px]"
              src="images/img_samsung41.svg"
              alt="samsungFortyOne"
            />
          </div>
        </div>
      </div>
    </>
  );
};

C01HomepageNewsletter.defaultProps = {
  subscribetoour: "Subscribe to our newsletter",
  description:
    "Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.",
  onsubscribe: "Subscribe",
};

export default C01HomepageNewsletter;
