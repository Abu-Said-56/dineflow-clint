import { Link, useRouteError } from 'react-router-dom';

const ErrorComponents = () => {
    const error = useRouteError()
    return (
        <div className="text-center mx-auto bg-gray-300 rounded-2xl my-6 py-10">
            
            <div className="py-5">
                <div className="mx-auto w-[500px] h-500px py-5">
                   
                    <img src="https://i.ibb.co.com/drLzBxN/8632.jpg" />

                </div>
            <Link to="/"><button className="btn btn-secondary">Go to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorComponents;