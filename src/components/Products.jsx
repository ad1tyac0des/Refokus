import { motion } from "motion/react";
import Product from "./Product";
import { useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([
        {
            title: "Arqitel",
            desc: "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
            btn1: true,
            btn2: false,
            background: "#5255EE",
            media: "arqitel"
        },

        {
            title: "TTR",
            desc: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            btn1: true,
            btn2: false,
            background: "#46289A",
            media: "ttr"
        },

        {
            title: "YIR",
            desc: "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
            btn1: true,
            btn2: false,
            background: "#5D4EFF",
            media: "yir"
        },

        {
            title: "Yahoo!",
            desc: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
            btn1: true,
            btn2: false,
            background: "#7E1FFF",
            media: "yahoo"
        },

        {
            title: "Rainfall",
            desc: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
            btn1: true,
            btn2: false,
            background: "#1430D4",
            media: "rainfall"
        },

        {
            title: "Jungle",
            desc: "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
            btn1: true,
            btn2: false,
            background: "#0000FF",
            media: "jungle"
        },

        {
            title: "Silvr",
            desc: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
            btn1: true,
            btn2: false,
            background: "#FF7548",
            media: "silvr"
        },
    ]);
    const [pos, setPos] = useState(0);
    const [hoveredCardIndex, setHoveredCardIndex] = useState(0);
    const [moveX, setMoveX] = useState(-50);
    const [moveY, setMoveY] = useState(0);
    const getPos = (index) => {
        setPos(19 * index);
        setHoveredCardIndex(index);
    };

    const showBtn2 = (index) => {
        setProducts((prev) =>
            prev.map((elem, i) =>
                index === i ? { ...elem, btn2: true } : { ...elem, btn2: false }
            )
        );
    };

    const handleMouseMove = (moveX, moveY) => {
        setMoveX(moveX);
        setMoveY(moveY);
    };

    return (
        <div className="my-28 md:my-32 lg:my-40 relative flex flex-col gap-4 lg:gap-0 px-3 lg:px-0">
            {products.map((elem, index) => (
                <Product
                    key={index}
                    val={elem}
                    getPos={getPos}
                    showBtn2={showBtn2}
                    index={index}
                    handleMouseMove={handleMouseMove}
                />
            ))}

            {/* Main Videos Container | Hidden on mobile and tablets */}
            <div className="w-full h-[103%] absolute top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
                {/* Video Window */}
                <motion.div
                    initial={{
                        x: "-50%",
                        y: pos,
                    }}
                    animate={{
                        x: moveX + "%", // move as mouse moves in x axis in product (subtle hover effect)
                        y: `${pos}rem`, // move as mouse moves to different products
                    }}
                    transition={{
                        x: { duration: .1, ease: [0.19, 1, 0.22, 1] },
                        y: { duration: .3 },
                    }}
                    style={{ top: `${moveY}%` }} // move as mouse moves in y axis in product (subtle hover effect)
                    className="window w-[32rem] h-[22.8rem] absolute left-[43.5%]"
                >
                    {products.map(
                        (elem, index) =>
                            hoveredCardIndex === index && (
                                <motion.div
                                    key={index}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                    className="w-full h-full rounded-xl overflow-hidden"
                                >
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        src={`assets/videos/products/${elem.media}.webm`}
                                    ></video>
                                </motion.div>
                            )
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Products;
