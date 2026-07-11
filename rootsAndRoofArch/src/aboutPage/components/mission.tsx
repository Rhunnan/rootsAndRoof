// export default function MissionComponent(){
//     return (
//         <section 
//             id="vision"
//             aria-label="Vission section for About page - Akiro Construction and Supply Cebu"
//             className="relative pt-30 flex flex-col min-h-screen h-auto w-screen bg-white justify-center items-center"
//         >
//             {/* <div className="absolute w-[20%] h-[4%] md:w-[20%] md:h-[7%]  bg-gray-300 top-20 left-0"></div> */}
//             <h2 className="roots-text-color text-5xl md:text-8xl lg:text-8xl font-medium ">OUR MISSION</h2>
//             <p className="p-20 text-3xl md:text-6xl ">To design sustainable, regenerative, and natureconnected spaces that support well-being and protect the
//                 planet, and inspire a harmonious coexistence with
//                 nature.
//             </p>
//             {/* <div className="absolute w-[20%] h-[4%] md:w-[20%] md:h-[7%] bg-gray-300 bottom-20 right-0"></div> */}

//         </section>
//     );
// }

export default function MissionComponent() {
  return (
    <section
      id="mission"
      aria-label="Roots & Roof Mission"
      className="bg-white py-28 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-12 gap-16">

          {/* LEFT */}

          <div className="lg:col-span-4">

            <p className="uppercase tracking-[0.35em] text-sm text-[#66714B]">

              Our Mission

            </p>

            <h2 className="mt-6 text-4xl lg:text-5xl font-semibold text-[#2D2A26] leading-tight">

              Creating Architecture
              That Gives Back
              To Nature.

            </h2>

            <div className="mt-8 w-24 h-[2px] bg-[#D6D1C4]" />

          </div>

          {/* RIGHT */}

          <div className="lg:col-span-8">

            <p
              className="
                text-xl
                md:text-2xl
                leading-relaxed
                text-[#4B4B4B]
                font-light
              "
            >
              Our mission is to design sustainable, regenerative,
              and nature-connected spaces that enrich everyday life,
              restore ecological balance, and foster a lasting harmony
              between people and the environment.
            </p>

            <p
              className="
                mt-10
                text-lg
                leading-9
                text-gray-600
                max-w-3xl
              "
            >
              Every project is guided by thoughtful planning,
              environmental responsibility, and timeless design
              principles. We believe architecture should not simply
              occupy the land—it should nurture it, respond to it,
              and become a living extension of nature itself.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}