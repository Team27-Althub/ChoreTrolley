'use client'
import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import logo from '../../../public/miniLogo.png'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation' // ✅ App Router
import { useSignupMutation } from '@/redux/api/authApi'

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState('')
  const [error, setError] = useState<{ [key: string]: string }>({});
  const router = useRouter()

  const [signup, { isLoading, isSuccess }] = useSignupMutation()

    const validateForm = () => {
    let newErrors: { [key: string]: string } = {};

    if (!firstName.trim()) {
      newErrors.firstname = "Firstname is required";
    } else if (!/^[A-Za-z]+(-[A-Za-z]+)*$/.test(firstName)) {
      newErrors.firstname = "Firstname can only contain letters and a single hyphen between words";
    }
    if (!lastName.trim()) {newErrors.lastname = "Lastname is required"}
      else if (!/^[A-Za-z]+(-[A-Za-z]+)*$/.test(lastName)) {
        newErrors.lastname = "Lastname can only contain letters and a single hyphen between words";
      }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(password)) {
      newErrors.password =
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const signUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError({}) // reset error before trying again

    if (!validateForm()) return;

    try {
      await signup({ email, password, firstName, lastName }).unwrap()
      setSuccess('Account Created Successfully')

        setTimeout(()=> {
          router.push('/login')
        }, 2000)


    } catch (err: any) {
      setError(err?.data?.message || "Error Signing Up, Try again.")
    }
  }

  return (
    <div className='flex justify-center items-center w-screen bg-[#F5F5F4]'>
      <div className='p-10 my-10 bg-white shadow-[#aaaaaa] shadow-xl flex items-center rounded-2xl flex-col w-[90%] md:w-[60%] lg:w-[40%]'>
        <Image src={logo} alt="Logo" width={50} height={40} className='mb-7' />
        <h2 className='text-2xl font-medium'>Create account</h2>
        <h4 className='font-normal'>Create your account to start using ChoreTrolly</h4>

        {error.general && <p className="text-red-500 text-sm mt-4">{error.general || success}</p>} {/* ✅ show error */}

        <form onSubmit={signUp} className='w-full my-10'>
          <div className="grid w-full items-center gap-3 mt-3">
                <Label htmlFor="firstname" className='text-[16px]'>Firstname</Label>
                <Input id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)}       placeholder="Enter your firstname" />
                 {error.firstname && <p className="text-red-500 text-sm font-light">{error.firstname}</p>}
          </div>

          <div className="grid w-full items-center gap-3 mt-3">
                <Label htmlFor="lastname" className='text-[16px]'>Lastname</Label>
                <Input type="text" id="lastname" value={lastName} onChange={(e)=> setLastName(e.target.value)} placeholder="Enter your lastname" className='w-full' />
                {error.lastname && <p className="text-red-500 text-sm font-light">{error.lastname}</p>}
          </div>
            <div className="grid w-full items-center gap-3">
                <Label htmlFor="email" className='text-[16px]'>Email</Label>
                <Input type="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your email" className='w-full' />
                {error.email && <p className="text-red-500 text-sm font-light">{error.email}</p>}
          </div>

          <div className="grid w-full items-center gap-3 mt-3">
                <Label htmlFor="password" className='text-[16px]'>Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
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
            {error.password && <p className="text-red-500 text-sm font-light">{error.password}</p>}
          </div>

          <Button type="submit" variant={'loginMain'} className="text-[18px] mt-10 rounded-md " disabled={isLoading}>
            {isLoading ? "Signing up..." : "Signup"}
          </Button>
            <div className="flex items-center w-full my-5">
                      <div className="flex-grow border-t border-gray-300"></div>
                      <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>
                      <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                      <div
                        className="w-full mt-8 flex items-center justify-center gap-2 border hover:cursor-pointer border-[#000] py-1 rounded-lg"
                      >
                      <Image src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' alt="Logo" width={30} height={20} className=''/>
                        signup with Google
            </div>
        </form>

        <p>Already have an account? <Link href='/login' className='text-[#013328] font-medium underline'>Login</Link></p>
      </div>
    </div>
  )
}

export default SignupPage
