"use client";

import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

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

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const onSubmit = (data) => {
    if (!avatarPreview) {
      alert("Please upload an avatar before proceeding.");
      return;
    }
    onNext({ ...data, avatar: avatarPreview });
  };

  return (
    <div>
      <header className="mb-8">
        <div className="flex justify-between font-jeju items-center">
          <h1 className="text-[32px]">Attendee Details</h1>
          <span>Step 2/3</span>
        </div>
        <div className="mt-2 h-1 bg-[#0E464F] relative">
          <div className="bg-[#24A0B5] h-1 w-1/2"></div>
        </div>
      </header>
      <section className="bg-[#08252B] border border-[#0E464F] rounded-[32px] p-6">
        <div className="font-roboto text-[#fafafa]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-8 bg-[#052228] border border-[#07373F] rounded-[24px] p-6">
              <p>Upload Profile Photo</p>
              {/* Avatar Upload */}
              <div
                {...getRootProps()}
                className="flex border-2 w-full h-[200px] border-black rounded-lg text-center cursor-pointer mt-8 mb-7 justify-center"
              >
                <input {...getInputProps()} />
                <div className="flex flex-row justify-center bg-[#0E464F] -mt-5 text-white rounded-[32px] border-4 border-[#24A0B5] w-[240px] h-[240px]">
                  {avatarPreview ? (
                    <img
                      src={avatarPreview}
                      alt="Avatar"
                      className="w-full h-full object-cover rounded-[28px]"
                    />
                  ) : (
                    <p className="text-white self-center  max-w-[192px]">
                      <Image src='/cloud-download.svg' alt="Upload" width={32} height={32} className="mx-auto"/>
                      <span className="text-[16px]">Drag & drop or click to upload</span>
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full h-1 bg-[#07373F] my-8"></div>
            
            {/* Full Name */}
            <label className="text-[#fafafa]">Enter your name: *</label>
            <input
              {...register("fullName", { required: "Full name is required" })}
              className="w-full p-3 text-white mt-2 mb-8 bg-transparent border border-[#07373F] rounded-[12px]"
            />
            {errors.fullName && (
              <p className="text-red-500">{errors.fullName.message}</p>
            )}

            {/* Email */}
            <label className="text-[#fafafa]">Enter your email: *</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              className="w-full p-3 text-white mt-2 mb-8 bg-transparent border border-[#07373F] rounded-[12px]"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            {/* About the Project */}
            <label className="text-[#fafafa]">Special request?</label>
            <textarea
              {...register("message")}
              className="w-full p-3 text-white mt-2 mb-8 bg-transparent border border-[#07373F] rounded-[12px]"
              placeholder="Textarea"
            />

            {/* Buttons */}
            <div className="flex font-jeju gap-4 flex-col-reverse lg:flex-row">
              <button
                type="button"
                className="mt-4 w-full bg-transparent border border-[#24A0B5] hover:bg-[#24A0B5] text-white px-4 py-2 rounded-[8px] transition-all"
                onClick={onPrev}
              >
                Back
              </button>
              <button
                type="submit"
                className="mt-4 bg-[#24A0B5] w-full hover:bg-transparent border border-[#24A0B5] text-white px-4 py-2 rounded-[8px] transition-all"
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Get My Free Ticket"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AttendeeForm;
