import { useEffect, useState } from "react";
import ShowAllFoods from "./ShowAllFoods";

const AllFoods = () => {

    const [allfoods, setAllfood] = useState([])
    useEffect(() => {
        fetch('http://localhost:5001/all-foods')
            .then(res => res.json())
            .then(data => setAllfood(data))
    }, [])

    return (
        <div>
            <div className="pt-4">
                <h3 className='text-4xl font-bold text-center'>All Food Items</h3>
                <p className='text-center py-6'>The majority have suffered alteration in some form, by injected humour, or randomised
                    <br /> words which don't look even slightly believable.
                </p>

            </div>
            <div className=" mx-auto w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5 py-6">
                    {
                        allfoods.map(allfood => <ShowAllFoods
                            key={allfood._id}
                            food={allfood}>
                        </ShowAllFoods>)
                    }
                </div>
        </div>
    );
};

export default AllFoods;