import { Heading, Text } from "components";
import React from "react";

export default function Nav() {
  const pages = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Business",
      path: "#Business",
    },
    {
      name: "Trade",
      path: "#trade",
    },
    {
      name: "Market",
      path: "#market",
    },
    {
      name: "Learn",
      path: "#learn",
    },
  ];

  console.log(window.location.pathname);
  return (
    <header className="flex flex-row justify-between items-center w-full ">
      <Heading
        size="lg"
        as="h4"
        className="!text-white-A700 flex justify-center sm:w-full sm:pl-0 "
      >
        <span className="text-white-A700">CRYPTO</span>
        <span className="text-teal-400">BLOCK</span>
        <span className="text-white-A700">BUZZ</span>
      </Heading>
      <div className="flex md:flex-row sm:flex-col items-center w-full mx-auto max-w-[742px] sm:hidden">
        <ul className="flex flex-row justify-between w-auto gap-10">
          {pages.map((m, i) => (
            <li key={i} className="cursor-pointer">
              <a href={m.path}>
                <Heading
                  as="h6"
                  className={`${
                    window.location.pathname === m.path
                      ? "!text-teal-400"
                      : "!text-blue_gray-50"
                  }`}
                >
                  {m.name}
                </Heading>
              </a>
            </li>
          ))}
          {/* <li>
            <a
              href="#"
              className="cursor-pointer hover:text-teal-400 hover:font-semibold"
            >
              <Text
                as="p"
                className="!text-blue_gray-50 !font-raleway !font-medium"
              >
                Businesses
              </Text>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="cursor-pointer hover:text-teal-400 hover:font-semibold"
            >
              <Text
                as="p"
                className="!text-blue_gray-50 !font-raleway !font-medium"
              >
                Trade
              </Text>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="cursor-pointer hover:text-teal-400 hover:font-semibold"
            >
              <Text
                as="p"
                className="!text-blue_gray-50 !font-raleway !font-medium"
              >
                Market
              </Text>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="cursor-pointer hover:text-teal-400 hover:font-semibold"
            >
              <Text
                as="p"
                className="!text-blue_gray-50 !font-raleway !font-medium"
              >
                Learn
              </Text>
            </a>
          </li> */}
        </ul>
        {/* <div className="flex flex-row justify-start items-center w-[25%] gap-[21px]">
      <div className="flex flex-row justify-start w-[40%] gap-2.5">
        <Img
          src="images/img_jam_world.svg"
          alt="jamworld_one"
          className="h-[24px] w-[24px]"
        />
        <div className="flex flex-row justify-start items-center w-[58%]">
          <Heading
            as="h6"
            className="!text-gray-400 text-center"
          >
            EN
          </Heading>
          <Img
            src="images/img_arrow_down.svg"
            alt="arrowdown_one"
            className="h-[24px] w-[23px]"
          />
        </div>
      </div>
      <a
        href="#"
        className="flex justify-center items-center w-[104px] h-[50px] px-[30px] py-[15px] bg-teal-400 rounded-[10px]"
      >
        <Heading
          as="h6"
          className="!text-white-A700 text-center"
        >
          Login
        </Heading>
      </a>
    </div> */}
      </div>
    </header>
  );
}
