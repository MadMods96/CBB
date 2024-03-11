import React from "react";
import { Text, Heading, Img } from "./..";

export default function CryptoCapLandingPageContentitem({
  createYour = "images/img_template_get_started_icon.png",
  createyour = "Create Your Account",
  youraccount = "Your account and personal identity are guaranteed safe.",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start h-[80px] w-[80px] mt-[9px] ml-2.5">
        <Img src={createYour} alt="create_your" className="w-[80px] object-cover" />
      </div>
      <div className="flex flex-col items-center justify-start w-[66%] mb-2.5">
        <div className="flex flex-row justify-start w-full p-2.5">
          <Heading size="md" as="h1" className="mt-0.5 mb-[3px]">
            {createyour}
          </Heading>
        </div>
        <div className="flex flex-row justify-center w-full">
          <Text as="p" className="w-[95%] leading-6">
            {youraccount}
          </Text>
        </div>
      </div>
    </div>
  );
}
