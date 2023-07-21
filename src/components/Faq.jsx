import { faq } from "../data";
import Accordion from "./Accordion";

const Faq = () => {
  const { icon, title, accordions } = faq;

  return (
    <section className="section mt-[480px] lg:mt-[200px]">
      <div className="max-w-[768px] mx-auto lg:bg-faq bg-no-repeat bg-custom bg-center lg:pt-6 lg:h-[1120px]">
        <div className="section-title-group justify-start lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0">
          <img src={icon} alt="" className="lg:hidden" />
          <h2 className="h2 section-title lg:mt-[100px]">
            {title}
            <span className="text-primary-200">.</span>
          </h2>
        </div>
        <div
          className="flex flex-col gap-y-4"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="200"
        >
          {accordions.map((accordion, index) => {
            return <Accordion accordion={accordion} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
