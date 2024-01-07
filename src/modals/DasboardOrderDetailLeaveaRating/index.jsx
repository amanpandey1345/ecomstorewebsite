import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, SelectBox, Text } from "components";

const starRatingOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DasboardOrderDetailLeaveaRatingModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-1/4"
      overlayClassName="bg-black-900_cc fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-center justify-center md:px-5 rounded w-auto sm:w-full">
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start p-[17px] rounded-tl rounded-tr w-full">
            <Text
              className="ml-1.5 md:ml-[0] text-gray-900 text-sm uppercase"
              size="txtPublicSansMedium14Gray900"
            >
              Billing address
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start pb-6 w-auto sm:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-[424px] sm:w-full">
                <Text
                  className="text-gray-900 text-sm w-full"
                  size="txtPublicSansRegular14Gray900"
                >
                  Rating
                </Text>
                <div className="bg-white-A700 border border-gray-300 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-3 rounded-sm w-full">
                  <Img
                    className="h-4 sm:ml-[0] ml-[3px] w-4"
                    src="images/img_signal_deep_orange_a200_20x20.svg"
                    alt="signal"
                  />
                  <Img
                    className="h-4 w-4"
                    src="images/img_signal_deep_orange_a200_20x20.svg"
                    alt="signal_One"
                  />
                  <Img
                    className="h-4 w-4"
                    src="images/img_signal_deep_orange_a200_20x20.svg"
                    alt="signal_Two"
                  />
                  <Img
                    className="h-4 w-4"
                    src="images/img_signal_deep_orange_a200_20x20.svg"
                    alt="signal_Three"
                  />
                  <Img
                    className="h-4 w-4"
                    src="images/img_signal_deep_orange_a200_20x20.svg"
                    alt="signal_Four"
                  />
                  <SelectBox
                    className="sm:flex-1 ml-2 sm:ml-[0] text-blue_gray-700 text-left text-sm w-[76%] sm:w-full"
                    placeholderClassName="text-blue_gray-700"
                    indicator={
                      <Img
                        className="h-4 mr-[0] w-4"
                        src="images/img_arrowdown_blue_gray_200.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="groupFifteen"
                    options={starRatingOptionsList}
                    isSearchable={false}
                    placeholder="5 Star Rating"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-[424px] sm:w-full">
                <Text
                  className="text-gray-900 text-sm w-full"
                  size="txtPublicSansRegular14Gray900"
                >
                  Feedback
                </Text>
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start p-3.5 rounded-sm w-full">
                  <Text
                    className="mb-[78px] text-blue_gray-300 text-sm"
                    size="txtPublicSansRegular14Bluegray300"
                  >
                    Write down your feedback about our product & services
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-bold min-w-[204px] rounded-[3px] text-base text-center tracking-[0.19px] uppercase"
              shape="round"
              color="deep_orange_A200"
              size="2xl"
              variant="fill"
            >
              Publish Review
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default DasboardOrderDetailLeaveaRatingModal;
