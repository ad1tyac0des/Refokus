import gsap from "gsap";
import { IoIosReturnRight } from "react-icons/io";

const Button = () => {
    const btnAnimation = (yOffset) => {
        gsap.to(".frame-content", {
            yPercent: yOffset,
            duration: .5,
            ease: 'power2.inOut'
        });
    };

    return (
        <div onMouseEnter={() => btnAnimation(-100)} onMouseLeave={() => btnAnimation(0)} className="button w-36 h-9 bg-white flex justify-center items-center text-sm font-light text-black rounded-full cursor-pointer">
            <div className="frame h-[85%] overflow-hidden">
                <div className="frame-content h-full flex items-center justify-center gap-3">
                    <span>Start a Project</span>
                    <IoIosReturnRight />
                </div>

                <div className="frame-content h-full flex items-center justify-center gap-3">
                    <span>Start a Project</span>
                    <IoIosReturnRight />
                </div>
            </div>
        </div>
    );
};

export default Button;
