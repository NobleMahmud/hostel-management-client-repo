import { useEffect, useState } from "react";
import useMeals from "../../hooks/useMeals";
import MealTab from '../TabSystem/MealTab'
// import Filter from "../../components/Filter";
import SearchButton from "../../components/SearchButton";
import Filter2 from "../../components/Filter2";
import Loader from "../../components/Loader";
const Meals = () => {
    const [meals, loading, refetch] = useMeals();

    const [totalMeal, setTotalMeal] = useState(null);
    useEffect(() => {
        setTotalMeal(meals);
        console.log(totalMeal);
    }, [meals])
    // 
    console.log(totalMeal);
    // 
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
            <div className="flex md:flex-row-reverse flex-col items-center justify-center">
                <SearchButton meals={totalMeal} setTotalMeal={setTotalMeal}></SearchButton>
                <Filter2 setTotalMeal={setTotalMeal}></Filter2>
            </div>

            {
                totalMeal?.length > 0 ?
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4 mt-4 mb-20">
                        {
                            totalMeal.map(item => <MealTab key={item._id} item={item}></MealTab>)
                        }
                    </div>
                    :

                    // <img className="mx-auto" src="https://i.ibb.co/fHvTKTm/loading.gif" alt="" />
                    <Loader></Loader>

            }
        </div>
    );
};

export default Meals;