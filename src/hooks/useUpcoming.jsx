import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUpcoming = () => {
    const axiosPublic = useAxiosPublic();

    const {data: upcoming= [], isPending: loading, refetch} = useQuery({
        queryKey: ['upcoming'],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/upcoming');
            return res.data;
        }
    })
    return [upcoming, loading, refetch]
};

export default useUpcoming;