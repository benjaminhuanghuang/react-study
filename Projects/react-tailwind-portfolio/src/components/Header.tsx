import React from "react";

interface HeaderProps {
  [key: string]: any;
}
function Header({ ...rest }: HeaderProps) {
  return (
    <header
      className="fixed top-0 left-0 w-full h-20 flex items-center z-40 
bg-gradient-to-b from-zinc-900 to-zinc-900/0"
    >
      <div className="max-w-screen-w-2xl w-full mx-auto px-4">
        <h1>
          <a href="" className="logo">
            <img src="/images/logo.svg" alt="my name" width={40} height={40} />
          </a>
        </h1>
        <div className="">
            <button className="">
                <span className="material-symbols-rounded">
                    menu
                </span>
            </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
