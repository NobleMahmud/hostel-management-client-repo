import React, { useEffect, useState } from 'react';
// import Banner from '../Banner/Banner';
import About from '../../About/About';
import About2 from '../../About/About2';
import Features from '../../Features/Features';
import SearchButton from '../../../components/SearchButton';
import TabSystem from '../../TabSystem/TabSystem';
import Experiment from '../../Experiment/Experiment';
import Plans from '../../Plans/Plans';
import useMeals from '../../../hooks/useMeals';
import ExtraSection from '../../ExtraSection/ExtraSection';


const Home = () => {
    const [meals, loading, refetch] = useMeals();
    const [totalMeal, setTotalMeal] = useState(null);
    useEffect(() => {
        setTotalMeal(meals);
        console.log(totalMeal);
    }, [meals])
    return (
        <div className='min-h-[50vh]'>
            {/* <Banner></Banner> */}
            <About2></About2>
            <SearchButton  meals={totalMeal} setTotalMeal={setTotalMeal}></SearchButton>
            <TabSystem meals={totalMeal}></TabSystem>
            <Features></Features>
            <Experiment></Experiment>
           <Plans></Plans>
           <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;