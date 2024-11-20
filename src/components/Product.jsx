import Button from "./Button";
import gsap from "gsap";

const Product = ({ val, getPos, showBtn2, index, handleMouseMove }) => {
    const { title, desc, btn1, btn2, background, media } = val;

    return (
        <div
            onMouseEnter={() => {
                getPos(index);
                showBtn2(index);
            }}
            onMouseMove={(dets) => {
                const x1 = dets.currentTarget.getBoundingClientRect().x;
                const x2 = dets.currentTarget.getBoundingClientRect().width;

                const y1 = dets.currentTarget.getBoundingClientRect().y;
                const y2 = y1 + dets.currentTarget.getBoundingClientRect().height;

                const moveX = gsap.utils.mapRange(-x1, -x2, -48, -52, dets.clientX);
                const moveY = gsap.utils.mapRange(y1, y2, -0.7, 0.7, dets.clientY);

                handleMouseMove(moveX, moveY);
            }}
            style={{ ["--hover-bg"]: background, ["--product-bg"]: background }}
            className={`w-full lg:h-[19rem] lg:hover:bg-[var(--hover-bg)] lg:hover:scale-y-105 transition-[background,transform] duration-[.4s,.3s] ${index === 0 && "lg:border-t"
                } lg:border-b lg:border-zinc-500`}
        >
            <div className="max-w-screen-xl mx-auto bg-[var(--product-bg)] lg:bg-transparent flex flex-col lg:flex-row lg:items-center justify-between px-3 md:px-7 lg:px-0 py-5 md:py-7 lg:py-20 rounded-lg lg:rounded-none">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium">
                    {title}
                </h1>

                {/* Image Container | Hidden on Desktops */}
                <div className="w-full h-64 md:h-96 mt-5 bg-gray-700 rounded-lg overflow-hidden lg:hidden">
                    <img className="w-full h-full object-cover object-center" src={`/assets/images/product/${media}.webp`} />
                </div>

                <div className="details w-full lg:w-1/3">
                    <p className="text-lg leading-6 lg:text-base mt-5">{desc}</p>
                    <div className="flex items-center gap-5 mt-10">
                        {/* Live Project Button */}
                        {btn1 && (
                            <Button
                                title="Live Project"
                                fontSize={window.innerWidth < 1024 ? "text-[0.93rem]" : "text-sm"}
                                height={window.innerWidth < 1024 ? "h-10" : "h-9"}
                            />
                        )}

                        {/* Case Study Button */}
                        <Button
                            title="Case Study"
                            opacity={
                                btn2 || window.innerWidth < 1024 ? "opacity-100" : "opacity-0"
                            }
                            fontSize={window.innerWidth < 1024 ? "text-[0.93rem]" : "text-sm"}
                            height={window.innerWidth < 1024 ? "h-10" : "h-9"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
