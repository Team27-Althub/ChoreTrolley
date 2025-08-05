'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/miniLogo.png'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='flex justify-center items-center h-screen w-screen bg-[#F5F5F4]'>
      <div className='px-10 py-5 bg-white shadow-md flex items-center rounded-2xl flex-col w-[90%] md:w-[60%] lg:w-[40%]'>
        <Image src={logo} alt="Logo" width={50} height={40} className='mb-10'/>
        <h2 className='text-2xl font-medium'>Welcome Back</h2>
        <h4 className='text font-normal'>Login into your account</h4>            
        <form action="" className='w-full px-5 mt-5'>
          <div className="grid w-full items-center gap-3">
            <Label htmlFor="email" className='text-[16px]'>Email</Label>
            <Input type="email" id="email" placeholder="Enter your email" className='w-full' />
          </div>
          <div className="grid w-full items-center gap-3 mt-5">
            <Label htmlFor="password" className='text-[16px]'>Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                className="w-full pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2.5 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <Link href={'/dashboard'}>
            <Button variant={'loginMain'} className="text-[18px] mt-10 py-5 rounded-md">
              Login
            </Button>
          </Link>
          <div className="flex items-center w-full my-5">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div
            className="w-full mt-8 flex items-center justify-center gap-2 border hover:cursor-pointer border-[#000] py-1 rounded-lg"
          >
          <Image src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' alt="Logo" width={30} height={20} className=''/>
            Continue with Google
          </div>
        </form>
        <p className='mt-8'>Don’t have an account? <span className='text-[#013328] font-medium underline'><Link href={'signUp'}>Signup</Link></span></p>
      </div>
    </div>
  )
}

export default LoginPage