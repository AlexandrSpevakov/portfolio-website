import Image from 'next/image';

import crust from '../../public/crust&co-work.webp';
import got from '../../public/got-work.webp';
import arid from '../../public/arid-allure.webp';
import Odysseriat from '../../public/odysseriat.webp';
import salad from '../../public/salad-verse.webp';

export default function Works() {
  return (
    <section className="mx-auto max-w-screen-xl overflow-hidden px-4 pt-24 text-lg sm:px-6 md:px-10 xl:text-xl">
      <article className="relative pb-32 md:pb-44 lg:pb-72">
        <section className="z-10 bg-crust before:absolute before:left-[-30px] before:top-[-40px] before:z-[-1] before:h-1/4 before:w-[800px] before:bg-crust md:py-10 md:px-16 md:before:hidden lg:absolute lg:right-0 lg:top-0 lg:w-9/12 lg:py-16 lg:px-24">
          <section className="shadow-3xl">
            <section className="flex h-6 rounded-t-md bg-tab py-2.75 px-2.5">
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-red-25" />
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-yellow-25" />
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-green-25" />
            </section>

            <a
              href="https://crustco.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={crust}
                alt="Crust & Co. - Pizza Work"
                className="saturate-120"
              />
            </a>
          </section>
        </section>

        <section className="relative">
          <h2 className="pt-12 font-montserrat text-3xl font-semibold sm:text-4xl lg:pt-28 xl:pt-32 xl:text-4.5xl">
            Crust & Co.
          </h2>

          <p className="mt-2 font-medium leading-8 text-neutral-500 sm:w-80 lg:w-[23%] xl:mt-4">
            An online store of handmade pizzas with a seamless ordering
            experience.
          </p>

          <a
            href="https://crustco.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="relative mt-8 block w-fit py-1 pr-2 align-bottom font-medium before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-2/5 before:w-full before:bg-crust before:px-4 before:duration-500 hover:before:h-5/6 xl:mt-12"
          >
            View Project
          </a>

          <a
            href="https://github.com/SashaSpievakov/crust-co"
            target="_blank"
            rel="noreferrer"
            className="relative mt-3 block w-fit py-1 pr-2 align-bottom font-medium before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-2/5 before:w-full before:bg-crust before:px-4 before:duration-500 hover:before:h-5/6 xl:mt-4"
          >
            Source Code
          </a>
        </section>
      </article>

      <article className="relative pb-32 md:pb-44 lg:pb-72">
        <section className="z-10 bg-got before:absolute before:left-[-30px] before:top-[-40px] before:z-[-1] before:h-1/4 before:w-[800px] before:bg-got md:py-10 md:px-16 md:before:hidden lg:absolute lg:right-0 lg:top-0 lg:w-9/12 lg:py-16 lg:px-24">
          <section className="shadow-3xl">
            <section className="flex h-6 rounded-t-md bg-tab py-2.75 px-2.5">
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-red-25" />
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-yellow-25" />
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-green-25" />
            </section>

            <a
              href="https://got-explorer.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={got}
                alt="Game of Thrones - Wiki Work"
                className="saturate-135"
              />
            </a>
          </section>
        </section>

        <section className="relative">
          <h2 className="pt-12 font-montserrat text-3xl font-semibold sm:text-4xl lg:pt-28 xl:pt-32 xl:text-4.5xl">
            GOT Explorer
          </h2>

          <p className="mt-2 font-medium leading-8 text-neutral-500 sm:w-80 lg:w-[23%] xl:mt-4">
            Game of Thrones Wikipedia which based on G. Martin&apos;s fantasy
            novels.
          </p>

          <a
            href="https://got-explorer.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="relative mt-8 block w-fit py-1 pr-2 align-bottom font-medium before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-2/5 before:w-full before:bg-got before:px-4 before:duration-500 hover:before:h-5/6 xl:mt-12"
          >
            View Project
          </a>

          <a
            href="https://github.com/AlexandrSpevakov/got-explorer"
            target="_blank"
            rel="noreferrer"
            className="relative mt-3 block w-fit py-1 pr-2 align-bottom font-medium before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-2/5 before:w-full before:bg-got before:px-4 before:duration-500 hover:before:h-5/6 xl:mt-4"
          >
            Source Code
          </a>
        </section>
      </article>

      <article className="relative pb-32 md:pb-44 lg:pb-72">
        <section className="z-10 bg-arid before:absolute before:left-[-30px] before:top-[-40px] before:z-[-1] before:h-1/4 before:w-[800px] before:bg-arid md:py-10 md:px-16 md:before:hidden lg:absolute lg:right-0 lg:top-0 lg:w-9/12 lg:py-16 lg:px-24">
          <section className="shadow-3xl">
            <section className="flex h-6 rounded-t-md bg-tab py-2.75 px-2.5">
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-red-25" />
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-yellow-25" />
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-green-25" />
            </section>

            <a
              href="https://sashaspievakov.github.io/arid-allure/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={arid}
                alt="Arid Allure - Plants Work"
                className="saturate-135"
              />
            </a>
          </section>
        </section>

        <section className="relative">
          <h2 className="pt-12 font-montserrat text-3xl font-semibold sm:text-4xl lg:pt-28 xl:pt-32 xl:text-4.5xl">
            Arid Allure
          </h2>

          <p className="mt-2 font-medium leading-8 text-neutral-500 sm:w-80 lg:w-[23%] xl:mt-4">
            An online store that sells and explores a selection of unique cacti.
          </p>

          <a
            href="https://sashaspievakov.github.io/arid-allure/"
            target="_blank"
            rel="noreferrer"
            className="relative mt-8 block w-fit py-1 pr-2 align-bottom font-medium before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-2/5 before:w-full before:bg-arid before:px-4 before:duration-500 hover:before:h-5/6 xl:mt-12"
          >
            View Project
          </a>

          <a
            href="https://github.com/SashaSpievakov/arid-allure"
            target="_blank"
            rel="noreferrer"
            className="relative mt-3 block w-fit py-1 pr-2 align-bottom font-medium before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-2/5 before:w-full before:bg-arid before:px-4 before:duration-500 hover:before:h-5/6 xl:mt-4"
          >
            Source Code
          </a>
        </section>
      </article>

      <article className="relative pb-32 md:pb-44 lg:pb-72">
        <section className="z-10 bg-odysseriat before:absolute before:left-[-30px] before:top-[-40px] before:z-[-1] before:h-1/4 before:w-[800px] before:bg-odysseriat md:py-10 md:px-16 md:before:hidden lg:absolute lg:right-0 lg:top-0 lg:w-9/12 lg:py-16 lg:px-24">
          <section className="shadow-3xl">
            <section className="flex h-6 rounded-t-md bg-tab py-2.75 px-2.5">
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-red-25" />
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-yellow-25" />
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-green-25" />
            </section>

            <a
              href="https://sashaspievakov.github.io/odysseriat/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={Odysseriat}
                alt="Odysseriat - Travels Work"
                className="saturate-135"
              />
            </a>
          </section>
        </section>

        <section className="relative">
          <h2 className="pt-12 font-montserrat text-3xl font-semibold sm:text-4xl lg:pt-28 xl:pt-32 xl:text-4.5xl">
            Odysseriat
          </h2>

          <p className="mt-2 font-medium leading-8 text-neutral-500 sm:w-80 lg:w-[23%] xl:mt-4">
            The store provides an all-in-one platform to book vacation tours.
          </p>

          <a
            href="https://sashaspievakov.github.io/odysseriat/"
            target="_blank"
            rel="noreferrer"
            className="relative mt-8 block w-fit py-1 pr-2 align-bottom font-medium before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-2/5 before:w-full before:bg-odysseriat before:px-4 before:duration-500 hover:before:h-5/6 xl:mt-12"
          >
            View Project
          </a>

          <a
            href="https://github.com/SashaSpievakov/odysseriat/"
            target="_blank"
            rel="noreferrer"
            className="relative mt-3 block w-fit py-1 pr-2 align-bottom font-medium before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-2/5 before:w-full before:bg-odysseriat before:px-4 before:duration-500 hover:before:h-5/6 xl:mt-4"
          >
            Source Code
          </a>
        </section>
      </article>

      <article className="relative pb-32 md:pb-44 lg:pb-72">
        <section className="z-10 bg-salad before:absolute before:left-[-30px] before:top-[-40px] before:z-[-1] before:h-1/4 before:w-[800px] before:bg-salad md:py-10 md:px-16 md:before:hidden lg:absolute lg:right-0 lg:top-0 lg:w-9/12 lg:py-16 lg:px-24">
          <section className="shadow-3xl">
            <section className="flex h-6 rounded-t-md bg-tab py-2.75 px-2.5">
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-red-25" />
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-yellow-25" />
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-green-25" />
            </section>

            <a
              href="https://sashaspievakov.github.io/salad-verse/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={salad}
                alt="Salad Verse - Restaurant Work"
                className="saturate-135"
              />
            </a>
          </section>
        </section>

        <section className="relative">
          <h2 className="pt-12 font-montserrat text-3xl font-semibold sm:text-4xl lg:pt-28 xl:pt-32 xl:text-4.5xl">
            Salad Verse
          </h2>

          <p className="mt-2 font-medium leading-8 text-neutral-500 sm:w-80 lg:w-[23%] xl:mt-4">
            Landing page for a local healthy-food restaurant in Ukraine.
          </p>

          <a
            href="https://sashaspievakov.github.io/salad-verse/"
            target="_blank"
            rel="noreferrer"
            className="relative mt-8 block w-fit py-1 pr-2 align-bottom font-medium before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-2/5 before:w-full before:bg-salad before:px-4 before:duration-500 hover:before:h-5/6 xl:mt-12"
          >
            View Project
          </a>

          <a
            href="https://github.com/SashaSpievakov/salad-verse.git"
            target="_blank"
            rel="noreferrer"
            className="relative mt-3 block w-fit py-1 pr-2 align-bottom font-medium before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-2/5 before:w-full before:bg-salad before:px-4 before:duration-500 hover:before:h-5/6 xl:mt-4"
          >
            Source Code
          </a>
        </section>
      </article>
    </section>
  );
}
