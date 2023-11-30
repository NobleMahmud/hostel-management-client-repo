import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useReviews = () => {
    const axiosPublic = useAxiosPublic();

    const {data: reviews= [], isPending: loading, refetch} = useQuery({
        queryKey: ['reviews'],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/reviews');
            return res.data;
        }
    })
    return [reviews, loading, refetch]
};

export default useReviews;