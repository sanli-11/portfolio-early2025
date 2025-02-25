import profilePicture from "../assets/images/profile.jpg";
import Skills from "./Skills";

function About() {
  return (
    <article className="fixed top-0 left-0 h-dvh w-full bg-[url(./assets/images/grid.svg)]">
      <div className="to-palette-6 via-palette-6/70 fixed top-0 left-0 size-full bg-radial-[at_50%_10%] from-transparent from-20%">
        <section className="mt-80">
          <div className="relative -top-8 flex items-center justify-center">
            <img
              className="bg-palette-5 border-palette-4 size-40 rounded-full border-4 object-cover"
              src={profilePicture}
              alt="Hassan Ali"
              width="420"
              height="555"
            />
          </div>
          <hgroup className="flex cursor-default flex-col items-center justify-center gap-y-1 text-center">
            <p className="text-xl">
              <i className="text-palette-3 font-semibold italic">Hi!</i> My name
              is <b className="font-bold">Hassan Ali</b> and I&apos;m
            </p>
            <h1 className="font-display max-w-xl text-7xl/tight font-bold">
              UI Designer and Frontend Developer
            </h1>
          </hgroup>
        </section>
        <Skills />
      </div>
    </article>
  );
}

export default About;
