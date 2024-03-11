import { createColumnHelper } from "@tanstack/react-table";
import { CloseSVG } from "assets/images";
import { Button, Heading, Img, Input, ReactTable, Text } from "components";
import CryptoCapLandingPageArticleitem from "components/CryptoCapLandingPageArticleitem";
import React from "react";
import Features from "./features";

export default function Table() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowno", {
        cell: (info) => (
          <div className="flex flex-row justify-between items-start">
            <Text as="p" className="mt-[11px] ml-5">
              {info?.getValue?.()}
            </Text>
            <div className="flex flex-row justify-start items-center w-[76%] mr-[38px] gap-[22px]">
              <Img
                src="images/img_bitcoin_ic_1.png"
                alt="bitcoinicone"
                className="h-[44px] w-[44px] rounded-[50%]"
              />
              <div className="flex flex-row justify-start w-[84%] gap-[35px] py-[5px]">
                <Text as="p" className="mb-px">
                  Bitcoin
                </Text>
                <Text as="p" className="text-right">
                  BTC
                </Text>
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-start gap-[50px] p-[21px]">
            <Text as="p" className="ml-2 !font-medium">
              NO
            </Text>
            <Text as="p" className="!font-medium">
              NAME
            </Text>
          </div>
        ),
        meta: { width: "561px" },
      }),
      tableColumnHelper.accessor("lastprice", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="py-[21px] !font-medium">
            LAST PRICE
          </Text>
        ),
        meta: { width: "187px" },
      }),
      tableColumnHelper.accessor("price", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="py-[21px] !font-medium">
            CHANGE
          </Text>
        ),
        meta: { width: "164px" },
      }),
      tableColumnHelper.accessor("price1", {
        cell: (info) => (
          <div className="flex flex-row justify-start">
            <Img
              src={info?.getValue?.()}
              alt="chartstatetwo"
              className="w-[35%] my-[7px] object-cover"
            />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="py-[21px] !font-medium">
            MARKET STATS
          </Text>
        ),
        meta: { width: "215px" },
      }),
      tableColumnHelper.accessor("tradeone", {
        cell: (info) => (
          <div className="flex flex-row justify-start">
            <Button className="flex items-center justify-center h-[32px] px-6 my-[11px] text-white-A700 font-raleway text-center text-base font-semibold bg-teal-400 min-w-[92px] rounded-[10px]">
              {info?.getValue?.()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="py-[21px] !font-medium">
            TRADE
          </Text>
        ),
        meta: { width: "134px" },
      }),
    ];
  }, []);
  const tableData = [
    {
      rowno: "1",
      lastprice: "$56,623.54",
      price: "1.41%",
      price1: "images/img_chart_state_1.png",
      tradeone: "Trade",
    },
    {
      rowno: "2",
      lastprice: "$4,267.90",
      price: "2.22%",
      price1: "images/img_chart_state_1_53x100.png",
      tradeone: "Trade",
    },
    {
      rowno: "3",
      lastprice: "$587.74",
      price: "-0.82%",
      price1: "images/img_chart_state_1_1.png",
      tradeone: "Trade",
    },
    {
      rowno: "4",
      lastprice: "$0.9998",
      price: "-0.03%",
      price1: "images/img_chart_state_1_2.png",
      tradeone: "Trade",
    },
    {
      rowno: "5",
      lastprice: "$213.67",
      price: "-0.53%",
      price1: "images/img_chart_state_2.png",
      tradeone: "Trade",
    },
    {
      rowno: "6",
      lastprice: "$1.04",
      price: "-0.44%",
      price1: "images/img_chart_state_2_40x71.png",
      tradeone: "Trade",
    },
    {
      rowno: "7",
      lastprice: "$1.00",
      price: "-0.03%",
      price1: "images/img_chart_state_2_1.png",
      tradeone: "Trade",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full mt-[150px]">
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-col items-start justify-center w-full gap-[42px] z-[4] max-w-[1262px] mb-5">
          <div className="flex flex-col items-center justify-start w-full gap-[31px]">
            <div className="flex flex-row justify-start  sm:justify-center w-full pt-1">
              <Heading size="xl" as="h2">
                Market Update
              </Heading>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-[22px]">
              <div className="flex flex-row justify-start sm:justify-center w-full">
                <Text size="md" as="p" className="mt-[3px] !font-medium">
                  Cryptocurrency Categories
                </Text>
              </div>
              <div className="flex flex-row justify-between w-full  sm:px-2 sm:flex-col">
                <div className="flex flex-row justify-start gap-3 sm:overflow-scroll">
                  <Button className="flex items-center justify-center h-[44px] px-3 text-gray-900_01 text-center text-base font-medium bg-gray-200 min-w-[80px] rounded-md">
                    Popular
                  </Button>
                  <Button className="flex items-center justify-center h-[44px] px-[11px] text-gray-400 text-center text-base border-white-A700_0c border border-solid bg-white-A700_0c min-w-[99px] rounded-md">
                    Metaverse
                  </Button>
                  <Button className="flex items-center justify-center h-[44px] px-[11px] text-gray-400 text-center text-base border-white-A700_0c border border-solid bg-white-A700_0c min-w-[125px] rounded-md">
                    Entertainment
                  </Button>
                  <Button className="flex items-center justify-center h-[44px] px-[11px] text-gray-400 text-center text-base border-white-A700_0c border border-solid bg-white-A700_0c min-w-[73px] rounded-md">
                    Energy
                  </Button>
                  <Button className="flex items-center justify-center h-[44px] px-[11px] text-gray-400 text-center text-base border-white-A700_0c border border-solid bg-white-A700_0c min-w-[80px] rounded-md">
                    Gaming
                  </Button>
                  <Button className="flex items-center justify-center h-[44px] px-[11px] text-gray-400 text-center text-base border-white-A700_0c border border-solid bg-white-A700_0c min-w-[68px] rounded-md">
                    Music
                  </Button>
                  <Button className="flex items-center justify-center h-[44px] px-[11px] text-gray-400 text-center text-base border-white-A700_0c border border-solid bg-white-A700_0c min-w-[104px] rounded-md">
                    See All 12+
                  </Button>
                </div>
                <Input
                  name="search"
                  placeholder="Search Coin"
                  value={searchBarValue}
                  onChange={(e) => setSearchBarValue(e)}
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      alt="search"
                      className="cursor-pointer"
                    />
                  }
                  suffix={
                    searchBarValue?.length > 0 ? (
                      <CloseSVG
                        onClick={() => setSearchBarValue("")}
                        height={24}
                        width={24}
                        fillColor="#b5b5b5ff"
                      />
                    ) : null
                  }
                  className="flex items-center justify-center w-[23%] sm:w-full sm:mt-4 h-[44px] pl-2.5 pr-[35px] gap-4 text-gray-400 text-base border-white-A700_19 border border-solid bg-gray-900_02 rounded-md"
                />
              </div>
            </div>
            <div className="sm:w-full sm:overflow-scroll">
              <ReactTable
                size="xs"
                bodyProps={{ className: "overflow-scroll max-w-full" }}
                headerProps={{
                  className:
                    "border-white-A700_0c border border-solid bg-white-A700_05 rounded-tl rounded-tr overflow-scroll max-w-full",
                }}
                rowDataProps={{ className: "" }}
                className="w-[1261px] sm:overflow-scroll sm:w-[100%]"
                columns={tableColumns}
                data={tableData}
              />
            </div>
          </div>
          <div className="flex flex-row justify-start sm:justify-center sm:w-full">
            <Heading
              as="h3"
              className="!text-teal-400 underline sm:text-center"
            >
              See All Coins
            </Heading>
          </div>
        </div>
        <Features />
        {/* <Img
          src="images/img_bg_above_the_fold.svg"
          alt="image"
          className="h-[900px] mt-[-10px] opacity-0.15"
        /> */}
      </div>
      <div className="flex flex-col items-center justify-start w-full mt-[5%]  gap-[67px] max-w-[1262px]">
        <div className="flex flex-col items-center justify-start w-[39%] gap-[27px] sm:w-full">
          <div className="flex flex-row justify-center w-full">
            <Heading size="xl" as="h4" className="text-center">
              Learn About Cryptocurrency
            </Heading>
          </div>
          <div className="flex flex-row justify-center w-[78%] ">
            <Text size="md" as="p" className="text-center">
              Learn all about cryptocurrency to start investing
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full sm:w-[80%]  gap-[60px]">
          <div className="justify-center w-full gap-[26px] grid-cols-2  sm:grid-cols-1 grid">
            <div className="flex flex-col  items-center justify-end h-[391px] w-full gap-[22px] p-[30px] sm:w-full bg-gray-900_bf bg-[url(/public/images/img_unsplash_8iiudnrq87o.png)] bg-cover bg-no-repeat rounded-[18px]">
              <Heading
                size="xl"
                as="h5"
                className="w-[98%] mt-[190px] !text-white-A700 !leading-[44px]"
              >
                All about Investing in NFTs and related risks
              </Heading>
              <div className="flex flex-row justify-start w-[98%]">
                <Button className="flex items-center justify-center h-[30px] px-[7px] text-gray-400 text-center text-sm font-medium bg-white-A700_11 min-w-[113px] rounded">
                  CRYPTO BASIC
                </Button>
              </div>
            </div>
            <div className="flex flex-row  justify-start sm:justify-center w-full gap-[26px] ">
              <CryptoCapLandingPageArticleitem className="flex flex-col items-center justify-start w-[48%] pb-4 border-white-A700_0c border border-solid bg-white-A700_05 rounded-[18px]" />
              <CryptoCapLandingPageArticleitem
                thumbnailOne="images/img_thumbnail_195x296.png"
                whatis="Can crypto really replace your bank account?"
                cryptocurrencie="From direct deposit to earning yield, key ways crypto can help you take control.."
                className="flex flex-col items-center justify-start w-[48%] pb-4 border-white-A700_0c border border-solid bg-white-A700_05 rounded-[18px]"
              />
            </div>
          </div>
          <div className="flex flex-row sm:flex-col justify-start sm:justify-center w-full  gap-[26px] ">
            <CryptoCapLandingPageArticleitem
              thumbnailOne="images/img_unsplash_2s9n9qhssci.png"
              cryptoBasic="TIPS & TRICKS"
              whatis="How to setup crypto wallet in your account"
              cryptocurrencie="A crypto wallet is a place where you can securely keep your crypto.. "
              className="flex flex-col items-center justify-start w-full w-full pb-4 border-white-A700_0c border border-solid bg-white-A700_05 rounded-[18px]"
            />
            <CryptoCapLandingPageArticleitem
              thumbnailOne="images/img_unsplash_azsi1uxm760.png"
              whatis="The fact about bitcoin must you know"
              cryptocurrencie="Bitcoin is the world&#39;s first widely adopted cryptocurrency, it allows for secure.. "
              className="flex flex-col items-center justify-start w-full pb-4 border-white-A700_0c border border-solid bg-white-A700_05 rounded-[18px]"
            />
            <CryptoCapLandingPageArticleitem
              thumbnailOne="images/img_unsplash_9opihrpivr0.png"
              cryptoBasic="TIPS & TRICKS"
              whatis="When is the best time to invest in crypto?"
              cryptocurrencie="When prices are fluctuating, how do you know when to buy?"
              className="flex flex-col items-center justify-start w-full pb-4 border-white-A700_0c border border-solid bg-white-A700_05 rounded-[18px]"
            />
            <CryptoCapLandingPageArticleitem
              thumbnailOne="images/img_unsplash_h_kabgs8fmw.png"
              cryptoBasic="TIPS & TRICKS"
              whatis="What Is DeFi? Inside the Wild West of Cryptocurrency."
              cryptocurrencie="Welcome to decentralized finance or DeFi, the new frontier of crypto that will.."
              className="flex flex-col items-center justify-start w-full pb-4 border-white-A700_0c border border-solid bg-white-A700_05 rounded-[18px]"
            />
          </div>
          <div className="flex flex-row justify-start w-full">
            <Heading as="h6" className="!text-teal-400 underline">
              See All Articles
            </Heading>
          </div>
        </div>
        <div className="flex flex-row sm:flex-col justify-between items-center md:w-full sm:w-[84%] sm:mx-[20%] p-5 border-white-A700_14 border border-solid rounded-[12px]">
          <div className="flex flex-col items-start justify-start w-[44%] sm:w-full md:ml-10  sm:m-0 pt-[3px] gap-[11px]">
            <Heading size="lg" as="h3" className="!font-semibold text-center">
              New In Cryptocurrency?
            </Heading>
            <Text size="md" as="p" className="text-center">
              We&#39;ll tell you what cryptocurrencies are, how they work and
              why you should own one right now. So let&#39;s do it.
            </Text>
          </div>
          <Button className="flex items-center justify-center h-[56px] md:mr-10 sm:m-0 px-6 text-white-A700 font-raleway text-center text-base font-semibold bg-teal-400 min-w-[207px] rounded-[10px]">
            Learn & Explore Now
          </Button>
        </div>
      </div>
    </div>
  );
}
