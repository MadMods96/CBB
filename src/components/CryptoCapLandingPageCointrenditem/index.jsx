import React from "react";
import { Img, Text, Button, Heading } from "./..";

export default function CryptoCapLandingPageCointrenditem({
  btcTwo = "BTC",
  bitcoin = "BITCOIN",
  price = "$56,623.54",
  p1fortyone = "1.41%",
  image = "images/img_chart_state_1.png",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-between items-center w-full max-w-[254px]">
        <div className="flex flex-row justify-start items-center w-[66%] gap-3.5">
          <Img
            src="images/img_bitcoin_ic_2.png"
            alt="btc_one"
            className="h-[50px] w-[50px] rounded-[50%]"
          />
          <Heading size="s" as="h1">
            {btcTwo}
          </Heading>
          <Button className="flex items-center justify-center h-[20px] px-[5px] text-gray-900 font-raleway text-center text-[10px] font-semibold bg-gray-400_01 min-w-[53px] rounded">
            {bitcoin}
          </Button>
        </div>
        {/* <Button className="flex items-center justify-center h-[48px] w-[48px]">
          <Img src="images/img_see_more_ic.svg" />
        </Button> */}
      </div>
      <div className="w-[258px] h-px bg-blue_gray-50_5e" />
      <div className="flex flex-row justify-start items-center w-full gap-3 max-w-[252px]">
        <div className="flex flex-col items-start justify-start w-[56%] pb-0.5 gap-3">
          <Text size="lg" as="p" className="!text-blue_gray-50">
            {price}
          </Text>
          <Text size="md" as="p" className="!font-medium">
            {p1fortyone}
          </Text>
        </div>
        <Img src={image} alt="image" className="w-[40%] object-cover" />
      </div>
    </div>
  );
}
