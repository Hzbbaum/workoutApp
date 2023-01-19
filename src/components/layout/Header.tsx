import React from "react";

function Header() {
  return (
    <header className="bg-rose-400 pt-8 pb-1">
      <div className="container flex mx-auto">
        <div className="mx-8 ml-0 text-3xl">RR TRACKER</div>
        <nav className="flex">
          <button className="px-2 text-base flex self-end">does nothing</button>
          <button className="px-2 text-base flex self-end">does nothing</button>
          <button className="px-2 text-base flex self-end">does nothing</button>
          <button className="px-2 text-base flex self-end">does nothing</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
