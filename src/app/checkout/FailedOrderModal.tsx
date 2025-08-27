"use client";
import React from "react";
import Image from "next/image";
import CheckIcon from "../../../public/xcircle.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

type FailedOrderProps = {
  open: boolean;
  message?: string;
  redirectPath?: string;
  buttonLabel?: string;
  onClose: () => void;
};

const FailedOrder = ({
  open,
  message,
  redirectPath = "/",
  buttonLabel = "Try again",
  onClose,
}: FailedOrderProps) => {
  const router = useRouter();
  if (!open) return null;

  return (
    <div
      className="h-screen w-screen fixed inset-0 top-0 left-0 bg-[#00000080] flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="flex items-center justify-center rounded-2xl flex-col w-[80%] md:w-[60%] lg:w-[40%] h-[24rem] space-y-10 bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-15 h-15">
          <Image src={CheckIcon} alt="checkIcon" />
        </div>
        {/*   fallbacks */}
        <p className="text-gray-600 text-center whitespace-normal break-words text-pretty mb-8 w-full md:w-[80%] lg:w-[60%]">
          {message ||
            "Something went wrong, please try again.... or contact support"}
        </p>

        <Link
          href={redirectPath}
          className="w-[40%] md:w-[60%] lg:w-[90%]"
          onClick={() => router.push("/")} //Redirect to home
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

export default FailedOrder;
