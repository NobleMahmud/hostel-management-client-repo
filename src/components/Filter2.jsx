import { useState } from "react";
import useMeals from "../hooks/useMeals";

const Filter2 = ({ setTotalMeal }) => {

    const [meals, loading, refetch] = useMeals();

    const [selectedCategory, setSelectedCategory] = useState('');
    const[price, setPrice] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    console.log('Selected category:', category);

    const categoryResult = meals.filter(result => result.category == category);
        console.log(categoryResult);
        setTotalMeal(categoryResult)

        if(category==='All'){
            setSelectedCategory(category);
            setTotalMeal(meals)
        }


  };

  const handlePriceChange = (price) => {
    setPrice(price);
    // console.log('Selected price:', price);
    const lowPrice = +price.split(' ')[0];
    const highPrice = +price.split(' ')[2];
    // console.log(lowPrice, '-', highPrice);
    const five =lowPrice>0 && highPrice<=5
    const ten = lowPrice>=5 && highPrice<=10
    const twentyLess = lowPrice>=10 && highPrice<=20
    const twentyMore = lowPrice>20
    if(five){
        console.log('price is 1-5 dollars');
      const item =  meals.filter(meal=>meal?.price>0 && meal?.price<=5)
        setTotalMeal(item)
    }
    if(ten){
        console.log('price is 5-10 dollars');
        const item =  meals.filter(meal=>meal?.price>=5 && meal?.price<=10)
        setTotalMeal(item)
    }
    if(twentyLess){
        console.log('price is 10-20 dollars');
        const item =  meals.filter(meal=>meal?.price>=10 && meal?.price<=20)
        setTotalMeal(item)
    }
    if(twentyMore){
        console.log('price is more than 20 dollars');
        const item =  meals.filter(meal=>meal?.price>20)
        setTotalMeal(item)
        
    }

console.log(lowPrice);
  
  };


    return (
        <div className="pt-6 lg:ml-4 ml-0 md:ml-2">
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1">Filter by category</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu  p-2 shadow bg-base-100 rounded-box w-52">
                    <li 
                    className="hover:bg-gray-200 rounded-box"
                    onClick={() => handleCategoryChange('All')}
                    ><a>All</a>
                    </li>
                    <li 
                    className="hover:bg-gray-200 rounded-box"
                    onClick={() => handleCategoryChange('Breakfast')}
                    ><a>Breakfast</a>
                    </li>
                    <li 
                    className="hover:bg-gray-200 rounded-box"
                    onClick={() => handleCategoryChange('Lunch')}
                    ><a>Lunch</a>
                    </li>
                    <li 
                    className="hover:bg-gray-200 rounded-box"
                    onClick={() => handleCategoryChange('Dinner')}
                    ><a>Dinner</a>
                    </li>
                </ul>
            </div>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1">Filter by Price</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu  p-2 shadow bg-base-100 rounded-box w-52">
                    <li
                     className="hover:bg-gray-200 rounded-box"
                     onClick={() => handlePriceChange('1 - 5')}
                     ><a>$1 - $5</a>
                     </li>
                    <li
                     className="hover:bg-gray-200 rounded-box"
                     onClick={() => handlePriceChange('5 - 10')}
                     ><a>$5 - $10</a>
                     </li>
                    <li
                     className="hover:bg-gray-200 rounded-box"
                     onClick={() => handlePriceChange('10 - 20')}
                     ><a>$10 - $20</a>
                     </li>
                    <li
                     className="hover:bg-gray-200 rounded-box"
                     onClick={() => handlePriceChange('20.00000000000001')}
                     ><a>$20+</a>
                     </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Filter2;