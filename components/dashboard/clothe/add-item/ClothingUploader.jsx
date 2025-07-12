"use client";

import { useRef, useState } from "react";
import { FiUploadCloud, FiImage } from "react-icons/fi";
import { RiDownloadCloudFill } from "react-icons/ri";

const ClothingUploader = () => {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPreview(null);
      return;
    }

    // 🔥 Fix: reset input to allow same file selection again
    e.target.value = "";

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const triggerFileInput = () => inputRef.current.click();

  return (
    <div className="w-full max-w-[50%] flex flex-col gap-6">
      {/* Upload Section */}
      <div
        className="border-1 border-dashed border-primary-dark rounded-xl p-5 flex flex-col items-center justify-center cursor-pointer text-center min-h-[330px]"
        onClick={triggerFileInput}
      >
        {preview ? (
          <img
            src={preview}
            alt="Uploaded preview"
            className="h-full flex flex-col gap-6 max-h-[330px] w-auto object-cover rounded-xl"
          />
        ) : (
          <>
            <RiDownloadCloudFill className="text-6xl text-primary-dark mb-4" />
            <p className="text-xl font-medium text-primary-dark font-secondary">
              Drop your clothing item photo here or click to upload
            </p>
            <p className="text-base text-primary-dark font-primary">
              or take a photo with your camera
            </p>
            <button
              onClick={triggerFileInput}
              className="mt-4 px-6 py-2 bg-black text-white rounded-md text-base font-primary font-medium cursor-pointer"
            >
              Choose File
            </button>
          </>
        )}

        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Preview Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <p className="text-xl font-semibold text-primary-dark font-primary mb-3">
          Preview
        </p>
        <div className="border-1 border-dashed border-primary-dark rounded-xl h-[330px] flex items-center justify-center overflow-hidden bg-gray-50">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="h-full w-full object-cover rounded-xl"
            />
          ) : (
            <FiImage className="text-6xl text-primary-dark" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ClothingUploader;
