import React from 'react';
import bg from "../../assets/images/bg.gif"

const Features = () => {
    return (
        <div className='mb-10 mt-36 px-8'>
            <div className="max-w-7xl max-md:max-w-xl mx-auto font-[sans-serif] text-[#333]">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-12 items-center">
        
        <div className="xl:col-span-2">
          <div>
            <h2 className="sm:text-3xl text-2xl font-extrabold">Why Choose HungryHall?</h2>
            <p className="text-sm text-gray-500 mt-6">At HungryHall, we prioritize your well-being. Our canteen meals offer a diverse and nutritious menu that caters to different tastes and dietary preferences. From wholesome comfort foods to vibrant, health-conscious options, we've got your cravings covered.</p>
          </div>
          <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-8 mt-12">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
              </svg>
              <h6 className="text-base font-semibold ml-4">Nutritious Variety</h6>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
              </svg>
              <h6 className="text-base font-semibold ml-4">Quality Ingredients</h6>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
              </svg>
              <h6 className="text-base font-semibold ml-4">Affordable Convenience</h6>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
              </svg>
              <h6 className="text-base font-semibold ml-4"> Culinary Expertise</h6>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
              </svg>
              <h6 className="text-base font-semibold ml-4">Customized Meal Plans</h6>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" className="fill-green-500 shrink-0" viewBox="0 0 24 24">
                <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000"></path>
              </svg>
              <h6 className="text-base font-semibold ml-4"> Timely Delivery</h6>
            </div>
          </div>
        </div>
        <div>
          <img src={bg} className="w-full rounded-md" />
        </div>
      </div>
    </div>
        </div>
    );
};

export default Features;