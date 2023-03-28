import bg from '../public/heroBg.png';

export default function Home() {
  return (
    <main>
      <section className="relative mx-auto h-screen w-10/12 bg-cover bg-center bg-no-repeat">
        <h2 className="pt-36 text-center text-6xl">
          Oleksandr Spievakov&apos;s
        </h2>
        <h1
          className="mx-auto w-fit bg-cover bg-center bg-no-repeat py-11 px-28 font-archivo text-9xl text-white"
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        >
          Portfolio
        </h1>
        <a
          href="#works"
          className="relative mx-auto mt-12 block w-fit rounded-sm border-[6px] border-black py-3 px-4 text-3xl font-bold duration-300 after:absolute after:top-0 after:left-0 after:z-[-1] after:h-full after:w-full after:scale-[0.1] after:duration-300 hover:text-white hover:after:scale-100 hover:after:bg-black "
        >
          View My Work
        </a>
        <a href="#about" className="group mx-auto mt-36 block w-fit">
          <div className=" relative mx-auto mb-4 h-[72px] w-11 rounded-[100px] bg-black duration-700 before:absolute before:inset-0 before:m-auto before:w-[38px] before:rounded-[100px] before:bg-white after:absolute after:inset-0 after:m-auto after:h-[10px] after:w-[10px] after:translate-y-[-20px] after:scale-100 after:rounded-[100px] after:bg-black after:opacity-100 after:duration-700 group-hover:translate-y-2 group-hover:after:translate-y-[20px] group-hover:after:scale-[0.4] group-hover:after:opacity-0" />
          <span className="font-bold uppercase">scroll down</span>
        </a>
      </section>
    </main>
  );
}
