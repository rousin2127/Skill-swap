// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use, useState } from 'react';
import { Link } from 'react-router';

import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../context/AuthContext';
import { p } from 'framer-motion/client';
// import { auth } from '../firebase/firebase.init';

const Signup = () => {
    const { createUser } = use(AuthContext)

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('');


    const handleSignUp = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const name = event.target.name.value
        const photo = event.target.photo.value

        console.log(email, password, name, photo)


        const passwordPattern = /^.{6,}$/;
        const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        if (!passwordPattern.test(password)) {
            // console.log('dont match ');
            setError('Please give me at least 6 character or Longer.')
            return;
        }
        else if (!casePattern.test(password)) {
            setError('Password must have at least one upper and one lower character.')
            return;
        }


        // reset error ans Success
        setError('');
        setSuccess(false)


        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // event.target.reset()
                const profile = {
                    displayName: name,
                    photoURL: photo
                }
                updateProfile(result.user, profile)
                    .then(() => {

                    })
                    .catch(error => {

                    })
                setSuccess(true)

            })
            .catch(error => {
                console.log(error);
                setError(error.message)

            })
    }

    // const handleSignUp= (event)=>{
    //     event.preventDefault();
    //     const name= event.target.name.value;
    //     const email= event.target.email.value;
    //     const password= event.target.password.value;


    //     console.log(name, email, password);

    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then(result =>{
    //         console.log(result.user)
    //     })
    //     .catch(error =>{
    //         console.log(error)
    //     })

    // }


    return (

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl m-auto my-[10vh]">
            <div className="card-body">
                <h1 className="text-5xl font-bold">SignUp now!</h1>
                <form onSubmit={handleSignUp}>
                    <fieldset className="fieldset">
                        {/* name  */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Your Name" />
                        {/* photo */}
                        <label className="label">Photo</label>
                        <input type="text" name='photo' className="input" placeholder="Photo URL" />
                        {/*email  */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                        <button className="btn btn-neutral mt-4">SignUp</button>
                    </fieldset>
                    {
                        success && <p className='text-green-500'>Account Created Successfully</p>
                    }
                    {
                        error && <p className='text-red-500'>{error}</p>
                    }
                    <p>Already Have an account? <Link className='text-blue-600' to={'/login'}>Login</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;