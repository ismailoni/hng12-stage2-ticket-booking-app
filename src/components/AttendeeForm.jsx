"use client";

import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";

const AttendeeForm = ({ onNext, formData, onPrev }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const [avatarPreview, setAvatarPreview] = useState(formData.avatar || null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    localStorage.setItem("attendeeForm", JSON.stringify(formData));
  }, [formData]);

  const handleImageUpload = async (file) => {
    setUploading(true);
    const imageData = new FormData();
    imageData.append("file", file);
    imageData.append("upload_preset", "avatar");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dbsm2qvi2/image/upload",
        { method: "POST", body: imageData }
      );
      const data = await response.json();
      setAvatarPreview(data.secure_url);
      setValue("avatar", data.secure_url, { shouldValidate: true });
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
      handleImageUpload(file);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: "image/*" });

  const onSubmit = (data) => {
    if (!avatarPreview) {
      alert("Please upload an avatar before proceeding.");
      return;
    }
    onNext({ ...data, avatar: avatarPreview });
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Attendee Details</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Avatar Upload */}
        <div {...getRootProps()} className="border-2 border-dashed border-gray-500 rounded-lg p-6 text-center cursor-pointer mb-4">
          <input {...getInputProps()} />
          {avatarPreview ? (
            <img src={avatarPreview} alt="Avatar" className="w-32 h-32 mx-auto rounded-full" />
          ) : (
            <p className="text-gray-400">Drag & drop or click to upload</p>
          )}
        </div>

        {/* Full Name */}
        <input
          {...register("fullName", { required: "Full name is required" })}
          className="w-full p-3 text-black rounded mb-3"
          placeholder="Enter your name"
        />
        {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}

        {/* Email */}
       <input
         {...register("email", {
           required: "Email is required",
           pattern: {
             value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
             message: "Invalid email format",
          },
        })}
        className="w-full p-3 text-black rounded mb-3"
        placeholder="Enter your email"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        {/* About the Project */}
        <textarea
          {...register("message")}
          className="w-full p-3 text-black rounded mb-3"
          placeholder="About the project"
        />

        {/* Buttons */}
        <div className="flex justify-between">
          <button type="button" className="px-4 py-2 bg-gray-700 text-white rounded" onClick={onPrev}>Back</button>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded" disabled={uploading}>
            {uploading ? "Uploading..." : "Get My Free Ticket"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttendeeForm;
