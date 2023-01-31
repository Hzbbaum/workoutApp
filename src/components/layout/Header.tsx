import { Tab } from "@headlessui/react";
import React from "react";
import { appPagesType } from "../../AppPages";

function Header(props: {
  changeNavigationHandler: (selectedPage: appPagesType) => void;
}) {
  // const navButtons = [{content:'some name', page: 'somepage'},{content:'some name', page: 'somepage'}]
  const navButtons: { label: string; page: appPagesType }[] = [
    { label: "Home", page: "HOME" },
    { label: "Progress", page: "PROGRESS" },
    { label: "some name", page: "OTHER" },
    { label: "some name", page: "OTHER" },
    { label: "about", page: "ABOUT" },
  ];

  return (
    <header className="flex w-full flex-row flex-wrap gap-4 bg-rose-500  text-rose-200">
      <div className="whitespace-nowrap px-2 font-dosis text-4xl lg:pt-4 lg:pb-2">
        RR TRACKER
      </div>
      <nav className="flex flex-grow flex-nowrap justify-between lg:justify-end">
        {navButtons.map((btn, idx) => (
          <button
            key={idx}
            className="mt-auto flex flex-shrink flex-grow px-1 text-start text-sm transition-all duration-200 first-of-type:pl-2 last-of-type:flex-grow-0 hover:bg-white hover:text-red-500 lg:flex-grow-0 lg:px-2 lg:pb-2 lg:pt-1"
            onClick={() => props.changeNavigationHandler(btn.page)}
          >
            {btn.label}{" "}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
