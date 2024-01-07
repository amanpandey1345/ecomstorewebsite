import React from "react";

import { Button, Img, Text } from "components";

const C10TrackOrderDetailsActivity = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="border border-light_green-100 border-solid flex h-12 items-center justify-center w-12"
          shape="round"
          color="green_50"
          size="xl"
          variant="fill"
        >
          <Img
            className="h-6"
            src="images/img_checkmark_green_700.svg"
            alt="checkmark"
          />
        </Button>
        <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
          <Text
            className="text-gray-900 text-sm w-auto"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.ordertext}
          </Text>
          <Text
            className="text-blue_gray-400 text-sm w-auto"
            size="txtPublicSansRegular14Bluegray400"
          >
            {props?.timetext}
          </Text>
        </div>
      </div>
    </>
  );
};

C10TrackOrderDetailsActivity.defaultProps = {
  ordertext: "Your order has been delivered. Thank you for shopping at Clicon!",
  timetext: "23 Jan, 2021 at 7:32 PM",
};

export default C10TrackOrderDetailsActivity;
