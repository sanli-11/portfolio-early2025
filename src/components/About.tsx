function About() {
  return (
    <article className="relative h-dvh w-dvw bg-[url(./assets/images/grid.svg)]">
      <section className="to-palette-6 via-palette-6/70 absolute top-0 left-0 size-full bg-radial-[at_50%_10%] from-transparent from-20%">
        <div className="from-palette-6 via-palette-6/10 absolute flex size-full flex-col items-center justify-center bg-gradient-to-t via-55% to-transparent">
          <p className="cursor-default text-center text-2xl">
            <i className="text-palette-3 font-semibold italic">Hi!</i> My name
            is <b className="font-bold">Hassan Ali</b> and I&apos;m
          </p>
          <h1 className="font-display max-w-3xl cursor-default text-center text-8xl/[1.125] font-bold">
            UI Designer and Frontend Developer
          </h1>
        </div>
      </section>
    </article>
  );
}

export default About;
