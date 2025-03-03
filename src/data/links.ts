type linkType = {
  id: number;
  label: string;
};

const links: linkType[] = [
  { id: 0, label: "About" },
  { id: 1, label: "Works" },
  { id: 2, label: "Skills" },
  { id: 3, label: "Contact" },
];

export type { linkType };
export default links;
