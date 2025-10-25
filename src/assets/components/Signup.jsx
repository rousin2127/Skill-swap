// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';

import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../context/AuthContext';
// import { auth } from '../firebase/firebase.init';

const Signup = () => {
    const {createUser} = use(AuthContext)


    const handleSignUp =(event)=>{
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const name= event.target.name.value
        const photo= event.target.photo.value

        console.log(email,password,name, photo)


        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            // event.target.reset()
            const profile= {
                displayName: name,
                photoURL: photo
            }
            updateProfile(result.user, profile)
            .then( ()=>{

            })
            .catch(error =>{

            })
        })
        .catch(error=>{
            console.log(error);
            
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

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl m-auto mt-[20vh]">
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
                    <p>Already Have an account? <Link className='text-blue-600' to={'/login'}>Login</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;