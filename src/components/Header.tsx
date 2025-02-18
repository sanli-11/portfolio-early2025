import logo from "../../public/logo.svg";

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
    <header className="text-palette-5 font-display flex items-center justify-between px-12">
      <a
        className="transition-transform hover:scale-105"
        href="/"
        title="SanLi Portfolio"
      >
        <img className="w-20" src={logo} alt="San Li" width="146" height="88" />
      </a>
      <nav>
        <ul className="flex items-end justify-center gap-x-12">
          {links.map((link) => (
            <li className="font-bold" key={link.id}>
              <button
                className="relative inline-block px-2.5 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-200 after:ease-out after:content-[''] hover:after:scale-x-100"
                type="button"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <a
        className="border-palette-3 hover:bg-palette-3 hover:text-palette-5 border-3 px-5 py-2 font-bold transition-colors"
        href="https://drive.google.com"
      >
        Download CV
      </a>
    </header>
  );
}

export default Header;
