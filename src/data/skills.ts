import javaIcon from "../assets/images/java-icon.svg";

type skillType = {
  id: number;
  title: string;
  icon: string;
};

const simpleIconCDN = "https://cdn.simpleicons.org";

const skills: skillType[] = [
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
  { id: 12, icon: `${simpleIconCDN}/mongoDb`, title: "MongoDB" },
  { id: 13, icon: `${simpleIconCDN}/mongooseDotWS`, title: "Mongoose" },
  { id: 14, icon: `${simpleIconCDN}/pnpm`, title: "PNPM" },
  { id: 15, icon: `${simpleIconCDN}/vite`, title: "Vite" },
  { id: 16, icon: `${simpleIconCDN}/reactRouter`, title: "React Router" },
  { id: 17, icon: `${simpleIconCDN}/express/cdcdcd`, title: "Express" },
  { id: 18, icon: `${simpleIconCDN}/gradle/42a8ae`, title: "Gradle" },
  { id: 19, icon: javaIcon, title: "Java" },
  { id: 20, icon: `${simpleIconCDN}/figma`, title: "Figma" },
  { id: 21, icon: `${simpleIconCDN}/materialDesign`, title: "Material Design" },
  { id: 22, icon: `${simpleIconCDN}/shadCNui/cdcdcd`, title: "ShadCN" },
  { id: 23, icon: `${simpleIconCDN}/lodash`, title: "Lodash" },
  { id: 24, icon: `${simpleIconCDN}/framer`, title: "Framer Motion" },
  { id: 25, icon: `${simpleIconCDN}/chart.js`, title: "Chart.js" },
  { id: 26, icon: `${simpleIconCDN}/archLinux`, title: "Arch Linux" },
  { id: 27, icon: `${simpleIconCDN}/ubuntu`, title: "Ubuntu" },
  { id: 28, icon: `${simpleIconCDN}/i3`, title: "i3" },
  { id: 29, icon: `${simpleIconCDN}/git`, title: "Git" },
  { id: 30, icon: `${simpleIconCDN}/c`, title: "C" },
  { id: 31, icon: `${simpleIconCDN}/cPlusPlus`, title: "C++" },
  { id: 32, icon: `${simpleIconCDN}/python`, title: "Python" },
];

export type { skillType };
export default skills;
