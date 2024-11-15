import Marquee from "./Marquee";

const Marquees = () => {
    const images = [
        [
            "assets/images/marquee/marquee1_1.svg",
            "assets/images/marquee/marquee1_2.svg",
            "assets/images/marquee/marquee1_3.svg",
            "assets/images/marquee/marquee1_4.svg",
            "assets/images/marquee/marquee1_5.svg",
            "assets/images/marquee/marquee1_6.svg",
            "assets/images/marquee/marquee1_7.svg",
            "assets/images/marquee/marquee1_8.svg",
            "assets/images/marquee/marquee1_9.svg",
        ],

        [
            "assets/images/marquee/marquee2_1.svg",
            "assets/images/marquee/marquee2_2.svg",
            "assets/images/marquee/marquee2_3.svg",
            "assets/images/marquee/marquee2_4.svg",
            "assets/images/marquee/marquee2_5.svg",
            "assets/images/marquee/marquee2_6.svg",
            "assets/images/marquee/marquee2_7.svg",
            "assets/images/marquee/marquee2_8.svg",
            "assets/images/marquee/marquee2_9.svg",
        ],
    ];

    return (
        <div className="relative mt-10">
            {/* Left vignette overlay */}
            <div className="absolute top-0 left-0 z-10 w-[27rem] h-full bg-gradient-to-r from-zinc-900 to-transparent"></div>

            {/* Marquee */}
            {images.map((elem, index) => (
                <Marquee key={index} images={elem} index={index} />
            ))}

            {/* Right vignette overlay */}
            <div className="absolute top-0 right-0 z-10 w-[27rem] h-full bg-gradient-to-l from-zinc-900 to-transparent"></div>
        </div>
    );
};

export default Marquees;

// py-20 mt-32 w-full relative overflow-hidden
