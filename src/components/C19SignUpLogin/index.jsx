import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const C19SignUpLogin = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-auto md:w-full">
          <div className="flex flex-col items-start justify-start py-4 w-auto">
            <Text
              className="text-blue_gray-400 text-center text-xl w-auto"
              size="txtPublicSansSemiBold20Bluegray400"
            >
              {props?.signin}
            </Text>
          </div>
          <Button
            className="!text-gray-900 cursor-pointer font-publicsans font-semibold min-w-[212px] shadow-bs9 text-center text-xl"
            shape="square"
            color="white_A700"
            size="2xl"
            variant="fill"
          >
            {props?.signUpOne}
          </Button>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
        <div className="flex flex-col gap-4 items-start justify-start mt-[23px] w-auto">
          <div className="flex flex-col gap-2 items-start justify-start w-[360px]">
            <Text
              className="text-gray-900 text-sm w-full"
              size="txtPublicSansRegular14Gray900"
            >
              {props?.name}
            </Text>
            <Input
              name="inputfield"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-gray-300 border-solid flex h-11 w-full"
              shape="round"
              color="white_A700"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-[360px]">
            <Text
              className="text-gray-900 text-sm w-full"
              size="txtPublicSansRegular14Gray900"
            >
              {props?.emailaddress}
            </Text>
            <Input
              name="inputfield_One"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-gray-300 border-solid flex h-11 w-full"
              shape="round"
              color="white_A700"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-[360px]">
            <Text
              className="text-gray-900 text-sm w-full"
              size="txtPublicSansRegular14Gray900"
            >
              {props?.password}
            </Text>
            <Input
              name="inputfield_Two"
              placeholder="8+ characters"
              className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-publicsans p-0 text-left text-sm w-full"
              wrapClassName="border border-gray-300 border-solid flex w-full"
              suffix={
                <Img
                  className="h-5 ml-[35px] my-auto"
                  src="images/img_eye.svg"
                  alt="eye"
                />
              }
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-[360px]">
            <Text
              className="text-gray-900 text-sm w-full"
              size="txtPublicSansRegular14Gray900"
            >
              {props?.confirmpasswordOne}
            </Text>
            <Input
              name="inputfield_Three"
              placeholder=""
              className="p-0 w-full"
              wrapClassName="border border-gray-300 border-solid flex w-full"
              suffix={
                <Img
                  className="h-5 ml-[35px] my-auto"
                  src="images/img_eye.svg"
                  alt="eye"
                />
              }
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-row gap-2 items-start justify-start w-auto">
            <Button
              className="flex h-5 items-center justify-center w-5"
              shape="round"
              color="deep_orange_A200"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-3.5"
                src="images/img_checkmark.svg"
                alt="checkmark"
              />
            </Button>
            {props?.areyouagreeto}
          </div>
        </div>
        <Button
          className="cursor-pointer flex items-center justify-center mt-8 w-[360px]"
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
            {props?.signUpTwo}
          </div>
        </Button>
        <div className="flex flex-col gap-3 items-start justify-start mt-6 w-auto">
          <div className="h-5 relative w-full">
            <Line className="absolute bg-gray-300 bottom-[45%] h-px inset-x-[0] mx-auto w-full" />
            <Text
              className="absolute bg-white-A700 h-full inset-[0] justify-center m-auto px-2 text-blue_gray-400 text-sm w-max"
              size="txtPublicSansRegular14Bluegray400"
            >
              {props?.labelOne}
            </Text>
          </div>
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-[79px] items-center justify-start p-3 rounded-sm w-full">
            <Img
              className="h-5 md:h-auto ml-1 object-cover w-5"
              src="images/img_google.png"
              alt="google"
            />
            <Text
              className="text-blue_gray-700 text-center text-sm"
              size="txtPublicSansRegular14Bluegray700"
            >
              {props?.loginwithgoogle}
            </Text>
          </div>
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-[83px] items-center justify-start p-3 rounded-sm w-full">
            <Img
              className="h-5 ml-1 w-5"
              src="images/img_apple.svg"
              alt="apple"
            />
            <Text
              className="text-blue_gray-700 text-center text-sm"
              size="txtPublicSansRegular14Bluegray700"
            >
              {props?.loginwithapple}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

C19SignUpLogin.defaultProps = {
  signin: "Sign In",
  signUpOne: "Sign Up",
  name: "Name",
  emailaddress: "Email Address",
  password: "Password",
  confirmpasswordOne: "Confirm Password",
  areyouagreeto: (
    <Text
      className="leading-[20.00px] max-w-[332px] md:max-w-full text-blue_gray-700 text-sm"
      size="txtPublicSansRegular14Bluegray700"
    >
      <span className="text-blue_gray-700 font-publicsans text-left font-normal">
        Are you agree to{" "}
      </span>
      <span className="text-blue_gray-700 font-publicsans text-left font-bold">
        E.com
      </span>
      <span className="text-blue_gray-700 font-publicsans text-left font-normal">
        {" "}
      </span>
      <span className="text-blue-500 font-publicsans text-left font-medium">
        Terms of Condition
      </span>
      <span className="text-blue_gray-700 font-publicsans text-left font-normal">
        {" "}
        and{" "}
      </span>
      <span className="text-blue-500 font-publicsans text-left font-medium">
        <>Privacy Policy.</>
      </span>
    </Text>
  ),
  signUpTwo: "Sign up",
  labelOne: "or",
  loginwithgoogle: "Sign up with Google",
  loginwithapple: "Sign up with Apple",
};

export default C19SignUpLogin;
