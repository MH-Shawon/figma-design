import React from "react";

function CommonLayout({children}) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[95%] lg:w-[85%]">
        {children}
      </div>
    </div>
  );
}

export default CommonLayout;
