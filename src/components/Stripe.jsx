const Stripe = ({ val, index }) => {
    return (
        <div
            className={`min-w-[45%] md:min-w-[30%] lg:min-w-[16.66%] p-4 flex items-center justify-between border-y ${index !== 5 && "border-r"
                } border-zinc-700`}
        >
            <img className="w-28 h-full md:w-auto md:h-auto" src={val.src} />
            <span className="text-sm md:text-base font-semibold">{val.counts}</span>
        </div>
    );
};

export default Stripe;
