import Image from 'next/image';

import pizza from '../../public/pizza-work.webp';
import got from '../../public/got-work.webp';
import plants from '../../public/plants-work.webp';
import restaurant from '../../public/restaurant-work.webp';
import tours from '../../public/tours-work.webp';

export default function Works() {
  return (
    <section className="mx-auto w-10/12 pt-32 pb-16" id="works">
      <h2 className="mb-24 text-center font-archivo text-7.5xl">Works</h2>
      <article className="work-card mx-auto w-9/12 rounded bg-black px-10 pt-10 pb-12 text-white duration-300">
        <Image
          src={pizza}
          alt="Pizza App"
          className="block rounded-sm border-2 border-zinc-900 saturate-120"
        />

        <h3 className="mt-10 text-center font-archivo text-6xl">Pizza App</h3>

        <p className="mt-6 text-lg">
          Web Store Application created with React includes multiple pages and
          SPA support. States were managed with Redux Toolkit, and styles were
          implemented with Styled Components. Entirely written in TypeScript,
          code styling was configured with ESLint and Airbnb settings. Covered
          by all kinds of tests, such as unit, integration and e2e tests. The
          website has a responsive design, so looks good on all devices.
          Interacts with Local Storage and saves your orders and settings.
        </p>

        <p className="mt-8 text-xl font-bold">
          <span className="mr-1 text-2xl font-normal">Tech Stack:</span> React,
          TypeScript, Redux Toolkit, Jest, Testing Library, Cypress, Styled
          Components, RTK Query, React Router, ESLint, Prettier
        </p>

        <div className="mt-16 flex justify-center gap-40">
          <a
            href="https://pizza-store-application.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="relative block w-fit rounded-sm border-4 border-white bg-white py-1.5 px-16 text-3xl font-bold text-black duration-300 hover:bg-black hover:text-white"
          >
            Live
          </a>
          <a
            href="https://github.com/AlexandrSpevakov/pizza-app"
            target="_blank"
            rel="noreferrer"
            className="relative block w-fit rounded-sm border-4 border-white bg-white py-1.5 px-16 text-3xl font-bold text-black duration-300 hover:bg-black hover:text-white"
          >
            Code
          </a>
        </div>
      </article>

      <article className="work-card mx-auto mt-28 w-9/12 rounded bg-black px-10 pt-10 pb-12 text-white duration-300">
        <Image
          src={got}
          alt="Game of Thrones Wiki"
          className="block rounded-sm border-2 border-zinc-900 saturate-135"
        />

        <h3 className="mt-10 text-center font-archivo text-6xl">
          Game of Thrones Wiki
        </h3>

        <p className="mt-6 text-lg">
          Wikipedia about the Game of Thrones TV series extended with
          information from George Martin&apos;s fantasy novel, &quot;A Song of
          Ice and Fire,&quot; on which the original HBO series was based. Right
          now, there are three page-section where you can find descriptions of
          the noble houses of Westeros, Characters and Dragons. Initially, you
          will be navigated to the home page, where you can get acquainted with
          general information about the order of things in Westeros.
        </p>

        <p className="mt-8 text-xl font-bold">
          <span className="mr-1 text-2xl font-normal">Tech Stack:</span> React,
          Next.js, TypeScript, Tailwind, ESLint, Prettier
        </p>

        <div className="mt-16 flex justify-center gap-40">
          <a
            href="https://got-explorer.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="relative block w-fit rounded-sm border-4 border-white bg-white py-1.5 px-16 text-3xl font-bold text-black duration-300 hover:bg-black hover:text-white"
          >
            Live
          </a>
          <a
            href="https://github.com/AlexandrSpevakov/got-explorer"
            target="_blank"
            rel="noreferrer"
            className="relative block w-fit rounded-sm border-4 border-white bg-white py-1.5 px-16 text-3xl font-bold text-black duration-300 hover:bg-black hover:text-white"
          >
            Code
          </a>
        </div>
      </article>

      <article className="work-card mx-auto mt-28 w-9/12 rounded bg-black px-10 pt-10 pb-12 text-white duration-300">
        <Image
          src={plants}
          alt="Plants Shop"
          className="block rounded-sm saturate-135"
        />

        <h3 className="mt-10 text-center font-archivo text-6xl">Plants Shop</h3>

        <p className="mt-6 text-lg">
          Plants website where you can shop for different houseplants in pots
          and order them later. The website also provides instructions on how to
          do that and why you should choose to make your orders with us. At the
          bottom of the landing page, you can find a section with frequently
          asked questions, which will help you take care of your plants and
          increase their life span after your purchases.
        </p>

        <p className="mt-8 text-xl font-bold">
          <span className="mr-1 text-2xl font-normal">Tech Stack:</span>{' '}
          JavaScript, HTML, CSS, SCSS, BEM
        </p>

        <div className="mt-16 flex justify-center gap-40">
          <a
            href="https://alexandrspevakov.github.io/plants-shop-landing/"
            target="_blank"
            rel="noreferrer"
            className="relative block w-fit rounded-sm border-4 border-white bg-white py-1.5 px-16 text-3xl font-bold text-black duration-300 hover:bg-black hover:text-white"
          >
            Live
          </a>
          <a
            href="https://github.com/AlexandrSpevakov/plants-shop-landing"
            target="_blank"
            rel="noreferrer"
            className="relative block w-fit rounded-sm border-4 border-white bg-white py-1.5 px-16 text-3xl font-bold text-black duration-300 hover:bg-black hover:text-white"
          >
            Code
          </a>
        </div>
      </article>

      <article className="work-card mx-auto mt-28 w-9/12 rounded bg-black px-10 pt-10 pb-12 text-white duration-300">
        <Image
          src={restaurant}
          alt="Restaurant Website"
          className="block rounded-sm border-2 border-zinc-900 saturate-135"
        />

        <h3 className="mt-10 text-center font-archivo text-6xl">
          Restaurant Website
        </h3>

        <p className="mt-6 text-lg">
          Restaurant website, which is the main idea is healthy dieting. In this
          restaurant, you can only have healthy salads. Each dish comes with
          calculated nutrition values on the meal cards and on the menu, which
          will help you monitor the number of calories you consume daily. The
          restaurant also provides vegan salads. That is one of my older
          projects, and I&apos;m already preparing the translated version :&#41;
        </p>

        <p className="mt-8 text-xl font-bold">
          <span className="mr-1 text-2xl font-normal">Tech Stack:</span> HTML,
          CSS, JavaScript, Gulp.js, SCSS, PostCSS, BEM
        </p>

        <div className="mt-16 flex justify-center gap-40">
          <a
            href="https://alexandrspevakov.github.io/restaurant-website/"
            target="_blank"
            rel="noreferrer"
            className="relative block w-fit rounded-sm border-4 border-white bg-white py-1.5 px-16 text-3xl font-bold text-black duration-300 hover:bg-black hover:text-white"
          >
            Live
          </a>
          <a
            href="https://github.com/AlexandrSpevakov/restaurant-website"
            target="_blank"
            rel="noreferrer"
            className="relative block w-fit rounded-sm border-4 border-white bg-white py-1.5 px-16 text-3xl font-bold text-black duration-300 hover:bg-black hover:text-white"
          >
            Code
          </a>
        </div>
      </article>

      <article className="work-card mx-auto mt-28 w-9/12 rounded bg-black px-10 pt-10 pb-12 text-white duration-300">
        <Image
          src={tours}
          alt="Tours Website"
          className="block rounded-sm saturate-125"
        />

        <h3 className="mt-10 text-center font-archivo text-6xl">
          Tours Website
        </h3>

        <p className="mt-6 text-lg">
          Vacation Tours website where you can discover trip all around the
          world, mainly to some exotic destinations. You can look at the rating
          of each tour and decide which one suits best for your wishes, then you
          can make a preorder, often with a discounted price.
        </p>

        <p className="mt-8 text-xl font-bold">
          <span className="mr-1 text-2xl font-normal">Tech Stack:</span>{' '}
          JavaScript, HTML, CSS, SCSS
        </p>

        <div className="mt-16 flex justify-center gap-40">
          <a
            href="https://alexandrspevakov.github.io/travel-tours-landing/"
            target="_blank"
            rel="noreferrer"
            className="relative block w-fit rounded-sm border-4 border-white bg-white py-1.5 px-16 text-3xl font-bold text-black duration-300 hover:bg-black hover:text-white"
          >
            Live
          </a>
          <a
            href="https://github.com/AlexandrSpevakov/travel-tours-landing"
            target="_blank"
            rel="noreferrer"
            className="relative block w-fit rounded-sm border-4 border-white bg-white py-1.5 px-16 text-3xl font-bold text-black duration-300 hover:bg-black hover:text-white"
          >
            Code
          </a>
        </div>
      </article>
    </section>
  );
}
