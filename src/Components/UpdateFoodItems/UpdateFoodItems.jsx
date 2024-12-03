import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFoodItems = () => {
    const foods = useLoaderData();
    const { _id, foodname, quantity, price, buyername, buyeremail, buyingdate, photoURL } = foods;

    const handleUpdateFood = event => {
        event.preventDefault();
        const form = event.target;
        const foodname = form.foodname.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const buyername = form.buyername.value;
        const buyeremail = form.buyeremail.value;
        const buyingdate = form.buyingdate.value;
        const photoURL = form.photoURL.value;

        const UpdatedFoods = { foodname, quantity, price, buyername, buyeremail, buyingdate, photoURL }
        // console.log(addFoodItems);

        fetch(`https://dineflow-server.vercel.app/foods/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(UpdatedFoods),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Food Items Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                
            })
    }
    return (
        <div className="hero bg-sky-400 min-h-screen">
            <div className="hero-content flex-col">
                <h2 className="text-4xl font-bold text-center">Update Food Items</h2>
                <div className="card bg-base-100 w-full">
                    <form onSubmit={handleUpdateFood} className="card-body">
                        <div className="flex gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Name</span>
                                </label>
                                <input type="text" name="foodname" defaultValue={foodname} placeholder="Food Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="number" name="quantity" defaultValue={quantity} placeholder="Quantity" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Buyer Name</span>
                                </label>
                                <input type="text" name="buyername" defaultValue={buyername} placeholder="Buyer Name" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Buyer Email</span>
                                </label>
                                <input type="email" name="buyeremail" defaultValue={buyeremail} placeholder="Buyer Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Buying Date</span>
                                </label>
                                <input type="date" name="buyingdate" defaultValue={buyingdate} placeholder="Buying Date" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" defaultValue={photoURL} placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Food Items</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateFoodItems;