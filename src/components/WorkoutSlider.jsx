import { workouts } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../workoutSlider.css";
import { Navigation } from "swiper";

const WorkoutSlider = () => {
  const { programs } = workouts;

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={28}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className="workoutSlider"
    >
      {programs.map((program, index) => {
        return (
          <SwiperSlide
            key={index}
            className="max-w-[320px] max-h-[320px] relative"
          >
            <img
              src={program.image}
              alt="program"
              className="w-full h-full object-cover"
            />
            <div className="absolute bg-white left-[20px] bottom-[20px] px-[14px] h-[26px] flex items-center rounded-[1px]">
              <div className="font-primary font-semibold text-sm text-neutral-500">
                {program.name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkoutSlider;
