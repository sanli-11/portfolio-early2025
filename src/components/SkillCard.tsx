import { skillType } from "../data/skills";

function SkillCard({ icon, title }: Readonly<skillType>) {
  return (
    <div className="bg-palette-6 hover:bg-palette-2 text-palette-1 hover:text-palette-6 group flex w-fit items-center justify-center gap-x-2.5 rounded-xl px-5 py-2 inset-shadow-2xs shadow-lg transition-colors">
      <img
        className="size-9 object-contain object-center transition-colors group-hover:saturate-200"
        src={icon}
        alt={title}
      />
      <p className="font-medium transition-colors">{title}</p>
    </div>
  );
}

export default SkillCard;
