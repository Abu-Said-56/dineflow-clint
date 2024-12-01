import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import Swal from "sweetalert2";

const Login = () => {
    // for signIn with Google
    const auth = getAuth(app);
    const {GitHubLogin} = useContext(AuthContext)
    const {GooglrLogin} = useContext(AuthContext)

    const [loginSuccessfuly, setLoginSuccessfuly] = useState('');
    const [loginError, setLoginError] = useState('');
    const [showPssward, setShowpassward] = useState(false);
    const navigate = useNavigate()

    const { signInUser } = useContext(AuthContext);

    const location = useLocation()
    const from = location.state || '/';

    // Google login
    const handleGoogleSignIn = () => {
        GooglrLogin(auth, GooglrLogin)
            .then(result => {
                navigate(location?.state ? location.state : '/');
                Swal.fire("User Login Successfuly");
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    // Email password base login
    const handleLoginUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        // reset error and success function
        setLoginError('');
        setLoginSuccessfuly('');

        signInUser(email, password)
            .then(result => {
                const user = {
                    email,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }
                fetch('', {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(result)
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire("User Login Successfuly");
                    })
                navigate(from, { replace: true })
            })
            .then(error => {
                console.error(error);
            })
    }

    // Github Login
    const handleGitHubSignIn = () =>{
        GitHubLogin()
        .then((result)=>{
            const githubUser = result.user;
            setLoginSuccessfuly(githubUser);
            Swal.fire("User Login Successfuly");
            navigate(`/`);
        })
        .catch((error)=>{
            console.error(error);
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-4">
                        <h1 className="text-4xl font-bold text-center">Login now</h1>
                        <form onSubmit={handleLoginUser} className="card-body">
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
                                    type={showPssward ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />
                                <span className="text-2xl absolute right-3 bottom-3" onClick={() => setShowpassward(!showPssward)}>
                                    {
                                        showPssward ? <ImEye></ImEye> :
                                            <ImEyeBlocked></ImEyeBlocked>
                                    }
                                </span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p>Do Not Have An Account? Please <Link to="/register"><span className="text-lg font-semibold text-blue-700">Register</span></Link></p>

                            </div>
                        </form>
                        <div className="text-center py-3">
                            <button onClick={handleGoogleSignIn} className="text-5xl px-3"><FcGoogle />
                            </button>
                            <button onClick={handleGitHubSignIn} className="text-5xl px-3"><ImGithub/></button>
                        </div>
                        {
                    loginError && <div role="alert" className="alert alert-error">
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
                        <span>Error : {loginError}</span>
                    </div>
                }
                {
                    loginSuccessfuly && <div role="alert" className="alert alert-success">
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
                        <span>{loginSuccessfuly}</span>
                    </div>
                }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;