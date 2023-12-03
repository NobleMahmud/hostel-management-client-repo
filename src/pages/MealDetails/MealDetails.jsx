import { Rating } from "@smastrom/react-rating";
import { Link, useLoaderData } from "react-router-dom";
import Review from "../../components/Review";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaThumbsUp } from "react-icons/fa6"
import { FcLike } from "react-icons/fc";
import useAuth from "../../hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import { useEffect } from "react";
import useAxiosSecure from "../../hooks/useAuth/useAxiosSecure";

const MealDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const item = useLoaderData();
  console.log(item);
  const { _id, title, category, img, ingredients, description, price, rating, timeDate, likes, adminName, adminEmail } = item.data;
  console.log(title);

  //review count
  const id = _id;
  const axiosPublic = useAxiosPublic();
  // removed refetch and loading from here
  const { data: reviews = [] } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews?id=${id}`)
      return res.data;
    }
  })
  //user related api
  const currentUser = user?.email;
  console.log();
  
  const { data: users = []} = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${currentUser}`)
      return res.data;
    }
  })
  //
  const { data: totalLikes = [], isPending: loading, refetch } = useQuery({
    queryKey: ['likes'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/meals/${id}`)
      return res.data;
    }
  })
  //

  // const [like, setLike] = useState(false)
  //like related work
  const includesEmail = totalLikes?.likes?.includes(user?.email)
  const handleLike = async () => {


    const likedUser = {
      email: user?.email,
    }

    // user ? alert('liked') : alert('log in')
    // setLike(!like)
    // alert(like)
    // 
    if (user && !includesEmail) {
      const likeUpdate = await axiosPublic.patch(`/meals/${_id}`, likedUser)
      console.log(likeUpdate);
      if (likeUpdate.data.modifiedCount > 0) {
        refetch();
      }
    }

  }

  const requestedMeal = {
    user: user?.displayName,
    email: currentUser,
    mealId: _id,
    title: title,
    likes: likes?.length,
    reviews: reviews?.length,
    status: 'pending'
  }
  console.log(requestedMeal);
  const handleRequest = () => {
    user ? 
    users?.badges?.length>1 || users?.badges?.length==null? 

    axiosSecure.post('/mealRequests', requestedMeal)
    .then(res=>{console.log(res.data)}) &&
    Swal.fire({
      position: "center",
      icon: "success",
      title: 'MEAL REQUESTED',
      showConfirmButton: false,
      timer: 1500
    }) && refetch()
    : 
    Swal.fire({
      icon: 'warning',
      title: 'BUY A PLAN FIRST',
      timer: 2000,
      customClass: {
        background: ' #ffcc00',
      }
    })
      : Swal.fire({
        icon: 'info',
        title: 'PLEASE LOG IN FIRST',
        timer: 1500,
        customClass: {
          background: ' #ffcc00',
        }
      })

  }
  console.log('current user', users?.badges?.length);
  console.log('totalLikes', totalLikes?.likes);

  console.log('includesEmail');

  return (
    <div style={{ backgroundImage: `url('${img}')` }} className="bg-fixed bg-no-repeat">
      {/* meal card start */}
      <div className="z-30 bg-cover bg-no-repeat relative items-center justify-center w-full h-full overflow-auto">
        <div className="inset-0 h-screen bg-cover bg-center"

        >
        </div>
        {/* <div  className="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div> */}
        <div className="absolute inset-0  rounded-2xl z-30  flex flex-col items-center justify-center">

          <div className="  w-full h-full bg-cover bg-center"
          >

            <div className="grid grid-cols-10 gap-1  rounded-2xl">
              <div className="absolute right-0 mt-20 glass rounded-full">
              </div>
              <div className="relative  my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">


                {/* <div className="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"></div> */}
              </div>

              <div className="col-span-12  rounded-2xl sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">

                <div className="relative w-full md:w-[420px] lg:w-full rounded-2xl lg:ml-8 ml-0 md:ml-0 bg-pink-900 p-2 backdrop-blur-sm  bg-opacity-50">
                  <div className="md:w-[400px] w-full lg:w-full">
                    <div className="flex justify-between m-0 p-4">
                      <div className="flex flex-col h-full w-full  mx-auto bg-gray-800 rounded-lg">
                        <img
                          className="rounded-lg object-cover w-full h-[300px] rounded-b-none"
                          src={img}
                          alt="thumbnail"
                          loading="lazy"
                        />
                        <div className="flex justify-between -mt-4 px-4">
                          <span
                            className="inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 pt-2"
                          >{title}</span
                          >
                          <span
                            className="flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-800 py-1 px-2 text-xs font-medium"
                          >
                            <p className="text-blue-500 font-semibold text-lg">
                              Reviews: {reviews?.length}
                            </p>
                          </span>
                        </div>
                        <div className="py-2 px-4">
                          <h1
                            className="text-xl font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer"
                          >

                          </h1>
                          <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            readOnly
                            className=""
                          />
                          {/* <Rating value={4} readonly /> */}
                        </div>
                        <div className="px-4 space-y-2 ">
                          <p className="text-gray-300 font-normal leading-5 tracking-wide">
                            {description}
                          </p>
                          <div className="flex justify-between items-end">
                            <div className="w-1/2">
                              <p className='text-gray-500 font-normal  leading-5 tracking-wide'>
                                Ingredients:
                                {
                                  ingredients.map((ing, idx) => <p key={idx}>{idx + 1}. {ing} </p>)
                                }
                              </p>
                            </div>
                            <div onClick={handleRequest}>
                              <div className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                                {/* <!-- Top glass gradient --> */}
                                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                {/* <!-- Bottom gradient --> */}
                                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                {/* <!-- Left gradient --> */}
                                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                {/* <!-- Right gradient --> */}
                                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                <span className="relative">Request meal</span>
                              </div>
                            </div>

                            {/* <button className="btn mt-8 px-2">
                              Request meal
                            </button> */}

                          </div>
                          {/* <router-link
              to="blog/detail"
              className="font-bold hover:text-blue-400 text-gray-100"
            ></router-link
            

            > */}
                        </div>
                        <div className="flex flex-row items-end h-full w-full px-4 mt-4">
                          <div className="flex border-t border-gray-700 w-full py-4">
                            <div
                              className="flex items-center space-x-3 border-r border-gray-700 w-full"
                            >

                              <img
                                className="object-cover w-8 h-8 border-2 border-white rounded-full"
                                src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                alt="profile users"
                                loading="lazy"
                              />
                              <div className="">
                                <p className="text-sm font-semibold tracking-wide text-gray-200">
                                  {adminName}
                                </p>
                                <p className="text-xs font-light tracking-wider text-gray-300">
                                  {timeDate}
                                </p>

                              </div>
                              <Link to="/meals"><a className="relative inline-flex items-center justify-center p-4 px-2 py-0 lg:px-6 lg:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-300 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-gray-300 uppercase transition-all duration-300 transform group-hover:translate-x-full ease">See All</span>
                                <span className="relative invisible">Button Text</span>
                              </a></Link>
                              <button className={`transition-all duration-300 ${includesEmail ? 'opacity-50 cursor-not-allowed' : 'hover:text-blue-800'
                                }`}>
                                {
                                  includesEmail ? <button disabled={includesEmail} onClick={handleLike}><FcLike className="text-xl text-gray-300"></FcLike></button>
                                    :
                                    <button onClick={handleLike}><FaThumbsUp className="text-xl text-gray-300 hover:text-blue-800 transition-transform duration-1000" /></button>
                                }
                              </button>
                            </div>

                            <div className="flex items-center flex-shrink-0 px-2">
                              <div className="flex items-center space-x-1 text-gray-400">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                  />
                                </svg>
                                <p className="font-medium">{totalLikes?.likes?.length}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* meal card end*/}
      <div>
        {/* <h3>okkkkkkkk</h3> */}
        <Review id={_id}></Review>
      </div>
      {/* <GetReviews id={_id}></GetReviews> */}
    </div>
  );
};

export default MealDetails;