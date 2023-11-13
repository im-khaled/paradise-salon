import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { authProvider } from '../../Context/AuthContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../Hooks/useTitle';
import toast from 'react-hot-toast';

const Login = () => {
    useTitle('Login');
    const {user,GoogleSignIn, GithubSignIn,signInWithEmail} = useContext(authProvider);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const location = useLocation();
    const nevigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleEmailSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const password = form.password.value;

        signInWithEmail(name, password)
            .then(userCread => {
                const user = userCread.user;
                console.log(user);
                toast.success('Successfully logged in')
                nevigate(from, {replace: true} )
            })
            .catch(e => {
                toast.error('Something went wrong!')
                console.error(e)})
    }
    const handleGoogleSignIn = () =>{
        GoogleSignIn(googleProvider)
            .then(result => {
                toast.success('Successfully logged in')
                nevigate(from, {replace: true} );
            })
            .catch(error => {
                toast.error('Something went wrong!')
                console.error(error)})
    } 
    const handleGithubSignIn = () =>{
        GithubSignIn(githubProvider)
            .then(result => {
                toast.success('Successfully logged in')
                nevigate(from, {replace: true} );
            })
            .catch(error => {
                toast.error('Something went wrong!')
                console.error(error)})
    } 
    return (
        <div className='flex justify-center mt-10'>
            {
               user?.uid?<>
                <div className='my-10 bg-amber-500 text-white text-center h-24'>
                    <div className='h-full flex justify-center items-center text-4xl p-5 font-semibold'>
                        <p>Please Verify Your Email First</p>
                    </div>
                </div>
               </>:<>
                    <div className='container-layout py-16 w-1/3'>
                <div className=' border p-8 shadow-md'>
                    <h3 className='text-xl font-semibold pb-8'>Login here</h3>
                    <form onSubmit={(event)=>handleEmailSignIn(event)}>
                        <div className='space-y-8'>
                            
                            <label className='block'>
                                <p>Your Email</p>
                                <input className='px-2 py-2 w-full border rounded' type="email" name='name' placeholder='Your@email.com'  />
                            </label>
                            <label className='block'>
                                <p>Your Password</p>
                                <input className='px-2 py-2 w-full border rounded' type="password" name='password' placeholder='••••••••••••' />
                            </label>
                            <button className='btn bg-amber-500 px-4 py-2 w-full rounded text-center text-white hover:bg-amber-400'>Login</button>
                        </div>
                        
                    </form>
                    <div className='pt-2'>
                        <p>Don't have an account? <Link to='/register'>Register</Link></p>
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
               
               </> 
            }
        </div>
    );
};

export default Login;