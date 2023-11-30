import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useMeals = () => {
    const axiosPublic = useAxiosPublic();

    const {data: meals = [], isPending: loading, refetch} = useQuery({
        queryKey: ['meals'],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/meals');
            return res.data;
        }
    })
    return [meals, loading, refetch]
};

export default useMeals;