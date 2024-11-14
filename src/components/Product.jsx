import Button from "./Button";

const Product = ({ val, getPos, index }) => {
    return (
        <div
            onMouseEnter={() => getPos(index)}
            className="w-full h-[20rem]"
        >
            <div className="max-w-screen-xl mx-auto flex items-center justify-between py-20">
                <h1 className="text-6xl font-medium">{val.title}</h1>
                <div className="details w-1/3">
                    <p>{val.desc}</p>
                    <div className="flex items-center gap-5 mt-10">
                        {val.btn1 && <Button title="Live Project" />}
                        {val.btn2 && <Button title="Case Study" />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
