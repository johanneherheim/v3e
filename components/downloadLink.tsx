"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Download, Loader } from "lucide-react";

type DownloadLinkProps = {
  src: string;
  filename: string;
};

export default function DownloadLink({ src, filename }: DownloadLinkProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      // Ensure filename has a .gpx extension
      const validFilename = filename.endsWith(".gpx")
        ? filename
        : `${filename}.gpx`;
      link.setAttribute("download", validFilename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
    setIsDownloading(false);
  };

  return (
    <Button onClick={handleDownload} disabled={isDownloading} variant="accent">
      {isDownloading ? <Loader className="inline ml-1 size-4" /> : filename}
      <Download className="inline ml-1 size-4" />
    </Button>
  );
}
