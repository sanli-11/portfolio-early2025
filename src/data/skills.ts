import javaIcon from "../assets/images/java-icon.svg";

type skillType = {
  id: number;
  title: string;
  icon: string;
};

const simpleIconCDN = "https://cdn.simpleicons.org";

const skills: skillType[] = [
  // center
  { id: 0, icon: `${simpleIconCDN}/html5`, title: "HTML" },
  { id: 1, icon: `${simpleIconCDN}/css`, title: "CSS" },
  { id: 2, icon: `${simpleIconCDN}/tailwindcss`, title: "Tailwind CSS" },
  { id: 3, icon: `${simpleIconCDN}/javascript`, title: "JavaScript" },
  { id: 4, icon: `${simpleIconCDN}/typescript`, title: "TypeScript" },
  { id: 5, icon: `${simpleIconCDN}/react`, title: "React" },
  { id: 6, icon: `${simpleIconCDN}/svelte`, title: "Svelte" },
  { id: 7, icon: `${simpleIconCDN}/dart`, title: "Dart" },
  { id: 8, icon: `${simpleIconCDN}/flutter`, title: "Flutter" },
  { id: 9, icon: `${simpleIconCDN}/node.js`, title: "Node JS" },
  { id: 10, icon: `${simpleIconCDN}/deno`, title: "Deno" },
  { id: 11, icon: `${simpleIconCDN}/bun/cdcdcd`, title: "Bun" },
  { id: 12, icon: `${simpleIconCDN}/mySql`, title: "MySQL" },
  { id: 13, icon: `${simpleIconCDN}/mongoDb`, title: "MongoDB" },
  { id: 14, icon: `${simpleIconCDN}/mongooseDotWS`, title: "Mongoose" },
  { id: 15, icon: `${simpleIconCDN}/pnpm`, title: "PNPM" },
  { id: 16, icon: `${simpleIconCDN}/vite`, title: "Vite" },
  { id: 17, icon: `${simpleIconCDN}/reactRouter`, title: "React Router" },
  { id: 18, icon: `${simpleIconCDN}/express/000000`, title: "Express" },
  { id: 19, icon: `${simpleIconCDN}/gradle/42a8ae`, title: "Gradle" },
  { id: 20, icon: javaIcon, title: "Java" },
  { id: 21, icon: `${simpleIconCDN}/figma`, title: "Figma" },
  { id: 22, icon: `${simpleIconCDN}/materialDesign`, title: "Material Design" },
  { id: 23, icon: `${simpleIconCDN}/shadCNui/666666`, title: "ShadCN" },
  { id: 24, icon: `${simpleIconCDN}/lodash`, title: "Lodash" },
  { id: 25, icon: `${simpleIconCDN}/framer`, title: "Framer Motion" },
  { id: 26, icon: `${simpleIconCDN}/chart.js`, title: "Chart.js" },
  { id: 27, icon: `${simpleIconCDN}/archLinux`, title: "Arch Linux" },
  { id: 28, icon: `${simpleIconCDN}/ubuntu`, title: "Ubuntu" },
  { id: 29, icon: `${simpleIconCDN}/i3`, title: "i3" },
  { id: 30, icon: `${simpleIconCDN}/git`, title: "Git" },
  { id: 31, icon: `${simpleIconCDN}/c`, title: "C" },
  { id: 32, icon: `${simpleIconCDN}/cPlusPlus`, title: "C++" },
  { id: 33, icon: `${simpleIconCDN}/python`, title: "Python" },
];

export type { skillType };
export default skills;
