import { Header } from '@/user/layout/header';
import { Footer } from '@/user/pages/home/footer';
import { HeroParallaxDemo } from '@/user/pages/home/hero/hero';
import { Main } from '@/user/pages/home/main';
import { Testimonial } from '@/user/pages/home/testimonial';

function HomePage() {
  return (
    <div className='relative'>
  
        <Header />
        {/* <Beams /> */}
        <HeroParallaxDemo />
        <Main />
        <Testimonial />
        <Footer />
    </div>
  );
}

export default HomePage;
