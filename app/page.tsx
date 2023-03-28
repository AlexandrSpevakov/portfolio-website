import About from './components/About';
import Contacts from './components/Contacts';
import Hero from './components/Hero';
import Works from './components/Works';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Works />
      <Contacts />
    </main>
  );
}
