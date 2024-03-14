import React from 'react'
import { useNavigate } from 'react-router-dom'
import { updateLoginStatus } from '../../state/appSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch(),
        navigate = useNavigate();

    const onLogin = () => {
        dispatch(updateLoginStatus());
        navigate('/dashboard');
    }

    return (
        <div className="min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(/sunset-1373171_1280.jpg)` }}>
            <div className="flex items-center justify-center h-screen">
                <div className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-4">
                        <img src="/logo.jpg" width={50} />
                    </h1>
                    <h1 className="text-center text-2xl font-bold mb-4">Login</h1>
                    <form action="/login" method="post">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">ID</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Employ ID" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*********" required />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                onClick={onLogin}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline">
                                SIGN IN
                            </button>
                        </div>
                        <div className='flex justify-center'>
                            <p className="underline my-3 text-center">Forgot Password?</p>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Login