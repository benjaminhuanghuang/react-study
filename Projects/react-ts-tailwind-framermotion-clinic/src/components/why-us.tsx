import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

// Assets
import whyGradient from "../assets/why-gradient.svg";
import emergency from "../assets/doc-0.jpg";
import dentistry from "../assets/doc-1.jpg";
import surgeical from "../assets/doc-2.jpg";
import health from "../assets/doc-3.jpg";

const WhyUs = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(1);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start center", "end start"],
  });
  const height = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["12.91512915129151%"]
  );
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.125) {
      setPosition(1);
    } else if (latest > 0.125 && latest < 0.25) {
      setPosition(2);
    } else if (latest > 0.25 && latest < 0.375) {
      setPosition(3);
    } else {
      setPosition(4);
    }
  });

  return (
    <section
      id="service"
      className="relative flex w-full flex-col-reverse items-center justify-center
       gap-16 px-6 pb-16 pt-6 md:flex-row md:px-10 md:pb-7 md:pt-24 xl:px-[159px]"
    >
      <img src={whyGradient} className="absolute bottom-0 left-0" />
      <div className="relative flex w-full flex-col-reverse gap-16 md:flex-row 3xl:max-w-[1200px]">
        {/* Left panel */}
        <div
          className="relative z-10 h-[350px] w-full object-cover sm:h-[450px] 
          md:h-[591px] md:min-w-[400px] xl:min-w-[592px]"
        >
          <img
            src={emergency}
            alt=""
            className="absolute z-[13] h-full w-full scale-[1.01] object-cover translation-all duration-300"
          />
        </div>

        <div ref="cardRef" className="flex flex-col pt-[0px]">
          <h3
            className="text-[32px] font-bold leading-[44px] tracking-[-0.72px]
        text- [#0e1829] md: text-[36px]"
          >
            Medical departments.
          </h3>
          {/* Right panel */}
          <div className="relative mt-6 flex w-full flex-col times-center justify-center gap-6">
            {/* Border line content */}
            <div className="[544px] absolute left-0 top-0 f-full w-1 bg-[#eacef0]">
              <motion.div style={{
                height: height
              }}className="h-[70px] w-1 rounded-full bg-violet-700"/>
            </div>
            <div className="py-4 pl-6 transition-all">
              <h5 className="text-[20px] font-bold leading-[30px] text-[#0e1829]">
                Emergency Department
              </h5>
              <p className="mt-2 text-base font-medium leading-6 text-[0445469]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                laboriosam atque consectetur culpa! Ullam hic corrupti, minus id
                voluptas accusamus harum reiciendis autem voluptatibus totam
                molestias, itaque excepturi esse. Doloremque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
