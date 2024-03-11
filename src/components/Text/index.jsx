import React from "react";

const sizes = {
  xs: "text-sm font-normal leading-[22px]",
  lg: "text-2xl font-medium",
  s: "text-base font-normal",
  md: "text-lg font-normal leading-[160%]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-400 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
