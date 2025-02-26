import skills from "../data/skills";
import tools from "../data/tools";
import SkillCard from "./SkillCard";
import ToolCard from "./ToolCard";

function Skills() {
  return (
    <section className="mx-16 my-32 flex flex-col gap-y-12">
      <div className="grid grid-flow-col grid-rows-4">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            icon={skill.icon}
            title={skill.title}
            duration={skill.duration}
            level={skill.level}
          />
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.id} icon={tool.icon} title={tool.title} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
