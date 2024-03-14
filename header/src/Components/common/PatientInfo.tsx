import * as React from 'react'
// import "../../index.scss"

const PatientInfo = () => {
    return (
        <div class="bg-white rounded-lg shadow-md p-4">
            <div class="flex items-center mb-4">
                <i class="fas fa-user text-3xl mr-2"></i> <h2 class="text-xl font-medium">John Doe</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div class="col-span-1">
                    <h3 class="text-base font-medium mb-2">Details</h3>
                    <ul class="list-none pl-4">
                        <li class="mb-2">
                            <span class="font-medium">DOB:</span>
                            <span class="text-gray-600">1990-01-01</span>
                        </li>
                        <li class="mb-2">
                            <span class="font-medium">Gender:</span>
                            <span class="text-gray-600">Male</span>
                        </li>
                        <li class="mb-2">
                            <span class="font-medium">Contact Number:</span>
                            <span class="text-gray-600">+1234567890</span>
                        </li>
                        <li class="mb-2">
                            <span class="font-medium">Address:</span>
                            <span class="text-gray-600">123 Main Street, Anytown, CA 12345</span>
                        </li>
                    </ul>
                </div>
                <div class="col-span-3">
                    <p>Answers will be displayed here.</p>
                </div>
            </div>
        </div>
    )
}

export default PatientInfo