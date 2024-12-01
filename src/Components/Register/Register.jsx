
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { ImEye, ImEyeBlocked } from "react-icons/im";

const Register = () => {
    const [resisterError, setResisterError] = useState('');
    const [succes, setSuccess] = useState();
    const [showPss, setShowpass] = useState(false);
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, photo, email, password);
        // reset error 
        setResisterError('');
        setSuccess('');
        // password condition
        if (password.length < 6) {
            setResisterError('Length must be at least Six character');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setResisterError('Must have an Uppercase letter in the password');
            return;
        } else if (!/[a-z]/.test(password)) {
            setResisterError('Must have an Lowercase letter in the password');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = { email, password }
                // fetch('', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(user)
                // })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "User Adeded Successfuly",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })

            })
            .catch(error => {
                // console.error(error);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl pt-4">
                    <h1 className="text-4xl font-bold text-center">Register Now</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPss ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required />
                            <span className="text-2xl absolute right-3 bottom-3" onClick={() => setShowpass(!showPss)}>
                                {
                                    showPss ? <ImEye></ImEye> :
                                        <ImEyeBlocked></ImEyeBlocked>
                                }
                            </span>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div>
                            <p>Already Have An Account? Please <Link to="/login"><span className="text-lg font-semibold text-blue-700">Login</span></Link></p>
                        </div>
                    </form>
                    {
                        resisterError && <div role="alert" className="alert alert-error">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Error : {resisterError}</span>
                        </div>
                    }
                    {
                        succes && <div role="alert" className="alert alert-success">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{succes}</span>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Register;