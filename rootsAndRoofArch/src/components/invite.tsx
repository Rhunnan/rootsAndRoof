export default function InviteComponent(){
    return (
        <>
            <section className="flex flex-col lg:flex-row w-screen h-auto min-h-[40vh]">
                <div className="bg-green-200 w-[50vw] min-h[40vh] h-auto">
                    <h2 className=" text-5xl whitespace-pre-line">{`
                    Let's Create a Space That
                    Breathes With Nature
                    `}</h2>
                    <p>
                        lorem iPsun sample text, this uis a sample text for the sake of design sample.
                    </p>
                    {/* buttons */}
                    <div className='transition-all duration-500 ease-in-out flex justify-center items-center text-white roots-btn-color text-[20px] w-auto h-10 rounded-[10px] px-6 py-2'>
                        <a className="roots-btn-hover-color text-shadow-2xs text-2xl font-light" href="">View our Gallery</a>
                    </div>
                </div>
                <div className="bg-green-500 w-[50vw] min-h[40vh] h-auto">

                </div>
            </section>
        </>
    );
}