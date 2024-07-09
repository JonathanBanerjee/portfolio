import { useState } from "react";

//Creating the interface used to explain how objects are shaped.
export interface HamburgerProps {
  // Callback function which executes on click
  onClick: () => void;

  // Initial state of button
  isInitiallyOpen?: boolean;
}

//Adding the component structure
export function Hamburger(props: HamburgerProps) {
  const { onClick, isInitiallyOpen } = props;
  const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen ?? false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    onClick();
  };

  return (
    <button
      className="hamburger"
      onClick={handleClick}
      type="button"
      //   className={`justify-around flex-row cursor-pointer`}
    >
      <div
        className={`my-1 bg-black block w-7 h-[0.35rem] rounded transition-all origin-[1px] ${
          isOpen ? "rotate-45" : "rotate-0"
        }`}
      />
      <div
        className={`my-1 bg-black block w-7 h-[0.35rem] rounded transition-all origin-[1px] ${
          isOpen ? "translate-x-full bg-transparent" : "translate-x-0"
        }`}
      />
      <div
        className={`my-1 bg-black block w-7 h-[0.35rem] rounded transition-all origin-[1px] ${
          isOpen ? "rotate-[-45deg]" : "rotate-0"
        }`}
      />
    </button>
  );
}
