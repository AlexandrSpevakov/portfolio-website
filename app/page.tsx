import bg from '../public/heroBg.png';

export default function Home() {
  return (
    <main>
      <section
        className="relative top-0 left-0 w-screen bg-cover bg-center bg-no-repeat after:absolute after:h-full after:w-full after:bg-black md:h-screen"
        id="homeHero"
      >
        <h2 className="pt-36 text-center text-6xl">
          Oleksandr Spievakov&apos;s
        </h2>
        <h1
          className="mx-auto mb-96 w-fit bg-cover bg-center bg-no-repeat py-11 px-28 font-archivo text-9xl text-white"
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        >
          Portfolio
        </h1>
      </section>
    </main>
  );
}
