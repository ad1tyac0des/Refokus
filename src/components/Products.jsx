import Product from "./Product";

const Products = () => {
    const products = [
        {
            title: "Arqitel",
            desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            btn1: true,
            btn2: false
        },

        {
            title: "TTR",
            desc: "A 3D animation that showcases the TTR platform and how it works in the real world for the first time.",
            btn1: true,
            btn2: false
        },

        {
            title: "YIR 2022",
            desc: "A 3D animation that showcases the TTR platform and how it works in the real world for the first time for the YIR 2022 campaign.",
            btn1: true,
            btn2: true
        },

        {
            title: "Yahoo!",
            desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            btn1: true,
            btn2: true
        },

        {
            title: "Rainfall",
            desc: "A 3D animation that showcases the TTR platform and how it works in the real world for the first time for the YIR 2022 campaign.",
            btn1: true,
            btn2: false
        }
    ];

    return (
        <div>
            {products.map((elem, index) => (
                <Product key={index} val={elem} />
            ))}
        </div>
    )
}

export default Products
