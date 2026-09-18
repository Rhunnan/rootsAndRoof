export default function VisionComponent() {
  return (
    <section
      id="vision"
      aria-label="Roots & Roof Vision"
      className="w-full py-28 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid  lg:grid-cols-12 gap-16 items-center">

          {/* LEFT CONTENT */}

          <div className="lg:col-span-8 lg:order-1">

            <p
              className="
                text-xl
                leading-relaxed
                text-[#4B4B4B]
                font-light
              "
            >
              The future of design is not about separating people from nature, it is about bringing life back into the places we call home.

              At Roots & Roof Architects, we envision homes, farms, resorts, communities, and developments as living ecosystems, where architecture works with sunlight and wind, landscapes grow food, healthy soil supports biodiversity, and water is captured, cleaned, reused, and returned responsibly to nature.

              A future where your home can nourish your family.
              Where your landscape can heal the soil.
              Where water becomes a resource, not a waste.
              Where nature is not something outside your window, but part of everyday life.
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
              This is the future we want to design.
              Not just buildings that last, but places that help life thrive.
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
              From Building Spaces to Creating Living Systems.
            </h2>

            <div className="mt-8 ml-auto w-24 h-[2px] bg-[#D6D1C4]" />

          </div>

        </div>

      </div>
    </section>
  );
}