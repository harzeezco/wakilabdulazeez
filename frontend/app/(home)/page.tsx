import { Header } from '@/user/layout/header';
import { HeroParallaxDemo } from '@/user/pages/home/hero/hero';

function HomePage() {
  return (
    <div className='relative'>
      <Header />
      {/* <Beams /> */}
      <HeroParallaxDemo />

      <div className='mt-20 h-dvh'>
        hello
      </div>
    </div>
  );
}

export default HomePage;
