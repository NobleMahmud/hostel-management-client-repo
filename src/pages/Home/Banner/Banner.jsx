// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import RowButton from '../../../RowCssComponent/RowButton/RowButton';
import slide1 from '../../../../src/assets/images/slide1.jpg'
import slide2 from '../../../../src/assets/images/slide2.jpeg'
import slide3 from '../../../../src/assets/images/slide3.jpg'
import slide4 from '../../../../src/assets/images/slide4.jpg'
import slide5 from '../../../../src/assets/images/slide5.jpg'
import slide6 from '../../../../src/assets/images/slide6.jpg'
import slide7 from '../../../../src/assets/images/slide7.jpg'


const Banner = () => {



    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            // autoplay={{
            //     delay: 2000,
            //     disableOnInteraction: false,
            // }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >

            <SwiperSlide>
                <img className='object-cover w-full lg:h-screen bg-black opacity-90' src={slide1} alt="" />
                <div className='absolute z-50 bottom-44 left-96'>
                    {/* <RowButton></RowButton> */}
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <img className='object-cover w-full lg:h-screen bg-black opacity-90' src={slide2} alt="" />
                <div className='absolute z-50 bottom-44 left-96'>
                    {/* <RowButton></RowButton> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full lg:h-screen bg-black opacity-90' src={slide3} alt="" />
                <div className='absolute z-50 bottom-44 left-96'>
                    {/* <RowButton></RowButton> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full lg:h-screen bg-black opacity-90' src={slide4} alt="" />
                <div className='absolute z-50 bottom-44 left-96'>
                    {/* <RowButton></RowButton> */}
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <img className='object-cover w-full lg:h-screen bg-black opacity-90' src={slide5} alt="" />
                <div className='absolute z-50 bottom-44 left-96'>
                    {/* <RowButton></RowButton> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full lg:h-screen bg-black opacity-90' src={slide6} alt="" />
                <div className='absolute z-50 bottom-44 left-96'>
                    {/* <RowButton></RowButton> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover w-full lg:h-screen bg-black opacity-90' src={slide7} alt="" />
                <div className='absolute z-50 bottom-44 left-96'>
                    {/* <RowButton></RowButton> */}
                </div>
            </SwiperSlide>

          
        </Swiper>
    );
};

export default Banner;