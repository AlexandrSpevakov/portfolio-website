export default function Contacts() {
  return (
    <section className="relative isolate text-white before:absolute before:inset-0 before:z-[-1] before:skew-y-[-6deg] before:bg-black after:absolute after:left-0 after:bottom-[-140px] after:z-[-1] after:h-full after:w-full after:bg-black">
      <section
        id="contacts"
        className="relative mx-auto w-10/12 bg-cover bg-center bg-no-repeat md:mt-24 md:pt-24 md:pb-12 lg:mt-28 lg:pt-28 lg:pb-14 xl:mt-32 xl:pt-32 xl:pb-16 2xl:mt-36 2xl:pt-36 2xl:pb-20 3xl:mt-40 3xl:pt-40 3xl:pb-24"
      >
        <h2 className="text-center font-archivo md:xl:text-6xl lg:xl:text-7xl xl:text-7.5xl 2xl:text-8xl 3xl:text-8.5xl">
          Contacts
        </h2>

        <section className="grid grid-cols-3 md:mt-12 md:gap-x-10 lg:mt-14 lg:gap-x-12 xl:mt-16 xl:gap-x-14 2xl:mt-20 2xl:gap-x-16 3xl:mt-24 3xl:gap-x-20">
          <a
            href="mailto:spievakov@gmail.com"
            className="block border-4 border-white py-4 px-6 duration-300 hover:bg-white hover:text-black 2xl:py-5 2xl:px-8 3xl:border-6 3xl:py-6 3xl:px-10"
          >
            <div className="flex items-center gap-3 2xl:gap-4 3xl:gap-5">
              <svg
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                {' '}
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />{' '}
              </svg>

              <h4 className="text-2xl font-bold 2xl:text-3xl 3xl:text-4xl">
                Email
              </h4>
            </div>

            <span className="mt-3 block text-lg 2xl:text-xl 3xl:mt-4 3xl:text-2xl">
              Let&apos;s get in touch
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/oleksandr-spievakov/"
            className="block border-4 border-white py-4 px-6 duration-300 hover:bg-white hover:text-black 2xl:py-5 2xl:px-8 3xl:border-6 3xl:py-6 3xl:px-10"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center gap-3 2xl:gap-4 3xl:gap-5">
              <svg
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                {' '}
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />{' '}
              </svg>

              <h4 className="text-2xl font-bold 2xl:text-3xl 3xl:text-4xl">
                LinkedIn
              </h4>
            </div>

            <span className="mt-3 block text-lg 2xl:text-xl 3xl:mt-4 3xl:text-2xl">
              Let&apos;s connect
            </span>
          </a>

          <a
            href="https://github.com/AlexandrSpevakov"
            className="block border-4 border-white py-4 px-6 duration-300 hover:bg-white hover:text-black 2xl:py-5 2xl:px-8 3xl:border-6 3xl:py-6 3xl:px-10"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center gap-3 2xl:gap-4 3xl:gap-5">
              <svg
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                {' '}
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />{' '}
              </svg>

              <h4 className="text-2xl font-bold 2xl:text-3xl 3xl:text-4xl">
                GitHub
              </h4>
            </div>

            <span className="mt-3 block text-lg 2xl:text-xl 3xl:mt-4 3xl:text-2xl">
              Checkout my repos
            </span>
          </a>
        </section>
      </section>
    </section>
  );
}