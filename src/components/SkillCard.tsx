import { skillType } from "../data/skills";

function SkillCard({ icon, title }: Readonly<skillType>) {
  return (
    <div className="bg-palette-5/10 flex cursor-default items-center justify-center gap-x-1.5 rounded-xl px-3 py-2.5">
      <img
        className="bg-palette-2/25 size-8 object-cover p-1.5"
        src={icon}
        alt={title}
        width="32"
        height="32"
      />
      <p className="text-palette-6 text-sm whitespace-nowrap">{title}</p>
    </div>
  );
}

export default SkillCard;
