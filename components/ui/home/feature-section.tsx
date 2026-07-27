import icon1 from "@/public/assets/Base feature icon.png";
import icon2 from "@/public/assets/Base feature icon (1).png";
import icon3 from "@/public/assets/Base feature icon (2).png";
import icon4 from "@/public/assets/Base feature icon (3).png";
import icon5 from "@/public/assets/Base feature icon (5).png";
import icon6 from "@/public/assets/Base feature icon (6).png";
import Image from "next/image";

type Props = {
    className?: string;
}

export default function FeatureSection({ className }: Props) {
    return (
        <div className={className}>
            <div className="">
                <div className="text-center">
                    <div className="text-4xl font-bold">
                        Tailor-made features
                    </div>
                    <div className="w-full lg:w-1/2 mx-auto">
                        <p>Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-5 text-center items-center mt-12">
                    <div>
                        <div className="flex justify-center mb-4"><Image src={icon1} alt="icon1" width={25} /></div>
                        <div className="mb-2 font-bold text-2xl">Robust workflow</div>
                        <div className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</div>
                    </div>
                    <div>
                        <div className="flex justify-center mb-4"><Image src={icon2} alt="icon2" width={25} /></div>
                        <div className="mb-2 font-bold text-2xl">Flexibility</div>
                        <div className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</div>
                    </div>
                    <div>
                        <div className="flex justify-center mb-4"><Image src={icon3} alt="icon3" width={25} /></div>
                        <div className="mb-2 font-bold text-2xl">User friendly</div>
                        <div className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</div>
                    </div>
                    <div>
                        <div className="flex justify-center mb-4"><Image src={icon4} alt="icon4" width={25} /></div>
                        <div className="mb-2 font-bold text-2xl">Multiple Layouts</div>
                        <div className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</div>
                    </div>
                    <div>
                        <div className="flex justify-center mb-4"><Image src={icon5} alt="icon5" width={25} /></div>
                        <div className="mb-2 font-bold text-2xl">Better components</div>
                        <div className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</div>
                    </div>
                    <div>
                        <div className="flex justify-center mb-4"><Image src={icon6} alt="icon6" width={25} /></div>
                        <div className="mb-3 font-bold text-2xl">Well organized</div>
                        <div className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}