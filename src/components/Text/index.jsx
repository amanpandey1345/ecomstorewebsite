import React from "react";

const sizeClasses = {
  txtPublicSansSemiBold16: "font-publicsans font-semibold",
  txtPublicSansRegular18Bluegray400: "font-normal font-publicsans",
  txtPublicSansSemiBold18: "font-publicsans font-semibold",
  txtPublicSansSemiBold12: "font-publicsans font-semibold",
  txtPublicSansSemiBold14: "font-publicsans font-semibold",
  txtPublicSansMedium14Amber500: "font-medium font-publicsans",
  txtPublicSansRegular24: "font-normal font-publicsans",
  txtPublicSansSemiBold14DeeporangeA200: "font-publicsans font-semibold",
  txtPublicSansMedium18WhiteA700: "font-medium font-publicsans",
  txtPublicSansRegular20: "font-normal font-publicsans",
  txtPublicSansRegular16WhiteA700: "font-normal font-publicsans",
  txtPublicSansSemiBold20: "font-publicsans font-semibold",
  txtPublicSansSemiBold14Red700: "font-publicsans font-semibold",
  txtPublicSansRegular16Bluegray700: "font-normal font-publicsans",
  txtPublicSansSemiBold18WhiteA700: "font-publicsans font-semibold",
  txtPublicSansSemiBold28: "font-publicsans font-semibold",
  txtPublicSansSemiBold24: "font-publicsans font-semibold",
  txtPublicSansMedium14Blue500: "font-medium font-publicsans",
  txtPublicSansSemiBold14Gray900: "font-publicsans font-semibold",
  txtPublicSansSemiBold18Gray900: "font-publicsans font-semibold",
  txtPublicSansMedium14Gray900: "font-medium font-publicsans",
  txtPublicSansBold32: "font-bold font-publicsans",
  txtPublicSansRegular14Gray900: "font-normal font-publicsans",
  txtInterRegular11: "font-inter font-normal",
  txtPublicSansRegular14Bluegray300: "font-normal font-publicsans",
  txtPublicSansSemiBold32: "font-publicsans font-semibold",
  txtInterRegular14: "font-inter font-normal",
  txtPublicSansRegular14Bluegray700: "font-normal font-publicsans",
  txtPublicSansSemiBold14Blue500: "font-publicsans font-semibold",
  txtPublicSansSemiBold12Blue500: "font-publicsans font-semibold",
  txtPublicSansMedium14Bluegray600: "font-medium font-publicsans",
  txtPublicSansSemiBold14WhiteA700: "font-publicsans font-semibold",
  txtPublicSansMedium12: "font-medium font-publicsans",
  txtPublicSansMedium11: "font-medium font-publicsans",
  txtPublicSansMedium16: "font-medium font-publicsans",
  txtPublicSansRegular14WhiteA700: "font-normal font-publicsans",
  txtPublicSansSemiBold20Bluegray400: "font-publicsans font-semibold",
  txtPublicSansMedium14: "font-medium font-publicsans",
  txtPublicSansSemiBold36: "font-publicsans font-semibold",
  txtPublicSansRegular18Gray900: "font-normal font-publicsans",
  txtPublicSansMedium18: "font-medium font-publicsans",
  txtPublicSansSemiBold14Red400: "font-publicsans font-semibold",
  txtPublicSansRegular16WhiteA70099: "font-normal font-publicsans",
  txtPublicSansRegular20WhiteA700: "font-normal font-publicsans",
  txtPublicSansRegular16Bluegray600: "font-normal font-publicsans",
  txtPublicSansSemiBold16DeeporangeA200: "font-publicsans font-semibold",
  txtPublicSansMedium20: "font-medium font-publicsans",
  txtPublicSansRegular16Bluegray400: "font-normal font-publicsans",
  txtPublicSansSemiBold40: "font-publicsans font-semibold",
  txtPublicSansRegular16Bluegray200: "font-normal font-publicsans",
  txtPublicSansSemiBold40Gray900: "font-publicsans font-semibold",
  txtPublicSansSemiBold24Gray900: "font-publicsans font-semibold",
  txtPublicSansSemiBold48: "font-publicsans font-semibold",
  txtPublicSansSemiBold28Blue500: "font-publicsans font-semibold",
  txtInterSemiBold14: "font-inter font-semibold",
  txtPublicSansRegular12: "font-normal font-publicsans",
  txtPublicSansRegular14: "font-normal font-publicsans",
  txtPublicSansSemiBold20Gray900: "font-publicsans font-semibold",
  txtPublicSansMedium16WhiteA700: "font-medium font-publicsans",
  txtPublicSansRegular16: "font-normal font-publicsans",
  txtPublicSansSemiBold28Gray900: "font-publicsans font-semibold",
  txtPublicSansRegular18: "font-normal font-publicsans",
  txtPublicSansSemiBold24Blue500: "font-publicsans font-semibold",
  txtPublicSansSemiBold32WhiteA700: "font-publicsans font-semibold",
  txtPublicSansBold14: "font-bold font-publicsans",
  txtPublicSansSemiBold14Green700: "font-publicsans font-semibold",
  txtPublicSansRegular18WhiteA700: "font-normal font-publicsans",
  txtPublicSansMedium14Bluegray300: "font-medium font-publicsans",
  txtPublicSansRegular14Bluegray600: "font-normal font-publicsans",
  txtPublicSansRegular14Bluegray400: "font-normal font-publicsans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
