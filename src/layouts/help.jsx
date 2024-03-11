import { Button, Heading, Text } from "components";
import CryptoCapLandingPageContentitem from "components/CryptoCapLandingPageContentitem";
import React from "react";

export default function Help() {
  return (
    <div className="flex flex-row justify-between items-start w-[88%] top-[35%] right-0 left-0 m-auto absolute">
      <div className="flex flex-col items-start justify-start w-[42%] mt-2.5 gap-[49px]">
        <div className="flex flex-col items-start justify-start w-full gap-7">
          <div className="flex flex-row justify-start">
            <Heading size="xl" as="h1">
              How To Get Started
            </Heading>
          </div>
          <div className="flex flex-row justify-start">
            <Text size="md" as="p">
              Simple and easy way to start your investment <br />
              in cryptocurrency
            </Text>
          </div>
        </div>
        <div className="flex flex-row justify-start">
          <Button className="flex items-center justify-center w-full h-[50px] px-[35px] text-white-A700 font-raleway text-center text-base font-semibold bg-teal-400 rounded-[10px]">
            Get Started
          </Button>
        </div>
      </div>
      <div className="flex flex-col w-[43%] gap-[23px]">
        <CryptoCapLandingPageContentitem className="flex flex-row justify-start w-full gap-[21px] p-2.5 border-white-A700_0c border border-solid bg-white-A700_05 rounded-[18px]" />
        <CryptoCapLandingPageContentitem
          createyour="Connect Bank Account"
          youraccount="Connect the bank account to start transactions."
          className="flex flex-row justify-start w-full gap-[21px] p-[19px] border-white-A700_0c border border-solid bg-white-A700_05 rounded-[18px]"
        />
        <CryptoCapLandingPageContentitem
          createyour="Start Build Portfolio"
          youraccount="Buy and sell popular currencies and keep track of them."
          className="flex flex-row justify-start w-full gap-[21px] p-2.5 border-white-A700_0c border border-solid bg-white-A700_05 rounded-[18px]"
        />
      </div>
    </div>
  );
}
