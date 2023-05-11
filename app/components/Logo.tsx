import Image from 'next/image';
import Link from 'next/link';

// import logo from '../../public/logo.png';

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex w-fit items-center rounded outline-none focus:outline-offset-4 focus:outline-white"
    >
      {/* <Image
        // src={logo}
        alt="Logo"
        className="w-48 sm:w-52 md:w-56 lg:w-64 2xl:w-72 3xl:w-80"
      /> */}
    </Link>
  );
}
