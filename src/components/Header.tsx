function Header() {
  const links = [
    { id: "0", label: "About", href: "#about" },
    { id: "1", label: "Works", href: "#work" },
    { id: "2", label: "Skills", href: "#skill" },
    { id: "3", label: "Blogs", href: "#blog" },
  ];

  return (
    <header className="w-full px-16 fixed flex justify-between items-center">
      <a
        className="hover:scale-105 transition-transform"
        href="/"
        title="Homepage"
      >
        <img
          className="w-32 h-24"
          src="/logo-with-text.svg"
          alt="SanLi"
          height="44"
        />
      </a>
      <div className="flex justify-end items-center gap-x-14">
        <nav>
          <ul className="flex justify-end items-end gap-x-10">
            {links.map((link) => (
              <li key={link.id} className="text-white tracking-wide">
                <a
                  className="relative inline-block px-2.5 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:scale-x-0 after:bg-white after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          className="py-3 px-5 border-1 border-white font-semibold text-white hover:bg-white hover:text-indigo-950 transition-colors"
          href="https://drive.google.com/"
          download
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}

export default Header;
