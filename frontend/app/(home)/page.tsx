import { Header } from '@/user/layout/header';
import { Footer } from '@/user/pages/home/footer';
import { HeroParallaxDemo } from '@/user/pages/home/hero/hero';
import { Main } from '@/user/pages/home/main';
import { Testimonial } from '@/user/pages/home/testimonial';

function HomePage() {
  return (
    <div className='relative'>

      <Header />
      <HeroParallaxDemo />
      <div className="bg-grid-white/[0.05] after:bg-grid-white/[0.02] relative after:absolute after:inset-0 after:z-[-2] after:content-['']">
        <Main />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
