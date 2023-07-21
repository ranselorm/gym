import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const CommunitySlider = ({ testimonials }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={32}
      centeredSlides={"auto"}
      grabCursor={true}
      modules={[]}
    >
      {testimonials.map((testimonial, index) => {
        const { image, name, message } = testimonial;
        return (
          <SwiperSlide>
            <div className="relative">
              <div>
                <img src={image} alt="" />
              </div>
              <div className="absolute bottom-[20px] text-white p-[20px] text-sm text-center">
                <div className="mb-8 text-lg font-light italic">{message}</div>
                <div className="flex items-center justify-center gap-x-[3px] font-bold text-[20px]">
                  <span className="text-[30px] text-primary-200">~</span>
                  {name}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CommunitySlider;
