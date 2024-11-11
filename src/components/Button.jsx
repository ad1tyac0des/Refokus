import gsap from "gsap";
import { useRef } from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({
    title = "Start a Project",
    icon = true,
    bgColor = "bg-white",
    textColor = "text-black",
}) => {
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
            className={`button w-36 h-9 flex justify-center items-center border text-sm font-light rounded-full cursor-pointer z-10 ${bgColor} ${textColor}`}
        >
            <div className="frame h-[85%] overflow-hidden">
                <div className="frame-content h-full flex items-center justify-center gap-3">
                    <span>{title}</span>
                    {icon && <IoIosReturnRight />}
                </div>

                <div className="frame-content h-full flex items-center justify-center gap-3">
                    <span>{title}</span>
                    {icon && <IoIosReturnRight />}
                </div>
            </div>
        </div>
    );
};

export default Button;
