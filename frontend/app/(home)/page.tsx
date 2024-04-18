import PageProvider from '@/provider/page-provider';
import { Footer } from '@/user/layout/footer';
import { Hero } from '@/user/pages/home/hero/hero';
import { Main } from '@/user/pages/home/main';
import { Testimonial } from '@/user/pages/home/testimonial';

function HomePage() {
  return (

    <div className='relative'>

      <PageProvider>
        <Hero />
      </PageProvider>
      <div className="relative bg-grid-white/[0.05] after:absolute after:inset-0 after:z-[-2] after:content-[''] after:bg-grid-white/[0.02]">
        <Main />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
