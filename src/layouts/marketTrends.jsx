import { Heading } from "components";
import CryptoCapLandingPageCointrenditem from "components/CryptoCapLandingPageCointrenditem";
import React from "react";

export default function MarketTrends() {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-[26px]">
      <div className="flex flex-row justify-start sm:justify-center w-full">
        <Heading size="lg" as="h2" className="!font-semibold sm:text-center">
          Market Trend
        </Heading>
      </div>
      <div className="flex flex-row sm:flex-col items-center w-full gap-6">
        <CryptoCapLandingPageCointrenditem className="flex flex-col items-center justify-start w-[24%] sm:w-full gap-[34px] p-[18px] border-white-A700_0c border border-solid bg-white-A700_05 rounded-[18px]" />

        <CryptoCapLandingPageCointrenditem
          btcTwo="ETH"
          bitcoin="ETHEREUM"
          price="$4,267.90"
          p1fortyone="2.22%"
          image="images/img_chart_state_1_53x100.png"
          className="flex flex-col items-center justify-start w-[24%] gap-[34px] p-[18px] sm:w-full border-white-A700_0c border border-solid bg-white-A700_05 rounded-[18px]"
        />

        <CryptoCapLandingPageCointrenditem
          btcTwo="BNB"
          bitcoin="BINANCE"
          price="$587.74"
          p1fortyone="0.82%"
          image="images/img_chart_state_1_1.png"
          className="flex flex-col items-center justify-center w-[24%] gap-[33px] p-[18px] sm:w-full border-white-A700_0c border border-solid bg-white-A700_05 rounded-[18px]"
        />

        <CryptoCapLandingPageCointrenditem
          btcTwo="USDT"
          bitcoin="TETHER"
          price="$0.9998"
          p1fortyone="0,03%"
          image="images/img_chart_state_1_2.png"
          className="flex flex-col items-center justify-center w-[24%] gap-[33px] p-[18px] sm:w-full border-white-A700_0c border border-solid bg-white-A700_05 rounded-[18px]"
        />
      </div>
    </div>
  );
}
