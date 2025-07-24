import React from 'react'
import { Button } from '@/components/ui/button'

const DashboardOrders = () => {
  return (
                <div className='bg-white rounded-md py-3 mb-5'>
                    <div className='flex justify-between px-4 py-3'>
                      <h2 className='text-2xl font-semibold'>Ongoing Orders</h2>
                      <p className='text-blue-700'>See all</p>
                    </div>
                    <div className='h-[1px] bg-[#7c7c7c] w-full'></div>
                    <div className='mt-5 px-4'>
                      <div className='mb-7 '>
                        <div className='flex justify-between  mb-5'>
                          <div>
                            <h4 className='font-semibold text-lg'>Order #CTS9876 - Cleaning Service</h4>
                            <p className='text-sm text-[#0000008e] '>Due in 30 mins</p>
                          </div>
                          <Button variant={'statusInProgress'}>
                            In Progress
                          </Button>
                        </div>
                        <div className='h-[1px] bg-[#c7c7c7] w-full'></div>
                      </div>
                      <div className='mb-7'>
                        <div className='flex justify-between  mb-5'>
                          <div>
                            <h4 className='font-semibold text-lg'>Order #CTS9876 - Cleaning Service</h4>
                            <p className='text-sm text-[#0000008e] '>Due in 30 mins</p>
                          </div>
                          <Button variant={'statusPending'}>
                            Pending
                          </Button>
                        </div>
                        <div className='h-[1px] bg-[#c7c7c7] w-full'></div>
                      </div>
                      <div className='mb-7'>
                        <div className='flex justify-between  mb-5'>
                          <div>
                            <h4 className='font-semibold text-lg'>Order #CTS9876 - Cleaning Service</h4>
                            <p className='text-sm text-[#0000008e] '>Due in 30 mins</p>
                          </div>
                          <Button variant={'statusCompleted'}>
                            Completed
                          </Button>
                        </div>
                        <div className='h-[1px] bg-[#c7c7c7] w-full'></div>
                      </div>
                      <div className='mb-7'>
                        <div className='flex justify-between  mb-5'>
                          <div>
                            <h4 className='font-semibold text-lg'>Order #CTS9876 - Cleaning Service</h4>
                            <p className='text-sm text-[#0000008e] '>Due in 30 mins</p>
                          </div>
                          <Button variant={'statusPending'}>
                            Pending
                          </Button>
                        </div>
                        <div className='h-[1px] bg-[#c7c7c7] w-full'></div>
                      </div>
                    </div>
                  </div>
  )
}

export default DashboardOrders
