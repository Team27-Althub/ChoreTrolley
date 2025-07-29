'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/miniLogo.png'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


const ChangePasswordPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)

  return (
    <div className='flex justify-center items-center h-screen w-screen  bg-[#F5F5F4]'>
      <div className='p-10 bg-white shadow-md flex items-center rounded-2xl flex-col w-[90%] md:w-[60%] lg:w-[40%]'>
        <Image src={logo} alt="Logo" width={50} height={40} className='mb-10 '/>
        <h2 className='text-3xl font-medium'>Reset your password</h2>
        <h4 className='text-xl font-normal'>Recover your password</h4>
        <form action="" className='w-full my-10'>
             <div className="grid w-full items-center gap-3 mt-5">
                <Label htmlFor="password">Enter New Password</Label>
                <div className="relative">
                    <Input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Enter your new password"
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
            <div className="grid w-full items-center gap-3 mt-5">
                <Label htmlFor="password">Confirm New Password</Label>
                <div className="relative">
                    <Input
                    type={showPassword2 ? 'text' : 'password'}
                    id="password"
                    placeholder="Enter your password"
                    className="w-full pr-10"
                    />
                    <button
                    type="button"
                    onClick={() => setShowPassword2(!showPassword2)}
                    className="absolute right-2 top-2.5 text-gray-500 hover:text-gray-700"
                    >
                    {showPassword2 ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>
            </div>
            <Button variant={'loginMain'} className="text-[18px] mt-10 rounded-md ">
                 Login
            </Button>
        </form>
        <p >Don’t have an account? <span className='text-[#013328] font-medium underline'><Link href={'signup'}>Signup</Link></span></p>
      </div>
    </div>
  )
}

export default ChangePasswordPage
