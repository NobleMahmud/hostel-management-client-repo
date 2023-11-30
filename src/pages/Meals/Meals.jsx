import { useState } from "react";
import useMeals from "../../hooks/useMeals";
import MealTab from '../TabSystem/MealTab'
import Filter from "../../components/Filter";
import SearchButton from "../../components/SearchButton";
const Meals = () => {
    const [meals, loading, refetch] = useMeals();
    return (

        <div>

            <div className="relative flex h-screen">
                <img src="https://i.ibb.co/85kzGwB/l-intro-1676991496.jpg" alt="image" className="h-full w-full object-cover object-center" />
                <div className="absolute top-1/2 left-10 max-w-full md:left-20">
                    <div className=" text-white text-3xl md:text-5xl py-4">Dive into Deliciousness... </div>
                    <div className="bg-white text-5xl text-center lg:text-7xl font-bold text-black mix-blend-screen px-10 py-5 ">Full Menu</div>
                </div>
            </div>
            {/* banner */}
            <SearchButton></SearchButton>
            <Filter></Filter>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4 my-20">
                {
                    meals.map(item => <MealTab key={item._id} item={item}></MealTab>)
                }
            </div>
        </div>
    );
};

export default Meals;