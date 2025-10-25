import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';


const Login = () => {
    const { signInUser } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    const handleLogIn = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        console.log(email, password)


        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                event.target.reset()
                navigate(location.state || '/')
            })
            .catch(error => {
                console.log(error);

            })
    }

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl m-auto mt-[20vh]">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <form onSubmit={handleLogIn}>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p>New to our website? please <Link className='text-red-600' to={'/signup'}>Signup</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;