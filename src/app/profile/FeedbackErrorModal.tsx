"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import WarningIcon from "../../../public/WarningCircle.png";

type LoginErrorModalProps = {
  open: boolean;
  onClose: () => void;
  message: string | null;
};
const LoginErrorModal: React.FC<LoginErrorModalProps> = ({
  open,
  onClose,
  message,
}) => {
  if (!open || !message) return null;
  return (
    <>
      <div
        className=" absolute bottom-5 right-2"
        onClick={onClose}
      >
        <div
          className=" flex items-center justify-center  rounded-xl p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className=" w-[80%] px-3  h-15 bg-[#E53935]  rounded-[10px] flex justify-evenly items-center">
            <Image src={WarningIcon} alt="WarningIcon" className="w-8 h-8 " />
            <p className="w-[60%] text-white text-center mt-2 text-sm wrap-break-word">
              {message || "Sorry, something went wrong and we could not process your request. Please try again."}
            </p>
            <X
              className="w-7 h-7 text-white rounded-full p-2 hover:cursor-pointer"
              onClick={onClose}
            />
            <div className="border-l-4 border-[#00000080] h-full w-3 -mr-7.5 rounded-r-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginErrorModal;
