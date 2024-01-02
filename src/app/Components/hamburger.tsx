import clsx from "clsx";
import { useState } from "react";

type Props = {
  onClick: () => void;
  menuOpen: boolean;
};

export function Hamburger({ onClick, menuOpen }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "flex flex-col justify-between items-end py-2 w-10 h-9 text-sm text-[#FFFFFF] rounded-lg focus:outline-none transform scale-100 lg:scale-0 transition ease-in-out duration-700",
        { animation: menuOpen, return: !menuOpen }
      )}
    >
      <div
        className={clsx(`h-[0.15rem] bg-white w-6 rounded-lg`, {
          "-rotate-45 transition duration-700 origin-bottom-right": menuOpen,
          "-rotate-0 transition duration-700 origin-bottom-right": !menuOpen,
        })}
      ></div>
      <div
        className={clsx(`bg-white rounded-lg`, {
          "opacity-0 absolute w-0 h-[0rem] transition duration-300": menuOpen,
          "opacity-100 relative w-5 h-[0.15rem] transition duration-300":
            !menuOpen,
        })}
      ></div>
      <div
        className={clsx(`h-[0.15rem] bg-white rounded-lg`, {
          "rotate-45 transition duration-500 w-6 origin-top-right": menuOpen,
          "rotate-0 transition duration-500 w-4 origin-top-right": !menuOpen,
        })}
      ></div>
    </button>
  );
}
