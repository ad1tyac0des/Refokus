import Button from "./Button";
import gsap from "gsap";

const Product = ({ val, getPos, showBtn2, index, handleMouseMove }) => {

    const { title, desc, btn1, btn2, background } = val;

    return (
        <div
            onMouseEnter={() => {
                getPos(index);
                showBtn2(index);
            }}
            onMouseMove={(dets) => {
                const x1 = dets.currentTarget.getBoundingClientRect().x
                const x2 = dets.currentTarget.getBoundingClientRect().width

                const y1 = dets.currentTarget.getBoundingClientRect().y
                const y2 = y1 + dets.currentTarget.getBoundingClientRect().height

                const moveX = gsap.utils.mapRange(-x1, -x2, -48, -52, dets.clientX)
                const moveY = gsap.utils.mapRange(y1, y2, -1, 1, dets.clientY)

                handleMouseMove(moveX, moveY)
            }}
            style={{ ["--hover-bg"]: background }}
            className={`w-full h-[19rem] hover:bg-[var(--hover-bg)] transition-colors duration-500 ${index===0 && 'border-t'} border-b border-zinc-500`}
        >
            <div className="max-w-screen-xl mx-auto flex items-center justify-between py-20">
                <h1 className="text-6xl font-medium">{title}</h1>
                <div className="details w-1/3">
                    <p>{desc}</p>
                    <div className="flex items-center gap-5 mt-10">
                        {btn1 && <Button title="Live Project" />}
                        <Button title="Case Study" opacity={btn2 ? "opacity-100" : "opacity-0"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
