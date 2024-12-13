import { Carousel } from '@/components/Carousel';

import Image1 from '@/assets/carousel/carousel-1.jpg';
import Image2 from '@/assets/carousel/carousel-2.jpg';
import Image3 from '@/assets/carousel/carousel-3.jpg';

const carouselConfig = [
  {
    id: 1,
    image: Image1,
    title: 'Image 1',
    information: 'Information 1',
  },
  {
    id: 2,
    image: Image2,
    title: 'Image 2',
    information: 'Information 2',
  },
  {
    id: 3,
    image: Image3,
    title: 'Image 3',
    information: 'Information 3',
  },
];

const Home = () => {
  return (
    <div>
      <h1>About</h1>
      <Carousel
        items={carouselConfig}
        interval={3000}
      />
    </div>
  );
};

export default Home;
