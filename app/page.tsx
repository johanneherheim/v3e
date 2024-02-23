import Image from "next/image";
import hero from "@/components/images/IMG_0250.jpeg";

export default function Home() {
  const viewportHeight = `calc(100vh - ${64}px)`;
  return (
    <div className="relative flex items-center justify-center h-2/3">
      <div className="relative w-full h-full">
        <Image
          src={hero}
          alt="loading image"
          style={{ height: viewportHeight, width: "100%" }}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0"></div>
      </div>
      <div className="absolute bg-white bg-opacity-70 p-4 sm:p-5 rounded top-40 sm:top-24">
        <h1 className="text-center text-2xl ">Velkommen til Voss 3-etappers</h1>
        <h2 className="antialiased leading-relaxed font-extrabold tracking-widest text-2xl sm:text-7xl text-center px-5 ">
          3. – 4. august 2024
        </h2>
      </div>
    </div>
  );
}
