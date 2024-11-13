const Work = () => {
    const data = [
        {
            src: "/assets/images/work/img1.png",
            top: "50%",
            left: "50%",
            isActive: false,
        },
        {
            src: "/assets/images/work/img2.png",
            top: "55%",
            left: "45%",
            isActive: false,
        },

        {
            src: "/assets/images/work/img3.png",
            top: "45%",
            left: "55%",
            isActive: false,
        },

        {
            src: "/assets/images/work/img4.png",
            top: "50%",
            left: "50%",
            isActive: false,
        },

        {
            src: "/assets/images/work/img5.png",
            top: "60%",
            left: "55%",
            isActive: false,
        },

        {
            src: "/assets/images/work/img6.png",
            top: "65%",
            left: "40%",
            isActive: false,
        },
    ];

    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto relative">
                <h1 className="text-[36rem] leading-[1.4] tracking-tight font-medium text-center">
                    work
                </h1>

                <div className="w-full h-full absolute top-0">
                    {data.map(
                        (elem, index) =>
                            elem.isActive && (
                                <div
                                    key={index}
                                    className="w-60 aspect-square absolute -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden"
                                    style={{ top: elem.top, left: elem.left }}
                                >
                                    <img
                                        className="w-full h-full object-cover"
                                        src={elem.src}
                                        alt="work"
                                    />
                                </div>
                            )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Work;
