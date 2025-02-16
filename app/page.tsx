import Image from "next/image";
import picture from "@/components/images/framside.png";
import Link from "next/link";

export default function Home() {
  const viewportHeight = `calc(100vh - ${64}px)`;
  return (
    <div className="relative flex flex-col items-center justify-center h-2/3">
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={picture}
          alt="loading image"
          style={{ height: viewportHeight, width: "100%" }}
          className="object-cover object-left md:object-center"
          priority
        />
      </div>
      <div className="absolute top-24 sm:top-16 bg-white bg-opacity-70 w-full sm:w-fit p-4 sm:p-5 rounded">
        <h1 className="text-center mb-0 ">Voss 3-etappars</h1>
        <h3 className="text-center mb-6">Uno-X Norgescup</h3>
        <h1 className="font-extrabold tracking-wide text-2xl sm:text-5xl text-center px-8">
          8.–10. august 2025
        </h1>
      </div>
      {/* PÅMELDINGSKNAPP */}
      {/* <Link
        href="https://live.eqtiming.com/71975#dashboard"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-32 sm:bottom-1/6 flex justify-center bg-black text-white rounded-lg py-5 px-10 text-xl font-semibold"
      >
        Meld deg på her
      </Link> */}
    </div>
  );
}
