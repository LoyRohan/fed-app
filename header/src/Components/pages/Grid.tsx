import * as React from 'react'
import "../../index.scss"
import PatientInfo from '../common/PatientInfo'
import PatientTabel from '../common/PatientTabel'

const Grid = () => {
    return (
        <div className="h-screen">
            <div className="h-full w-16 bg-white fixed left-0 top-0 z-20 border-r-2">
                <div className="h-16 flex items-center justify-center">
                    <img src="/logo.jpg" className="p-3" alt="Logo" />
                </div>
            </div>
            <div className="flex flex-col w-full bg-gray-300">
                <header className="bg-white fixed top-0 left-0 w-full z-10 border-r-2">
                    <div className="h-12 flex items-center justify-center">
                        <div className="basis-auto">
                            <div className="px-8"></div>
                        </div>
                        <div className="w-24 text-center border-r-2">
                            <p className="py-3">
                                home
                            </p>
                        </div>
                        <div className="basis-full">search box</div>
                    </div>
                </header>
                <main className="ml-16 py-12 overflow-y-auto my-20 h-full bg-slate-300">
                    <PatientInfo />
                    <PatientTabel />
                    {/* <div className="font-extrabold text-2xl my-10 text-center">my app</div>
                    <div className="font-extrabold text-2xl my-10 text-center">my app</div>
                    <div className="font-extrabold text-2xl my-10 text-center">my app</div>
                    <div className="font-extrabold text-2xl my-10 text-center">my app</div>
                    <div className="font-extrabold text-2xl my-10 text-center">my app</div>
                    <div className="font-extrabold text-2xl my-10 text-center">my app</div>
                    <div className="font-extrabold text-2xl my-10 text-center">my app</div>
                    <div className="font-extrabold text-2xl my-10 text-center">my app</div>
                    <div className="font-extrabold text-2xl my-10 text-center">my app</div>
                    <div className="font-extrabold text-2xl my-10 text-center">my app</div>
                    <div className="font-extrabold text-2xl my-10 text-center">my app</div>
                    <div className="font-extrabold text-2xl my-10 text-center">my app</div>
                    <div className="font-extrabold text-2xl my-10 text-center">my app</div>
                    <div className="font-extrabold text-2xl my-10 text-center">my app</div>
                    <div className="font-extrabold text-2xl my-10 text-center">my app</div>
                    <div className="font-extrabold text-2xl my-10 text-center">my app</div>
                    <div className="font-extrabold text-2xl my-10 text-center">my app</div>
                    <div className="font-extrabold text-2xl my-10 text-center">my app</div>
                    <div className="font-extrabold text-2xl my-10 text-center">my app</div>
                    <div className="font-extrabold text-2xl my-10 text-center">my app</div> */}
                </main>
            </div>
        </div>
    )
}

export default Grid