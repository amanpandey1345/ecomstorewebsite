import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const C16SignInLogin = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-auto md:w-full">
          <Button
            className="!text-gray-900 cursor-pointer font-publicsans font-semibold min-w-[212px] shadow-bs8 text-center text-xl"
            shape="square"
            color="white_A700"
            size="2xl"
            variant="fill"
          >
            {props?.signInOne}
          </Button>
          <div className="flex flex-col items-start justify-start py-4 w-auto">
            <Text
              className="text-blue_gray-400 text-center text-xl w-auto"
              size="txtPublicSansSemiBold20Bluegray400"
            >
              {props?.signin}
            </Text>
          </div>
        </div>
        <Line className="bg-gray-300 h-px w-full" />
        <div className="flex flex-col gap-4 items-start justify-start mt-[23px] w-auto">
          <div className="flex flex-col gap-2 items-start justify-start w-[360px]">
            <Text
              className="text-gray-900 text-sm w-full"
              size="txtPublicSansRegular14Gray900"
            >
              {props?.emailaddress}
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
            <div className="flex flex-row gap-2 items-center justify-between w-full">
              <Text
                className="text-gray-900 text-sm w-auto"
                size="txtPublicSansRegular14Gray900"
              >
                {props?.password}
              </Text>
              <Text
                className="text-blue-500 text-sm w-auto"
                size="txtPublicSansMedium14Blue500"
              >
                {props?.forgetpassword}
              </Text>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-end justify-start p-3 rounded-sm w-full">
              <Img
                className="h-5 mr-1 w-5"
                src="images/img_eye.svg"
                alt="eye"
              />
            </div>
          </div>
        </div>
        <Button
          className="cursor-pointer flex items-center justify-center mt-6 w-[360px]"
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
            {props?.signinbutton}
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
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-[85px] items-center justify-start p-3 rounded-sm w-full">
            <Img
              className="h-5 md:h-auto ml-1 object-cover w-5"
              src="images/img_google.png"
              alt="google"
            />
            <Text
              className="text-blue_gray-700 text-center text-sm"
              size="txtPublicSansRegular14Bluegray700"
            >
              {props?.loginwithgoogleOne}
            </Text>
          </div>
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-[89px] items-center justify-start p-3 rounded-sm w-full">
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

C16SignInLogin.defaultProps = {
  signInOne: "Sign In",
  signin: "Sign Up",
  emailaddress: "Email Address",
  password: "Password",
  forgetpassword: "Forget Password",
  signinbutton: "Sign in",
  labelOne: "or",
  loginwithgoogleOne: "Login with Google",
  loginwithapple: "Login with Apple",
};

export default C16SignInLogin;
