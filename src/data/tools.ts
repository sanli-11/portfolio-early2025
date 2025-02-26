type toolType = {
  id: number;
  icon: string;
  title: string;
};

const simpleIconCDN = "https://cdn.simpleicons.org";

const tools: toolType[] = [
  { id: 0, icon: `${simpleIconCDN}/androidStudio`, title: "Android Studio" },
  { id: 1, icon: `${simpleIconCDN}/archLinux`, title: "Arch Linux" },
  { id: 2, icon: `${simpleIconCDN}/bun/efefef`, title: "Bun" },
  { id: 3, icon: `${simpleIconCDN}/canva`, title: "Canva" },
  { id: 4, icon: `${simpleIconCDN}/capacitor`, title: "Capacitor" },
  { id: 5, icon: `${simpleIconCDN}/chart.js`, title: "Chart.js" },
  { id: 6, icon: `${simpleIconCDN}/cLion`, title: "CLion" },
  { id: 7, icon: `${simpleIconCDN}/createReactApp`, title: "Create React App" },
  { id: 8, icon: `${simpleIconCDN}/curl`, title: "Curl" },
  { id: 9, icon: `${simpleIconCDN}/eslint`, title: "ESLint" },
  { id: 10, icon: `${simpleIconCDN}/express`, title: "Express" },
  { id: 11, icon: `${simpleIconCDN}/figma`, title: "Figma" },
  { id: 12, icon: `${simpleIconCDN}/flutter`, title: "Flutter" },
  { id: 13, icon: `${simpleIconCDN}/fontAwesome`, title: "Font Awesome" },
  { id: 14, icon: `${simpleIconCDN}/git`, title: "Git" },
  { id: 15, icon: `${simpleIconCDN}/github`, title: "GitHub" },
  { id: 16, icon: `${simpleIconCDN}/gnuBash`, title: "GNU Bash" },
  { id: 17, icon: `${simpleIconCDN}/gradle`, title: "Gradle" },
  { id: 18, icon: `${simpleIconCDN}/i3`, title: "i3" },
  { id: 19, icon: `${simpleIconCDN}/intellijIdea`, title: "Intellij Idea" },
  { id: 20, icon: `${simpleIconCDN}/lodash`, title: "Lodash" },
  { id: 21, icon: `${simpleIconCDN}/materialDesign`, title: "Material Design" },
  { id: 22, icon: `${simpleIconCDN}/mongoDB`, title: "MongoDB" },
  { id: 23, icon: `${simpleIconCDN}/mongooseDotWS`, title: "Mongoose" },
  { id: 24, icon: `${simpleIconCDN}/mySql`, title: "MySQL" },
  { id: 25, icon: `${simpleIconCDN}/neovim`, title: "Neovim" },
  { id: 26, icon: `${simpleIconCDN}/node.js`, title: "Node.js" },
  { id: 27, icon: `${simpleIconCDN}/npm`, title: "NPM" },
  { id: 28, icon: `${simpleIconCDN}/obsidian`, title: "Obsidian" },
  { id: 29, icon: `${simpleIconCDN}/pnpm`, title: "PNPM" },
  { id: 30, icon: `${simpleIconCDN}/prettier`, title: "Prettier" },
  { id: 31, icon: `${simpleIconCDN}/reactRouter`, title: "React Router" },
  { id: 32, icon: `${simpleIconCDN}/shadCNui`, title: "ShadCN/UI" },
  { id: 33, icon: `${simpleIconCDN}/simpleIcons`, title: "Simple Icons" },
  { id: 34, icon: `${simpleIconCDN}/sqlite`, title: "SQLite" },
  { id: 35, icon: `${simpleIconCDN}/styleLint`, title: "StyleLint" },
  { id: 36, icon: `${simpleIconCDN}/stylus`, title: "Stylus" },
  { id: 37, icon: `${simpleIconCDN}/tmux`, title: "Tmux" },
  { id: 38, icon: `${simpleIconCDN}/vscodium`, title: "VSCodium" },
  { id: 39, icon: `${simpleIconCDN}/vite`, title: "Vite" },
  { id: 40, icon: `${simpleIconCDN}/linux`, title: "WSL" },
];

export type { toolType };
export default tools;
