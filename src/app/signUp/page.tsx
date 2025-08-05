'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/miniLogo.png'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const SignupPage = () => {
    const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='flex justify-center items-center  w-screen  bg-[#F5F5F4]'>
      <div className='p-10 my-10 bg-white shadow-md flex items-center rounded-2xl flex-col w-[90%] md:w-[60%] lg:w-[40%]  overflow-x-hidden'>
        <Image src={logo} alt="Logo" width={50} height={40} className='mb-7 '/>
        <h2 className='text-2xl font-medium'>Create account</h2>
        <h4 className='text- font-normal'>Create your account to start using ChoreTrolly</h4>
        <form action="" className='w-full my-10'>
            <div className="grid w-full items-center gap-3">
                <Label htmlFor="email" className='text-[16px]'>Email</Label>
                <Input type="email" id="email" placeholder="Enter your email" className='w-full' />
            </div>
            <div className="grid w-full items-center gap-3 mt-3">
                <Label htmlFor="number" className='text-[16px]'>Number</Label>
                <Input type="number" id="number" placeholder="Enter your phone number" className='w-full' />
            </div>
            <div className="grid w-full items-center gap-3 mt-3">
                <Label htmlFor="location" className='text-[16px]'>Location</Label>
                <Input type="text" id="location" placeholder="Enter your location" className='w-full' />
            </div>
            <div className="grid w-full items-center gap-3 mt-3">
                <Label htmlFor="location" className='text-[16px]'>Household type</Label>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your household type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Over 4 Bedroom">Over 4 Bedroom</SelectItem>
                        <SelectItem value="3 Bedroom Flat">3 Bedroom Flat</SelectItem>
                        <SelectItem value="2 Bedroom Flat">2 Bedroom Flat</SelectItem>
                        <SelectItem value="1 Bedroom Flat">1 Bedroom Flat</SelectItem>
                        <SelectItem value="Studio Apartment">Studio Apartment</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid w-full items-center gap-3 mt-3">
                <Label htmlFor="location" className='text-[16px]'>Payment Preference</Label>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your payment type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Subscription</SelectItem>
                        <SelectItem value="dark">On-Demand</SelectItem>
                        {/* <SelectItem value="dark">2 Bedroom Flat</SelectItem>
                        <SelectItem value="dark">1 Bedroom Flat</SelectItem>
                        <SelectItem value="system">Studio Apartment</SelectItem> */}
                    </SelectContent>
                </Select>
            </div>
            
             <div className="grid w-full items-center gap-3 mt-3">
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
            <Button variant={'loginMain'} className="text-[18px] mt-10 rounded-md ">
                 Signup
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
        <p >Already have an account? <span className='text-[#013328] font-medium underline'><Link href={'login'}>Login</Link></span></p>
      </div>
    </div>
  )
}

export default SignupPage
