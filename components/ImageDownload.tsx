"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Download, Loader } from "lucide-react";

type ImageProps = {
  src: string;
  alt: string;
};

export default function ImageComponent({ src, alt }: ImageProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.setAttribute("download", alt);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
    setIsDownloading(false);
  };

  return (
    <>
      <div className="relative flex">
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          className="object-cover"
        />
        <Button
          onClick={handleDownload}
          disabled={isDownloading}
          className="p-2 absolute top-0 right-0 bg-transparent hover:bg-transparent text-muted-foreground transition-transform hover:scale-110"
        >
          {isDownloading ? (
            <Loader className="animate-spin h-5 w-5" />
          ) : (
            <Download />
          )}
        </Button>
      </div>
    </>
  );
}
