import bgHero from '../assets/homePage/bg-hero.png'

type props = {
    number:number,
    title: string,
    description: string,
    imagePath: string
}

export default function CardProcedure({number, title, description, imagePath}:props){
    return (
        <>
            {/* cardContainer */}
            <div className='relative flex flex-col w-[300px] h-[400px] rounded-xl shadow-2xl'>
                {/* imageOfCard */}
                <div className='w-full h-[50%] bg-cover bg-no-repeat rounded-t-xl' style={{backgroundImage:`url(${imagePath})`}}>


                </div>
                {/* circleNum */}
                <div className='absolute flex justify-center items-center top-43 right-30 rounded-full w-[70px] h-[70px] bg-gray-300 border-4 border-white'>
                <p className='text-3xl font-semibold '>{number}</p>
                </div>
                {/* steps */}
                <div className='flex flex-col w-full h-[50%] bg-white rounded-b-xl justify-center gap-y-3 items-center p-6'>
                    <h2 className='text-xl font-semibold '>{title}</h2>
                    <p className='text-sm text-gray-500 font-semibold whitespace-pre-line text-center'>{description}</p>
                </div>
            </div>
        </>
    );
}