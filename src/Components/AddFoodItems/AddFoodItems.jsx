import Swal from "sweetalert2";

const AddFoodItems = () => {

    const handlePurchase = event => {
        event.preventDefault();
        const form = event.target;
        const foodname = form.foodname.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const buyername = form.buyername.value;
        const buyeremail = form.buyeremail.value;
        const buyingdate = form.buyingdate.value;
        const photoURL = form.photoURL.value;

        const addFoodItems = { foodname, quantity, price, buyername, buyeremail, buyingdate,photoURL }
        // console.log(addFoodItems);

        fetch('https://dineflow-server.vercel.app/foods', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(addFoodItems),
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Food Items Added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col">
                <h1 className="text-4xl font-bold text-center">Add Food Items</h1>
                <div className="card bg-base-100 w-fit">
                    <form onSubmit={handlePurchase} className="card-body border-[5px] border-sky-500 rounded-xl">
                        <div className="flex gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Name</span>
                                </label>
                                <input type="text" name="foodname" placeholder="Food Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Buyer Name</span>
                                </label>
                                <input type="text" name="buyername" placeholder="Buyer Name" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Buyer Email</span>
                                </label>
                                <input type="email" name="buyeremail" placeholder="Buyer Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Buying Date</span>
                                </label>
                                <input type="date" name="buyingdate" placeholder="Buying Date" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add a Food Item</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddFoodItems;