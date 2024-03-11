import { Button, Heading, Text } from "components";
import React from "react";

export default function MainMenu() {
  return (
    <div className="flex flex-col items-center justify-start w-full gap-[50px] max-w-3xl">
      <div className="flex flex-col items-center justify-start w-full gap-6">
        <div className="flex flex-row justify-center w-[94%]">
          <Heading size="xl" as="h1" className="text-center">
            Start and Build Your Crypto Portfolio Here
          </Heading>
        </div>
        <div className="flex flex-row justify-center w-full">
          <Text size="md" as="p" className="text-center">
            Only at CryptoCap, you can build a good portfolio and learn <br />
            best practices about cryptocurrency.
          </Text>
        </div>
      </div>
      <Button className="flex items-center justify-center h-[56px] px-[35px] text-white-A700 font-raleway text-center text-base font-semibold bg-teal-400 min-w-[190px] rounded-[10px]">
        Get Started
      </Button>
    </div>
  );
}
