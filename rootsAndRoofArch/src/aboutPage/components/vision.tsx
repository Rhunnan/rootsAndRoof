export default function VisionComponent() {
  return (
    <section
      id="vision"
      aria-label="Roots & Roof Vision"
      className="w-full bg-[#F8F6F2] py-28 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid  lg:grid-cols-12 gap-16 items-center">

          {/* LEFT CONTENT */}

          <div className="lg:col-span-8 lg:order-1">

            <p
              className="
                text-xl
                md:text-2xl
                leading-relaxed
                text-[#4B4B4B]
                font-light
              "
            >
              We envision a future where <strong>regenerative architecture and biophilic living</strong> create a positive relationship between people and the land.
              Through <strong>permaculture, soil ecology, food systems, water, and nature inspired design</strong>, we strive to create places that restore ecosystems, nourish communities, and strengthen the environment rather than simply reduce their impact.
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
              We believe the future of architecture is not about taking less from nature, it is about giving back more, creating resilient living environments where people, food, and nature can thrive together.
            </p>

          </div>

          {/* RIGHT TITLE */}

          <div className="lg:col-span-4 lg:order-2 lg:text-right">

            <p className="uppercase tracking-[0.35em] text-sm text-[#66714B]">

              Our Vision

            </p>

            <h2
              className="
                mt-6
                text-4xl
                lg:text-5xl
                font-semibold
                text-[#2D2A26]
                leading-tight
              "
            >
              Designing Today Without Borrowing From Tomorrow

            </h2>

            <div className="mt-8 ml-auto w-24 h-[2px] bg-[#D6D1C4]" />

          </div>

        </div>

      </div>
    </section>
  );
}