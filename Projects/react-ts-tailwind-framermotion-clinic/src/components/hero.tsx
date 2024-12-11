import { motion } from "framer-motion";
// Assets
import herobg from "../assets/hero-bg.webp";
import heroImg from "../assets/hero_img.webp";
import arrow from "../assets/arrow.svg";

const Hero = () => {
  return (
    <section
      id="hero"
      style={{ backgroundImage: `url(${herobg})` }}
      className="relative flex min-h-[810px] w-full flex-col items-center justify-center 
              overflow-hidden bg-cover px-6 pt-[0px] 
              md:flex-row md:items-start md:px-10 md:pt-[200px]
              lg:justify-start lg:pt-[237px]
              xl:px-[159px] 3xl:justify-center"
    >
      {/* Hero left content section */}
      <div
        className="z-10 flex w-full flex-col items-center text-[#0e0e0e]
        lg:items-start
        3xl:max-w-[1200px]"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.44, 0, 0, 1] },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="h-auto w-full text-center text-[60px] font-semibold leading-[60px]
        tracking-[-3px] opacity-[0.8704]
        md:h-[160px] md:w-[749px] md:text-[80px] md:leading-[80px]
        lg:text-left"
        >
          You partner in Health & Wellness
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.44, 0, 0, 1] },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="mt-[25.5px] w-full text-center text-base font-medium
            leading-6 
            md:w-[523px] md:text-[20px] md:leading-[30px]
            lg:text-left"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          asperiores commodi fuga laborum quas quis placeat hic perferendis.
          Sapiente iure quidem ullam beatae maxime. Sequi eveniet voluptas
          nesciunt accusantium consequatur.
        </motion.p>
        <div
          className="mt-[55.5px] flex w-full flex-col items-center justify-center
                  gap-6 md:flex-row lg:justify-start"
        >
          <button
            className="group relative h-[56px] w-[180px] overflow-hidden
                rounded-full border-2 border-[#131316] text-base font-medium
                leading-[28px] text-[#445568] 
                shadow-[0_1px_2px_0_rgba (14,24,41,0.05)] 
                md: h-[60px] md:w-[202px] md:text-[18px]"
          >
            <div
              className="absolute -left-1 bottom-0 right-0 -z-10
          !mx-auto h-[0px] w-[207px] rounded-full bg-black transition-all
          duration-300 group-hover:h-[59px]"
            />
            <span className="group-hover:text-white">How web work</span>
          </button>
          <button
            className="flex h-[56px] w-[180px] items-center justify-center
                  gap-3 rounded-full text-base font-medium leading-[28px] text-[#445568] 
                  underline-offset-8 transition-all hover:underline
                  md:h-[60pxl md:w-[202px] md:text-[18px]"
          >
            <span>Learn More</span>
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
      {/* Hero  Banner */}
      <div>
        <img
          src={heroImg}
          alt=""
          className="absolute top-[140px] right-0 mx-auto hidden w-[900px]
          lg:block 3xl:right-[150px]"
        />
      </div>
    </section>
  );
};

export default Hero;
