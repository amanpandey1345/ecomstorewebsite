import React from "react";

import { Img, Text } from "components";

const C21FAQsFaqs = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-deep_orange-A200 flex sm:flex-col flex-row gap-9 items-center justify-center sm:px-5 px-6 py-5 rounded-tl rounded-tr w-auto md:w-full">
          <Text
            className="text-lg text-white-A700 w-auto"
            size="txtPublicSansSemiBold18WhiteA700"
          >
            {props?.text}
          </Text>
          <Img
            className="h-5 w-5"
            src="images/img_regularminus.svg"
            alt="regularminus"
          />
        </div>
        <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
          <Text
            className="leading-[20.00px] max-w-[712px] md:max-w-full text-blue_gray-700 text-sm"
            size="txtPublicSansRegular14Bluegray700"
          >
            {props?.description}
          </Text>
          <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
            <Text
              className="text-blue_gray-700 text-sm w-auto"
              size="txtPublicSansRegular14Bluegray700"
            >
              {props?.timezone}
            </Text>
            <Text
              className="text-blue_gray-700 text-sm w-auto"
              size="txtPublicSansRegular14Bluegray700"
            >
              {props?.integeretlacus}
            </Text>
            <Text
              className="text-blue_gray-700 text-sm w-auto"
              size="txtPublicSansRegular14Bluegray700"
            >
              {props?.proinblanditnunOne}
            </Text>
            <Text
              className="text-blue_gray-700 text-sm w-auto"
              size="txtPublicSansRegular14Bluegray700"
            >
              {props?.quisqueutdolor}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

C21FAQsFaqs.defaultProps = {
  text: "Fusce molestie condimentum facilisis.",
  description:
    "Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.",
  timezone: "Vivamus sed est non arcu porta aliquet et vitae nulla.",
  integeretlacus:
    "Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.",
  proinblanditnunOne:
    "Proin blandit nunc risus, at semper turpis sagittis nec.",
  quisqueutdolor: "Quisque ut dolor erat.",
};

export default C21FAQsFaqs;
