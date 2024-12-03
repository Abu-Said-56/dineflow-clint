import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AddedFoodItems = () => {
    const foods = useLoaderData();
    const [deleteFood, setDeleteFood] = useState(foods);
    const { _id, foodname, quantity, price, buyername, buyeremail, buyingdate, photoURL } = foods;
    // console.log(foods);

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://dineflow-server.vercel.app/foods/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your food has been deleted.",
                                icon: "success"
                            });
                            const remaining = deleteFood.filter(food => food._id !== _id);
                            setDeleteFood(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div className="mt-5">
            {
                foods?.length == 0 ?
                    <div> empty </div>
                    :
                    <div>
                        {
                            foods.map(food => (<div 
                            key={food._id}
                            food={food}
                            deleteFood={deleteFood}
                            setDeleteFood={setDeleteFood}
                             >
                                <div className="hero bg-teal-100 w-[80%] mx-auto my-4 rounded-lg">
                                    <div className="hero-content flex-col lg:flex-row-reverse">
                                        <img
                                            src={food?.photoURL}
                                            className="max-w-sm rounded-lg shadow-2xl w-full" />
                                        <div>
                                            <h1 className="text-4xl font-bold py-2">{food?.foodname}</h1>
                                            <p className="text-lg font-semibold">Quantity : {food?.quantity}</p>
                                            <p className="text-lg font-semibold">Buyer Name : {food?.buyername}</p>
                                            <p className="text-lg font-semibold">Buyer Email : {food?.buyeremail}</p>
                                            <p className="text-lg font-semibold text-red-500 py-3">Price : ${food?.price}</p>
                                            <p className="py-6"><span className="text-xl font-semibold">Buying Date : </span>{food?.buyingdate}</p>
                                            <div className="py-4 flex gap-4">
                                                <Link to="/myprofile"><button className="btn btn-accent">My Profile</button></Link>
                                                <button
                                                    onClick={() => handleDelete(food?._id)}
                                                    className="btn btn-error">Delete</button>
                                                <Link to={`/updatefood/${food?._id}`}><button className="btn btn-accent">Update</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>))
                        }
                    </div>
            }
        </div>

    );
};

export default AddedFoodItems;