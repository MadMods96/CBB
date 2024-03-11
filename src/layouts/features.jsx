import { Button, Heading, Img, Text } from "components";
import CryptoCapLandingPageFeature from "components/CryptoCapLandingPageFeature";
import React from "react";

export default function Features() {
  return (
    <div className="h-full w-full relative mt-[100px]">
      {/* <Img
        src="images/img_bg_features.svg"
        alt="bgfeatures_one"
        className="justify-center h-fullopacity-0.15"
      /> */}
      <div className="flex flex-col items-center justify-center w-full h-full gap-[76px]">
        <div className="flex flex-col items-center justify-start w-[50%] sm:w-full gap-[27px]">
          <div className="flex flex-row justify-center w-full max-w-[502px] ">
            <Heading size="xl" as="h2" className="text-center">
              CryptoCap Amazing Features
            </Heading>
          </div>
          <div className="flex flex-row justify-center w-full">
            <Text size="md" as="p" className="text-center">
              Explore sensational features to prepare your best investment in
              cryptocurrency
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-[127px]">
          <div className="flex flex-row sm:flex-col w-full items-center justify-center gap-6">
            <CryptoCapLandingPageFeature className="flex flex-col items-start justify-center gap-[38px] p-7 border-white-A700_0c border border-solid bg-white-A700_05 rounded-[18px]" />
            <CryptoCapLandingPageFeature
              manage="images/img_feature_image_1_80x80.png"
              manage1="Protected Securely"
              buyandsell="All cash balances are covered by FDIC insurance, up to a maximum of $250,000."
              className="flex flex-col items-start justify-center gap-[38px] p-7 border-white-A700_0c border border-solid bg-white-A700_05 rounded-[18px]"
            />
            <CryptoCapLandingPageFeature
              manage="images/img_feature_image_1_1.png"
              manage1="Cryptocurrency Variety"
              buyandsell="Supports a variety of the most popular digital currencies and always uptodate."
              className="flex flex-col items-start justify-center gap-[38px] p-7 border-white-A700_0c border border-solid bg-white-A700_05 rounded-[18px]"
            />
            <CryptoCapLandingPageFeature
              manage="images/img_feature_image_1_2.png"
              manage1="Learn Best Practice"
              buyandsell="Easy to know how to cryptocurrency works and friendly to newbie."
              className="flex flex-col items-start justify-center gap-[38px] p-7 border-white-A700_0c border border-solid bg-white-A700_05 rounded-[18px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
