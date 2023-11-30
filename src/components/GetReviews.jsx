
const GetReviews = ({review}) => {
    // const {_id, name, email, photo, review: singleReview} = review;
   console.log(review.name);
    return (
        <div className="mt-14">
            <div className="  bg-gray-200 rounded-2xl p-8">
                {/* <!-- Profile and Rating --> */}
                <div className="flex justify justify-between">
                    <div className="flex gap-2">
                        <div className="w-7 h-7 text-center rounded-full bg-red-500">{review?.name?.slice(0,1)}</div>
                        <span>{review?.name}</span>
                    </div>
                    <div className="flex p-1 gap-1 text-orange-300">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half"></ion-icon>
                    </div>
                </div>
                <div className="text-sm text-gray-600 mt-2">
                    {review?.review}
                </div>
              
            </div>

           
        </div>
    );
};

export default GetReviews;