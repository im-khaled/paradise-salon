import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authProvider } from '../../Context/AuthContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../Hooks/useTitle';

const Register = () => {
    useTitle('Register')
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const location = useLocation();
    const nevigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const {signUpWithEmail, GoogleSignIn, GithubSignIn} = useContext(authProvider);

    const handleSignup = (event) =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        signUpWithEmail(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                nevigate(from, {replace: true} )
            })
            .catch(e => console.error(e));
    }
    const handleGoogleSignIn = () =>{
        GoogleSignIn(googleProvider)
            .then(result => {
                nevigate(from, {replace: true} );
            })
            .catch(error => console.error(error))
    } 
    const handleGithubSignIn = () =>{
        GithubSignIn(githubProvider)
            .then(result => {
                nevigate(from, {replace: true} );
            })
            .catch(error => console.error(error))
    } 


    return (
        <div className='mt-10'>
            <div className='flex justify-center'>
            <div className='container-layout py-16 w-1/3'>
                <div className=' border p-8 shadow-md'>
                    <h3 className='text-xl font-semibold pb-8'>Register here</h3>
                    <form onSubmit={(event) => handleSignup(event)}>
                        <div className='space-y-8'>
                            <label className='block'>
                                <p>Your Name</p>  
                                <input className='px-2 py-2 w-full border rounded' type="text" name='name' placeholder='Type your name here'/>
                            </label>
                            <label className='block'>
                                <p>Your Email</p>
                                <input className='px-2 py-2 w-full border rounded' type="email" name='email' placeholder='Your@email.com'  />
                            </label>
                            <label className='block'>
                                <p>Your Password</p>
                                <input className='px-2 py-2 w-full border rounded' type="password" name='password' placeholder='••••••••••••' />
                            </label>
                            <button className='btn bg-amber-500 px-4 py-2 w-full rounded text-center text-white hover:bg-amber-400'>Register</button>
                        </div>
                        
                    </form>
                    <div className='pt-2'>
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                    <div className='flex justify-between pt-8'>
                        <div className='w-1/2 pe-2'>
                            <button onClick={handleGoogleSignIn} className='btn bg-blue-500 px-4 py-2 text-white w-full rounded hover:bg-blue-400' > <FaGoogle className='inline-block me-1'> </FaGoogle>Google
                            </button>
                        </div>
                        <div className='w-1/2 ps-2'>
                            <button onClick={handleGithubSignIn} className='btn bg-gray-900 px-4 py-2 text-white w-full rounded hover:bg-gray-700'><FaGithub className='inline-block me-1'></FaGithub> Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;