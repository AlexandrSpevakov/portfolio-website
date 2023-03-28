export default function Menu() {
  return (
    <ul className="hidden gap-x-5 text-xl md:flex lg:gap-x-8 lg:text-2xl 2xl:gap-x-12 2xl:text-3xl">
      <li className="relative">
        <a
          href="#home"
          className="outline-none duration-200 hover:opacity-70 focus:after:absolute focus:after:top-8 focus:after:block focus:after:h-0.5 focus:after:w-full focus:after:bg-white lg:focus:after:top-9 2xl:focus:after:top-11 2xl:focus:after:h-1"
        >
          Home
        </a>
      </li>
      <li className="relative">
        <a
          href="#about"
          className="outline-none duration-200 hover:opacity-70 focus:after:absolute focus:after:top-8 focus:after:block focus:after:h-0.5 focus:after:w-full focus:after:bg-white lg:focus:after:top-9 2xl:focus:after:top-11 2xl:focus:after:h-1"
        >
          About
        </a>
      </li>
      <li className="relative">
        <a
          href="#works"
          className="outline-none duration-200 hover:opacity-70 focus:after:absolute focus:after:top-8 focus:after:block focus:after:h-0.5 focus:after:w-full focus:after:bg-white lg:focus:after:top-9 2xl:focus:after:top-11 2xl:focus:after:h-1"
        >
          Works
        </a>
      </li>
      <li className="relative">
        <a
          href="#contacts"
          className="outline-none duration-200 hover:opacity-70 focus:after:absolute focus:after:top-8 focus:after:block focus:after:h-0.5 focus:after:w-full focus:after:bg-white lg:focus:after:top-9 2xl:focus:after:top-11 2xl:focus:after:h-1"
        >
          Contacts
        </a>
      </li>
    </ul>
  );
}
