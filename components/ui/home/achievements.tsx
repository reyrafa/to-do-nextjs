import Image from "next/image";
import icon1 from "@/public/assets/Base feature icon.png"
import icon2 from "@/public/assets/Base feature icon (1).png"
import icon3 from "@/public/assets/Base feature icon (2).png"
import icon4 from "@/public/assets/Base feature icon (3).png"
type Props = {
    className?: string;
}
export default function Achievements({ className }: Props) {
    return (
        <div className={`${className} mt-24 px-5 md:px-20 lg:px-40`}>
            <div className="lg:flex lg:justify-between">
                <div>
                    <div className="text-4xl font-bold max-w-md mb-3">Our 18 years of achievements</div>
                    <div>With our super powers we have reached this</div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="flex items-center gap-4">
                        <div><Image src={icon1} alt="icon1" width={25}></Image></div>
                        <div>
                            <div className="text-3xl font-bold">
                                10,000+
                            </div>
                            <div className="text-sm">Downloads per day</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div><Image src={icon2} alt="icon2"></Image></div>
                        <div>
                            <div className="text-3xl font-bold">
                                2 Million
                            </div>
                            <div className="text-sm">Users</div>
                        </div>
                    </div>
                    <div>
                        <div><Image src={icon3} alt="icon1"></Image></div>
                        <div>
                            <div>
                                500+
                            </div>
                            <div>Clients</div>
                        </div>
                    </div>
                    <div>
                        <div><Image src={icon4} alt="icon4"></Image></div>
                        <div>
                            <div>
                                140
                            </div>
                            <div>Countries</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}