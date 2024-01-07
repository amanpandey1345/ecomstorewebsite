import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import C19SignUpLogin from "components/C19SignUpLogin";
import Footer from "components/Footer";
import Header from "components/Header";

const SignUpPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <C07ShopPageBreadcrumb
          className="bg-gray-100 flex flex-col items-start justify-start p-[26px] sm:px-5 w-full"
          macbookprotext="Sign Up"
        />
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[748px] py-[100px] w-auto md:w-full">
          <C19SignUpLogin
            className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start pb-8 md:px-5 rounded shadow-bs7 w-full"
            areyouagreeto={
              <Text className="leading-[20.00px] max-w-[332px] md:max-w-full text-blue_gray-700 text-sm">
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
            }
          />
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default SignUpPage;
