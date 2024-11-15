import { motion } from "motion/react";
import Product from "./Product";
import { useState } from "react";

const Products = () => {
    const products = [
        {
            title: "Arqitel",
            desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            btn1: true,
            btn2: false,
            background: "#5255EE",
        },

        {
            title: "TTR",
            desc: "A 3D animation that showcases the TTR platform and how it works in the real world for the first time.",
            btn1: true,
            btn2: false,
            background: "#46289A",
        },

        {
            title: "YIR",
            desc: "A 3D animation that showcases the TTR platform and how it works in the real world for the first time for the YIR 2022 campaign.",
            btn1: true,
            btn2: true,
            background: "#5D4EFF",
        },

        {
            title: "Yahoo!",
            desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            btn1: true,
            btn2: true,
            background: "#7E1FFF",
        },

        {
            title: "Rainfall",
            desc: "A 3D animation that showcases the TTR platform and how it works in the real world for the first time for the YIR 2022 campaign.",
            btn1: true,
            btn2: false,
            background: "#1430D4",
        },

        {
            title: "Jungle",
            desc: "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
            btn1: true,
            btn2: true,
            background: "#0000FF",
        },

        {
            title: "Silvr",
            desc: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
            btn1: true,
            btn2: true,
            background: "#FF7548",
        },
    ];

    const [pos, setPos] = useState(0);

    const getPos = (index) => {
        setPos(20 * index);
    };

    return (
        <div className="my-20 relative">
            {products.map((elem, index) => (
                <Product key={index} val={elem} getPos={getPos} index={index} />
            ))}
            <div className="w-full h-full absolute top-0 pointer-events-none">
                <motion.div
                    initial={{
                        x: "-50%",
                        y: pos,
                    }}
                    animate={{
                        y: `${pos}rem`,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                    className="window w-[28rem] h-[20rem] absolute left-[44%] overflow-hidden"
                >
                    {products.map((elem, index) => (
                        <motion.div
                            key={index}
                            animate={{
                                y: `${-pos}rem`,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                            className="w-full h-full rounded-xl overflow-hidden"
                        >
                            {/* Convert title to lowercase and remove any non-alphabetic characters for video filename */}
                            <video
                                autoPlay
                                muted
                                loop
                                src={`/assets/videos/products/${elem.title
                                    .toLowerCase()
                                    .split("")
                                    .filter((char) => /[a-z]/.test(char))
                                    .join("")}.webm`}
                            ></video>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Products;
