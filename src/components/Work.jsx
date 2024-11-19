import { useScroll } from "motion/react";
import { useState } from "react";

const Work = () => {
    const [images, setImages] = useState([
        {
            src: "/assets/images/work/img1.png",
            top: "50%",
            left: "50%",
            isActive: false,
        },
        {
            src: "/assets/images/work/img2.png",
            top: "55%",
            left: "45%",
            isActive: false,
        },

        {
            src: "/assets/images/work/img3.png",
            top: "45%",
            left: "55%",
            isActive: false,
        },

        {
            src: "/assets/images/work/img4.png",
            top: "50%",
            left: "50%",
            isActive: false,
        },

        {
            src: "/assets/images/work/img5.png",
            top: "60%",
            left: "55%",
            isActive: false,
        },

        {
            src: "/assets/images/work/img6.png",
            top: "65%",
            left: "40%",
            isActive: false,
        },
    ]);

    const { scrollYProgress } = useScroll();

    scrollYProgress.on("change", (scrollVal) => {
        function showImage(arr) {
            setImages((prev) =>
                prev.map((item, index) =>
                    // Check if current index exists in array to toggle active state
                    arr[index] === index
                        ? { ...item, isActive: true }
                        : { ...item, isActive: false }

                    // Alternative approach using indexOf to achieve same result
                    // arr.indexOf(index) === -1
                    //     ? { ...item, isActive: false }
                    //     : { ...item, isActive: true }
                )
            );
        }

        switch (Math.floor(scrollVal * 100)) {
            case 0:
                showImage([]);
                break;
            case 1:
                showImage([0]);
                break;
            case 4:
                showImage([0, 1]);
                break;
            case 5:
                showImage([0, 1, 2]);
                break;
            case 6:
                showImage([0, 1, 2, 3]);
                break;
            case 8:
                showImage([0, 1, 2, 3, 4]);
                break;
            case 10:
                showImage([0, 1, 2, 3, 4, 5]);
                break;
        }
    });

    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto relative">
                <h1 className="text-[10rem] md:text-[18rem] xl:text-[36rem] leading-[1.4] tracking-tight font-medium text-center">
                    work
                </h1>

                <div className="w-full h-full absolute top-0">
                    {images.map(
                        (elem, index) =>
                            elem.isActive && (
                                <div
                                    key={index}
                                    className="w-60 aspect-square absolute -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden"
                                    style={{ top: elem.top, left: elem.left }}
                                >
                                    <img
                                        className="w-full h-full object-cover"
                                        src={elem.src}
                                        alt="work"
                                    />
                                </div>
                            )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Work;
