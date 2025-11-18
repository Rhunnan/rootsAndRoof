import MemberComponent from "./member";
import image from '../../assets/square.jpg'
export default function TeamComponent(){
    return (
        <section 
            id="vision"
            aria-label="Vission section for About page - Akiro Construction and Supply Cebu"
            className="md:gap-15 lg:gap-y-5 relative pt-5 flex flex-col min-h-screen h-auto w-screen bg-white justify-center items-center"
        >    <h2 className="roots-text-color pb-10 text-5xl md:text-8xl lg:text-8xl font-medium ">MEET THE TEAM</h2>
            <MemberComponent name="JANZEN R. ENCABO" position="(Principal Architect)" imagePath={image}/>
            <MemberComponent name="KIM E. TORREQUEMADA" position="(Registered Master Plumber-Environmentalist)" imagePath={image}/>

        </section>
    );
}