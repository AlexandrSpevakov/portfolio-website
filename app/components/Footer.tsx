export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-screen-xl items-center justify-between px-40 pb-10">
      <div className="flex flex-col text-sm">
        <span className="">&copy; 2023 Sasha Spievakov.</span>
        <span className="mt-1">All rights reserved.</span>
      </div>

      <div className="flex flex-col underline underline-offset-[3px]">
        <a href="mailto:spievakov@gmail.com" className="">
          Email
        </a>

        <a
          href="https://github.com/SashaSpievakov"
          target="_blank"
          rel="noreferrer"
          className="mt-1"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
