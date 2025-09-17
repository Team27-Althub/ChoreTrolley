"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/miniLogo.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLoginMutation } from "@/redux/api/authApi";
// import Router from 'next/navigation'
import { useRouter } from "next/navigation";
import LoginErrorModal from "../profile/FeedbackErrorModal";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const [error, setError] = useState<{ [key: string]: string }>({});
  const [loginErrModal, setLoginErrModal] = useState(false);
  const [responseError, setResponseError] = useState<string | null>(null);
  const route = useRouter();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // SQL Injection detection regex
    const sqlPattern =
      /\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|--|;|\/\*|\*\/|xp_)\b/i;

    // Empty checks
    if (!email.trim() || !password) {
      if (!email.trim()) newErrors.email = "Email is required";
      if (!password) newErrors.password = "Password is required";
      setError(newErrors);
      return false;
    }

    // Email format check
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    // SQL Injection detection (applies to BOTH fields)
    if (sqlPattern.test(email) || sqlPattern.test(password)) {
      newErrors.general = "Login failed";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const loginUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const result = await login({ email, password }).unwrap();
      sessionStorage.setItem("accessToken", result.data.accessToken);
      sessionStorage.setItem("refreshToken", result.data.refreshToken);
      sessionStorage.setItem("firstName", result.data.user.firstName);
      sessionStorage.setItem("lastName", result.data.user.lastName);
      sessionStorage.setItem("email", result.data.user.email);
      sessionStorage.setItem("userId", result.data.user.id);
      route.push("/dashboard");
    } catch (err: any) {
      if (err?.status === 401) {
        setResponseError("Invalid Login Credentials!"); //Unauthorized email/password
        setLoginErrModal(true);
      } else if (err?.status === "FETCH_ERROR") {
        setResponseError(
          "Network error: Please check your internet connection" //Internet error/Timeout
        );
        setLoginErrModal(true);
      } else if (err?.status) {
        setResponseError(err?.data?.message || "Server error, pls try again"); //Other status code
        setLoginErrModal(true);
      } else {
        setResponseError("Something went wrong. pls try again"); //Fallback
        setLoginErrModal(true);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#F5F5F4]">
      <div className="px-10 py-5 relative bg-white shadow-[#aaaaaa]  shadow-xl flex items-center rounded-2xl flex-col w-[90%] md:w-[60%] lg:w-[40%]">
        <Image src={logo} alt="Logo" width={50} height={40} className="mb-10" />
        <h2 className="text-2xl font-medium">Welcome Back</h2>
        <h4 className="text font-normal">Login into your account</h4>
        {error.general && (
          <p className="text-red-500  text-sm mt-4 font-light">
            {error.general}
          </p>
        )}
        <form action="" className="w-full px-5 mt-5" onSubmit={loginUser}>
          <div className="grid w-full items-center gap-3">
            <Label htmlFor="email" className="text-[16px]">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full"
            />
            {error.email && (
              <p className="text-red-500 text-sm mt-4 font-light">
                {error.email}
              </p>
            )}
          </div>
          <div className="grid w-full items-center gap-3 mt-5">
            <Label htmlFor="password" className="text-[16px]">
              Password
            </Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2.5 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {error.password && (
              <p className="text-red-500 text-sm mt-4 font-light">
                {error.password}
              </p>
            )}
          </div>

          <Button
            variant={"loginMain"}
            type="submit"
            className={`text-[18px] mt-10 py-5 rounded-md ${isLoading && 'bg-[#013328]'}`}
          >
            {isLoading ? "Signing in" : "Login"}
          </Button>

          <div className="flex items-center w-full my-5">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="w-full mt-8 flex items-center justify-center gap-2 border hover:cursor-pointer border-[#000] py-1 rounded-lg">
            <Image
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="Logo"
              width={30}
              height={20}
              className=""
            />
            Continue with Google
          </div>
        </form>
        <p className="mt-8">
          Don’t have an account?{" "}
          <span className="text-[#013328] font-medium underline">
            <Link href={"signUp"}>Signup</Link>
          </span>
        </p>
      </div>
      <LoginErrorModal
        open={loginErrModal}
        onClose={() => setLoginErrModal(false)}
        message={responseError}
      />
    </div>
  );
};

export default LoginPage;
