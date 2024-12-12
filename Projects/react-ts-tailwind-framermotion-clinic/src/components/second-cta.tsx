import { motion } from "framer-motion";
// Assets
import dotBg from "../assets/dot-bg.svg";
import ctaGradient from "../assets/cta-gradient.svg";
import checkmark from "../assets/checkmark.svg";
import arrow from "../assets/arrow.svg";
import woman from "../assets/banner-women.png";

const SecondCTA = () => {
  return (
    <section
      id="get-app"
      className="relative w-full overflow-hidden px-6 py-10 
      md:px-10 md:py-[127px]
      xl:px-[159px]"
    >
      {/* Dot & Gradients */}
      <img src={dotBg} alt="" className="absolute top-0 -z-20 w-full" />
      <img
        src={ctaGradient}
        alt=""
        className="absolute right-0 top-0 -z-[12]"
      />

      {/* Bottom gradient */}
      <div
        className="absolute bottom-[-540px] left-[292px] -z-[9] h-[772px] w-full bg-[#fffeff]
      blur-[150px] 
      md:x-[785px] 3xl:mx-auto 3xl:w-[1200px] "
      ></div>

      <div className="z-10 w-full py-[31px] md:w-[576px 3xl:mx-auto 3xl:w-[1200px]">
        <motion.h2
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
          className="text-4xl font-bold  leading-tight tracking-[-0.96px]
         text-[#0E1829] md:w-[576px] md:text-[48px] md:leading-[60px]"
        >
          Seamless transaction At Clinic's Payment Center
        </motion.h2>
        {/* List Items */}
        <motion.ul
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.2,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="mt-8 max-w-md list-inside space-y-4 text-base font-medium
        leading-7 text-[#647187] md:text-[18px]"
        >
          <li className="flex items-center">
            <img
              src={checkmark}
              alt=""
              className="me-3 h-5 w-5 flex-shrink-0"
            />
            24*7 Emergency Service
          </li>
          <li className="flex items-center">
            <img
              src={checkmark}
              alt=""
              className="me-3 h-5 w-5 flex-shrink-0"
            />
            Cashless Payment
          </li>
          <li className="flex items-center">
            <img
              src={checkmark}
              alt=""
              className="me-3 h-5 w-5 flex-shrink-0"
            />
            Insurance Checklist Available
          </li>
          <li className="flex items-center">
            <img
              src={checkmark}
              alt=""
              className="me-3 h-5 w-5 flex-shrink-0"
            />
            Access to all features
          </li>
        </motion.ul>
        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.4, ease: [0.44, 0, 0, 1] },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="z-30 mt-12 flex gap-6 md:mt-[78px]"
        >
          <button
            className="group relative h-[56px] w-[180px] overflow-hidden 
          rounded-full border-2 border-[#131S316] text-base font-medium leading-[28px] 
          text-[#445568] shadow-[0_1px_2px_0_rgba(14,24,41,0.05] md:h-[60px] md:w-[202px] md:text-[18px]"
          >
            <div
              className="absolute -left-1 bottom-0 right-0 -z-10 !mx-auto h-[0px] 
            w-[207px] rounded-full bg-violet-900 transition-all duration-300 group-hover:h-[59px]"
            ></div>
            <span className="group-hover:text-white">Book Now</span>
          </button>

          <button
            className="flex h-[56px] w-[180px] items-center justify-center
                  gap-3 rounded-full text-base font-medium leading-[28px] text-[#445568] 
                  underline-offset-8 transition-all hover:underline
                  md:h-[60pxl md:w-[202px] md:text-[18px]"
          >
            <span>Appointment</span>
            <img src={arrow} alt="" />
          </button>
        </motion.div>
      </div>
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay: 0.4, ease: [0.44, 0, 0, 1] },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        src={woman}
        alt=""
        className="absolute bottom-0 left-[550px] -z-10 mx-auto hidden w-[660px]
       md:block 3xl:left-[600px] 3xl:right-0"
      />
    </section>
  );
};

export default SecondCTA;
