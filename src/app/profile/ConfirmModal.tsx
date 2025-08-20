"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

type ConfirmModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  cancelLabel?: string;
  confirmLabel?: string;
};
const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  onClose,
  onConfirm,
  title,
  message,
  cancelLabel,
  confirmLabel,
}) => {
  if (!open) return null;
  return (
    <>
      <div className="h-screen w-screen fixed inset-0 top-0 left-0 bg-[#00000080] flex justify-center items-center z-50"
      onClick={onClose}
      >
        <div className="bg-white h-[350px] max-w-full w-[600px]  rounded-xl p-4 relative"
        onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute right-4" onClick={onClose}>
            <X className="w-7 h-7 text-gray-800 dark:text-white border rounded-full p-2 hover:cursor-pointer" />
          </div>
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-2xl text-center font-semibold">{title}</h2>
            <p className="text-[#00000080] w-[60%] text-center mt-2 text-sm">
              {message}
            </p>
            <div className="mt-5 flex gap-5">
              <Button variant={"anotherOutline"} onClick={onClose}>
                {cancelLabel}
              </Button>
              <Button variant={"delete"} onClick={onConfirm}>
                {confirmLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmModal;
