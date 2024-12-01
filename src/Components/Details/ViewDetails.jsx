import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const allfood = useLoaderData();
    const { _id, name, price, image, quantity, madeBy, foodOrigin, description } = allfood;
    return (
        <div className="hero bg-base-200 w-[80%] mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl w-full" />
                <div>
                    <h1 className="text-4xl font-bold py-2">{name}</h1>
                    <p className="text-lg font-semibold">Made By : {madeBy}</p>
                    <p className="text-lg font-semibold">Food Origin : {foodOrigin}</p>
                    <p className="text-lg font-semibold">Quantity : {quantity}</p>
                    <p className="text-lg font-semibold text-red-500 py-3">Price : ${price}</p>
                    <p className="py-6"><span className="text-xl font-semibold">Description : </span>{description}</p>
                    <div className="py-4">
                    <Link to={`/purchase/${_id}`}><button className="btn btn-secondary mx-8">Purchase</button></Link>
                    <Link to="/allfoods"><button className="btn btn-accent">All Foods</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;