import ImageWithSkeleton from "../../components/imageWithSkeleton";

type PortfolioItem = {
    title: string;
    category: string;
    image: string;
};

type Props = {
    images: PortfolioItem[];
    onImageClick: (index: number) => void;
};

export default function PortfolioGallery({
    images,
    onImageClick,
}: Props) {
    return (
        <section className="pb-32">

            <div className="max-w-[1700px] mx-auto px-5 lg:px-10">

                {/* Section Header */}

                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-14">

                    <div>

                        <p className="uppercase tracking-[0.35em] text-[#66714B] text-sm">

                            Featured Collection

                        </p>

                        <h2 className="mt-4 text-4xl lg:text-6xl font-light text-[#2D2A26]">

                            Luxury Architecture

                        </h2>

                    </div>

                    <p className="mt-8 lg:mt-0 max-w-lg text-gray-500 leading-8">

                        Explore a curated collection of homes inspired by
                        nature, sustainability, craftsmanship and timeless
                        architectural design.

                    </p>

                </div>

                {/* Gallery */}

                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        xl:grid-cols-3
                        gap-8
                    "
                >

                    {images.map((project, index) => (
                        <article
                            key={index}
                            onClick={() => onImageClick(index)}
                            className="
                                group
                                cursor-pointer
                            "
                        >

                            {/* Image */}

                            <div
                                className="
                                    relative
                                    overflow-hidden
                                    rounded-sm
                                    bg-white
                                "
                            >

                                <ImageWithSkeleton
                                    src={project.image}
                                    index={index}
                                    indexImageClick={() => {}}
                                    isImageClick={() => {}}
                                />

                                {/* Dark Overlay */}

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-black/80
                                        via-black/20
                                        to-transparent
                                        opacity-0
                                        group-hover:opacity-100
                                        transition-all
                                        duration-500
                                    "
                                />

                                {/* Zoom */}

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        overflow-hidden
                                    "
                                >

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                            transition-transform
                                            duration-700
                                            group-hover:scale-110
                                        "
                                    />

                                </div>

                                {/* Text */}

                                <div
                                    className="
                                        absolute
                                        bottom-0
                                        left-0
                                        right-0
                                        p-8
                                        text-white
                                        translate-y-8
                                        opacity-0
                                        group-hover:opacity-100
                                        group-hover:translate-y-0
                                        transition-all
                                        duration-500
                                    "
                                >

                                    <p
                                        className="
                                            uppercase
                                            tracking-[0.3em]
                                            text-xs
                                            text-gray-300
                                        "
                                    >

                                        {project.category}

                                    </p>

                                    <h3
                                        className="
                                            mt-3
                                            text-2xl
                                            font-light
                                        "
                                    >

                                        {project.title}

                                    </h3>

                                </div>

                            </div>

                        </article>
                    ))}

                </div>

            </div>

        </section>
    );
}