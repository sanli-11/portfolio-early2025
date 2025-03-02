import skills from "../data/skills";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <article className="bg-palette-6 grid h-dvh grid-cols-7 bg-[url(./assets/images/dots.svg)] bg-cover bg-center">
      <section className="bg-palette-1 col-span-4 flex size-full flex-col justify-center">
        <hgroup className="mx-40 flex flex-col items-start justify-start gap-y-4">
          <h2 className="font-display text-palette-3 my-6 text-6xl">
            My Skills
          </h2>
          <p className="text-palette-6">
            JavaScript/TypeScript enthusiast with expertise in React and Svelte.
          </p>
          <p className="text-palette-6">
            Experienced in multiple domains and open for learning and working
            new technologies and development opportunities.
          </p>
        </hgroup>
      </section>
      <section className="via-palette-6 col-span-3 flex size-full items-center bg-linear-to-b from-transparent from-5% via-50% to-transparent to-95% px-4">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {skills.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </div>
      </section>
    </article>
  );
}

export default Skills;
