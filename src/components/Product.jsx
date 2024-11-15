import Button from "./Button";

const Product = ({ val, getPos, index }) => {
    const { title, desc, btn1, btn2, background } = val;

    return (
        <div
            onMouseEnter={() => getPos(index)}
            style={{ ["--hover-bg"]: background }}
            className="w-full h-[20rem] hover:bg-[var(--hover-bg)] transition-colors duration-300"
        >
            <div className="max-w-screen-xl mx-auto flex items-center justify-between py-20">
                <h1 className="text-6xl font-medium">{title}</h1>
                <div className="details w-1/3">
                    <p>{desc}</p>
                    <div className="flex items-center gap-5 mt-10">
                        {btn1 && <Button title="Live Project" />}
                        {btn2 && <Button title="Case Study" />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
