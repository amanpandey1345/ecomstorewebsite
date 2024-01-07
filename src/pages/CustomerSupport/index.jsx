import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import Footer from "components/Footer";

const CustomerSupportPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <div className="bg-light_blue-900 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-3 shadow-bs w-full">
            <Text
              className="text-sm text-white-A700 w-auto"
              size="txtPublicSansRegular14WhiteA700"
            >
              <span className="text-white-A700 font-publicsans text-left font-normal">
                Welcome to{" "}
              </span>
              <span className="text-white-A700 font-publicsans text-left font-bold">
                E.com
              </span>
              <span className="text-white-A700 font-publicsans text-left font-normal">
                {" "}
                online eCommerce store.{" "}
              </span>
            </Text>
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-center justify-center w-auto sm:w-full">
              <div className="flex flex-row gap-3 items-center justify-center w-auto">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPublicSansRegular14WhiteA700"
                >
                  Follow us:
                </Text>
                <div className="flex flex-row gap-3 items-start justify-start w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_twitter.svg"
                    alt="twitter"
                  />
                  <div className="bg-white-A700 flex flex-col h-4 items-center justify-start pt-[3px] px-[3px] rounded-[50%] w-4">
                    <Img
                      className="h-3"
                      src="images/img_vector_light_blue_900.svg"
                      alt="vector"
                    />
                  </div>
                  <Img
                    className="h-4 w-4"
                    src="images/img_pinterest.svg"
                    alt="pinterest"
                  />
                  <div className="bg-white-A700 flex flex-col h-4 items-center justify-start p-0.5 rounded-[50%] w-4">
                    <Img
                      className="h-[9px] w-2.5"
                      src="images/img_vector.svg"
                      alt="vector_One"
                    />
                  </div>
                  <Img
                    className="h-4 w-4"
                    src="images/img_youtube.svg"
                    alt="youtube"
                  />
                  <Img
                    className="h-4 w-4"
                    src="images/img_instagram.svg"
                    alt="instagram"
                  />
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-3 grid grid-cols-[repeat(1,_1fr_1px)_1fr] w-[30%] sm:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPublicSansRegular14WhiteA700"
                    >
                      Eng
                    </Text>
                    <Img
                      className="h-3 w-3"
                      src="images/img_arrowdown_white_a700_12x12.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <Line className="self-center h-7 bg-white-A700_68 w-px" />
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPublicSansRegular14WhiteA700"
                    >
                      USD
                    </Text>
                    <Img
                      className="h-3 w-3"
                      src="images/img_arrowdown_white_a700_12x12.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="bg-light_blue-900 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-5 w-full">
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <div className="bg-white-A700 h-12 rounded-[50%] w-12"></div>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.64px] w-auto"
                size="txtPublicSansBold32"
              >
                E.com
              </Text>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-row gap-2 items-start justify-start px-5 py-3.5 rounded-sm shadow-bs1 w-auto md:w-full">
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray400"
              >
                Search for anything...
              </Text>
              <Img
                className="h-5 w-5"
                src="images/img_rewind.svg"
                alt="rewind"
              />
            </div>
            <div className="flex flex-row gap-6 items-center justify-start w-auto">
              <Img
                className="h-8 w-8"
                src="images/img_cart_white_a700_32x32.svg"
                alt="cart"
              />
              <Img
                className="h-8 w-8"
                src="images/img_favorite.svg"
                alt="favorite"
              />
              <Img className="h-8 w-8" src="images/img_lock.svg" alt="lock" />
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-4 w-full">
            <ul className="flex md:flex-col flex-row gap-6 md:hidden items-center justify-center w-auto common-row-list">
              <li>
                <div className="flex flex-col items-center justify-start">
                  <div className="bg-gray-100 flex flex-row gap-2 items-center justify-center sm:px-5 px-6 py-3.5 rounded-sm w-auto">
                    <Text
                      className="hover:font-medium text-gray-900 text-sm w-auto"
                      size="txtPublicSansMedium14Gray900"
                    >
                      All Category
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="images/img_arrowdown_gray_900.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-1.5 items-center justify-start">
                  <Img
                    className="h-6 w-6"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                  <Text
                    className="hover:font-medium text-blue_gray-600 hover:text-gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    Track Order
                  </Text>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-1.5 items-center justify-start">
                  <Img
                    className="h-6 w-6"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="hover:font-medium text-blue_gray-600 hover:text-gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    Compare
                  </Text>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-1.5 items-center justify-start">
                  <Img
                    className="h-6 w-6"
                    src="images/img_settings_1.svg"
                    alt="settings_One"
                  />
                  <Text
                    className="hover:font-medium text-deep_orange-A200 hover:text-gray-900 text-sm w-auto"
                    size="txtPublicSansSemiBold14DeeporangeA200"
                  >
                    Customer Support
                  </Text>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-1.5 items-center justify-start">
                  <Img
                    className="h-6 w-6"
                    src="images/img_inbox.svg"
                    alt="inbox"
                  />
                  <Text
                    className="hover:font-medium text-blue_gray-600 hover:text-gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    Need Help
                  </Text>
                </div>
              </li>
            </ul>
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <Img className="h-7 w-7" src="images/img_call.svg" alt="call" />
              <Text
                className="text-gray-900 text-lg w-auto"
                size="txtPublicSansRegular18Gray900"
              >
                +1-202-555-0104
              </Text>
            </div>
          </div>
        </header>
        <C07ShopPageBreadcrumb
          className="bg-gray-100 flex flex-col items-start justify-start p-[26px] sm:px-5 w-full"
          macbookprotext="Customer Support"
        />
        <div className="h-[332px] md:px-5 relative w-full">
          <Img
            className="h-[332px] m-auto object-cover w-full"
            src="images/img_rectangle16.png"
            alt="rectangleSixteen"
          />
          <div className="absolute flex flex-col gap-6 h-max inset-y-[0] items-center justify-start left-[16%] my-auto w-auto">
            <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
              <Button
                className="cursor-pointer font-semibold min-w-[129px] text-center text-sm"
                shape="round"
                color="amber_A200"
                size="md"
                variant="fill"
              >
                HELP CENTER
              </Button>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
                size="txtPublicSansSemiBold32"
              >
                How we can help you!
              </Text>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex sm:flex-col flex-row gap-3 items-center justify-start p-3 rounded w-auto sm:w-full">
              <Input
                name="inputfield"
                placeholder="Enter your question or keyword"
                className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-base text-left w-full"
                wrapClassName="flex w-[77%] sm:w-full"
                prefix={
                  <Img
                    className="h-6 mr-3 my-auto"
                    src="images/img_rewind_deep_orange_a200.svg"
                    alt="rewind"
                  />
                }
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              ></Input>
              <Button
                className="cursor-pointer font-bold min-w-[108px] text-center text-sm tracking-[0.17px] uppercase"
                shape="round"
                color="deep_orange_A200"
                size="xl"
                variant="fill"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-start justify-start md:px-10 sm:px-5 px-[300px] py-[72px] w-auto md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900 w-auto"
            size="txtPublicSansSemiBold32"
          >
            What can we assist you with today?
          </Text>
          <div className="flex flex-col items-start justify-start max-w-[1320px] mx-auto w-full">
            <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 hover:border-0 border-2 border-orange-50 border-solid hover:cursor-pointer flex flex-1 flex-row gap-4 items-center justify-center p-6 sm:px-5 rounded hover:shadow-bs13 shadow-bs13 hover:w-full w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_television_deep_orange_a200.svg"
                  alt="television"
                />
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPublicSansMedium16"
                >
                  Track Order
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 border-2 border-orange-50 border-solid hover:cursor-pointer flex flex-1 flex-row gap-4 items-center justify-center p-6 sm:px-5 rounded hover:shadow-bs13 hover:w-full w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_trophy.svg"
                  alt="trophy"
                />
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPublicSansMedium16"
                >
                  Reset Password
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 border-2 border-orange-50 border-solid hover:cursor-pointer flex flex-1 flex-row gap-4 items-center justify-center p-6 sm:px-5 rounded hover:shadow-bs13 hover:w-full w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_calendar_deep_orange_a200_32x32.svg"
                  alt="calendar"
                />
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPublicSansMedium16"
                >
                  Payment Option
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 border-2 border-orange-50 border-solid hover:cursor-pointer flex flex-1 flex-row gap-4 items-center justify-center p-6 sm:px-5 rounded hover:shadow-bs13 hover:w-full w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_lock_deep_orange_a200.svg"
                  alt="lock"
                />
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPublicSansMedium16"
                >
                  User & Account
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 border-2 border-orange-50 border-solid hover:cursor-pointer flex flex-1 flex-row gap-4 items-center justify-center p-6 sm:px-5 rounded hover:shadow-bs13 hover:w-full w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_settings_32x32.svg"
                  alt="settings"
                />
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPublicSansMedium16"
                >
                  Wishlist & Compare
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 border-2 border-orange-50 border-solid hover:cursor-pointer flex flex-1 flex-row gap-4 items-center justify-center p-6 sm:px-5 rounded hover:shadow-bs13 hover:w-full w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_calendar_32x32.svg"
                  alt="calendar"
                />
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPublicSansMedium16"
                >
                  Shipping & Billing
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 border-2 border-orange-50 border-solid hover:cursor-pointer flex flex-1 flex-row gap-4 items-center justify-center p-6 sm:px-5 rounded hover:shadow-bs13 hover:w-full w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_calendar_deep_orange_a200_32x32.svg"
                  alt="calendar"
                />
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPublicSansMedium16"
                >
                  Shoping Cart & Wallet
                </Text>
              </div>
              <div className="bg-white-A700 hover:border-0 border-2 border-orange-50 border-solid hover:cursor-pointer flex flex-1 flex-row gap-4 items-center justify-center p-6 sm:px-5 rounded hover:shadow-bs13 hover:w-full w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_thumbsup_deep_orange_a200.svg"
                  alt="thumbsup"
                />
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPublicSansMedium16"
                >
                  Sell on Clicon
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[300px] py-[72px] shadow-bs6 w-auto md:w-full">
          <div className="flex flex-col gap-[39px] items-center justify-start max-w-[1320px] mx-auto w-full">
            <Text
              className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl w-auto"
              size="txtPublicSansSemiBold24Gray900"
            >
              Popular Topics
            </Text>
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPublicSansRegular16"
                >
                  <>How do I return my item?</>
                </Text>
                <Text
                  className="text-base text-deep_orange-A200 w-auto"
                  size="txtPublicSansSemiBold16DeeporangeA200"
                >
                  <>What is Clicons Returns Policy?</>
                </Text>
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPublicSansRegular16"
                >
                  <>How long is the refund process?</>
                </Text>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPublicSansRegular16"
                >
                  <>What are the &#39;Delivery Timelines&#39;?</>
                </Text>
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPublicSansRegular16"
                >
                  <>What is &#39;Discover Your Daraz Campaign 2022&#39;?</>
                </Text>
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPublicSansRegular16"
                >
                  What is the Voucher & Gift Offer in this Campaign?
                </Text>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPublicSansRegular16"
                >
                  How to cancel Clicon Order.
                </Text>
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPublicSansRegular16"
                >
                  Ask the Digital and Device Community
                </Text>
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPublicSansRegular16"
                >
                  How to change my shop name?
                </Text>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col gap-10 items-center justify-center md:px-10 sm:px-5 px-[300px] py-[72px] w-auto md:w-full">
          <div className="flex flex-col gap-4 items-center justify-center max-w-[1320px] mx-auto w-full">
            <Button
              className="cursor-pointer font-semibold min-w-[121px] text-center text-sm"
              shape="round"
              color="blue_500"
              size="md"
              variant="fill"
            >
              CONTACT US
            </Button>
            <Text
              className="leading-[40.00px] md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900"
              size="txtPublicSansSemiBold32"
            >
              <>
                Don’t find your answer.
                <br />
                Contact with us
              </>
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 justify-start w-auto md:w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 flex sm:flex-col flex-row gap-6 items-start justify-start p-8 sm:px-5 rounded shadow-bs14 w-auto sm:w-full">
              <div className="bg-blue-50 flex flex-col items-start justify-start p-6 sm:px-5 rounded w-24">
                <Img
                  className="h-12 w-12"
                  src="images/img_call_blue_500.svg"
                  alt="call"
                />
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtPublicSansSemiBold18Gray900"
                    >
                      Call us now
                    </Text>
                    <Text
                      className="leading-[20.00px] max-w-[352px] md:max-w-full text-blue_gray-600 text-sm"
                      size="txtPublicSansRegular14Bluegray600"
                    >
                      we are available online from 9:00 AM to 5:00 PM (GMT95:45)
                      Talk with use now
                    </Text>
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                    size="txtPublicSansRegular24"
                  >
                    +1-202-555-0126
                  </Text>
                </div>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[152px]"
                  rightIcon={
                    <Img
                      className="h-5 ml-2"
                      src="images/img_arrowleft_white_a700.svg"
                      alt="arrow_left"
                    />
                  }
                  shape="round"
                  color="blue_500"
                  size="xl"
                  variant="fill"
                >
                  <div className="font-bold text-left text-sm tracking-[0.17px] uppercase">
                    Call now
                  </div>
                </Button>
              </div>
            </div>
            <div className="bg-white-A700 flex sm:flex-col flex-row gap-6 items-start justify-start p-8 sm:px-5 rounded shadow-bs14 w-auto sm:w-full">
              <div className="bg-green-50 flex flex-col items-start justify-start p-6 sm:px-5 rounded w-24">
                <Img
                  className="h-12 w-12"
                  src="images/img_duotonechatcircledots.svg"
                  alt="duotonechatcirc"
                />
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtPublicSansSemiBold18Gray900"
                    >
                      Chat with us
                    </Text>
                    <Text
                      className="leading-[20.00px] max-w-[352px] md:max-w-full text-blue_gray-600 text-sm"
                      size="txtPublicSansRegular14Bluegray600"
                    >
                      we are available online from 9:00 AM to 5:00 PM (GMT95:45)
                      Talk with use now
                    </Text>
                  </div>
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                    size="txtPublicSansRegular24"
                  >
                    Support@clicon.com
                  </Text>
                </div>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[168px]"
                  rightIcon={
                    <Img
                      className="h-5 ml-2"
                      src="images/img_arrowleft_white_a700.svg"
                      alt="arrow_left"
                    />
                  }
                  shape="round"
                  color="green_700"
                  size="xl"
                  variant="fill"
                >
                  <div className="font-bold text-left text-sm tracking-[0.17px] uppercase">
                    Contact Us
                  </div>
                </Button>
              </div>
            </div>
          </List>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default CustomerSupportPage;
