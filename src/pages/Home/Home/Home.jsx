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
// import About3 from '../../About/About3';

const Home = () => {
    const [meals, loading, refetch] = useMeals();
    // const [meals, setMeals] = useState([]);
    // useEffect(()=>{
    //     fetch('/meals.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data.length);
    //         setMeals(data)
    //     })
    // },[])
    return (
        <div className='min-h-[50vh]'>
            {/* <Banner></Banner> */}
            <About2></About2>
            <SearchButton></SearchButton>
            <TabSystem meals={meals}></TabSystem>
            <Features></Features>
            <Experiment></Experiment>
           <Plans></Plans>
           <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;