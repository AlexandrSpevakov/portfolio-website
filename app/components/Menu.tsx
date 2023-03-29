export default function Menu() {
  return (
    <ul className="hidden gap-x-5 text-xl md:flex lg:text-2xl xl:gap-x-12 2xl:gap-x-14 3xl:gap-x-16 3xl:text-3xl">
      <li className="relative">
        <a
          href="#home"
          className="relative outline-none after:absolute after:bottom-0 after:left-0 after:my-[-5px] after:h-0.5 after:w-0 after:bg-white after:duration-200 hover:after:w-3/4"
        >
          Home
        </a>
      </li>
      <li className="relative">
        <a
          href="#about"
          className="relative outline-none after:absolute after:bottom-0 after:left-0 after:my-[-5px] after:h-0.5 after:w-0 after:bg-white after:duration-200 hover:after:w-3/4"
        >
          About
        </a>
      </li>
      <li className="relative">
        <a
          href="#works"
          className="relative outline-none after:absolute after:bottom-0 after:left-0 after:my-[-5px] after:h-0.5 after:w-0 after:bg-white after:duration-200 hover:after:w-3/4"
        >
          Works
        </a>
      </li>
      <li className="relative">
        <a
          href="#contacts"
          className="relative outline-none after:absolute after:bottom-0 after:left-0 after:my-[-5px] after:h-0.5 after:w-0 after:bg-white after:duration-200 hover:after:w-3/4"
        >
          Contacts
        </a>
      </li>
    </ul>
  );
}
