'use client'
import React, {useState} from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'


const DeleteModal = () => {

    const [show, setShow] =useState(false)

    const openModal = () => {
        setShow(!show)

    }

  return (
    <div>
      <div className='mx-5 bg-[#E00004] w-[100%] justify-center hover:cursor-pointer  h-[50px] flex items-center text-white rounded-lg'
      onClick={()=> openModal()}
      >
            Delete Account
      </div>

      {
        show && (
            <div className='w-[100vw] h-[100vh] position absolute top-0 left-0 bg-[#00000080] flex justify-center items-center'>
                    <div className='bg-white h-[350px] max-w-full w-[600px]  rounded-xl p-4 relative'>
                        <div className='absolute right-4'
                        onClick={()=> openModal()}
                        >
                            <X className="w-7 h-7 text-gray-800 dark:text-white border rounded-full p-2 hover:cursor-pointer" />
                        </div>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <h2 className='text-2xl text-center font-semibold'>Are you sure you want to delete your account?</h2>
                            <p className='text-[#00000080] w-[60%] text-center mt-2 text-sm'>This process can not be reversed. Think well before performing this action</p>
                            <div className='mt-5 flex gap-5'>
                                <Button variant={'anotherOutline'}

                                onClick={()=> openModal()}
                                >
                                    Cancel
                                </Button>
                                <Button variant={'delete'}
                                onClick={()=> openModal()}
                                >
                                    Yes, Delete Account
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
        )

      }
    </div>
  )
}

export default DeleteModal
