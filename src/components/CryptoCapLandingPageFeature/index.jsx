import React from "react";
import { Img, Text, Heading } from "./..";

export default function CryptoCapLandingPageFeature({
  manage = "images/img_feature_image_1.png",
  manage1 = "Manage Portfolio",
  buyandsell = "Buy and sell popular digital currencies, keep track of them in the one place.",
  seeexplained = "See Explained",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-start w-full gap-[27px] mx-auto max-w-[238px]">
        <div className="flex flex-col items-center justify-start h-[80px] w-[80px]">
          <Img src={manage} alt="manage" className="w-[80px] object-cover" />
        </div>
        <div className="flex flex-col items-start justify-start w-full pt-1 gap-[13px]">
          <Heading size="md" as="h1">
            {manage1}
          </Heading>
          <Text as="p" className="leading-6">
            {buyandsell}
          </Text>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center gap-1">
        <Text as="p" className="!text-teal-400 !font-raleway !font-medium">
          {seeexplained}
        </Text>
        <Img src="images/img_frame_22.svg" alt="see_explained" className="h-[24px] w-[24px]" />
      </div>
    </div>
  );
}
