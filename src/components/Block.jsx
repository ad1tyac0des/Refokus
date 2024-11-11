import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Button from "./Button";

const Block = ({ basis, cta, desc, title, subtitle, hover }) => {
    return (
        <div className={`${basis} min-h-96 flex flex-col justify-between bg-zinc-800 rounded-xl px-4 py-5 ${hover ? "hover:bg-violet-700" : "hover:bg-zinc-700"} transition-colors duration-300`}>
            <div className="w-full">
                <div className="flex items-center justify-between">
                    <h5 className="text-base font-light">{subtitle}</h5>
                    <HiOutlineArrowLongRight />
                </div>
                <h3 className="w-48 text-3xl font-medium mt-4 leading-none">{title}</h3>
            </div>

            <div className="w-full">
                {cta && (
                    <>
                        <h1 className="text-8xl font-semibold tracking-[-0.015em]">
                            Start a Project
                        </h1>
                        <div className="mt-5">
                            <Button
                                title="Contact Us"
                                icon={false}
                                bgColor="transparent"
                                textColor="text-white"
                            />
                        </div>
                    </>
                )}

                {desc && (
                    <p className="text-sm font-light tracking-wide">
                        Explore what drives our team.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Block;
