import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import MealTab from "./mealTab";
import { useEffect, useRef, useState } from "react";
// import MealCard from "../MealCard/MealCard";

const TabSystem = ({ meals }) => {
  const allButton = useRef();
  // console.log('meals: ', meals);
  // const {mealTitle, mealCategory, mealImage, ingredients, description, price, rating, timeDate, likes, reviews, adminName, adminEmail} = meals;

  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner']
  const category = "Dinner"
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const all = meals;
  const breakfast = meals.filter(item => item.category === 'Breakfast')
  const lunch = meals.filter(item => item.category === 'Lunch')
  const dinner = meals.filter(item => item.category === 'Dinner')
useEffect(()=>{
  allButton.current.click();
},[])
  return (
    <div className='my-16'>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => {
        setTabIndex(index)
        console.log(index);
      }}>
        <TabsHeader>
          <Tab ref={allButton} value="All">All</Tab>
          <Tab value="Breakfast">BreakFast</Tab>
          <Tab value="Lunch">Lunch</Tab>
          <Tab value="Dinner">Dinner</Tab>

          {/* {meals.map(({ category, title }) => (
          <Tab key={title} value={category}>
            {category}
          </Tab>
        ))} */}
        </TabsHeader>
        <TabsBody>
          {/* {all.map(({ category, title }) => (
            <TabPanel key={title} value={category}>
              {title} {category}
            </TabPanel>
          ))} */}
         

         

          {/* <TabPanel>
          <MealTab items={all}></MealTab>
        </TabPanel>

        <TabPanel>
          <MealTab items={breakfast}></MealTab>
        </TabPanel>

        <TabPanel>
        <MealTab items={lunch}></MealTab>
        </TabPanel>

        <TabPanel>
        <MealTab items={dinner}></MealTab>
        </TabPanel> */}

 {/* Render content for the "All" tab */}
 <TabPanel value="All">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-10">
  {all.map((item, idx) => (
      <div key={idx}>
        <MealTab item={item}></MealTab>
      </div>
    ))}
  </div>
  </TabPanel>

  {/* Render content for other tabs */}
  <TabPanel value="Breakfast">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-10">
{all
      .filter(({ category }) => category === 'Breakfast')
      .map((item, idx) => (
        <div key={idx}>
          <MealTab item={item}></MealTab>
        </div>
      ))}
</div>
  </TabPanel>

  <TabPanel value="Lunch">
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-10">
   {all
      .filter(({ category }) => category === 'Lunch')
      .map((item, idx) => (
        <div key={idx}>
          <MealTab item={item}></MealTab>
        </div>
      ))}
   </div>
  </TabPanel>

  <TabPanel value="Dinner">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-10">
    {all
      .filter(({ category }) => category === 'Dinner')
      .map((item, idx) => (
        <div key={idx}>
          <MealTab item={item}></MealTab>
        </div>
      ))}
    </div>
  </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default TabSystem;