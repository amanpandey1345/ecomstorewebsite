import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import C16SignInLogin from "components/C16SignInLogin";
import Footer from "components/Footer";
import Header from "components/Header";

const SignInPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
        <C07ShopPageBreadcrumb
          className="bg-gray-100 flex flex-col items-start justify-start p-[26px] sm:px-5 w-full"
          macbookprotext="Sign In"
        />
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[748px] py-[100px] w-auto md:w-full">
          <C16SignInLogin className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start pb-8 md:px-5 rounded shadow-bs7 w-full" />
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default SignInPage;
