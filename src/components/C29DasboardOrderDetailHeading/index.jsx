import React from "react";

import { Button, Img, Text } from "components";

const C29DasboardOrderDetailHeading = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-6 ml-3.5 md:ml-[0] w-6"
          src="images/img_arrowleft.svg"
          alt="arrowleft"
        />
        <Text
          className="ml-3 md:ml-[0] text-gray-900 text-sm uppercase"
          size="txtPublicSansMedium14Gray900"
        >
          {props?.orderdetailstext}
        </Text>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[125px] md:ml-[0] ml-[665px]"
          rightIcon={
            <Img
              className="h-5 ml-2"
              src="images/img_close_deep_orange_a200.svg"
              alt="close"
            />
          }
          shape="square"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="!text-deep_orange-A200 font-publicsans font-semibold text-left text-sm">
            {props?.leaveratingbutton}
          </div>
        </Button>
      </div>
    </>
  );
};

C29DasboardOrderDetailHeading.defaultProps = {
  orderdetailstext: "Order Details",
  leaveratingbutton: "Leave a Rating ",
};

export default C29DasboardOrderDetailHeading;
