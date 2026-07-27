import Image from "next/image"
import logo1 from "@/public/assets/_Client logo.png"
import logo2 from "@/public/assets/_Client logo (1).png"
import logo3 from "@/public/assets/_Client logo (2).png"
import logo4 from "@/public/assets/_Client logo (3).png"
import logo5 from "@/public/assets/_Client logo (4).png"
import logo6 from "@/public/assets/_Client logo (5).png"
type Props = {
    className?: string;
}
export default function Logos({ className }: Props) {
    return (
        <div className={className}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-20 place-items-center">
                <div>
                    <Image src={logo1} alt="logo1" width={70}></Image>
                </div>
                <div>
                    <Image src={logo2} alt="logo1" width={70}></Image>
                </div>
                <div>
                    <Image src={logo3} alt="logo1" width={70}></Image>
                </div>
                <div>
                    <Image src={logo4} alt="logo1" width={70}></Image>
                </div>
                <div className="hidden md:block lg:hidden"></div>
                <div>
                    <Image src={logo5} alt="logo1" width={70}></Image>
                </div>
                <div>
                    <Image src={logo6} alt="logo1" width={70}></Image>
                </div>
                <div className="hidden md:block lg:hidden"></div>
            </div>
        </div>
    )
}