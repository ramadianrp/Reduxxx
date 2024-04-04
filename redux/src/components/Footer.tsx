"use client"


export default function Footer() {

    return (
        <>
            <div className="flex flex-col mx-3 bg-white rounded-lg">
                <div className="w-full draggable">
                    <div className="container flex flex-col mx-auto">
                        <div className="flex flex-col items-center w-full my-20">
                            <span className="mb-2 mt-20">
                                <img src="https://cdn.worldvectorlogo.com/logos/durex.svg" alt="logo" className="h-40 w-40" />
                            </span>
                            <div className="flex items-center">
                                <p className="text-base font-normal leading-7 text-center text-grey-700">
                                    2024 Redux and Durex company. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
