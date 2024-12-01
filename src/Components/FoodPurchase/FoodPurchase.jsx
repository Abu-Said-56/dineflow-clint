import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const FoodPurchase = () => {
    const allfood = useLoaderData()
    const { user } = useContext(AuthContext);
    const { email, displayName } = user;

    const { buyername, price, quantity, foodname }  = allfood;
    console.log(buyername, email, displayName, price, quantity, foodname, );
    
    const handlePurchase = event  => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const buyername = form.buyername.value;
        const buyeremail = form.buyeremail.value;
        const buyingdate = form.buyingdate.value;

        console.log(name, quantity, price, buyername, buyeremail, buyingdate);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">

                <div className="card bg-base-100 w-full">
                    <form onSubmit={handlePurchase} className="card-body">
                       <div className="flex gap-4">
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <input type="text" name="foodname" defaultValue={allfood?.name} placeholder="Food Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" name="quantity" defaultValue={allfood?.quantity} placeholder="Quantity" className="input input-bordered" />
                        </div>
                       </div>
                        <div className="flex gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={allfood?.price} placeholder="Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Buyer Name</span>
                            </label>
                            <input type="text" name="buyername" defaultValue={user?.displayName} placeholder="Buyer Name" className="input input-bordered" />
                        </div>
                        </div>
                        <div className="flex gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Buyer Email</span>
                            </label>
                            <input type="email" name="buyeremail" defaultValue={user?.email} placeholder="Buyer Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Buying Date</span>
                            </label>
                            <input type="date" name="buyingdate" placeholder="Buying Date" className="input input-bordered" />
                        </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Purchase Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FoodPurchase;