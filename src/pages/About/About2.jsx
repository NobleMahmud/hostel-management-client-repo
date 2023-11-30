import aboutPic from "../../assets/images/about2.gif"


const About2 = () => {
    return (
        <div className='bg-cover rounded-2xl mt-10'>
            <section className="mb-20">


                {/* <!-- Jumbotron --> */}
                <div className="px-6 py-8 text-center md:px-12 lg:text-left">
                    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
                        <div className="grid items-center -mt-8 grid-cols-1 lg:grid-cols-2">
                            <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                                <div
                                    className="block p-24 rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                                    <h1 className="mt-2 text-center  text-4xl font-bold tracking-tight md:text-5xl xl:text-4xl">
                                        <br /><span className="text-primary md:text-5xl xl:text-6xl"><span className="text-red-800 ">Hungry</span>Hall </span>
                                        <img src="../../../public/logo.png" alt="" />
                                    </h1>
                                    <h3 className="font-bold px-8 text-lg text-center">The heart of flavorful dining at our hostel, where dining meets delight! Explore our amazing menu, serving up delicious dishes crafted for students. HungryHall, your go-to hub for satisfying meals</h3>
                                </div>
                            </div>
                            <div className="md:mb-12 lg:mb-0">
                                <img src={aboutPic}
                                    className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
                            </div>

                        </div>

                    </div>
                </div>
                {/* <!-- Jumbotron --> */}
               
            </section>
        </div>
    );
};

export default About2;