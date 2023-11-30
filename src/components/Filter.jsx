import { Radio } from "@material-tailwind/react";
import { useRef, useState } from "react";

const Filter = () => {
    const [selected, setSelected] = useState(null);
    const type1 = useRef();
    const type2 = useRef();
    const type3 = useRef();
    const handleFilter = (e) => {

        e.preventDefault();
        const form = e.target;
        const all = form.all.checked;
        const breakfast = form.breakfast.checked;
        const lunch = form.lunch.checked;
        const dinner = form.dinner.checked;
        // const first = form.first.checked;
        // const second = form.second.checked;
        // const third = form.third.checked;
        const selectedValue = type1.current.checked
            ? type1.current.value
            : type2.current.checked
                ? type2.current.value
                : type3.current.checked
                    ? type3.current.value
                    : null;


        if (all) {
            console.log('All');
        } else {
            if (breakfast) {
                console.log('Breakfast');
            }
            if (lunch) {
                console.log('Lunch');
            }
            if (dinner) {
                console.log('Dinner');
            }
            if (selectedValue !== null) {
                console.log('Selected value:', selectedValue);
            } else {
                console.log('No radio input selected');
            }      

        }  
    }
    const handleReset = () =>{
        type1.current.checked = false;
        type2.current.checked = false;
        type3.current.checked = false;
        setSelected(null);
    }
    const handleRadioChange = (e) => {
        setSelected(e.target.value);
      };
    return (
        <div>

            <div className=" mt-10 mx-auto lg:mx-10 md:mx-10 max-w-sm w-screen overflow-hidden rounded-lg border border-gray-200 open:shadow-lg text-gray-700">
                {/* <summary className="flex cursor-pointer select-none items-center justify-between bg-gray-100 px-5 py-3 lg:hidden">
                    <span className="text-sm font-medium"> Toggle Filters </span>

                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </summary> */}

                <form onSubmit={handleFilter}>
                    <div onSubmit={handleFilter} className="flex border-t border-gray-200 lg:border-t-0">
                        <fieldset className="w-full">
                            <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">Category</legend>
                            {/* category */}
                            <div className="space-y-2 px-5 py-6">
                                <div className="flex items-center">
                                    <input name="all" type="checkbox" className="h-5 w-5 rounded border-gray-300" />

                                    <label className="ml-3 text-sm font-medium"> All </label>
                                </div>

                                <div className="flex items-center">
                                    <input name="breakfast" type="checkbox" className="h-5 w-5 rounded border-gray-300" />

                                    <label className="ml-3 text-sm font-medium"> Breakfast </label>
                                </div>

                                <div className="flex items-center">
                                    <input name="lunch" type="checkbox" className="h-5 w-5 rounded border-gray-300" />

                                    <label className="ml-3 text-sm font-medium"> Lunch </label>
                                </div>

                                <div className="flex items-center">
                                    <input name="dinner" type="checkbox" className="h-5 w-5 rounded border-gray-300" />

                                    <label className="ml-3 text-sm font-medium"> Dinner </label>
                                </div>

                                {/* <div className="pt-2">
            <button className="text-xs text-gray-500 underline">Reset Type</button>
          </div> */}
                            </div>
                        </fieldset>

                        {/* price start*/}
                        <fieldset className="w-full">
                            <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">Price</legend>

                            <div className="space-y-2 px-5 py-6">
                                <div className="flex items-center">
                                    <input onChange={handleRadioChange} ref={type1} name="radio-10" type="radio" value="300+" className="h-5 w-5 rounded border-gray-300" />

                                    <label htmlFor="300+" className="ml-3 text-sm font-medium"> 300+ </label>
                                </div>

                                <div className="flex items-center">
                                    <input onChange={handleRadioChange} ref={type2} name="radio-10" type="radio" value="600+" className="h-5 w-5 rounded border-gray-300" />

                                    <label htmlFor="600+" className="ml-3 text-sm font-medium"> 600+ </label>
                                </div>

                                <div className="flex items-center">
                                    <input onChange={handleRadioChange} ref={type3} name="radio-10" type="radio" value="1500+" className="h-5 w-5 rounded border-gray-300" />

                                    <label htmlFor="1500+" className="ml-3 text-sm font-medium"> 1500+ </label>
                                </div>

                                {/* material */}
                                {/* <div className="flex gap-10">
                                    <Radio ref={type1} value={'option 1'} name="type" label="HTML" />
                                    <Radio ref={type2} value={'option 2'} name="type" label="React" />
                                </div> */}
                                {/* material */}

                                <div className="pt-2">
                                    <button onClick={handleReset} type="button" className="text-xs text-gray-500 underline">Reset Price</button>
                                </div>
                            </div>
                        </fieldset>
                        {/* price end */}

                    </div>

                    <div className="flex border-t justify-end border-gray-200 px-5 py-3">
                        <button className="rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white active:scale-95">Apply Filters</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Filter;