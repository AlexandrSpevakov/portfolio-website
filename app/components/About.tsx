import bg from '../../public/about.jpeg';
import { skillsArr } from '../data/skills';

export default function About() {
  return (
    <section className="relative isolate text-white after:absolute after:inset-0 after:z-[-1] after:skew-y-[-6deg] after:bg-black">
      <section
        id="about"
        className="relative mx-auto mt-32 w-10/12 bg-cover bg-center bg-no-repeat py-32"
      >
        <h2 className="text-center font-archivo text-7.5xl">
          About{' '}
          <span
            className="bg-cover bg-center bg-no-repeat py-4 px-10"
            style={{
              backgroundImage: `url(${bg.src})`,
            }}
          >
            Me
          </span>
        </h2>
        <p className="mx-auto mt-12 w-7/12 text-xl">
          I&apos;m a self-taught frontend developer from Ukraine who is
          passionate about working on challenging projects. I have a strong
          understanding of React and Angular and am eager to contribute my
          skills to high-value products. On a personal level, I am self-driven
          and hard-working, and I can adapt quickly to a fast-paced environment.
        </p>
        <p className="mx-auto mt-8 w-7/12 text-xl">
          In my free time, I love watching films and series, reading literature,
          playing hockey and a few other things, so feel free to contact me
          whether it&apos;s a job opportunity or just a regular chat.
        </p>
        <h3 className="mt-36 text-center font-archivo text-6xl">
          Techical Skills
        </h3>
        <ul className="mt-12 grid grid-cols-3 justify-items-center text-2xl">
          {skillsArr.map((skill, i) => (
            <div key={i} className="flex w-40 items-center py-3">
              <li>{skill}</li>
            </div>
          ))}
        </ul>
      </section>
    </section>
  );
}
