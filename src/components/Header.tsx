import { useState } from "react";
import logo from "/logo.svg";

function Header() {
  /** TODO: dynamically get the section/page they are on */
  const [selectedButton, setSelectedButton] = useState(0);

  const clickHandler = (selected: number): void => {
    setSelectedButton(selected);
  };

  const links = [
    {
      id: "0",
      label: "About",
      onClick: () => {
        clickHandler(0);
      },
    },
    {
      id: "1",
      label: "Works",
      onClick: () => {
        clickHandler(2);
      },
    },
    {
      id: "2",
      label: "Skills",
      onClick: () => {
        clickHandler(1);
      },
    },
    {
      id: "3",
      label: "Contact",
      onClick: () => {
        clickHandler(3);
      },
    },
  ];

  return (
    <header className="font-display relative z-10 flex items-start justify-between px-12">
      <a href="/" title="SanLi Portfolio">
        <img
          className="text-palette-1 w-20 transition-all hover:w-24"
          src={logo}
          alt="San Li"
          width="146"
          height="88"
        />
      </a>
      <nav className="bg-palette-2 absolute top-0 left-1/2 -translate-x-1/2 rounded-lg px-4 py-2.5">
        <ul className="grid grid-cols-4 gap-x-6">
          {links.map((link) => {
            const isSelected = parseInt(link.id) === selectedButton;

            return (
              <li className="font-bold" key={link.id}>
                <button
                  className={`${isSelected ? "text-palette-1 bg-palette-3 cursor-default" : "text-palette-5 hover:text-palette-6 cursor-pointer"} w-full rounded-md px-4 py-2 transition-colors`}
                  type="button"
                  onClick={link.onClick}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      {/** TODO: fix href */}
      <a
        className="text-palette-2 hover:text-palette-1 border-palette-3 hover:bg-palette-3 border-3 px-5 py-2 font-bold transition-colors"
        href="https://drive.google.com"
      >
        Download CV
      </a>
    </header>
  );
}

export default Header;
