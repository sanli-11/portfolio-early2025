import skills from "../data/skills";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section className="mx-16 my-32 grid grid-flow-col grid-rows-4">
      {skills.map((skill) => (
        <SkillCard
          key={skill.id}
          icon={skill.icon}
          title={skill.title}
          duration={skill.duration}
          level={skill.level}
        />
      ))}
    </section>
  );
}

export default Skills;
