import ChartView from "./components/ChartView";
import Header from "./components/Header";
import Image from "next/image";
import background from "../public/images/bg.png";
import Foto from "./components/Foto";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="relative w-full">
        <div className="absolute -z-10 w-full">
          <Image
            src={background}
            alt="background image"
            className="w-full"
            width={1920}
            height={1080}
            quality={100}
          />   
        </div>
        <div className="container max-w-fit ml-auto mr-auto place-content-center">
          <div className="relative flex min-h-screen flex-col justify-center py-6 sm:py-12">
            <ChartView />
            <Foto/>
          </div>
        </div>
      </div>
    </main>
  );
}
