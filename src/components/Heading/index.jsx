import React from "react";

const sizes = {
  xl: "text-4xl font-bold leading-[43px]",
  s: "text-lg font-semibold leading-[22px]",
  md: "text-xl font-semibold leading-6",
  xs: "text-base font-semibold",
  lg: "text-2xl font-bold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-50 font-raleway ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
