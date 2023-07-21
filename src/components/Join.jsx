import { join } from "../data";

const Join = () => {
  const { image, title, subtitle, btnText } = join;

  return (
    <section className="bg-neutral-500 min-h-[537px] mt-[165px] lg:pb-[100px] lg:mt-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:-space-x-12 -space-y-24 lg:-space-y-0">
          <div
            className="-mt-[80px] max-w-[276px] md:max-w-[442px] lg:max-w-full"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="200"
          >
            <img src={image} alt="" />
          </div>
          <div
            className="max-w-[600px] px-4 lg:px-0"
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="200"
          >
            <h2 className="text-white h1 md:text-[60px] leading-[62px] mb-4 lg:mb-6">
              Wanna join <span className="text-primary-200">&</span> have fun?
            </h2>
            <p className="text-body-sm text-white md:text-body-md mb-4 lg:mb-6">
              {subtitle}
            </p>
            <button className="btn btn-lg btn-primary">{btnText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
