import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import Image from "../../../assets/group-supporting-depressed-man-with-alcoholism-pro-2024-03-19-20-57-50-utc.png"
const Gallery: React.FC = () => {
  const [images, setImages] = useState([
    { id: 1, name: "12", size: "76.09 KB", src: Image},
    { id: 2, name: "06", size: "63.33 KB", src: Image },
    { id: 3, name: "img-02", size: "417.01 KB", src: Image },
  ]);

  const [videos, setVideos] = useState<string[]>([]);

  const handleRemoveImage = (id: number) => {
    setImages((prev) => prev.filter((image) => image.id !== id));
  };

  const handleAddVideo = (url: string) => {
    if (url.trim()) {
      setVideos([...videos, url]);
    }
  };

  const handleRemoveVideo = (url: string) => {
    setVideos((prev) => prev.filter((video) => video !== url));
  };

  return (
    <div>
      <h2 className="text-lg mb-4 py-2 px-4 bg-gray-50 border-l-4 border-primary">
        Profile Gallery
      </h2>

      {/* Image Upload Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center border-dashed border-2 border-gray-300 p-4 rounded-lg">
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
            Select File
          </button>
          <p className="text-gray-400 text-sm">Drop files here to upload</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="relative bg-gray-100 rounded-lg shadow">
              <img
                src={image.src}
                alt={image.name}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-2">
                <p className="text-sm font-medium">{image.name}</p>
                <p className="text-gray-500 text-xs">File size: {image.size}</p>
                <button
                className="absolute bottom-2 right-2 text-red-500"
                onClick={() => handleRemoveImage(image.id)}
              >
                <Trash2 size={16} />
              </button>
              </div>
             
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-lg mt-8 mb-4 py-2 px-4 bg-gray-50 border-l-4 border-primary">
        Videos
      </h2>

      {/* Video URL Section */}
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          placeholder="Your Video URL"
          className="w-3/4 p-3 border border-gray-300 rounded-lg"
        />
        <button
          type="button"
          className="px-4 w-1/4 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark"
          onClick={() => handleAddVideo("New Video URL")}
        >
          Add Now
        </button>
      </div>

      {/* Display Added Videos */}
      <ul className="space-y-2">
        {videos.map((video, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow">
            <span>{video}</span>
            <button
              className="text-red-500"
              onClick={() => handleRemoveVideo(video)}
            >
              <Trash2 size={16} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
