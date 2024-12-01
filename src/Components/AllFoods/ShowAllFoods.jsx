import { Link } from "react-router-dom";

const ShowAllFoods = ({ food }) => {
    const { _id, name, category, image, price, quantity } = food;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img className="h-64 w-full"
                    src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Food Name : {name}</h2>
                <p className="text-lg">Category : {category}</p>
                <p className="text-lg text-red-400">Price : ${price}</p>
                <p className="text-lg">Quantity : {quantity}</p>
                <div>
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-primary">Details Button</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShowAllFoods;