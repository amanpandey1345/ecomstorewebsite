import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-sm",
};
const variants = {
  fill: {
    amber_500: "bg-amber-500 text-gray-900",
    blue_gray_900: "bg-blue_gray-900",
    blue_500: "bg-blue-500 text-white-A700",
    red_400: "bg-red-400 text-white-A700",
    white_A700_1e: "bg-white-A700_1e text-white-A700",
    green_700: "bg-green-700 text-white-A700",
    green_A700: "bg-green-A700",
    indigo_600: "bg-indigo-600",
    blue_500_01: "bg-blue-500_01",
    light_blue_800: "bg-light_blue-800",
    red_800: "bg-red-800",
    blue_gray_400: "bg-blue_gray-400",
    white_A700: "bg-white-A700 text-blue_gray-600",
    green_50: "bg-green-50",
    yellow_100: "bg-yellow-100",
    gray_900: "bg-gray-900",
    amber_A100: "bg-amber-A100 text-gray-900",
    orange_50: "bg-orange-50",
    deep_orange_A200: "bg-deep_orange-A200 text-white-A700",
    blue_gray_200: "bg-blue_gray-200 text-white-A700",
    red_50: "bg-red-50 text-deep_orange-A200",
    amber_A200: "bg-amber-A200 text-gray-900",
  },
  outline: {
    deep_orange_A200: "border border-deep_orange-A200 border-solid",
    orange_50: "border-2 border-orange-50 border-solid text-deep_orange-A200",
    blue_500: "border-2 border-blue-500 border-solid text-blue-500",
    light_blue_50: "border-2 border-light_blue-50 border-solid text-blue-500",
    blue_gray_900: "border border-blue_gray-900 border-solid",
    gray_300: "border border-gray-300 border-solid text-gray-900",
  },
};
const sizes = {
  xs: "p-[3px]",
  sm: "py-1.5",
  md: "p-[7px]",
  lg: "p-2.5",
  xl: "p-3.5",
  "2xl": "p-[18px]",
  "3xl": "p-6 sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "amber_500",
    "blue_gray_900",
    "blue_500",
    "red_400",
    "white_A700_1e",
    "green_700",
    "green_A700",
    "indigo_600",
    "blue_500_01",
    "light_blue_800",
    "red_800",
    "blue_gray_400",
    "white_A700",
    "green_50",
    "yellow_100",
    "gray_900",
    "amber_A100",
    "orange_50",
    "deep_orange_A200",
    "blue_gray_200",
    "red_50",
    "amber_A200",
    "light_blue_50",
    "gray_300",
  ]),
};

export { Button };
