import { ReactNode, useState } from "react";

type PropsType = { children?: ReactNode };

function BackgroundGradient({ children }: Readonly<PropsType>) {
  const styles = window.getComputedStyle(document.body);

  const darkColor = styles.getPropertyValue("--color-gradient-dark");
  const lightColor = styles.getPropertyValue("--color-gradient-light");

  const [mouseX, setMouseX] = useState(50);
  const [mouseY, setMouseY] = useState(50);

  function moveGradient(event: React.MouseEvent<HTMLElement>): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setMouseX(Math.round((event.pageX / width) * 100));
    setMouseY(Math.round((event.pageY / height) * 100));
  }

  return (
    <main
      className={`fixed w-dvw h-dvh bg-linear-to-b from-gradient-dark via-40% via-gradient-light to-80% to-gradient-dark overflow-hidden`}
      style={{
        backgroundImage: `
          radial-gradient(
            circle closest-side at ${String(mouseX)}% ${String(mouseY)}%,
            ${lightColor},
            ${darkColor}
          )`,
      }}
      onMouseMoveCapture={(e) => {
        moveGradient(e);
      }}
    >
      {children}
    </main>
  );
}

export default BackgroundGradient;
