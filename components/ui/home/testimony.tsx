import Image from "next/image";
import quotation from "@/public/assets/quotation.png";
import airBnbIcon from "@/public/assets/_Client logo.png";
import hubSpotIcon from "@/public/assets/_Client logo (1).png";
import strapiIcon from "@/public/assets/_Client logo (3).png";

type Props = {
    className?: string;
}

export default function Testimony({ className }: Props) {
    return (
        <div className={`${className} p-20 `} style={{ background: "#D5FAFC" }}>
            <div className="grid gap-8 lg:grid-cols-2">
                <div className="relative mb-10">
                    <div className="absolute opacity-50 -inset-10 left-0"><Image src={quotation} width={100} alt="quotation"></Image></div>
                    <div className="relative text-3xl font-bold max-w-md">Real Stories from Real Customers</div>
                    <div>Get inspired by these stories.</div>
                </div>
                <div className="lg:pt-24">
                    <div className="bg-white rounded shadow p-5 lg:max-w-md">
                        <div><Image src={airBnbIcon} alt="airbnb"></Image></div>
                        <div className="flex gap-3 mt-5">
                            <div>
                                <Image src={quotation} width={30} alt="quatation"></Image>
                            </div>
                            <div>
                                <p>I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.</p>
                                <div className="font-bold mt-5">Jane Cooper</div>
                                <div className="text-gray-500 text-xs">CEO, AirBnb</div>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="lg:-mt-38">
                    <div className="bg-white rounded p-5 lg:max-w-sm ml-auto">
                        <div><Image src={hubSpotIcon} alt="hubSpotIcon"></Image></div>
                        <div className="flex gap-3 mt-5">
                            <div>
                                <Image src={quotation} width={50} alt="quatation" />
                            </div>
                            <div>
                                <p>To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.</p>
                                <div className="mt-5 font-bold">Floyd Miles</div>
                                <div className="text-gray-600 text-xs">Vice President, GoPro</div>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="">
                    <div className="bg-white rounded p-5 lg:max-w-xs">
                        <div><Image src={strapiIcon} alt="strapiIcon"></Image></div>
                        <div className="flex gap-3 mt-5">
                            <div>
                                <Image src={quotation}  width={20} alt="quatation"></Image>
                            </div>
                            <div>
                                <p>Landify saved our time in designing my company page.</p>
                                <div className="font-bold mt-5">Kristin Watson</div>
                                <div className="text-xs text-gray-500">Co-Founder, Strapi</div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}