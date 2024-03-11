import { Heading, Img, Text } from "components";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full mt-[50px]">
      <div className="flex flex-col  items-center justify-center w-full mb-12 gap-12">
        <div className="h-px w-full bg-white-A700_0c" />
        <div className="flex flex-row sm:flex-col justify-between sm:justify-center items-center w-full max-w-[1260px]">
          <div className="flex flex-col items-center justify-start w-[23%] gap-[65px]">
            <div className="flex flex-row justify-start w-full">
              <div className="flex flex-row justify-start sm:justify-center w-[47%] sm:w-full pt-0.5">
                <Heading size="lg" as="h4">
                  <span className="text-white-A700">CRYPTO</span>
                  <span className="text-teal-400">BLOCK</span>
                  <span className="text-white-A700">BUZZ</span>
                </Heading>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start sm:justify-center w-full gap-8">
              <div className="flex flex-row justify-start sm:justify-center gap-3">
                <Img
                  src="images/img_instagram_ic.svg"
                  alt="instagramic_one"
                  className="h-[24px] w-[24px]"
                />
                <Img
                  src="images/img_facebook_ic.svg"
                  alt="facebookic_one"
                  className="h-[24px] w-[24px]"
                />
                <Img
                  src="images/img_twitter_ic.svg"
                  alt="twitteric_one"
                  className="h-[24px] w-[24px]"
                />
                <Img
                  src="images/img_youtube_ic.svg"
                  alt="youtubeic_one"
                  className="h-[24px] w-[24px]"
                />
              </div>
              <div className="flex flex-row justify-start sm:justify-center sm:w-full">
                <Text as="p" className="mt-px sm:text-center">
                  2024 CRYPTOBLOCKBUZZ. All rights reserved
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row  sm:flex-col sm:justify-center justify-between w-[59%] sm:w-full">
            <div className="flex flex-col items-center justify-start sm:justify-center w-[19%] sm:w-full gap-5 sm:mt-[50px]">
              <div className="flex flex-row sm:justify-center justify-start w-full">
                <Heading size="s" as="h6">
                  About Us
                </Heading>
              </div>
              <div className="flex flex-col items-start  sm:items-center justify-start  sm:justify-center w-full">
                <ul className="flex flex-col items-start sm:justify-center  sm:items-center justify-start gap-[25px]">
                  <li>
                    <a href="#">
                      <Text as="p">About</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p">Careers</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p">Blog</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p">Legal & privacy</Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center sm:justify-center  sm:items-center justify-start w-[21%] sm:w-full gap-5 sm:mt-[50px]">
              <div className="flex flex-row justify-start sm:justify-center  sm:items-center w-full sm:w-full">
                <Heading size="s" as="h6">
                  Services
                </Heading>
              </div>
              <div className="flex flex-col items-center justify-start sm:justify-center  sm:items-center w-full py-[3px] sm:w-full">
                <ul className="flex flex-col items-start justify-start sm:justify-center  sm:items-center h-[149px] w-[149px] gap-6 sm:w-full">
                  <li>
                    <a href="#">
                      <Text as="p">Aplications</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p">Buy Crypto</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p">Affilliate</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p">Institutional Services</Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start sm:justify-center  sm:items-center w-[23%] gap-5 sm:w-full sm:mt-[50px]">
              <div className="flex flex-row sm:justify-center  sm:items-center justify-start w-full">
                <Heading size="s" as="h6">
                  Learn
                </Heading>
              </div>
              <div className="flex flex-row justify-center sm:justify-center  sm:items-center w-full">
                <ul className="flex flex-col items-start sm:justify-center  sm:items-center justify-start w-full gap-6">
                  <li>
                    <a href="#">
                      <Text as="p">What is Cryptocurency?</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p">Crypto Basic</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p">Tips and Tutorials</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p">Market Update</Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
