import skills from "../data/skills";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section className="from-palette-1 via-palette-1 to-palette-2 mx-auto my-32 flex w-fit flex-col items-center justify-center gap-y-8 rounded-2xl bg-gradient-to-t px-12 py-8 shadow-2xl">
      <h2 className="font-display text-palette-6 text-center text-4xl font-bold">
        My Tech Stack
      </h2>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3">
        {skills.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
