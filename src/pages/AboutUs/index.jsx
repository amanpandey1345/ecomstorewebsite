import React from "react";

import { Button, CheckBox, Img, Input, Line, List, Text } from "components";
import C01HomepageNewsletter from "components/C01HomepageNewsletter";
import C01HomepageProduct6 from "components/C01HomepageProduct6";
import C23AboutUsTeammember from "components/C23AboutUsTeammember";
import Footer from "components/Footer";
import Header2 from "components/Header2";

const AboutUsPage = () => {
  const c23AboutUsTeammemberPropList = [
    {},
    { chiefexecutive: "Assistant of CEO" },
    { chiefexecutive: "Head of Designer" },
    { chiefexecutive: "UX Designer" },
    { chiefexecutive: "Product Designer" },
    { chiefexecutive: "Head of Development" },
    { chiefexecutive: "Design Engineer" },
    { chiefexecutive: "UI Designer" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <Header2 className="flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[136px] items-center justify-center pb-[124px] pt-[72px] md:px-10 sm:px-5 px-[300px] w-auto md:w-full">
          <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <Button
                  className="cursor-pointer font-semibold min-w-[124px] text-center text-sm"
                  shape="round"
                  color="blue_500"
                  size="md"
                  variant="fill"
                >
                  WHO WE ARE
                </Button>
                <Text
                  className="leading-[48.00px] max-w-[536px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                  size="txtPublicSansSemiBold40Gray900"
                >
                  Kinbo - largest electronics retail shop in the world.
                </Text>
              </div>
              <Text
                className="leading-[24.00px] max-w-[536px] md:max-w-full text-base text-blue_gray-700"
                size="txtPublicSansRegular16Bluegray700"
              >
                Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit
                vestibulum risus, ac tincidunt diam lectus id magna. Praesent
                maximus lobortis neque sit amet rhoncus. Nullam tempus lectus a
                dui aliquet, non ultricies nibh elementum. Nulla ac nulla dolor.{" "}
              </Text>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
              <CheckBox
                className="text-base text-gray-900 text-left"
                inputClassName="mr-[5px]"
                name="great247custome_One"
                id="great247custome_One"
                label="Great 24/7 customer services."
                shape="square"
              ></CheckBox>
              <CheckBox
                className="text-base text-gray-900 text-left"
                inputClassName="mr-[5px]"
                name="600dedicatedemp_One"
                id="600dedicatedemp_One"
                label="600+ Dedicated employe."
                shape="square"
              ></CheckBox>
              <CheckBox
                className="text-base text-gray-900 text-left"
                inputClassName="mr-[5px]"
                name="50branchesall"
                id="50branchesall"
                label="50+ Branches all over the world."
                shape="square"
              ></CheckBox>
              <CheckBox
                className="text-base text-gray-900 text-left"
                inputClassName="mr-[5px]"
                name="over1millionele_One"
                id="over1millionele_One"
                label="Over 1 Million Electronics Products"
                shape="square"
              ></CheckBox>
            </div>
          </div>
          <Img
            className="h-[536px] sm:h-auto object-cover rounded w-[648px] md:w-full"
            src="images/img_unsplashalwcwgfmwq.png"
            alt="unsplashalwcwgf"
          />
        </div>
        <div className="bg-white-A700 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[300px] py-[72px] shadow-bs6 w-auto md:w-full">
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1320px] mx-auto w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900 w-auto"
              size="txtPublicSansSemiBold32"
            >
              Our core team member
            </Text>
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                {c23AboutUsTeammemberPropList.map((props, index) => (
                  <React.Fragment key={`C23AboutUsTeammember${index}`}>
                    <C23AboutUsTeammember
                      className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-row gap-4 items-center justify-center p-6 sm:px-5 rounded-[3px] w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-gradient2  bg-no-repeat flex flex-col h-[440px] items-start justify-start md:px-10 sm:px-5 px-[300px] py-[88px] w-auto md:w-full"
          style={{ backgroundImage: "url('images/img_banner.png')" }}
        >
          <div className="flex flex-col gap-6 items-start justify-start max-w-[1320px] mx-auto w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="leading-[40.00px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                size="txtPublicSansSemiBold32"
              >
                <>
                  Your trusted and
                  <br />
                  reliable retail shop
                </>
              </Text>
              <Text
                className="leading-[24.00px] max-w-[423px] md:max-w-full text-gray-900 text-lg"
                size="txtPublicSansRegular18Gray900"
              >
                Praesent sed semper metus. Nunc aliquet dolor mauris, et
                fringilla elit gravida eget. Nunc consequat auctor urna a
                placerat.
              </Text>
            </div>
            <Button
              className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
              shape="circle"
              color="deep_orange_A200"
              size="3xl"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_overflowmenu.svg"
                alt="overflowmenu"
              />
            </Button>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center md:px-10 sm:px-5 px-[300px] py-[72px] w-auto md:w-full"
          orientation="horizontal"
        >
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              FLASH SALE TODAY
            </Text>
            <C01HomepageProduct6 className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto" />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_6.png"
              title="Simple Mobile 4G LTE Prepaid Smartphone"
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_19.png"
              title="4K UHD LED Smart TV with Chromecast Built-in"
            />
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              BEST SELLERS
            </Text>
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_80x80.png"
              title="Samsung Electronics Samsung Galexy S21 5G"
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_24.png"
              title="Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone"
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_172x202.png"
              title="Sony DSCHX8 High Zoom Point & Shoot Camera"
            />
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              TOP RATED
            </Text>
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_16.png"
              title="Portable Wshing Machine, 11lbs capacity Model 18NMF..."
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_25.png"
              title="Sony DSCHX8 High Zoom Point & Shoot Camera"
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_26.png"
              title="Dell Optiplex 7000x7480 All-in-One Computer Monitor"
            />
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              NEW ARRIVAL
            </Text>
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_1.png"
              title="TOZO T6 True Wireless Earbuds Bluetooth Headpho..."
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_22.png"
              title="JBL FLIP 4 - Waterproof Portable Bluetooth Speaker..."
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_2.png"
              title="Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar..."
            />
          </div>
        </List>
        <C01HomepageNewsletter className="bg-light_blue-900 flex flex-col gap-8 items-center justify-center md:px-10 sm:px-5 px-[300px] py-[72px] w-auto md:w-full" />
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutUsPage;
