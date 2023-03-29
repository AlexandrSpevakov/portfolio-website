import bg from '../../public/heroBg.png';

export default function Hero() {
  return (
    <section className="relative mx-auto h-screen w-10/12" id="home">
      <h2 className="pt-36 text-center text-6xl 3xl:pt-44 3xl:text-7xl">
        Oleksandr Spievakov&apos;s
      </h2>
      <h1
        className="mx-auto w-fit bg-cover bg-center bg-no-repeat py-11 px-28 font-archivo text-9xl text-white 3xl:py-14 3xl:text-11xl"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        Portfolio
      </h1>

      <a
        href="#works"
        className="relative mx-auto mt-12 block w-fit rounded-sm border-[6px] border-black py-3 px-4 text-3xl font-bold duration-300 after:absolute after:top-0 after:left-0 after:z-[-1] after:h-full after:w-full after:scale-[0.1] after:duration-300 hover:text-white hover:after:scale-100 hover:after:bg-black 3xl:mt-14 3xl:border-8 3xl:py-4 3xl:px-6 3xl:text-4xl "
      >
        View My Work
      </a>

      <a
        href="#about"
        className="group absolute top-8.3/10 right-1/2 block w-fit translate-x-1/2"
      >
        <div className="relative mx-auto mb-4 h-[72px] w-11 rounded-[100px] bg-black duration-700 before:absolute before:inset-0 before:m-auto before:w-[38px] before:rounded-[100px] before:bg-white after:absolute after:inset-0 after:m-auto after:h-[10px] after:w-[10px] after:translate-y-[-20px] after:scale-100 after:rounded-[100px] after:bg-black after:opacity-100 after:duration-700 group-hover:translate-y-2 group-hover:after:translate-y-[20px] group-hover:after:scale-[0.4] group-hover:after:opacity-0 3xl:mb-5 3xl:h-[5.5rem] 3xl:w-14 3xl:before:w-12" />
        <span className="font-bold uppercase 3xl:text-xl">scroll down</span>
      </a>
    </section>
  );
}
