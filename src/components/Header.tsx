import logo from "/logo.svg";

function Header() {
  /**
   * TODO: define onClick for links
   * TODO: fix the href for "Download CV"
   */

  const links = [
    { id: "0", label: "About" },
    { id: "1", label: "Works" },
    { id: "2", label: "Skills" },
    { id: "3", label: "Contact" },
  ];

  return (
    <header className="px-12 flex justify-between items-center text-palette-5 font-display">
      <a
        className="hover:scale-105 transition-transform"
        href="/"
        title="SanLi Portfolio"
      >
        <img
          className="w-20 object-center"
          src={logo}
          alt="San Li"
          width="234"
          height="105"
        />
      </a>
      <nav>
        <ul className="flex justify-center items-end gap-x-12">
          {links.map((link) => (
            <li className="font-bold" key={link.id}>
              <button
                className="relative inline-block px-2.5 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:scale-x-0 after:bg-white after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100"
                type="button"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <a
        className="px-5 py-2 border-3 border-palette-3 transition-colors hover:bg-palette-3 hover:text-palette-5 font-bold"
        href="https://drive.google.com"
      >
        Download CV
      </a>
    </header>
  );
}

export default Header;
