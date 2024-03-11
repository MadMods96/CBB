import React from "react";
import { Text, Heading, Button, Img } from "./..";

export default function CryptoCapLandingPageArticleitem({
  thumbnailOne = "images/img_thumbnail.png",
  cryptoBasic = "CRYPTO BASIC",
  whatis = "What is cryptocurrency? all you need to know",
  cryptocurrencie = "Cryptocurrencies are basically digital assets. It is secured by cryptography.. ",
  ...props
}) {
  return (
    <div {...props}>
      <Img src={thumbnailOne} alt="thumbnail_one" className="w-full rounded-tr-[18px] rounded-tl-[18px] object-cover" />
      <div className="flex flex-row justify-center w-full p-5">
        <div className="flex flex-col items-center justify-start w-full gap-[13px] max-w-[256px]">
          <div className="flex flex-row justify-start w-full">
            <Button className="flex items-center justify-center h-[22px] px-1 text-gray-400 text-center text-xs font-medium bg-white-A700_11 min-w-[95px] rounded">
              {cryptoBasic}
            </Button>
          </div>
          <div className="flex flex-row justify-center w-full">
            <Heading as="h1" className="!text-white-A700 leading-6">
              {whatis}
            </Heading>
          </div>
          <div className="flex flex-row justify-center w-full">
            <Text size="xs" as="p">
              {cryptocurrencie}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
