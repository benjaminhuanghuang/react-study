// Assets
import arrow from "../assets/arrow.svg";
import security from "../assets/icon-1.png";
import health from "../assets/icon-2.png";
import care from "../assets/icon-3.png";
import doc from "../assets/icon-4.png";
import serve from "../assets/services-1.png";
import provide from "../assets/banner-11.png";
import banner from "../assets/banner_right.png";
import patient from "../assets/banner-six-2.png";

const Features = () => {
  return (
    <section
      id="features"
      className="flex w-full flex-col items-center justify-center gap-6 border-t border-[#e2e4e9]
    px-6 py-16 md:px-10 xl:px-[159px]"
    >
      <div
        className="flex w-full flex-col items-start justify-between gap-8 
      xl:flex-row xl:items-end 3xl:max-w-[1200px]"
      >
        <div className="flex flex-col">
          <p
            className="text-gradient text-sm font-bold leading-6 
          md:text-base"
          >
            who we are
          </p>
          <h3
            className="mt-3 text-3xl font-bold leading-tight tracking-[-0.72px]
            .text-[#01829] md: text-[36px] md: leading-[44px]"
          >
            The Great Place Of Eyecare Hospital Center
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vero
            tempore, at natus fugit quasi doloremque excepturi similique quaerat
            tempora ex itaque rem assumenda ipsum in corporis quas eos cumque.
          </p>
        </div>
        <button
          className="flex h-[56px] w-[180px] items-center justify-center
                  gap-3 rounded-full text-base font-medium leading-[28px] text-[#445568] 
                  underline-offset-8 transition-all hover:underline
                  md:h-[60pxl md:w-[202px] md:text-[18px]"
        >
          <span className="group-hover:invert">Learn More</span>
          <img src={arrow} alt="" />
        </button>
      </div>
      {/* First row */}
      <div
        className="relative mt-5 flex w-full flex-col
            items-center justify-between gap-8 md:mt-0 md:flex-row
            xl:gap-0 3xl:max-w-[1200px]"
      >
        {/* Card */}
        <div
          className="card-gradient-one flex h-[600px] w-full
        flex-col items-center justify-between overflow-hidden rounded-[40px]
        border border-[#ced5de] lg:w-[486px]"
        >
          {/* Card wrapper */}
          <div className="w-full px-12 pb-8 pt-12">
            <img src={security} alt="" />
            <h4 className="mt-6 text-[24px] font-bold leading-8 tracking-[-0.384px] text-[#302b45]">
              Unique Approach To Your Health Needs
            </h4>
            <p className="mt-4 text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60">
              Embrace the convenience of healthcare with our Telemedicine
              Services at Mavis Clinic. Experience virtual consultations
            </p>
          </div>
          <img src={serve} alt="" className="w-[400px]" />
        </div>
        {/* Card */}
        <div
          className="card-gradient-two flex h-[600px] w-full
        flex-col items-center justify-between overflow-hidden rounded-[40px]
        border border-[#ced5de] lg:w-[486px]"
        >
          {/* Card wrapper */}
          <div className="w-full px-12 pb-8 pt-12">
            <img src={security} alt="" />
            <h4 className="mt-6 text-[24px] font-bold leading-8 tracking-[-0.384px] text-[#302b45]">
              Unique Approach To Your Health Needs
            </h4>
            <p className="mt-4 text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60">
              Embrace the convenience of healthcare with our Telemedicine
              Services at Mavis Clinic. Experience virtual consultations
            </p>
          </div>
          <img
            src={patient}
            alt=""
            className="-mt-28 absolute right-0 w-[35%] bottom-0"
          />
        </div>
      </div>
      {/* Second row */}
      <div
        className="relative mt-5 flex w-full flex-col
            items-center justify-between gap-8 md:mt-0 md:flex-row
            xl:gap-0 3xl:max-w-[1200px]"
      >
        {/* Card */}
        <div
          className="card-gradient-three flex h-[600px] w-full
        flex-col items-center justify-between overflow-hidden rounded-[40px]
        border border-[#ced5de] lg:w-[486px]"
        >
          {/* Card wrapper */}
          <div className="w-full px-12 pb-8 pt-12">
            <img src={security} alt="" />
            <h4 className="mt-6 text-[24px] font-bold leading-8 tracking-[-0.384px] text-[#302b45]">
              Unique Approach To Your Health Needs
            </h4>
            <p className="mt-4 text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60">
              Embrace the convenience of healthcare with our Telemedicine
              Services at Mavis Clinic. Experience virtual consultations
            </p>
          </div>
          <img
            src={banner}
            alt=""
            className="-mt-28 relative w-[65%] left-36"
          />
        </div>
        {/* Card */}
        <div
          className="card-gradient-four flex h-[600px] w-full
        flex-col items-center justify-between overflow-hidden rounded-[40px]
        border border-[#ced5de] lg:w-[486px]"
        >
          {/* Card wrapper */}
          <div className="w-full px-12 pb-8 pt-12">
            <img src={health} alt="" />
            <h4 className="mt-6 text-[24px] font-bold leading-8 tracking-[-0.384px] text-[#302b45]">
              Unique Approach To Your Health Needs
            </h4>
            <p className="mt-4 text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60">
              Embrace the convenience of healthcare with our Telemedicine
              Services at Mavis Clinic. Experience virtual consultations
            </p>
          </div>
          <img src={provide} alt="" className="w-[400px]" />
        </div>
      </div>
    </section>
  );
};

export default Features;
