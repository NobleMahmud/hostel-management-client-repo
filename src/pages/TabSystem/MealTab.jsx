import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MealCard from "../MealCard/MealCard";


const MealTab = ({items}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    return (
        <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='grid md:grid-cols-3 gap-6'>
        {items.map((item, idx)=><MealCard 
         key={idx} 
         item={item}></MealCard>)}
        </div>
        </SwiperSlide>
       
      </Swiper>
    );
};

export default MealTab;