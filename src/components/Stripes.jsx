import Stripe from "./Stripe";

const Stripes = () => {
    const data = [
        {
            src: "assets/images/stripe/stripe1.svg",
            counts: 48,
        },
        {
            src: "assets/images/stripe/stripe2.svg",
            counts: 2,
        },
        {
            src: "assets/images/stripe/stripe3.svg",
            counts: 11,
        },
        {
            src: "assets/images/stripe/stripe4.svg",
            counts: 48,
        },
        {
            src: "assets/images/stripe/stripe5.svg",
            counts: 2,
        },
        {
            src: "assets/images/stripe/stripe6.svg",
            counts: 11,
        },
    ];

    return (
        <div className="w-full flex mt-20 overflow-x-auto lg:overflow-hidden">
            {data.map((element, index) => (
                <Stripe key={index} val={element} index={index} />
            ))}
        </div>
    );
};

export default Stripes;
