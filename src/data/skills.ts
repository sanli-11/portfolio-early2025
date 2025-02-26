type skillType = {
  id: number;
  title: string;
  icon: string;
  duration: string;
  level: number;
};

const simpleIconCDN = "https://cdn.simpleicons.org";

const skills: skillType[] = [
  {
    id: 0,
    icon: `${simpleIconCDN}/html5`,
    title: "HTML",
    duration: "2.5 years",
    level: 5,
  },
  {
    id: 1,
    icon: `${simpleIconCDN}/css`,
    title: "CSS",
    duration: "2 years",
    level: 4,
  },
  {
    id: 2,
    icon: `${simpleIconCDN}/tailwindcss`,
    title: "Tailwind CSS",
    duration: "6 months",
    level: 4,
  },
  {
    id: 3,
    icon: `${simpleIconCDN}/javascript`,
    title: "JavaScript",
    duration: "2 years",
    level: 4,
  },
  {
    id: 4,
    icon: `${simpleIconCDN}/typescript`,
    title: "TypeScript",
    duration: "1 years",
    level: 3,
  },
  {
    id: 5,
    icon: `${simpleIconCDN}/react`,
    title: "React",
    duration: "1.5 years",
    level: 4,
  },
  {
    id: 6,
    icon: `${simpleIconCDN}/svelte`,
    title: "Svelte",
    duration: "6 months",
    level: 3,
  },
  {
    id: 7,
    icon: `${simpleIconCDN}/postgresql`,
    title: "SQL",
    duration: "6 months",
    level: 3,
  },
  {
    id: 8,
    icon: `${simpleIconCDN}/dart`,
    title: "Dart",
    duration: "6 months",
    level: 3,
  },
  {
    id: 9,
    icon: `${simpleIconCDN}/c`,
    title: "C",
    duration: "1 years",
    level: 2,
  },
  {
    id: 10,
    icon: `${simpleIconCDN}/cplusplus`,
    title: "C++",
    duration: "1 years",
    level: 2,
  },
  {
    id: 11,
    icon: `${simpleIconCDN}/openjdk`,
    title: "Java",
    duration: "6 months",
    level: 3,
  },
];

export type { skillType };
export default skills;
