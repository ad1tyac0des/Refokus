import { motion } from "motion/react"

const Marquee = ({ images, index }) => {
    return (
        <div className="flex py-7 lg:py-10 whitespace-nowrap overflow-hidden">
            <motion.div
                initial={{
                    x: index === 0 ? 0 : "-100%"
                }}
                animate={{
                    x: index === 0 ? "-100%" : 0
                }}
                transition={{
                    duration: 15,
                    ease: "linear",
                    repeat: Infinity
                }}
                className="px-10 lg:px-14 flex gap-20 lg:gap-28 flex-shrink-0">
                {images.map((image, index) => (
                    <img key={index} src={image} className="w-32 flex-shrink-0" />
                ))}
            </motion.div>

            <motion.div
                initial={{
                    x: index === 0 ? 0 : "-100%"
                }}
                animate={{
                    x: index === 0 ? "-100%" : 0
                }}
                transition={{
                    duration: 15,
                    ease: "linear",
                    repeat: Infinity
                }}
                className="px-10 lg:px-14 flex gap-20 lg:gap-28 flex-shrink-0">
                {images.map((image, index) => (
                    <img key={index} src={image} className="w-32 flex-shrink-0" />
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;
