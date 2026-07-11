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
              We envision a future where architecture becomes an active
              contributor to ecological restoration—where every building
              strengthens its environment, enhances human well-being,
              and coexists naturally with the landscape.
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
              Through regenerative design, biophilic principles,
              permaculture thinking, and innovative sustainable
              technologies, we aspire to redefine how communities
              experience architecture—creating spaces that are resilient,
              timeless, and deeply connected to nature.
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
              Shaping A Future
              Where Nature
              Leads Design.

            </h2>

            <div className="mt-8 ml-auto w-24 h-[2px] bg-[#D6D1C4]" />

          </div>

        </div>

      </div>
    </section>
  );
}