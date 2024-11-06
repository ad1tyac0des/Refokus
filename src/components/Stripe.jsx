const Stripe = ({ val, index }) => {
    return (
        <div className={`w-[16.66%] p-4 flex items-center justify-between border-y ${index !== 5 && 'border-r'} border-zinc-700`}>
            <img src={val.src} />
            <span className="text-base font-semibold">{val.counts}</span>
        </div>
    )
};

export default Stripe;
