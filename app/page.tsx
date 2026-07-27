import Image from "next/image";
import background from "@/assets/Background.png";
import phoneMockUp from "@/public/assets/Phone Mockup.png";
import essentialIcon from "@/public/assets/Essential icon.png";
import Logos from "@/components/ui/home/logos";
import FeatureSection from "@/components/ui/home/feature-section";
import Testimony from "@/components/ui/home/testimony";
import Achievements from "@/components/ui/home/achievements";
import NavBar from "@/components/ui/navbar/nav-bar";
import Background from "@/public/assets/Background.png";

export default function Home() {
  return (
    <div>
      <div className="h-screen bg-cover bg-center bg-no-repeat pt-5" style={{ backgroundImage: `url(${Background.src})` }}>
        <div>
          <NavBar></NavBar>
        </div>
        <div className="block lg:flex justify-between items-center mt-24 px-5 md:px-20 lg:px-40">
          <div>
            <div className="text-5xl font-bold w-full lg:w-3/4 tracking-wider">The easiest way to manage projects</div>
            <div className="mt-4 w-full lg:w-3/4">
              <p className="text-gray-700">From the small stuff to the big picture, organizes the work so the teams know what to do, why it matters, and how to get it done.</p>
            </div>
            <div className="flex gap-8 mt-4 mb-16 lg:mb-0 items-center ">
              <div><button className="px-3 py-2 rounded text-white" style={{ background: "#7C3AED" }}>Get Started</button></div>
              <div>
                <button className="flex gap-1 items-center">
                  <Image src={essentialIcon} width={22} alt="watch icon"></Image>
                  <span style={{ color: "#7C3AED" }} className="font-semibold">Watch Video</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src={phoneMockUp} width={500} alt="phone" />
          </div>
        </div>
      </div>


      <div>

        <Logos className="mt-10 mb-10 border-b border-t py-10 border-gray-200 px-5 md:px-20 lg:px-40"></Logos>
        <FeatureSection className="mt-24 px-5 md:px-20 lg:px-40" />
        <Testimony />
        <Achievements />
      </div>
    </div>

  );
}
