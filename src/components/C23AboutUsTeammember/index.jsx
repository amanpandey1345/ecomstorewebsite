import React from "react";

import { Img, Text } from "components";

const C23AboutUsTeammember = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-16 md:h-auto rounded-[50%] w-16"
          src="images/img_image_64x64.png"
          alt="image"
        />
        <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
          <Text
            className="text-base text-gray-900 w-auto"
            size="txtPublicSansSemiBold16"
          >
            {props?.kevingilbert}
          </Text>
          <Text
            className="text-blue_gray-700 text-sm w-auto"
            size="txtPublicSansRegular14Bluegray700"
          >
            {props?.chiefexecutive}
          </Text>
        </div>
      </div>
    </>
  );
};

C23AboutUsTeammember.defaultProps = {
  kevingilbert: "Kevin Gilbert",
  chiefexecutive: "Chief Executive Officer",
};

export default C23AboutUsTeammember;
