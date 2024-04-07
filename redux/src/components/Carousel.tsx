

export default function Carousel() {

    return (
        <>
            <div className="w-full flex justify-center" style={{ background: 'white' }}>
                <div className="carousel w-3/4 relative">
                    <div id="item1" className="carousel-item w-full relative">
                        <img src="https://images.unsplash.com/photo-1544963823-9810de5a798a?q=80&w=3333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-1/2" alt="Image 1" />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <img src="https://cdn.worldvectorlogo.com/logos/durex.svg" className="w-1/4" alt="logo" />
                        </div>
                        <img src="https://images.unsplash.com/photo-1544963823-6267c70c3e11?q=80&w=3333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-1/2" alt="Image 2" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#" className="btn btn-circle btn-outline">❮</a>
                            <a href="#item2" className="btn btn-circle btn-outline">❯</a>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full relative">
                        <img src="https://images.unsplash.com/photo-1530025468065-b26f2c0618b6?q=80&w=3333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-1/2" alt="Image 1" />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <img src="https://cdn.worldvectorlogo.com/logos/durex.svg" className="w-1/4" alt="logo" />
                        </div>
                        <img src="https://images.unsplash.com/photo-1544963222-8d994a32ec9b?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-1/2" alt="Image 2" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#item1" className="btn btn-circle btn-outline">❮</a>
                            <a href="#" className="btn btn-circle btn-outline">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}