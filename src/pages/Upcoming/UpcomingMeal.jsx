import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const UpcomingMeal = ({item}) => {
    const { _id, title, category, img, ingredients, description, price, rating, timeDate, likes, adminName, adminEmail } = item;
    console.log(item);
    return (
        <div className="md:w-[400px] w-full lg:w-full p-4   ">
                    <div className="flex justify-between m-0 p-4">
                      <div className="flex flex-col h-full w-full  mx-auto bg-[#F2F2F2] drop-shadow-xl backdrop-blur-lg rounded-xl border-4 ">
                        <img
                          className="rounded-lg object-cover w-full h-[300px] rounded-b-none"
                          src={img}
                          alt="thumbnail"
                          loading="lazy"
                        />
                        <div className="flex justify-between -mt-4 px-4  backdrop-blur-2xl">
                          <span
                            className="inline-block backdrop-blur-2xl ring-black rounded-full text-lg font-semibold tracking-wide text-gray-900 opacity-80 px-3 pt-2"
                          >{title}</span
                          >
                          {/* <span
                            className="flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-800 py-1 px-2 text-xs font-medium"
                          >
                            <p className="text-blue-500 font-semibold text-lg">
                              Reviews: {reviews?.length}
                            </p>
                          </span> */}
                        </div>
                        <div className="py-2 px-4">
                         
                          {/* <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            readOnly
                            className=""
                          /> */}
                          {/* <Rating value={4} readonly /> */}
                        </div>
                        <div className="px-4 space-y-2 ">
                          <p className="text-gray-600 font-normal leading-5 tracking-wide">
                            {description}
                          </p>
                          <div className="flex justify-between items-end">
                            <div className="w-1/2">
                              <p className='text-gray-700 font-normal  leading-5 tracking-wide'>
                                Ingredients:
                                {
                                  ingredients.map((ing, idx) => <p key={idx}>{idx + 1}. {ing} </p>)
                                }
                              </p>
                            </div>

                          </div>
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
                                <p className="text-sm font-semibold tracking-wide text-gray-700">
                                  {adminName}
                                </p>
                                <p className="text-xs font-light tracking-wider text-gray-300 text-gray-700">
                                  {timeDate}
                                </p>

                              </div>
                              {/* <Link to="/meals"><a className="relative inline-flex items-center justify-center p-4 px-2 py-0 lg:px-6 lg:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-300 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-gray-300 uppercase transition-all duration-300 transform group-hover:translate-x-full ease">See All</span>
                                <span className="relative invisible">Button Text</span>
                              </a></Link> */}
                              {/* <button className={`transition-all duration-300 ${includesEmail ? 'opacity-50 cursor-not-allowed' : 'hover:text-blue-800'
                                }`}>
                                {
                                  includesEmail ? <button disabled={includesEmail} onClick={handleLike}><FcLike className="text-xl text-gray-300"></FcLike></button>
                                    :
                                    <button onClick={handleLike}><FaThumbsUp className="text-xl text-gray-300 hover:text-blue-800 transition-transform duration-1000" /></button>
                                }
                              </button> */}
                            </div>

                            <div className="flex items-center flex-shrink-0 px-2">
                              <div className="flex items-center space-x-1 text-gray-800">
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
                                {/* <p className="font-medium">{totalLikes?.likes?.length}</p> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    );
};

export default UpcomingMeal;