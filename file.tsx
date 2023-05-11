import Image from 'next/image';

import pizza from '../../public/pizza-work.png';
import got from '../../public/got-work.webp';
import plants from '../../public/plants-work.webp';
import restaurant from '../../public/restaurant-work.webp';
import tours from '../../public/tours-work.webp';

export default function Works() {
  return (
    <section className="mx-auto max-w-screen-xl px-10 md:pt-32">
      <article className="relative h-screen">
        <section className="relative z-10">
          <h3 className="pt-16 font-montserrat text-4.5xl font-semibold">
            Crust & Co.
          </h3>

          <p className="mt-2 w-2/6 text-xl font-medium leading-8 text-neutral-500">
            An innovative online pizza store offering a mouthwatering selection
            of handcrafted pizzas with a seamless ordering experience.
          </p>

          <div className="mt-8 flex max-w-[15rem] flex-wrap gap-2 text-xl font-medium">
            <span className="bg-neutral-200 py-1 px-2">React</span>
            <span className="bg-neutral-200 py-1 px-2">Redux</span>
            <span className="bg-neutral-200 py-1 px-2">TypeScript</span>
            <span className="bg-neutral-200 py-1 px-2">Jest</span>
          </div>

          <a
            href="https://pizza-store-application.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="relative mt-12 block w-fit py-1 pr-2 align-bottom text-xl font-medium before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-2/5 before:w-full before:bg-pizza before:px-4 before:duration-500 hover:before:h-5/6"
          >
            View Project
          </a>

          <a
            href="https://github.com/SashaSpievakov/pizza-app"
            target="_blank"
            rel="noreferrer"
            className="relative mt-4 block w-fit py-1 pr-2 align-bottom text-xl font-medium before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-2/5 before:w-full before:bg-pizza before:px-4 before:duration-500 hover:before:h-5/6"
          >
            Source Code
          </a>
        </section>

        <section className="absolute right-0 top-0 w-9/12 bg-pizza md:py-16 md:pr-12 md:pl-32">
          <div className="shadow-3xl">
            <div className="flex h-6 rounded-t-md bg-tab py-2.75 px-2.5">
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-red-25" />
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-yellow-25" />
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-green-25" />
            </div>
            <Image src={pizza} alt="Pizza App" className="saturate-120" />
          </div>
        </section>
      </article>

      <article className="relative h-screen">
        <section className="relative z-10">
          <h3 className="pt-16 font-montserrat text-4.5xl font-semibold">
            GOT Explorer
          </h3>

          <p className="mt-2 w-2/6 text-xl font-medium leading-8 text-neutral-500">
            Wikipedia about the Game of Thrones TV series based on George
            Martin&apos;s fantasy novel &quot;A Song of Ice and Fire&quot;.
          </p>

          <div className="mt-8 flex max-w-[15rem] flex-wrap gap-2 text-xl font-medium">
            <span className="bg-neutral-200 py-1 px-2">React</span>
            <span className="bg-neutral-200 py-1 px-2">Next.js</span>
            <span className="bg-neutral-200 py-1 px-2">TypeScript</span>
            <span className="bg-neutral-200 py-1 px-2">Tailwind</span>
          </div>

          <a
            href="https://got-explorer.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="relative mt-12 block w-fit py-1 pr-2 align-bottom text-xl font-medium before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-2/5 before:w-full before:bg-got before:px-4 before:duration-500 hover:before:h-5/6"
          >
            View Project
          </a>

          <a
            href="https://github.com/SashaSpievakov/got-explorer"
            target="_blank"
            rel="noreferrer"
            className="relative mt-4 block w-fit py-1 pr-2 align-bottom text-xl font-medium before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-2/5 before:w-full before:bg-got before:px-4 before:duration-500 hover:before:h-5/6"
          >
            Source Code
          </a>
        </section>

        <section className="absolute right-0 top-0 w-9/12 bg-got md:py-16 md:pr-12 md:pl-32">
          <div className="shadow-3xl">
            <div className="flex h-6 rounded-t-md bg-tab py-2.75 px-2.5">
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-red-25" />
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-yellow-25" />
              <span className="mr-2 block h-2.5 w-2.5 rounded-[50%] bg-green-25" />
            </div>
            <Image
              src={got}
              alt="Game of Thrones Wiki"
              className="saturate-135"
            />
          </div>
        </section>
      </article>

      {/* <article className="work-card mx-auto w-9/12 rounded bg-black text-white duration-300 md:mt-20 lg:mt-24 lg:px-8 lg:pt-8 lg:pb-10 xl:mt-28 xl:px-10 xl:pt-10 xl:pb-12 2xl:mt-32 2xl:w-7/10 2xl:px-12 2xl:pt-12 2xl:pb-14 3xl:mt-36 3xl:w-8/12 3xl:px-14 3xl:pt-14 3xl:pb-16">
        <Image
          src={plants}
          alt="Plants Shop"
          className="block rounded-sm saturate-135"
        />

        <h3 className="text-center font-archivo lg:mt-8 xl:mt-10 xl:text-6xl 2xl:mt-12 2xl:text-6.5xl 3xl:mt-14 3xl:text-7xl">
          Plants Shop
        </h3>

        <p className="lg:mt-3 xl:mt-4 xl:text-lg 2xl:mt-5 2xl:text-xl 3xl:mt-6 3xl:text-2xl">
          Plants website where you can shop for different houseplants in pots
          and order them later. The website also provides instructions on how to
          do that and why you should choose to make your orders with us. At the
          bottom of the landing page, you can find a section with frequently
          asked questions, which will help you take care of your plants and
          increase their life span after your purchases.
        </p>

        <p className="font-bold md:mt-6 lg:mt-7 lg:text-lg xl:mt-8 xl:text-xl 2xl:mt-9 2xl:text-2xl 3xl:mt-10 3xl:text-3xl">
          <span className="mr-1 font-normal lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
            Tech Stack:
          </span>{' '}
          JavaScript, HTML, CSS, SCSS, BEM
        </p>

        <div className="flex justify-center lg:mt-14 md:xl:mt-12 xl:mt-16 xl:gap-40 2xl:mt-20 2xl:gap-48 3xl:mt-24 3xl:gap-64">
          <a
            href="https://alexandrspevakov.github.io/plants-shop-landing/"
            target="_blank"
            rel="noreferrer"
            className="relative block w-fit rounded-sm border-4 border-white bg-white py-1.5 px-16 text-3xl font-bold text-black duration-300 hover:bg-black hover:text-white 3xl:py-2 3xl:text-4xl"
          >
            Live
          </a>
          <a
            href="https://github.com/AlexandrSpevakov/plants-shop-landing"
            target="_blank"
            rel="noreferrer"
            className="relative block w-fit rounded-sm border-4 border-white bg-white py-1.5 px-16 text-3xl font-bold text-black duration-300 hover:bg-black hover:text-white 3xl:py-2 3xl:text-4xl"
          >
            Code
          </a>
        </div>
      </article>

      <article className="work-card mx-auto w-9/12 rounded bg-black text-white duration-300 md:mt-20 lg:mt-24 lg:px-8 lg:pt-8 lg:pb-10 xl:mt-28 xl:px-10 xl:pt-10 xl:pb-12 2xl:mt-32 2xl:w-7/10 2xl:px-12 2xl:pt-12 2xl:pb-14 3xl:mt-36 3xl:w-8/12 3xl:px-14 3xl:pt-14 3xl:pb-16">
        <Image
          src={restaurant}
          alt="Restaurant Website"
          className="block rounded-sm border-2 border-zinc-900 saturate-135"
        />

        <h3 className="text-center font-archivo lg:mt-8 xl:mt-10 xl:text-6xl 2xl:mt-12 2xl:text-6.5xl 3xl:mt-14 3xl:text-7xl">
          Restaurant Website
        </h3>

        <p className="lg:mt-3 xl:mt-4 xl:text-lg 2xl:mt-5 2xl:text-xl 3xl:mt-6 3xl:text-2xl">
          Restaurant website, which is the main idea is healthy dieting. In this
          restaurant, you can only have healthy salads. Each dish comes with
          calculated nutrition values on the meal cards and on the menu, which
          will help you monitor the number of calories you consume daily. The
          restaurant also provides vegan salads. That is one of my older
          projects, and I&apos;m already preparing the translated version :&#41;
        </p>

        <p className="font-bold md:mt-6 lg:mt-7 lg:text-lg xl:mt-8 xl:text-xl 2xl:mt-9 2xl:text-2xl 3xl:mt-10 3xl:text-3xl">
          <span className="mr-1 font-normal lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
            Tech Stack:
          </span>{' '}
          HTML, CSS, JavaScript, Gulp.js, SCSS, PostCSS, BEM
        </p>

        <div className="flex justify-center lg:mt-14 md:xl:mt-12 xl:mt-16 xl:gap-40 2xl:mt-20 2xl:gap-48 3xl:mt-24 3xl:gap-64">
          <a
            href="https://alexandrspevakov.github.io/restaurant-website/"
            target="_blank"
            rel="noreferrer"
            className="relative block w-fit rounded-sm border-4 border-white bg-white py-1.5 px-16 text-3xl font-bold text-black duration-300 hover:bg-black hover:text-white 3xl:py-2 3xl:text-4xl"
          >
            Live
          </a>
          <a
            href="https://github.com/AlexandrSpevakov/restaurant-website"
            target="_blank"
            rel="noreferrer"
            className="relative block w-fit rounded-sm border-4 border-white bg-white py-1.5 px-16 text-3xl font-bold text-black duration-300 hover:bg-black hover:text-white 3xl:py-2 3xl:text-4xl"
          >
            Code
          </a>
        </div>
      </article>

      <article className="work-card mx-auto w-9/12 rounded bg-black text-white duration-300 md:mt-20 lg:mt-24 lg:px-8 lg:pt-8 lg:pb-10 xl:mt-28 xl:px-10 xl:pt-10 xl:pb-12 2xl:mt-32 2xl:w-7/10 2xl:px-12 2xl:pt-12 2xl:pb-14 3xl:mt-36 3xl:w-8/12 3xl:px-14 3xl:pt-14 3xl:pb-16">
        <Image
          src={tours}
          alt="Tours Website"
          className="block rounded-sm saturate-125"
        />

        <h3 className="text-center font-archivo lg:mt-8 xl:mt-10 xl:text-6xl 2xl:mt-12 2xl:text-6.5xl 3xl:mt-14 3xl:text-7xl">
          Tours Website
        </h3>

        <p className="lg:mt-3 xl:mt-4 xl:text-lg 2xl:mt-5 2xl:text-xl 3xl:mt-6 3xl:text-2xl">
          Vacation Tours website where you can discover trip all around the
          world, mainly to some exotic destinations. You can look at the rating
          of each tour and decide which one suits best for your wishes, then you
          can make a preorder, often with a discounted price.
        </p>

        <p className="font-bold md:mt-6 lg:mt-7 lg:text-lg xl:mt-8 xl:text-xl 2xl:mt-9 2xl:text-2xl 3xl:mt-10 3xl:text-3xl">
          <span className="mr-1 font-normal lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
            Tech Stack:
          </span>{' '}
          JavaScript, HTML, CSS, SCSS
        </p>

        <div className="flex justify-center lg:mt-14 md:xl:mt-12 xl:mt-16 xl:gap-40 2xl:mt-20 2xl:gap-48 3xl:mt-24 3xl:gap-64">
          <a
            href="https://alexandrspevakov.github.io/travel-tours-landing/"
            target="_blank"
            rel="noreferrer"
            className="relative block w-fit rounded-sm border-4 border-white bg-white py-1.5 px-16 text-3xl font-bold text-black duration-300 hover:bg-black hover:text-white 3xl:py-2 3xl:text-4xl"
          >
            Live
          </a>
          <a
            href="https://github.com/AlexandrSpevakov/travel-tours-landing"
            target="_blank"
            rel="noreferrer"
            className="relative block w-fit rounded-sm border-4 border-white bg-white py-1.5 px-16 text-3xl font-bold text-black duration-300 hover:bg-black hover:text-white 3xl:py-2 3xl:text-4xl"
          >
            Code
          </a>
        </div>
      </article> */}
    </section>
  );
}

==============================

export default function Hero() {
  return (
    <section className="relative mx-auto h-96 max-w-screen-xl px-10" id="home">
      <h1 className="mt-32 font-montserrat font-semibold leading-loose md:text-7.5xl">
        Sasha Spievakov <br /> — Software Engineer
      </h1>
    </section>
  );
}

=============================

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        roboto: ['var(--font-roboto)'],
      },
      fontSize: {
        '4.5xl': ['40px'],
        '6.5xl': ['66px'],
        '7.5xl': ['5rem', { lineHeight: '6rem' }],
        '10xl': ['9.5rem'],
      },
      spacing: {
        '7/10': '70%',
        '8.3/10': '83%',
        2.75: '7px',
      },
      borderWidth: {
        6: '6px',
      },
      saturate: {
        120: '1.20',
        125: '1.25',
        135: '1.35',
      },
      screens: {
        xs: '400px',
        sm: '576px',
        '3xl': '2000px',
      },
      colors: {
        pizza: '#e4d9ce',
        got: '#dfd9d2',
        tab: '#26282a',
        // tab2: '#dfdfdf',
        red: {
          25: '#fd615d',
        },
        yellow: {
          25: '#febc40',
        },
        green: {
          25: '#35c94a',
        },
      },
      boxShadow: {
        '3xl': '0px 8px 40px 4px rgb(0 0 0 / 20%)',
      },
    },
  },
  plugins: [],
};

