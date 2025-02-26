type props = {
  icon: string;
  title: string;
};

function ToolCard({ icon, title }: Readonly<props>) {
  return (
    <div className="bg-palette-4 hover:bg-palette-3 group aspect-square size-16 cursor-default rounded-xl p-2 transition-all hover:scale-105 hover:shadow-md">
      <img
        className="size-full rounded-2xl object-cover p-2.5 transition-all group-hover:p-1.5"
        src={icon}
        alt={title}
        width="32"
        height="32"
      />
    </div>
  );
}

export default ToolCard;
