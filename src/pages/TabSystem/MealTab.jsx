import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Link, Navigate, useLocation } from 'react-router-dom';


const MealTab = ({ item }) => {
  const { _id, title, category, img, ingredients, description, price, rating, timeDate, likes, reviews, adminName, adminEmail } = item;
  // console.log(item);
  
  const axiosPublic = useAxiosPublic();

  const location = useLocation();
  <Navigate to="/login" state={{from: location}} replace></Navigate>
  return (
    <div>
      <div
        className="bg-white shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4">
        <img src={img} className="w-full object-cover h-[250px] rounded-2xl" />
        <div className="p-6">
          <h3 className="text-xl text-[#333] font-extrabold">{title}</h3>
          <Rating
            style={{ maxWidth: 100 }}
            value={rating}
            readOnly
            className=""
          />
          <div className="mt-8 flex items-center">
            <h3 className="text-xl text-[#333] font-bold flex-1">${price}</h3>
            <div className="bg-gray-50 flex items-center justify-center cursor-pointer">
              <Link to={`/meals/${_id}`}><button type="button"
                className="px-6 py-2.5 rounded-md flex items-center text-[#333] text-sm tracking-wider font-semibold border-2 border-[#333] outline-none hover:text-white hover:bg-[#333] active:bg-[#111] transition-all">
                Details
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealTab;