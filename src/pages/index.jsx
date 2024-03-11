import React from "react";
import { Helmet } from "react-helmet";
import { Footer, MainMenu, MarketTrends, Nav, Table } from "layouts";

export default function CryptoCapLandingPagePage() {
  return (
    <>
      <Helmet>
        <title>CBB - Crypto Block Buzz</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full h-full">
        <video
          src="/videos/bg.mp4"
          className="fixed top-0 bottom-0 left-0 right-0 z-1 w-screen h-[100%] object-cover"
          autoPlay
          muted
          loop
        />
        <div className="fixed right-0 bottom-0 top-0 left-0 w-full h-full bg-black-900 opacity-80 z-2"></div>
        <div className="flex flex-col items-center justify-start w-full z-4">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="h-[900px] w-full relative">
              {/* <Img
              src="images/img_bg_above_the_fold.svg"
              alt="bgabovethe_one"
              className="justify-center h-[900px] left-0 bottom-0 right-0 top-0 m-auto opacity-0.25 absolute"
            /> */}
              <div className="flex flex-col items-center justify-center w-[100%] p-5 gap-[136px]  ">
                <div className="flex flex-col items-center justify-center w-full gap-[122px] p-5">
                  <Nav />
                  <MainMenu />
                </div>
                <div className=">w-[90%]">
                  <MarketTrends />
                </div>
              </div>
              <div className=">w-full">
                <Table />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
