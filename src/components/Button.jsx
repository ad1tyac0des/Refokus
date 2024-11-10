import gsap from "gsap";
import { useRef } from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Start a Project" }) => {
    const buttonRef = useRef(null);

    const btnAnimation = (yOffset) => {
        gsap.to(buttonRef.current.querySelectorAll(".frame-content"), {
            yPercent: yOffset,
            duration: 0.5,
            ease: "power2.inOut",
        });
    };

    return (
        <div
            ref={buttonRef}
            onMouseEnter={() => btnAnimation(-100)}
            onMouseLeave={() => btnAnimation(0)}
            className="button w-36 h-9 bg-white flex justify-center items-center text-sm font-light text-black rounded-full cursor-pointer z-10"
        >
            <div className="frame h-[85%] overflow-hidden">
                <div className="frame-content h-full flex items-center justify-center gap-3">
                    <span>{title}</span>
                    <IoIosReturnRight />
                </div>

                <div className="frame-content h-full flex items-center justify-center gap-3">
                    <span>{title}</span>
                    <IoIosReturnRight />
                </div>
            </div>
        </div>
    );
};

export default Button;
