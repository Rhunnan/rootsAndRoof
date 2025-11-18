type props = {
     name:string,
     position:string,
     imagePath:string,
}


export default function MemberComponent({name, position, imagePath}:props){
    return (
        <div 
            id="vision"
            aria-label="Vission section for About page - Akiro Construction and Supply Cebu"
            className="relative pt-10 gap-x-20 gap-y-10 flex flex-col lg:flex-row min-h-[60vh] h-auto w-screen bg-white justify-center items-center"
        >   
            {/* image */}
            <div className="shadow-gray-500 rounded-full shadow-xl w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-no-repeat bg-center bg-cover bg-blue-300" style={{backgroundImage: `url(${imagePath})`}}> </div>
            {/* name and position */}
            <div className="flex flex-col gap-y-2 justify-center shadow-2xl items-center w-[90vw] h-auto py-10 lg:w-[50vw] lg:h-auto roots-btn-color border-8 border-green-900">
                <h2 className="text-2xl md:text-5xl lg:text-7xl font-bold text-white">{name}</h2>
                <h3 className="text-sm md:text-2xl text-white">{position}</h3>
            </div>
        </div>
    );
}