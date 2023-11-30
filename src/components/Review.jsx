import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useReviews from "../hooks/useReviews";
import { useQuery } from "@tanstack/react-query";
import GetReviews from "./GetReviews";


const Review = ({id}) => {
    const {user} = useAuth();
    console.log(user);
    const axiosPublic = useAxiosPublic();

//get api to show reviews
    const {data: reviews= [], isPending: loading, refetch} = useQuery({
        queryKey: ['reviews'],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/reviews?id=${id}`)
            // const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    //

    const handleFeedback = (e) => {
        e.preventDefault();
        const form = e.target;
        const feedback = form.feedback.value;

        //TODO: user info for review, send userReview object to mongodb review collection and the use get method to recieve it from server.
        const userReview = {
            mealId: id,
            name: user?.displayName,
            email: user?.email,
            photo:user?.photoURL,
            review: feedback
        }
        

        {
            user ? 
            //send from here
            axiosPublic.post('/reviews', userReview)
            .then(res=>{
                console.log(res.data);
                e.target.reset();
                refetch();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Review Posted!",
                    showConfirmButton: false,
                    timer: 1500
                  });
            })

            :
            Swal.fire({
                title: "User not found",
                icon: "info",
                html: `
                  You must log in first to make a review
                `,
                showCloseButton: false,
                showCancelButton: false,
                timer: 1500,
                focusConfirm: false,
                confirmButtonText: `
                  <i class="fa fa-thumbs-up"></i> Okay
                `
              });
        }
      

    }
    return (
        <div>
            <section>
                <div className="text-white ">
                    <div className="container gap-8 md:gap-0 mx-auto flex flex-col md:flex-row my-6 md:my-24">
                      
                        {/*  */}
                        <div
                            className="  rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                            <p className="ml-6 text-blue-600 font-bold text-xl uppercase tracking-loose">REVIEW</p>
                            <p className="text-3xl md:text-5xl my-4 text-gray-900 leading-relaxed md:leading-snug">Leave a review!</p>
                            <p className="text-sm md:text-base leading-snug text-gray-900 text-opacity-100">
                                Let us know what you think about this item
                            </p>
                        </div>
                        {/*  */}
                        <div className="flex flex-col w-full lg:w-2/3 justify-center">
                            <div className="container w-full px-4">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div
                                            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                                            <div className="flex-auto p-5 lg:p-10">
                                                <form onSubmit={handleFeedback}>

                                                    <div className="relative w-full mb-3">
                                                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                            maxLength="300" name="feedback" rows="4"
                                                            htmlFor="message">Message</label>
                                                        <textarea
                                                            name="feedback"
                                                            cols="80"
                                                            className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                                                            placeholder="please type here..." required>

                                                        </textarea>
                                                    </div>
                                                    <div className="text-center mt-6">
                                                        <button className="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                                                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                                                            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                                                            <span className="relative text-white">Submit</span>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="">
                {/* <h3 className="text-5xl font-bold bg-transparent backdrop-blur-xl w-96 mx-auto text-gray-900 text-center pt-6 h-24 ">Reviews</h3> */}
               <div className="grid grid-cols-1 -mt-8 md:grid-cols-2 lg:grid-cols-3 gap-16 p-8">
               {
                    reviews.map(review=><GetReviews key={review._id} review={review}></GetReviews>)
                }
               </div>
            </div>
        </div>
    );
};

export default Review;