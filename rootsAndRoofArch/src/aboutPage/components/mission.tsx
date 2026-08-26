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
              Our mission is to create <strong>Regenerative Architecture and Biophilic Living Environments</strong> that connect people with nature while restoring the land.
              We integrate <strong>Permaculture, Soil Ecology, Food systems, Water Systems, Landscape, and Architecture</strong> to create healthy, resilient places where people and nature can thrive together.
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
             We believe architecture should not simply occupy the land it should nurture it, regenerate it, and become part of a living ecosystem.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}