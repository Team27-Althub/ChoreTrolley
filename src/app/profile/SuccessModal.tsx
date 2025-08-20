"use client";
import React from "react";
import Image from "next/image";
import CheckIcon from '../../../public/Check.png';
import { Button } from "@/components/ui/button";
import Link from "next/link";

type successModalProps = {
  open: boolean;
  title?: string;
  message?: string;
  redirectPath?: string;
  buttonLabel?: string;
  onClose?: () => void; 
};

const SuccessModal = ({
  open,
  title,
  message,
  redirectPath = "/login",
  buttonLabel = "Login",
  onClose
}: successModalProps) => {
  if (!open) return null;

  return (
    <div className="h-screen w-screen fixed inset-0 top-0 left-0 bg-[#00000080] flex justify-center items-center z-50"
    onClick={onClose}
    >
      <div className="flex items-center justify-center rounded-2xl flex-col w-[90%] md:w-[60%] lg:w-[40%] h-[24rem] space-y-10 bg-white"
      onClick={(e) => e.stopPropagation()}>
        <div className="w-15 h-15 rounded-full bg-[#7BC89F] flex items-center justify-center">
          <Image src={CheckIcon} alt="checkIcon" />
        </div>
        {/*  fallbacks */}
        <h2 className="text-2xl font-medium text-[#013328] mb-3">
          {title || "Account created successfully!"} {/*  fallbacks */}
        </h2>

        <p className="text-gray-600 text-center whitespace-normal break-words mb-8 px-4">
          {message ||
            "Congratulations! Your account has been created. Please log in with your credentials to get started."}
        </p>

        <Link
          href={redirectPath}
          className="w-[40%] md:w-[60%] lg:w-[90%] border-2"
        >
          <Button
            variant="loginMain"
            className="bg-[#013328] text-white text-[18px] px-20 w-full h-12 rounded-md"
          >
            {buttonLabel}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessModal;
