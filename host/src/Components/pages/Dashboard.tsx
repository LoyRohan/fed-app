import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(/sunset-1373171_1280.jpg)` }}>
            <div className="flex items-center justify-center h-screen">
                <div className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4 w-full max-w-xl">
                    <h1 className="text-2xl font-bold mb-4">
                        <img src="/logo.jpg" width={50} />
                    </h1>
                    <h1 className=" text-2xl font-bold mb-4">Apps</h1>
                    <button
                        type="submit"
                        onClick={() => navigate("/module-app")}
                        className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border border-black">
                        Modulation App
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Dashboard