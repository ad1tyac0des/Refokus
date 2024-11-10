const Marquee = ({ images }) => {
    return (
        <div className="flex gap-28 py-10 whitespace-nowrap overflow-hidden">
            {images.map((image, index) => (
                <img key={index} src={image} className="w-32 flex-shrink-0" />
            ))}

            {images.map((image, index) => (
                <img key={index} src={image} className="w-32 flex-shrink-0" />
            ))}
        </div>
    );
};

export default Marquee;
