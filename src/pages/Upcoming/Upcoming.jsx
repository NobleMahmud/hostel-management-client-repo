import useUpcoming from "../../hooks/useUpcoming";
import UpcomingMeal from "./UpcomingMeal";

const Upcoming = () => {
    const [upcoming] = useUpcoming();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            {
                upcoming.map(item=><UpcomingMeal key={item._id} item={item}></UpcomingMeal>)
            }
        </div>
    );
};

export default Upcoming;