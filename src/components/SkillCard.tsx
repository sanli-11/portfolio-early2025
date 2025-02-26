type props = {
  icon: string;
  title: string;
  duration: string;
  level: number;
};

function SkillCard({ icon, title, duration, level }: Readonly<props>) {
  return (
    <div className="group hover:bg-palette-2 mx-auto flex w-full max-w-3xl cursor-default items-center justify-between rounded-lg px-4 py-2 transition-all hover:scale-105 hover:shadow-md">
      <div className="flex items-center justify-start gap-x-4">
        <img
          className="size-12 rounded-2xl object-cover p-2.5"
          src={icon}
          alt={title}
          width="32"
          height="32"
        />
        <p className="text-palette-1 group-hover:text-palette-6 min-w-40 text-lg font-semibold transition-colors">
          {title}
        </p>
        <p className="text-palette-2 group-hover:text-palette-6 text-xs font-extralight transition-colors before:mr-0.5 before:text-xs before:content-['\('] after:ml-0.5 after:text-xs after:content-[')']">
          {duration}
        </p>
      </div>
      <div className="flex items-center justify-end gap-x-4">
        <p className="group-hover:text-palette-6 text-sm font-medium">
          {level} / 5
        </p>
        <progress
          className="bg-palette-5 rounded-sm"
          max="5"
          value={level}
        ></progress>
      </div>
    </div>
  );
}

export default SkillCard;
