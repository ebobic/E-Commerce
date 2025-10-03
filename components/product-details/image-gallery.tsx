"use client";

import Image from "next/image";
import { useState } from "react";


interface ImageGalleryProps {
    images: string[];
    title: string
}

export default function ImageGallery({ images }: ImageGalleryProps) {
    const imagesToRender = images.slice(0, 3)  // Only take the first 3 images from the array (if more are passed in)
    const [selectedImage, setSelectedImage] = useState(imagesToRender[0]);  // Keeping track of which image is currently selected, default is first in the list

    return (
        <div className="flex items-center justify-center m-auto w-9/10 lg:w-1/2 gap-4">

        {/* Thumbnails that show if there is more than 1 image to render*/}
        {imagesToRender.length > 1 && (
            <div className="flex flex-col items-center justify-center gap-3 w-[20%] min-w-[60px] max-w-[150px]">
                {imagesToRender.map((img, id) => (
                    <button
                        key={id}
                        onClick={() => setSelectedImage(img)} // change main image when clicked
                        className={`relative w-full aspect-square rounded-lg overflow-hidden border bg-blue-50 cursor-pointer 
                            ${selectedImage === img ? "border-blue-800 border-1" : "border-transparent"} 
                        `}
                    >
                        <span className="hidden">View image</span>
                        <Image
                            src={img}
                            alt={""}
                            fill
                            className="object-contain"
                            sizes="(max-width: 640px) 60px, (max-width: 1024px) 80px, 100px"
                        />
                    </button>
                ))}
            </div>
        )}

        {/* Main Image */}
        <div className="relative flex-1  max-w-[800px] aspect-square rounded-lg overflow-hidden bg-blue-50">
            <Image
            src={selectedImage}
            alt={""}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 200px, (max-width: 1024px) 400px, 600px"
            />
        </div>
        </div>
    );
}